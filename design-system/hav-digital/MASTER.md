# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** HAV Digital
**Generated:** 2026-07-01 00:03:21
**Category:** VPN & Privacy Tool

---

## Global Rules

### Color Palette (Theme Variables)

We support both Light and Dark mode using CSS custom properties (variables) defined in `:root` and `[data-theme="dark"]`.

| Role | CSS Variable | Light Theme | Dark Theme |
|------|--------------|-------------|------------|
| Background | `--color-background` | `#F8FAFC` (Slate 50) | `#030712` (Slate 950) |
| Foreground | `--color-foreground` | `#0F172A` (Slate 900) | `#F8FAFC` (Slate 50) |
| Primary | `--color-primary` | `#6366F1` (Indigo 500) | `#818CF8` (Indigo 400) |
| Primary Glow | `--color-primary-glow` | `rgba(99, 102, 241, 0.15)` | `rgba(129, 140, 248, 0.25)` |
| Secondary | `--color-secondary` | `#475569` (Slate 600) | `#94A3B8` (Slate 400) |
| Card BG | `--color-card-bg` | `#FFFFFF` | `#0B0F19` (Midnight Blue) |
| Card Border | `--color-card-border` | `#E2E8F0` (Slate 200) | `#1E293B` (Slate 800) |
| Muted | `--color-muted` | `#F1F5F9` (Slate 100) | `#1E293B` (Slate 800) |
| Accent/CTA | `--color-accent` | `#EF4444` (Red 500) | `#F87171` (Red 400) |
| Border | `--color-border` | `#E2E8F0` (Slate 200) | `#1E293B` (Slate 800) |
| Ring | `--color-ring` | `#6366F1` | `#818CF8` |

**Color Notes:** 
- In Light mode, we focus on a clean, professional Swiss-style minimalism with crisp borders and subtle shadows.
- In Dark mode, we leverage ambient background glow effects, OLED midnight black, and semi-transparent frosted cards.

### Typography

- **Heading Font:** Space Grotesk (Tech, precision, modern geometric)
- **Body Font:** Inter (Highly readable, neutral, clean UI)
- **Mood:** web3, digital hosting, precision, developer tools, reliability
- **Google Fonts:** [Space Grotesk + Inter](https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Light Theme | Dark Theme |
|-------|-------------|------------|
| `--shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.05)` | `0 1px 2px rgba(0, 0, 0, 0.5)` |
| `--shadow-md` | `0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.1)` | `0 4px 6px rgba(0,0,0,0.6)` |
| `--shadow-lg` | `0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.1)` | `0 10px 15px rgba(0,0,0,0.7)` |
| `--shadow-xl` | `0 20px 25px -5px rgba(15, 23, 42, 0.15)` | `0 20px 25px rgba(0,0,0,0.8)` |

---

## Component Specs

### Buttons

```css
/* Primary Button (Accent Action) */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-background);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 0 12px var(--color-primary-glow);
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 0 20px var(--color-primary-glow);
}

/* Secondary Button (Outline / Normal) */
.btn-secondary {
  background: transparent;
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--color-muted);
  border-color: var(--color-foreground);
}
```

### Cards

```css
.card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  background: var(--color-card-bg);
  color: var(--color-foreground);
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 3px var(--color-primary-glow);
}
```

### Modals / Sheets

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
}

.modal {
  background: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Modern Dark + Clean Minimal Light Hybrid (UI/UX Pro Max Optimized)

**Keywords:** Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient

**Best For:** Night-mode apps, coding platforms, entertainment, eye-strain prevention, OLED devices, low-light

**Key Effects:** Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus

### Page Pattern

**Pattern Name:** Trust & Authority + Conversion-Optimized

- **CTA Placement:** Above fold
- **Section Order:** Hero > Features > CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Excessive decoration
- ❌ Pure white backgrounds

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
