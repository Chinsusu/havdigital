import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, 'public');
const distDir = join(root, 'dist');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function read(path) {
  return readFileSync(join(root, path), 'utf8');
}

const publicRoutes = [
  'index',
  'about',
  'contact',
  'privacy',
  'terms',
  'refund-policy',
  'acceptable-use',
  'abuse',
  'sla',
  'status',
  'api-docs',
];

const requiredOutput = [
  ...publicRoutes.map((route) => `dist/${route}.html`),
  'dist/404.html',
  'dist/_headers',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/assets/site-preferences.v1.js',
];

for (const path of requiredOutput) {
  assert.ok(existsSync(join(root, path)), `Missing build output: ${path}`);
}

for (const source of walk(publicDir)) {
  const path = relative(publicDir, source);
  const output = join(distDir, path);
  assert.ok(existsSync(output), `Public file not copied: ${path}`);
  assert.deepEqual(readFileSync(output), readFileSync(source), `Public file changed: ${path}`);
}

for (const route of publicRoutes.filter((route) => route !== 'index')) {
  assert.ok(!existsSync(join(distDir, route, 'index.html')), `Trailing-slash route emitted: ${route}/index.html`);
}

const outputFiles = walk(distDir);
const bundledScripts = outputFiles.filter((path) => ['.js', '.mjs', '.cjs'].includes(extname(path)))
  .map((path) => relative(distDir, path))
  .filter((path) => path !== 'assets/site-preferences.v1.js');
assert.deepEqual(bundledScripts, [], `Unexpected client scripts emitted: ${bundledScripts.join(', ')}`);

for (const path of outputFiles.filter((file) => extname(file) === '.html')) {
  const html = readFileSync(path, 'utf8');
  assert.doesNotMatch(html, /src="\/_astro\/[^\"]+\.js"/i, `Bundled client script found in ${relative(distDir, path)}`);
  assert.match(html, /src="\/assets\/site-preferences\.v1\.js"/, `Analytics consent loader missing in ${relative(distDir, path)}`);
  assert.doesNotMatch(html, /href="\/[^"]+\.html(?:[?#"])/i, `Legacy .html internal link in ${relative(distDir, path)}`);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `Expected one H1 in ${relative(distDir, path)}`);

  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith('#')) {
      assert.ok(html.includes(`id="${href.slice(1)}"`), `Broken anchor ${href} in ${relative(distDir, path)}`);
      continue;
    }
    if (!href.startsWith('/')) continue;

    const pathname = href.split(/[?#]/, 1)[0];
    if (pathname === '/') continue;
    const directAsset = join(distDir, pathname.slice(1));
    const cleanRoute = join(distDir, `${pathname.slice(1)}.html`);
    assert.ok(
      existsSync(directAsset) || existsSync(cleanRoute),
      `Broken internal link ${href} in ${relative(distDir, path)}`,
    );
  }
}

const indexableRoutes = new Map([
  ['index.html', '/'],
  ['about.html', '/about'],
  ['contact.html', '/contact'],
  ['abuse.html', '/abuse'],
]);

const noindexRoutes = new Map([
  ['privacy.html', '/privacy'],
  ['terms.html', '/terms'],
  ['refund-policy.html', '/refund-policy'],
  ['acceptable-use.html', '/acceptable-use'],
  ['sla.html', '/sla'],
  ['status.html', '/status'],
  ['api-docs.html', '/api-docs'],
]);

for (const [file, route] of [...indexableRoutes, ...noindexRoutes]) {
  const html = readFileSync(join(distDir, file), 'utf8');
  const canonical = route === '/' ? 'https://havdigital.com/' : `https://havdigital.com${route}`;
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `Wrong canonical for ${route}`);
}

for (const [file, route] of indexableRoutes) {
  const html = readFileSync(join(distDir, file), 'utf8');
  assert.doesNotMatch(html, /name="robots" content="noindex/i, `${route} must be indexable`);
}

for (const [file, route] of noindexRoutes) {
  const html = readFileSync(join(distDir, file), 'utf8');
  assert.match(html, /name="robots" content="noindex,follow"/, `${route} must remain noindex pending its publication gate`);
}

const sitemap = read('dist/sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(sitemapUrls, [
  'https://havdigital.com/',
  'https://havdigital.com/about',
  'https://havdigital.com/contact',
  'https://havdigital.com/abuse',
]);

const homepage = read('dist/index.html');
for (const expected of [
  'Proxy phủ <span class="accent">190+ quốc gia.</span>',
  'IP sạch, xoay theo ý bạn.',
  'IP có thể tiếp cận*',
  'Mục tiêu uptime*',
  'data-analytics-event="select_plan"',
  'data-analytics-consent-open',
  'https://schema.org',
  'href="/acceptable-use"',
  'href="/abuse"',
]) {
  assert.ok(homepage.includes(expected), `Homepage regression: missing ${expected}`);
}
assert.match(homepage, /href="\/_astro\/index\.[^"]+\.css"/, 'Homepage stylesheet was not emitted');

const headers = read('dist/_headers');
for (const expected of [
  "script-src 'self' https://static.cloudflareinsights.com/beacon.min.js https://www.googletagmanager.com",
  "connect-src 'self' https://*.google-analytics.com",
  "frame-ancestors 'none'",
]) {
  assert.ok(headers.includes(expected), `Security header regression: missing ${expected}`);
}

const analytics = read('dist/assets/site-preferences.v1.js');
for (const event of ['view_product', 'select_plan', 'start_checkout', 'sign_up', 'purchase', 'contact_sales']) {
  assert.ok(analytics.includes(`'${event}'`), `Analytics event is not supported: ${event}`);
}

console.log(`Verified ${requiredOutput.length} required outputs, ${publicRoutes.length} routes, sitemap/indexability, CSP, and six funnel events.`);
