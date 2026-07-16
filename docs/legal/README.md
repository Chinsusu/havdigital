# HAV trust/legal content — integration notes

Prepared: 2026-07-16

These files are Astro-ready Markdown page bodies. They intentionally contain no company registration number, address, phone number or unconfirmed email. Do not silently invent those fields.

## Route map

| File | Canonical route | Initial robots recommendation | Footer/navigation label |
|---|---|---:|---|
| `about.md` | `/about` | index | Giới thiệu |
| `contact.md` | `/contact` | index | Liên hệ |
| `privacy.md` | `/privacy` | index after owner review | Quyền riêng tư |
| `terms.md` | `/terms` | index after owner review | Điều khoản |
| `refund-policy.md` | `/refund-policy` | noindex | Không hoàn tiền |
| `acceptable-use.md` | `/acceptable-use` | index after owner review | Sử dụng chấp nhận được |
| `abuse.md` | `/abuse` | index | Báo cáo lạm dụng |
| `sla.md` | `/sla` | index after owner accepts target wording | Mục tiêu dịch vụ |
| `status.md` | `/status` | **noindex until real monitoring/history exists** | Trạng thái |

Keep the existing public canonical routes. Redirect legacy `/terms.html`, `/refund-policy.html` and `/status.html` to their extensionless counterparts with one permanent redirect; do not include redirecting URLs in the sitemap.

## Astro integration

1. Use a shared `LegalLayout`/`ContentLayout` that reads `title`, `description`, `canonical`, `effectiveDate`, `lastUpdated` and `indexable` from frontmatter.
2. Render exactly one `<h1>` from the Markdown body. The layout should not add a second H1.
3. For `indexable: false`, emit `<meta name="robots" content="noindex,follow">` and exclude the route from `sitemap.xml`.
4. Add all indexable, owner-approved routes to the sitemap using the canonical URL and final extensionless path.
5. Add a visible “Cập nhật lần cuối” value using `lastUpdated`; keep the effective date in the page body for policies.
6. Keep internal links root-relative. All links in this pack already point to agreed routes.
7. Add the trust/legal routes to the footer. `/abuse`, `/privacy`, `/terms`, `/acceptable-use` and `/contact` should be reachable from every public page.
8. Preserve readable typography, focus states, heading hierarchy, list spacing and a content width around 65–75 characters per line. Do not hide policy text in accordions by default.
9. Do not add `FAQPage` structured data for these pages. Optional `BreadcrumbList` may be used if visible breadcrumbs exist.

Suggested page placement if using filesystem routes:

```text
src/pages/about.md
src/pages/contact.md
src/pages/privacy.md
src/pages/terms.md
src/pages/refund-policy.md
src/pages/acceptable-use.md
src/pages/abuse.md
src/pages/sla.md
src/pages/status.md
```

If the project uses a content collection instead, map `route` explicitly and generate pages from the collection. Do not convert route names to Vietnamese slugs.

## Operational dependencies

- `privacy.md` states default retention periods (90 days, 12 months and 24 months). Logging, mail retention and deletion jobs must match these statements before publication.
- If analytics, session replay, advertising pixels, chat, a checkout provider or a customer dashboard is added, update the privacy policy and consent UI before collecting data.
- The only verified contact is `sales@havdigital.com`. This pack uses subject prefixes to route sales, privacy, billing, incident and abuse mail. A separate mailbox may be added only after it actually exists and is monitored.
- `status.md` deliberately does not show “All systems operational.” Keep it `noindex` until status is backed by trustworthy monitoring. Do not generate green state from build time alone.
- `sla.md` treats 99.9% as an operating target, not a financial SLA. Do not add service credits, compensation or voluntary refunds.
- `refund-policy.md` states that HAV offers no voluntary refunds, service credits or unused-balance returns. The owner must still confirm how mandatory legal obligations, billing errors and payment-provider disputes are handled.
- All order/checkout screens must show the selected service, price, billing period, limits, renewal behavior and links to Terms/AUP/No-refund policy before acceptance. Record the version/date accepted.

## Publication gate

The content is suitable for integration and QA, but it is not a substitute for review by a Vietnamese-qualified lawyer. Complete the blocking owner items in `OWNER-CONFIRMATIONS.md`, then have legal review the actual business identity, checkout flow, data flows and customer contract before treating the pages as final legal advice.
