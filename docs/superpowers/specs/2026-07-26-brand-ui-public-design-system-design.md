# Brand UI public design system

**Date:** 2026-07-26  
**Status:** Approved for implementation planning  
**Repos:** `forsyteco-brand-ui` (primary), `forsyteco-web` (consumer), `forsyteco-product-ui` (source of structure/APIs)

## Problem

`forsyteco-web` hand-rolls marketing UI and local shadcn (`components/ui/*`) instead of a shared public design system. `forsyteco-brand-ui` exists as a Turborepo scaffold but only ships `VisuallyHidden`, while its `index.ts` / package exports still advertise a full catalog. `forsyteco-product-ui` is the mature internal design system used by the product app.

Brand UI should become the **public-facing counterpart of Product UI**: same component shapes and interfaces, restyled for the marketing brand, consumed by web so primitives are not reimplemented per page.

## Goals

- Parallel fork of Product UI structure into Brand UI (no runtime dependency between packages).
- Product UI–aligned public APIs for core primitives (similar or identical interfaces).
- Web migrates off shadcn onto `@forsyteco/brand-ui` (primitives come from Brand UI, not direct Base UI / Radix / Headless imports for design-system use).
- Marketing section helpers (`Band` / `BandSingle` / `BandDouble`) stay out of Brand UI; they are optional app composition over tokens/primitives.

## Non-goals

- Changing Product UI or `forsyteco-app`.
- Sharing a third “core” package between Product UI and Brand UI.
- Promoting `Band*`, header, footer, or Sanity Portable Text wrappers into Brand UI.
- Rewriting Product UI’s Headless-based components to Base UI in Brand UI v1 solely for stack purity.
- Forking product-only surfaces in v1 (`DataTable`, `DatePicker`, `Combobox` / `Autocomplete` / `Country*`, product `PageLayout`).

## Decisions

| Topic | Choice |
| --- | --- |
| Catalog shape | Product UI–shaped primitives, restyled for public brand |
| Code relationship | Parallel fork (copy structure/patterns; evolve independently) |
| Marketing `Band*` | Not library components; compose in web from tokens/primitives |
| V1 scope | Core primitives only (enough to replace web’s shadcn layer) |
| Public APIs | Match Product UI where practical; brand tokens/visuals diverge |
| Stack under the hood | Mirror Product UI’s choices per component (Base UI / Headless / Radix as today) |
| Delivery approach | Snapshot fork → retheme → migrate web |

## Architecture

```
forsyteco-product-ui  →  @forsyteco/product-ui   (product app)
forsyteco-brand-ui    →  @forsyteco/brand-ui     (public / marketing)
forsyteco-web         →  consumes @forsyteco/brand-ui for DS primitives
forsyteco-app         →  consumes @forsyteco/product-ui (unchanged)
```

- Brand UI monorepo mirrors Product UI: Turborepo, `packages/react` (`@forsyteco/brand-ui`), optional `packages/mcp`, Vite, Storybook, Vitest, CSS modules + Tailwind 4.
- No package dependency from Brand UI → Product UI or vice versa.
- Web depends on published (or locally linked) `@forsyteco/brand-ui` the same way the product app depends on `@forsyteco/product-ui` (currently `^0.0.18` from npm).
- Web must not add new shadcn components; design-system primitives are imported from Brand UI only.

## V1 component catalog

Fork from Product UI, keep the same public exports/props, retheme with brand tokens:

| Include | Role |
| --- | --- |
| `Button` | Replace web `components/button` and shadcn button |
| `Input`, `Textarea`, `Label`, `Checkbox`, `Select`, `Switch` | Forms (contact / partner) |
| `FormField` | Form composition parity with Product UI |
| `Avatar`, `Breadcrumb`, `Card` | Team / home / legal chrome |
| `Dialog`, `Popover`, `DropdownMenu` | Interactive overlays without shadcn |
| `Spinner`, `Skeleton`, `VisuallyHidden` | Loading / a11y |
| `ThemeProvider` + `styles.css` / fonts | Foundation |

**Defer:** `DataTable`, `DatePicker`, `Combobox` / `Autocomplete` / `Country*`, product `PageLayout`, and any other Product UI surfaces not required to retire web’s current shadcn set.

**Not in Brand UI:** `Band` / `BandSingle` / `BandDouble`, `AppHeader` / `Footer` / `MobileMenu`, Sanity Portable Text wrappers.

**Scaffold cleanup:** Trim `packages/react/src/index.ts` and `package.json` `exports` to components that exist on disk; grow exports as each fork lands. Replace the Turborepo starter root README with Brand UI documentation modeled on Product UI.

## Tokens and styling

- Keep Product UI’s semantic token shape (`styles.css` `@theme` roles such as primary, muted, border, card) so forked CSS modules need minimal structural edits.
- Map those roles onto the public brand palette already used in web: `brand-black`, `brand-yellow`, `brand-grey`, `brand-blue`, `brand-white`.
- Expose brand utility colors on the Brand UI theme so marketing pages can compose layouts without a second token system.
- Carry section/container spacing tokens into Brand UI where they belong as design tokens (web may keep page-level spacing helpers until tokens are fully owned by Brand UI).
- Typography: Plus Jakarta Sans via Brand UI fonts/CSS (same family as Product UI and web).
- Conventions: copy Product UI’s react-component-library rules into Brand UI (feature folders, named exports, `*Props`, colocated tests/stories/CSS modules, `forwardRef` for interactive primitives, no data fetching in the library).

## Web migration

1. Add `@forsyteco/brand-ui` and import `@forsyteco/brand-ui/styles.css`. Collapse duplicated brand tokens in `app/globals.css` once Brand UI owns them.
2. Migrate by surface:
   - Forms (contact / partner) → Brand form primitives + `Button` / `FormField`
   - Shared chrome → Brand `Avatar`, `Breadcrumb`, `Button` (remove `components/button.tsx` and shadcn button)
   - Remaining `components/ui/*` → Brand equivalents when in v1; otherwise leave thin web-local wrappers and do not add new shadcn
3. Keep or inline `Band*` as web composition using Brand tokens; do not promote into Brand UI. Header/footer/nav stay in web.
4. Remove unused Radix/shadcn dependencies and `components/ui` files as consumers migrate.
5. Web must not import Base UI / Headless / Radix for design-system primitives — only through Brand UI.

## Delivery phases

| Phase | Work |
| --- | --- |
| 0 | Scaffold cleanup: README/docs, trim false exports, copy agent/Storybook/Vitest conventions from Product UI |
| 1 | Tokens + `ThemeProvider` + fonts/`styles.css` |
| 2 | Fork + retheme v1 catalog (with tests and stories); publish Brand UI version |
| 3 | Wire web dependency; migrate forms → chrome → remaining UI; delete shadcn as you go |

## Success criteria

- Brand UI Storybook covers the v1 catalog with Product UI–aligned APIs.
- Web contact forms and primary chrome use Brand UI only.
- No new shadcn additions in web; unused Radix packages removed where practical.
- Product UI and `forsyteco-app` unchanged by this work.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Fork drifts from Product UI APIs | Treat Product UI as the API reference; document intentional divergences only |
| Incomplete export map breaks consumers | Exports grow only with shipped components; CI typecheck + Storybook build |
| Token duplication between web and Brand UI | Phase 1 owns tokens in Brand UI; web imports library CSS and deletes duplicates |
| Carousel / tooltip / sidebar not in v1 | Keep temporary web-local wrappers; add Brand components only when needed |

## Open follow-ups (post-v1)

- Additional primitives as web needs them (tooltip, carousel, etc.).
- Optional later alignment of Headless-backed components onto Base UI if Product UI moves that way.
- Process for syncing intentional API changes from Product UI into Brand UI (manual, not automated).
