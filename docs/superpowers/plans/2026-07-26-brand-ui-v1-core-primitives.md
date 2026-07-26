# Brand UI v1 Core Primitives Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the `forsyteco-brand-ui` scaffold into a working `@forsyteco/brand-ui` package that ships the v1 core primitive catalog with Product UI–aligned APIs, restyled with the public brand palette.

**Architecture:** Snapshot-fork the v1 component set from `forsyteco-product-ui/packages/react/src/**` into `forsyteco-brand-ui/packages/react/src/**`, keeping file layout, public exports, tests, and stories. No package dependency between the two libraries. Components are added in dependency order; each task copies the component's existing Product UI test first (fails because the module is absent), then copies the implementation and wires exports until the test, typecheck, and build pass.

**Tech Stack:** React 19, TypeScript 5.9, Tailwind CSS 4, Vite 7 (library mode) + `vite-plugin-dts`, Vitest 4 + React Testing Library, Storybook 10, Turborepo, pnpm 9. Component primitives come from `@headlessui/react`, `@base-ui/react`, and `radix-ui`, matching Product UI per component.

**Companion spec:** `docs/superpowers/specs/2026-07-26-brand-ui-public-design-system-design.md`

**Scope note:** This plan covers the spec's Phases 0–2 (Brand UI library only). The spec's Phase 3 (migrating `forsyteco-web` off shadcn onto `@forsyteco/brand-ui`) is a separate plan, written after this one lands, because it produces working software independently and lives in a different repo.

## Global Constraints

- Repo paths: Brand UI `D:\Repos\forsyteco-brand-ui`, Product UI (read-only reference) `D:\Repos\forsyteco-product-ui`.
- **Never modify `D:\Repos\forsyteco-product-ui` or `D:\Repos\forsyteco-app`.** Product UI is a read-only source.
- Brand UI must not depend on `@forsyteco/product-ui` at runtime or build time.
- Public APIs match Product UI exports for every forked component (same component names, same prop names, same exported type names). Divergence is limited to tokens/visuals.
- Peer deps stay `react >=19.2.1 <20`, `react-dom >=19.2.1 <20`, `tailwindcss >=4.1.17 <5`. Node `>=18`, pnpm `9.0.0`.
- `packages/react/src/index.ts`, `vite.config.ts` `componentEntries`, and `package.json` `exports` may only reference components that exist on disk. Grow all three together in the same task.
- Brand palette values (from `forsyteco-web/app/globals.css`): `brand-black #000000`, `brand-yellow #FFDE13`, `brand-grey #1C1C1C`, `brand-blue #F6F9FF`, `brand-white #FFFFFF`.
- Do not add `Band`, `BandSingle`, `BandDouble`, site header/footer/nav, or Sanity Portable Text components to this library.
- Do not fork deferred components: `data-table`, `date-picker`, `calendar`, `combobox`, `autocomplete`, `country`, `field-select`, `listbox`, `page-layout`, `page-header`, `catalog`, `counter-label`, `fieldset`, `icon-button`, `radio-group`, `relative-time`, `sonner`, `tabs`, `transition`, `disclosure`.
- **Story deferral rule:** when a copied `*.stories.tsx` imports a component that has not been forked yet, do not copy that story file in the current task. The later task that adds the missing dependency copies it. Each task below states explicitly which deferred story files it must bring in.
- Test style follows Product UI: `describe('when …')` / `it('should …')` with `// Arrange`, `// Act`, `// Assert` comments. Tests import `render`/`screen` from `#test-utils`.
- Commit messages use Conventional Commits. Do not record any AI agent as commit author or co-author.
- Run all commands from `D:\Repos\forsyteco-brand-ui` unless a step says otherwise.

## Command Reference

| Purpose | Command |
| --- | --- |
| Install deps | `pnpm install` |
| Unit tests (all) | `pnpm --filter @forsyteco/brand-ui test` |
| Unit tests (one dir) | `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/<dir>` |
| Typecheck | `pnpm --filter @forsyteco/brand-ui check-types` |
| Library build | `pnpm --filter @forsyteco/brand-ui build` |
| Storybook (manual) | `pnpm --filter @forsyteco/brand-ui storybook` |

## Starting State (verified)

`packages/react/src/` contains only `index.ts`, `vitest.d.ts`, and `visually-hidden/`. The scaffold is **broken**, not merely sparse:

- `src/visually-hidden/visually-hidden.tsx` imports `../utils/tailwind` — that file does not exist.
- `src/index.ts` exports ~30 components that do not exist.
- `vite.config.ts` `componentEntries` lists 28 entry directories that do not exist.
- `package.json` `exports` maps 28 subpaths whose sources do not exist.
- `.storybook/preview.tsx` imports `../src/theme/theme-provider` — that file does not exist.

`styles.css`, `tailwind.config.js`, `fonts/`, Storybook config, and Vitest config are already present and usable.

## File Structure

**Created in Brand UI (`packages/react/`):**

| Path | Responsibility |
| --- | --- |
| `src/utils/tailwind.ts` | `cn()` class merge helper used by every component |
| `src/utils/field-autofill-props.ts` | Shared autofill prop resolution for `Input`/`Select` |
| `src/test/test-utils.tsx` | RTL re-export + render wrapper behind the `#test-utils` alias |
| `src/theme/` | `ThemeProvider`, `useTheme` |
| `src/icons/` | Internal SVG icon set (consumed by `Breadcrumb`) |
| `src/<component>/` | One folder per v1 component: implementation, `index.ts`, CSS module, test, stories |
| `styles.css` | Design tokens: semantic roles + brand palette + spacing scales |
| `.github/workflows/` | CI: typecheck, lint, unit tests, production build |

**Modified in Brand UI:** `src/index.ts` (barrel), `vite.config.ts` (entries, externals, CSS asset name), `package.json` (exports, deps, `sideEffects`), `vitest.unit.config.ts` + `tsconfig.json` (`#test-utils` alias), `packages/react/README.md`, root `README.md`.

## Task Order and Dependencies

```
1 Foundation → 2 CI → 3 Theme → 4 Tokens → 5 VisuallyHidden+CSS bundle → 6 Spinner
→ 7 Button → 8 Label → 9 Popover → 10 Input → 11 FormField → 12 Textarea
→ 13 Checkbox → 14 Switch → 15 Select → 16 Card → 17 Skeleton → 18 Avatar
→ 19 DropdownMenu → 20 Icons+Breadcrumb → 21 Dialog → 22 Docs & release
```

---

### Task 1: Foundation — `cn`, test harness, honest exports

**Files:**
- Create: `packages/react/src/utils/tailwind.ts`
- Create: `packages/react/src/test/test-utils.tsx`
- Modify: `packages/react/src/index.ts` (replace entire contents)
- Modify: `packages/react/vite.config.ts:16-45` (`componentEntries`), `:83-91` (`rollupOptions.external`)
- Modify: `packages/react/vitest.unit.config.ts` (add `resolve.alias`)
- Modify: `packages/react/tsconfig.json` (add `compilerOptions.paths`)
- Modify: `packages/react/package.json` (trim `exports`, add `@testing-library/user-event`)
- Test: `packages/react/src/utils/tailwind.test.ts`

**Interfaces:**
- Produces: `cn(...inputs: ClassValue[]): string` from `src/utils/tailwind.ts`; the `#test-utils` module exporting `render`, `screen`, `act`, `cleanup`, `configure`, `fireEvent`, `getConfig`, `renderHook`, `waitFor`, `within`, `waitForElementToBeRemoved`, `prettyDOM`.
- Consumes: nothing from earlier tasks.

- [ ] **Step 1: Write the failing test**

Create `packages/react/src/utils/tailwind.test.ts`:

```ts
import { describe, expect, it } from 'vitest';

import { cn } from './tailwind';

describe('cn', () => {
  describe('when given conditional class values', () => {
    it('should drop falsy values and join the rest', () => {
      // Arrange
      const isActive = false;

      // Act
      const result = cn('px-2', isActive && 'font-bold', undefined, 'text-sm');

      // Assert
      expect(result).toBe('px-2 text-sm');
    });
  });

  describe('when given conflicting tailwind classes', () => {
    it('should keep the last conflicting class only', () => {
      // Arrange
      const base = 'p-2';

      // Act
      const result = cn(base, 'p-4');

      // Assert
      expect(result).toBe('p-4');
    });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/utils`
Expected: FAIL — `Failed to resolve import "./tailwind"`.

- [ ] **Step 3: Create the `cn` helper**

Create `packages/react/src/utils/tailwind.ts`:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/utils`
Expected: PASS — 2 tests.

- [ ] **Step 5: Create the shared test harness**

Create `packages/react/src/test/test-utils.tsx`. This is Product UI's `src/test/test-utils.tsx` with the `CountryFlagProvider` wrapper removed, because `country` is deferred:

```tsx
import * as React from 'react';
import * as TestingLibrary from '@testing-library/react';

type RenderOptions = NonNullable<Parameters<typeof TestingLibrary.render>[1]>;

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { wrapper?: React.ComponentType<{ children: React.ReactNode }> }
) {
  return TestingLibrary.render(ui, options);
}

export const {
  act,
  cleanup,
  configure,
  fireEvent,
  getConfig,
  renderHook,
  screen,
  waitFor,
  within,
  waitForElementToBeRemoved,
  prettyDOM,
} = TestingLibrary;
```

- [ ] **Step 6: Wire the `#test-utils` alias**

In `packages/react/vitest.unit.config.ts`, add `node:path`/`node:url` imports and a `resolve.alias` block so the file reads:

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '#test-utils': path.resolve(dirname, 'src/test/test-utils.tsx'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/*.stories.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        '**/*.stories.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/stories/**',
        '**/*.fixture.ts',
        '**/*.story-helpers.tsx',
        '**/*.module.css',
        '**/index.ts',
      ],
    },
  },
});
```

In `packages/react/vite.config.ts`, add the same alias so the Vitest projects defined there resolve it too — insert immediately before the `build:` key:

```ts
  resolve: {
    alias: {
      '#test-utils': resolve(__dirname, 'src/test/test-utils.tsx'),
    },
  },
```

In `packages/react/tsconfig.json`, add `paths` inside `compilerOptions`:

```json
    "paths": {
      "#test-utils": ["./src/test/test-utils.tsx"]
    }
```

- [ ] **Step 7: Add `@testing-library/user-event`**

Run: `pnpm --filter @forsyteco/brand-ui add -D @testing-library/user-event@^14.6.1`
Expected: `packages/react/package.json` `devDependencies` gains `"@testing-library/user-event": "^14.6.1"`.

- [ ] **Step 8: Trim the barrel to what exists**

Replace the entire contents of `packages/react/src/index.ts` with:

```ts
export { VisuallyHidden } from './visually-hidden'
export type { VisuallyHiddenProps } from './visually-hidden'
```

- [ ] **Step 9: Trim build entries and widen externals**

In `packages/react/vite.config.ts`, replace the `componentEntries` array (currently 28 names) with:

```ts
const componentEntries = [
  'visually-hidden',
];
```

In the same file, replace `rollupOptions.external` with the function form (mirrors Product UI, so peer/runtime libs are not bundled):

```ts
    rollupOptions: {
      external: (id) =>
        id === 'react' ||
        id === 'react-dom' ||
        id === 'react/jsx-runtime' ||
        id.startsWith('@base-ui/') ||
        id === 'dayjs' ||
        id.startsWith('react-day-picker') ||
        id === '@headlessui/react',
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
```

- [ ] **Step 10: Trim package exports**

In `packages/react/package.json`, replace the whole `exports` object with only the shipped subpaths:

```json
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.mjs"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.cjs"
      }
    },
    "./visually-hidden": {
      "import": {
        "types": "./dist/visually-hidden/index.d.ts",
        "default": "./dist/visually-hidden/index.mjs"
      },
      "require": {
        "types": "./dist/visually-hidden/index.d.ts",
        "default": "./dist/visually-hidden/index.cjs"
      }
    },
    "./styles.css": "./styles.css",
    "./fonts/*": "./fonts/*",
    "./tailwind": "./tailwind.config.js"
  },
```

- [ ] **Step 11: Run the full gate**

Run:
```
pnpm --filter @forsyteco/brand-ui test
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: all three succeed. `dist/index.mjs`, `dist/index.cjs`, `dist/visually-hidden/index.mjs`, and `dist/index.d.ts` exist.

- [ ] **Step 12: Commit**

```bash
git add packages/react/src/utils packages/react/src/test packages/react/src/index.ts packages/react/vite.config.ts packages/react/vitest.unit.config.ts packages/react/tsconfig.json packages/react/package.json pnpm-lock.yaml
git commit -m "chore: add cn util and test harness, trim exports to shipped components"
```

---

### Task 2: CI workflows

**Files:**
- Create: `.github/workflows/all.yml`, `.github/workflows/check-types.yml`, `.github/workflows/lint.yml`, `.github/workflows/unit-tests.yml`, `.github/workflows/production-build.yml`

**Interfaces:**
- Consumes: the `test`, `check-types`, and `build` scripts verified in Task 1.
- Produces: CI gates that every later task relies on.

- [ ] **Step 1: Create the reusable typecheck workflow**

Create `.github/workflows/check-types.yml`:

```yaml
name: Check types

on:
  workflow_call:

jobs:
  check-types:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9.0.0

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Check types
        run: pnpm --filter @forsyteco/brand-ui check-types
```

- [ ] **Step 2: Create the reusable lint workflow**

Create `.github/workflows/lint.yml` with the same checkout/node/pnpm/install steps as Step 1, and this final step:

```yaml
      - name: Lint
        run: pnpm --filter @forsyteco/brand-ui lint
```

- [ ] **Step 3: Create the reusable unit test workflow**

Create `.github/workflows/unit-tests.yml` with the same checkout/node/pnpm/install steps as Step 1, and this final step:

```yaml
      - name: Run unit tests
        run: pnpm --filter @forsyteco/brand-ui test
```

- [ ] **Step 4: Create the reusable production build workflow**

Create `.github/workflows/production-build.yml` with the same checkout/node/pnpm/install steps as Step 1, and this final step:

```yaml
      - name: Build library
        run: pnpm --filter @forsyteco/brand-ui build
```

- [ ] **Step 5: Create the aggregate workflow**

Create `.github/workflows/all.yml`:

```yaml
name: All jobs

on:
  merge_group:
  workflow_dispatch:
  push:
    branches:
      - main
      - dev
      - 'feature/*'
      - 'release/*'
  pull_request:
    branches:
      - main
      - dev

concurrency:
  group: ${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  type-check:
    name: Type check
    uses: ./.github/workflows/check-types.yml

  lint:
    name: Linters
    uses: ./.github/workflows/lint.yml

  unit-test:
    name: Tests
    uses: ./.github/workflows/unit-tests.yml

  build:
    name: Production builds
    needs: [lint, type-check, unit-test]
    uses: ./.github/workflows/production-build.yml

  required:
    needs: [lint, type-check, unit-test, build]
    if: always()
    runs-on: ubuntu-latest
    steps:
      - name: Fail if conditional jobs failed
        if: contains(needs.*.result, 'failure') || contains(needs.*.result, 'skipped') || contains(needs.*.result, 'cancelled')
        run: exit 1
```

- [ ] **Step 6: Verify the workflow files parse**

Run: `pnpm dlx js-yaml .github/workflows/all.yml`
Expected: the parsed YAML prints as JSON with no error. Repeat for the other four files.

- [ ] **Step 7: Commit**

```bash
git add .github/workflows
git commit -m "ci: add typecheck, lint, unit test and build workflows"
```

---

### Task 3: Theme provider

**Files:**
- Create (copy): `packages/react/src/theme/theme-provider.tsx`, `packages/react/src/theme/use-theme.ts`, `packages/react/src/theme/index.ts`, `packages/react/src/theme/theme-provider.test.tsx`, `packages/react/src/theme/use-theme.test.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `#test-utils` alias and `@testing-library/user-event` from Task 1.
- Produces: `ThemeProvider`, `useTheme`, types `ThemeProviderProps`, `ColourScheme`, `ThemeMode`, `ThemeContextValue`. `.storybook/preview.tsx` already imports `../src/theme/theme-provider`, so this task unblocks Storybook.

- [ ] **Step 1: Copy the failing tests**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\theme" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\theme\theme-provider.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\theme\theme-provider.test.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\theme\use-theme.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\theme\use-theme.test.tsx"
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/theme`
Expected: FAIL — `Failed to resolve import "./theme-provider"`.

- [ ] **Step 3: Copy the implementation**

```powershell
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\theme\theme-provider.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\theme\theme-provider.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\theme\use-theme.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\theme\use-theme.ts"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\theme\index.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\theme\index.ts"
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { ThemeProvider, useTheme } from './theme'
export type { ThemeProviderProps, ColourScheme, ThemeMode, ThemeContextValue } from './theme'
```

Add `'theme'` to `componentEntries` in `packages/react/vite.config.ts` (keep the array alphabetical):

```ts
const componentEntries = [
  'theme',
  'visually-hidden',
];
```

Add to `packages/react/package.json` `exports`, before `"./styles.css"`:

```json
    "./theme": {
      "import": {
        "types": "./dist/theme/index.d.ts",
        "default": "./dist/theme/index.mjs"
      },
      "require": {
        "types": "./dist/theme/index.d.ts",
        "default": "./dist/theme/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/theme
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: theme tests PASS; typecheck and build succeed; `dist/theme/index.mjs` exists.

- [ ] **Step 6: Verify Storybook boots**

Run: `pnpm --filter @forsyteco/brand-ui storybook`
Expected: Storybook starts on http://localhost:6006 with no unresolved-import error for `../src/theme/theme-provider`, and the Mode/Colour toolbar controls render. Stop the server afterwards.

- [ ] **Step 7: Commit**

```bash
git add packages/react/src/theme packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add ThemeProvider and useTheme"
```

---

### Task 4: Brand tokens

**Files:**
- Modify: `packages/react/styles.css`
- Test: `packages/react/src/theme/tokens.test.ts`

**Interfaces:**
- Consumes: existing `@theme` block in `styles.css`.
- Produces: Tailwind colour utilities `bg-brand-black`, `bg-brand-yellow`, `bg-brand-grey`, `bg-brand-blue`, `bg-brand-white` (and text/border variants), plus `--spacing-section-*`, `--spacing-container-*` scales that marketing pages compose with.

- [ ] **Step 1: Write the failing test**

Create `packages/react/src/theme/tokens.test.ts`:

```ts
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const stylesheet = readFileSync(path.resolve(__dirname, '../../styles.css'), 'utf8');

describe('brand tokens', () => {
  describe('when the stylesheet declares the brand palette', () => {
    it('should expose a tailwind colour utility for every brand colour', () => {
      // Arrange
      const expected = [
        '--color-brand-black: rgb(var(--brand-black))',
        '--color-brand-yellow: rgb(var(--brand-yellow))',
        '--color-brand-grey: rgb(var(--brand-grey))',
        '--color-brand-blue: rgb(var(--brand-blue))',
        '--color-brand-white: rgb(var(--brand-white))',
      ];

      // Act
      const missing = expected.filter(declaration => !stylesheet.includes(declaration));

      // Assert
      expect(missing).toEqual([]);
    });

    it('should define the raw brand grey and blue channels', () => {
      // Arrange
      const expected = ['--brand-grey: 28 28 28', '--brand-blue: 246 249 255'];

      // Act
      const missing = expected.filter(declaration => !stylesheet.includes(declaration));

      // Assert
      expect(missing).toEqual([]);
    });
  });

  describe('when the stylesheet declares layout spacing', () => {
    it('should expose the section and container spacing scales', () => {
      // Arrange
      const expected = [
        '--spacing-section-sm: 3rem',
        '--spacing-section-md: 4rem',
        '--spacing-section-lg: 6rem',
        '--spacing-section-xl: 8rem',
        '--spacing-container-sm: 1rem',
        '--spacing-container-md: 2rem',
        '--spacing-container-lg: 4rem',
        '--spacing-container-xl: 6rem',
      ];

      // Act
      const missing = expected.filter(declaration => !stylesheet.includes(declaration));

      // Assert
      expect(missing).toEqual([]);
    });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/theme/tokens.test.ts`
Expected: FAIL — all three assertions report missing declarations.

- [ ] **Step 3: Add the tokens**

In `packages/react/styles.css`, inside the `@theme { … }` block, immediately after the `--color-spinner-tertiary` line, add:

```css

  --color-brand-black: rgb(var(--brand-black));
  --color-brand-yellow: rgb(var(--brand-yellow));
  --color-brand-grey: rgb(var(--brand-grey));
  --color-brand-blue: rgb(var(--brand-blue));
  --color-brand-white: rgb(var(--brand-white));

  --spacing-section-sm: 3rem;
  --spacing-section-md: 4rem;
  --spacing-section-lg: 6rem;
  --spacing-section-xl: 8rem;

  --spacing-container-sm: 1rem;
  --spacing-container-md: 2rem;
  --spacing-container-lg: 4rem;
  --spacing-container-xl: 6rem;
```

In the same file, inside `:root { … }`, immediately after the `--brand-white: 255 255 255;` line, add the two brand channels web relies on:

```css
  --brand-grey: 28 28 28;
  --brand-blue: 246 249 255;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/theme/tokens.test.ts`
Expected: PASS — 3 tests.

- [ ] **Step 5: Commit**

```bash
git add packages/react/styles.css packages/react/src/theme/tokens.test.ts
git commit -m "feat: expose brand palette and layout spacing tokens"
```

---

### Task 5: Align VisuallyHidden with Product UI, ship the CSS bundle

**Files:**
- Replace (copy): `packages/react/src/visually-hidden/visually-hidden.tsx`, `packages/react/src/visually-hidden/index.ts`
- Create (copy): `packages/react/src/visually-hidden/visually-hidden.module.css`, `packages/react/src/visually-hidden/visually-hidden.test.tsx`
- Delete: `packages/react/src/visually-hidden/visually-hidden.stories.tsx` (Brand UI's scaffold version; Product UI's story imports `Button` and arrives in Task 7)
- Modify: `packages/react/vite.config.ts` (CSS asset name), `packages/react/package.json` (`sideEffects`, `./components.css` export, `files`)

**Interfaces:**
- Consumes: `cn` from `src/utils/tailwind` (Task 1).
- Produces: `VisuallyHidden`, `VisuallyHiddenProps` with Product UI's implementation; a single bundled stylesheet at `dist/brand-ui.css`, exported as `@forsyteco/brand-ui/components.css`, which every consumer must import for CSS-module styles to apply.

- [ ] **Step 1: Copy the failing test**

```powershell
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\visually-hidden\visually-hidden.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\visually-hidden\visually-hidden.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/visually-hidden`
Expected: FAIL — Brand UI's scaffold implementation does not match Product UI's expected DOM/classes, or the CSS module import is unresolved.

- [ ] **Step 3: Replace the implementation with Product UI's**

```powershell
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\visually-hidden\visually-hidden.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\visually-hidden\visually-hidden.tsx" -Force
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\visually-hidden\visually-hidden.module.css" "D:\Repos\forsyteco-brand-ui\packages\react\src\visually-hidden\visually-hidden.module.css"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\visually-hidden\index.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\visually-hidden\index.ts" -Force
Remove-Item "D:\Repos\forsyteco-brand-ui\packages\react\src\visually-hidden\visually-hidden.stories.tsx"
```

- [ ] **Step 4: Name the CSS bundle and export it**

In `packages/react/vite.config.ts`, add `assetFileNames` to `rollupOptions.output` so the single stylesheet has a stable name:

```ts
      output: {
        assetFileNames: 'brand-ui.css',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
```

In `packages/react/package.json`, add `sideEffects` immediately after `"license"`:

```json
  "sideEffects": [
    "**/*.css"
  ],
```

and add the bundled stylesheet subpath immediately after `"./styles.css"` in `exports`:

```json
    "./components.css": "./dist/brand-ui.css",
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/visually-hidden
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: tests PASS; `packages/react/dist/brand-ui.css` exists and contains the visually-hidden CSS-module class.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/visually-hidden packages/react/vite.config.ts packages/react/package.json
git commit -m "refactor: align VisuallyHidden with product-ui and ship bundled component css"
```

---

### Task 6: Spinner

**Files:**
- Create (copy): `packages/react/src/spinner/spinner.tsx`, `index.ts`, `spinner.test.tsx`, `spinner.stories.tsx`, `spinner.features.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1); `animate-spinner-rotate` / `animate-spinner-dash` utilities already defined in `styles.css`.
- Produces: `Spinner`, `SpinnerProps`.
- Deferred: `spinner.examples.stories.tsx` imports `Button` — Task 7 copies it.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\spinner" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\spinner\spinner.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\spinner\spinner.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/spinner`
Expected: FAIL — `Failed to resolve import "./spinner"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\spinner\spinner.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\spinner\spinner.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\spinner\index.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\spinner\index.ts"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\spinner\spinner.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\spinner\spinner.stories.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\spinner\spinner.features.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\spinner\spinner.features.stories.tsx"
```

`spinner.stories.tsx` and `spinner.features.stories.tsx` import no sibling components, so both are safe to copy now. Only `spinner.examples.stories.tsx` imports `Button`, and it is deferred to Task 7.

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Spinner } from './spinner'
export type { SpinnerProps } from './spinner'
```

Add `'spinner'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./spinner": {
      "import": {
        "types": "./dist/spinner/index.d.ts",
        "default": "./dist/spinner/index.mjs"
      },
      "require": {
        "types": "./dist/spinner/index.d.ts",
        "default": "./dist/spinner/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/spinner
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: spinner tests PASS (3 tests); typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/spinner packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Spinner"
```

---

### Task 7: Button

**Files:**
- Create (copy): `packages/react/src/button/button.tsx`, `button-variants.ts`, `button.module.css`, `index.ts`, `button.test.tsx`, `index.test.tsx`, `button.stories.tsx`
- Create (copy, deferred from earlier tasks): `packages/react/src/visually-hidden/visually-hidden.stories.tsx`, `packages/react/src/spinner/spinner.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `Spinner` (Task 6), `VisuallyHidden` (Task 5).
- Produces: `Button`, `buttonVariants`, types `ButtonProps`, `IconOnlyButtonProps`, `IconOnlyButtonSize`.
- Deferred: `button.examples.stories.tsx` imports `Input` — Task 10 copies it.

- [ ] **Step 1: Copy the failing tests**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\button" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\button\button.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\button\button.test.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\button\index.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\button\index.test.tsx"
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/button`
Expected: FAIL — `Failed to resolve import "./button"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\button\button.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\button\button.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\button\button-variants.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\button\button-variants.ts"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\button\button.module.css" "D:\Repos\forsyteco-brand-ui\packages\react\src\button\button.module.css"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\button\index.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\button\index.ts"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\button\button.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\button\button.stories.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\visually-hidden\visually-hidden.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\visually-hidden\visually-hidden.stories.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\spinner\spinner.examples.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\spinner\spinner.examples.stories.tsx"
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Button, buttonVariants } from './button'
export type { ButtonProps, IconOnlyButtonProps, IconOnlyButtonSize } from './button'
```

Add `'button'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./button": {
      "import": {
        "types": "./dist/button/index.d.ts",
        "default": "./dist/button/index.mjs"
      },
      "require": {
        "types": "./dist/button/index.d.ts",
        "default": "./dist/button/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/button
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: button tests PASS; typecheck and build succeed; `dist/brand-ui.css` contains button CSS-module classes.

- [ ] **Step 6: Verify the brand palette renders**

Run: `pnpm --filter @forsyteco/brand-ui storybook`
Expected: `Components/Button` stories render with the brand yellow accent in light mode and remain legible in dark mode. Stop the server afterwards.

- [ ] **Step 7: Commit**

```bash
git add packages/react/src/button packages/react/src/spinner packages/react/src/visually-hidden packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Button"
```

---

### Task 8: Label

**Files:**
- Create (copy): `packages/react/src/label/label.tsx`, `label.module.css`, `index.ts`, `label.test.tsx`, `label.stories.tsx`, `label.features.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1).
- Produces: `Label`, `LabelProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\label" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\label\label.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\label\label.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/label`
Expected: FAIL — `Failed to resolve import "./label"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\label\label.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\label\label.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\label\label.module.css" "D:\Repos\forsyteco-brand-ui\packages\react\src\label\label.module.css"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\label\index.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\label\index.ts"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\label\label.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\label\label.stories.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\label\label.features.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\label\label.features.stories.tsx"
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Label } from './label'
export type { LabelProps } from './label'
```

Add `'label'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./label": {
      "import": {
        "types": "./dist/label/index.d.ts",
        "default": "./dist/label/index.mjs"
      },
      "require": {
        "types": "./dist/label/index.d.ts",
        "default": "./dist/label/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/label
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: label tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/label packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Label"
```

---

### Task 9: Popover

**Files:**
- Create (copy): `packages/react/src/popover/popover.tsx`, `index.ts`, `popover.test.tsx`, `popover.stories.tsx`, `popover.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `Button` + `ButtonProps` (Task 7), `@headlessui/react` (already a dependency).
- Produces: `Popover`, `PopoverTrigger`, `PopoverContent`, types `PopoverProps`, `PopoverTriggerProps`, `PopoverContentProps`. Note this replaces the scaffold's advertised `PopoverButton`/`PopoverPanel` naming — Product UI's names win per the API-parity constraint.
- Deferred: `popover.features.stories.tsx` imports `Input` — Task 10 copies it.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\popover" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\popover\popover.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\popover\popover.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/popover`
Expected: FAIL — `Failed to resolve import "./popover"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\popover\popover.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\popover\popover.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\popover\index.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\popover\index.ts"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\popover\popover.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\popover\popover.stories.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\popover\popover.examples.stories.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\popover\popover.examples.stories.tsx"
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Popover, PopoverTrigger, PopoverContent } from './popover'
export type { PopoverProps, PopoverTriggerProps, PopoverContentProps } from './popover'
```

Add `'popover'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./popover": {
      "import": {
        "types": "./dist/popover/index.d.ts",
        "default": "./dist/popover/index.mjs"
      },
      "require": {
        "types": "./dist/popover/index.d.ts",
        "default": "./dist/popover/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/popover
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: popover tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/popover packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Popover"
```

---

### Task 10: Input

**Files:**
- Create (copy): `packages/react/src/input/input.tsx`, `input.types.ts`, `input-shell.tsx`, `text-input.tsx`, `currency-format.ts`, `currency-format-input.tsx`, `input.module.css`, `index.ts`, `input.test.tsx`, `input.stories.tsx`, `input.story-helpers.tsx`
- Create (copy): `packages/react/src/utils/field-autofill-props.ts`, `packages/react/src/utils/field-autofill-props.test.ts`
- Create (copy, deferred from earlier tasks): `packages/react/src/button/button.examples.stories.tsx`, `packages/react/src/popover/popover.features.stories.tsx`
- Modify: `packages/react/package.json` (add `@base-ui/react`, add export), `packages/react/src/index.ts`, `packages/react/vite.config.ts`
- **Do not copy:** `address-form-example.tsx`, `address-form-example.types.ts`, `address-form-example.fixture.ts`, `address-form-example.module.css`, `address-manual-entry-link.tsx`, `input.examples.stories.tsx` — they depend on the deferred `autocomplete`/`combobox`/`country` components.

**Interfaces:**
- Consumes: `cn` (Task 1), `Button` + `IconOnlyButtonProps` (Task 7), `Popover`/`PopoverTrigger`/`PopoverContent` (Task 9, used by `input.story-helpers.tsx`).
- Produces: `Input`, types `InputProps`, `TextInputProps`, `CurrencyInputModeProps`; internal `inputVariants`, `getInputInnerClassName`, `InputShell`, `InputSize` from `src/input/input-shell`; `resolveFieldAutofillProps` from `src/utils/field-autofill-props`.
- Deferred: `input.features.stories.tsx` imports `FormField` — Task 11 copies it.

- [ ] **Step 1: Add the Base UI dependency**

Run: `pnpm --filter @forsyteco/brand-ui add @base-ui/react@^1.3.0`
Expected: `packages/react/package.json` `dependencies` gains `"@base-ui/react": "^1.3.0"`. `vite.config.ts` already externalises `@base-ui/*` (Task 1).

- [ ] **Step 2: Copy the failing tests**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\input" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\input\input.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\input\input.test.tsx"
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\utils\field-autofill-props.test.ts" "D:\Repos\forsyteco-brand-ui\packages\react\src\utils\field-autofill-props.test.ts"
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/input src/utils`
Expected: FAIL — `Failed to resolve import "./input"` and `Failed to resolve import "./field-autofill-props"`.

- [ ] **Step 4: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src"
Copy-Item "$src\utils\field-autofill-props.ts" "$dst\utils\field-autofill-props.ts"
foreach ($f in @('input.tsx','input.types.ts','input-shell.tsx','text-input.tsx','currency-format.ts','currency-format-input.tsx','input.module.css','index.ts','input.stories.tsx','input.story-helpers.tsx')) {
  Copy-Item "$src\input\$f" "$dst\input\$f"
}
Copy-Item "$src\button\button.examples.stories.tsx" "$dst\button\button.examples.stories.tsx"
Copy-Item "$src\popover\popover.features.stories.tsx" "$dst\popover\popover.features.stories.tsx"
```

- [ ] **Step 5: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Input } from './input'
export type { InputProps, TextInputProps, CurrencyInputModeProps } from './input'
```

Add `'input'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./input": {
      "import": {
        "types": "./dist/input/index.d.ts",
        "default": "./dist/input/index.mjs"
      },
      "require": {
        "types": "./dist/input/index.d.ts",
        "default": "./dist/input/index.cjs"
      }
    },
```

- [ ] **Step 6: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/input src/utils
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: input and field-autofill tests PASS; typecheck and build succeed. `input.examples.stories.tsx` is the only file that references the excluded `address-form-example*` modules, and it is not copied, so no dangling import should appear. If one does, delete the referencing file rather than copying the excluded modules.

- [ ] **Step 7: Commit**

```bash
git add packages/react/src/input packages/react/src/utils packages/react/src/button packages/react/src/popover packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json pnpm-lock.yaml
git commit -m "feat: add Input with base-ui text input and currency formatting"
```

---

### Task 11: FormField

**Files:**
- Create (copy): `packages/react/src/form-field/form-field.tsx`, `form-field.module.css`, `index.ts`, `form-field.test.tsx`
- Create (copy, deferred from Task 10): `packages/react/src/input/input.features.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `VisuallyHidden` (Task 5), `Input` (Task 10, used by `form-field.test.tsx`), `Label` (Task 8) and `Spinner` (Task 6) via `input.features.stories.tsx`.
- Produces: `FormField`, types `FormFieldProps`, `FormFieldLabelProps`, `FormFieldDescriptionProps`, `FormFieldControlProps`, `FormFieldErrorProps`, `FormFieldLabelActionsProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\form-field" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\form-field\form-field.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\form-field\form-field.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/form-field`
Expected: FAIL — `Failed to resolve import "./form-field"`.

- [ ] **Step 3: Copy the implementation and the deferred story**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src"
foreach ($f in @('form-field.tsx','form-field.module.css','index.ts')) {
  Copy-Item "$src\form-field\$f" "$dst\form-field\$f"
}
Copy-Item "$src\input\input.features.stories.tsx" "$dst\input\input.features.stories.tsx"
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { FormField } from './form-field'
export type {
  FormFieldProps,
  FormFieldLabelProps,
  FormFieldDescriptionProps,
  FormFieldControlProps,
  FormFieldErrorProps,
  FormFieldLabelActionsProps,
} from './form-field'
```

Add `'form-field'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./form-field": {
      "import": {
        "types": "./dist/form-field/index.d.ts",
        "default": "./dist/form-field/index.mjs"
      },
      "require": {
        "types": "./dist/form-field/index.d.ts",
        "default": "./dist/form-field/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/form-field
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: form-field tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/form-field packages/react/src/input packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add FormField"
```

---

### Task 12: Textarea

**Files:**
- Create (copy): `packages/react/src/textarea/textarea.tsx`, `textarea.module.css`, `index.ts`, `textarea.test.tsx`, `textarea.stories.tsx`, `textarea.features.stories.tsx`, `textarea.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1); `Button` (Task 7) and `Input` (Task 10) via `textarea.examples.stories.tsx`.
- Produces: `Textarea`, `TextareaProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\textarea" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\textarea\textarea.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\textarea\textarea.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/textarea`
Expected: FAIL — `Failed to resolve import "./textarea"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\textarea"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\textarea"
foreach ($f in @('textarea.tsx','textarea.module.css','index.ts','textarea.stories.tsx','textarea.features.stories.tsx','textarea.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Textarea } from './textarea'
export type { TextareaProps } from './textarea'
```

Add `'textarea'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./textarea": {
      "import": {
        "types": "./dist/textarea/index.d.ts",
        "default": "./dist/textarea/index.mjs"
      },
      "require": {
        "types": "./dist/textarea/index.d.ts",
        "default": "./dist/textarea/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/textarea
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: textarea tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/textarea packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Textarea"
```

---

### Task 13: Checkbox

**Files:**
- Create (copy): `packages/react/src/checkbox/checkbox.tsx`, `index.ts`, `checkbox.test.tsx`, `checkbox.stories.tsx`, `checkbox.features.stories.tsx`, `checkbox.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1).
- Produces: `Checkbox`, `CheckboxProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\checkbox" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\checkbox\checkbox.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\checkbox\checkbox.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/checkbox`
Expected: FAIL — `Failed to resolve import "./checkbox"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\checkbox"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\checkbox"
foreach ($f in @('checkbox.tsx','index.ts','checkbox.stories.tsx','checkbox.features.stories.tsx','checkbox.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

None of the checkbox story files import sibling components, so all three copy cleanly.

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Checkbox } from './checkbox'
export type { CheckboxProps } from './checkbox'
```

Add `'checkbox'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./checkbox": {
      "import": {
        "types": "./dist/checkbox/index.d.ts",
        "default": "./dist/checkbox/index.mjs"
      },
      "require": {
        "types": "./dist/checkbox/index.d.ts",
        "default": "./dist/checkbox/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/checkbox
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: checkbox tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/checkbox packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Checkbox"
```

---

### Task 14: Switch

**Files:**
- Create (copy): `packages/react/src/switch/switch.tsx`, `index.ts`, `switch.test.tsx`, `switch.stories.tsx`, `switch.features.stories.tsx`, `switch.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `@headlessui/react` (`Field`, `Label`, `Description`, `Switch`).
- Produces: `Switch`, `SwitchProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\switch" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\switch\switch.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\switch\switch.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/switch`
Expected: FAIL — `Failed to resolve import "./switch"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\switch"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\switch"
foreach ($f in @('switch.tsx','index.ts','switch.stories.tsx','switch.features.stories.tsx','switch.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Switch } from './switch'
export type { SwitchProps } from './switch'
```

Add `'switch'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./switch": {
      "import": {
        "types": "./dist/switch/index.d.ts",
        "default": "./dist/switch/index.mjs"
      },
      "require": {
        "types": "./dist/switch/index.d.ts",
        "default": "./dist/switch/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/switch
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: switch tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/switch packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Switch"
```

---

### Task 15: Select

**Files:**
- Create (copy): `packages/react/src/select/select.tsx`, `index.ts`, `select.test.tsx`, `select.stories.tsx`, `select.features.stories.tsx`, `select.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `resolveFieldAutofillProps` from `src/utils/field-autofill-props` (Task 10).
- Produces: `Select`, types `SelectProps`, `SelectOption`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\select" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\select\select.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\select\select.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/select`
Expected: FAIL — `Failed to resolve import "./select"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\select"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\select"
foreach ($f in @('select.tsx','index.ts','select.stories.tsx','select.features.stories.tsx','select.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Select } from './select'
export type { SelectProps, SelectOption } from './select'
```

Add `'select'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./select": {
      "import": {
        "types": "./dist/select/index.d.ts",
        "default": "./dist/select/index.mjs"
      },
      "require": {
        "types": "./dist/select/index.d.ts",
        "default": "./dist/select/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/select
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: select tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/select packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Select"
```

---

### Task 16: Card

**Files:**
- Create (copy): `packages/react/src/card/card.tsx`, `card.module.css`, `index.ts`, `card.test.tsx`, `card.stories.tsx`, `card.features.stories.tsx`, `card.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `Button` (Task 7) via stories.
- Produces: `Card`, `CardAction`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\card" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\card\card.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\card\card.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/card`
Expected: FAIL — `Failed to resolve import "./card"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\card"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\card"
foreach ($f in @('card.tsx','card.module.css','index.ts','card.stories.tsx','card.features.stories.tsx','card.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
```

Add `'card'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./card": {
      "import": {
        "types": "./dist/card/index.d.ts",
        "default": "./dist/card/index.mjs"
      },
      "require": {
        "types": "./dist/card/index.d.ts",
        "default": "./dist/card/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/card
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: card tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/card packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Card"
```

---

### Task 17: Skeleton

**Files:**
- Create (copy): `packages/react/src/skeleton/skeleton.tsx`, `index.ts`, `skeleton.test.tsx`, `skeleton.stories.tsx`, `skeleton.features.stories.tsx`, `skeleton.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `Card` family (Task 16) via `skeleton.examples.stories.tsx`.
- Produces: `Skeleton`, `SkeletonProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\skeleton" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\skeleton\skeleton.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\skeleton\skeleton.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/skeleton`
Expected: FAIL — `Failed to resolve import "./skeleton"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\skeleton"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\skeleton"
foreach ($f in @('skeleton.tsx','index.ts','skeleton.stories.tsx','skeleton.features.stories.tsx','skeleton.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Skeleton } from './skeleton'
export type { SkeletonProps } from './skeleton'
```

Add `'skeleton'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./skeleton": {
      "import": {
        "types": "./dist/skeleton/index.d.ts",
        "default": "./dist/skeleton/index.mjs"
      },
      "require": {
        "types": "./dist/skeleton/index.d.ts",
        "default": "./dist/skeleton/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/skeleton
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: skeleton tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/skeleton packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Skeleton"
```

---

### Task 18: Avatar

**Files:**
- Create (copy): `packages/react/src/avatar/avatar.tsx`, `index.ts`, `avatar.test.tsx`, `avatar.stories.tsx`, `avatar.features.stories.tsx`, `avatar.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `radix-ui` `Avatar` primitive and `boring-avatars` (both already dependencies), `Card` family (Task 16) via stories.
- Produces: `Avatar`, `AvatarFallback`, `AvatarImage`, types `AvatarProps`, `AvatarFallbackProps`, `AvatarImageProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\avatar" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\avatar\avatar.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\avatar\avatar.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/avatar`
Expected: FAIL — `Failed to resolve import "./avatar"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\avatar"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\avatar"
foreach ($f in @('avatar.tsx','index.ts','avatar.stories.tsx','avatar.features.stories.tsx','avatar.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Avatar, AvatarFallback, AvatarImage } from './avatar'
export type { AvatarProps, AvatarFallbackProps, AvatarImageProps } from './avatar'
```

Add `'avatar'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./avatar": {
      "import": {
        "types": "./dist/avatar/index.d.ts",
        "default": "./dist/avatar/index.mjs"
      },
      "require": {
        "types": "./dist/avatar/index.d.ts",
        "default": "./dist/avatar/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/avatar
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: avatar tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/avatar packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Avatar"
```

---

### Task 19: DropdownMenu

**Files:**
- Create (copy): `packages/react/src/dropdown-menu/dropdown-menu.tsx`, `index.ts`, `dropdown-menu.test.tsx`, `dropdown-menu.stories.tsx`, `dropdown-menu.features.stories.tsx`, `dropdown-menu.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `Button` + `ButtonProps` (Task 7), `@headlessui/react` (`Menu`, `MenuButton`, `MenuItem`, `MenuItems`, `Transition`).
- Produces: `DropdownMenu`, `DropdownMenuItem`, `DropdownMenuButton`, types `DropdownMenuProps`, `DropdownMenuItemProps`, `DropdownMenuButtonProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\dropdown-menu" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\dropdown-menu\dropdown-menu.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\dropdown-menu\dropdown-menu.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/dropdown-menu`
Expected: FAIL — `Failed to resolve import "./dropdown-menu"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\dropdown-menu"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\dropdown-menu"
foreach ($f in @('dropdown-menu.tsx','index.ts','dropdown-menu.stories.tsx','dropdown-menu.features.stories.tsx','dropdown-menu.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { DropdownMenu, DropdownMenuItem, DropdownMenuButton } from './dropdown-menu'
export type { DropdownMenuProps, DropdownMenuItemProps, DropdownMenuButtonProps } from './dropdown-menu'
```

Add `'dropdown-menu'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./dropdown-menu": {
      "import": {
        "types": "./dist/dropdown-menu/index.d.ts",
        "default": "./dist/dropdown-menu/index.mjs"
      },
      "require": {
        "types": "./dist/dropdown-menu/index.d.ts",
        "default": "./dist/dropdown-menu/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/dropdown-menu
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: dropdown-menu tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/dropdown-menu packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add DropdownMenu"
```

---

### Task 20: Icons and Breadcrumb

**Files:**
- Create (copy): `packages/react/src/icons/` (all files), `packages/react/src/breadcrumb/breadcrumb.tsx`, `index.ts`, `breadcrumb.test.tsx`, `breadcrumb.stories.tsx`, `breadcrumb.features.stories.tsx`, `breadcrumb.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `Button` (Task 7), `DropdownMenu`/`DropdownMenuItem` (Task 19), `radix-ui` `Slot` primitive.
- Produces: `Breadcrumb`, `BreadcrumbEllipsis`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbList`, `BreadcrumbPage`, `BreadcrumbSeparator`. Internal icon set at `src/icons/icons.tsx` (`ChevronRightIcon`, `MoreHorizontalIcon`, and siblings) — internal only, not added to `componentEntries` or `exports`, matching Product UI.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\breadcrumb" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\breadcrumb\breadcrumb.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\breadcrumb\breadcrumb.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/breadcrumb`
Expected: FAIL — `Failed to resolve import "./breadcrumb"`.

- [ ] **Step 3: Copy the icon set and the implementation**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src"
Copy-Item "$src\icons" "$dst\icons" -Recurse
foreach ($f in @('breadcrumb.tsx','index.ts','breadcrumb.stories.tsx','breadcrumb.features.stories.tsx','breadcrumb.examples.stories.tsx')) {
  Copy-Item "$src\breadcrumb\$f" "$dst\breadcrumb\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb'
```

Add `'breadcrumb'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./breadcrumb": {
      "import": {
        "types": "./dist/breadcrumb/index.d.ts",
        "default": "./dist/breadcrumb/index.mjs"
      },
      "require": {
        "types": "./dist/breadcrumb/index.d.ts",
        "default": "./dist/breadcrumb/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/breadcrumb
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: breadcrumb tests PASS; typecheck and build succeed. Every file under `src/icons/` imports only `./icon-props`, so the whole folder copies cleanly with no deferred dependencies.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/icons packages/react/src/breadcrumb packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Breadcrumb and internal icon set"
```

---

### Task 21: Dialog

**Files:**
- Create (copy): `packages/react/src/dialog/dialog.tsx`, `index.ts`, `dialog.test.tsx`, `dialog.stories.tsx`, `dialog.features.stories.tsx`, `dialog.examples.stories.tsx`
- Modify: `packages/react/src/index.ts`, `packages/react/vite.config.ts`, `packages/react/package.json`

**Interfaces:**
- Consumes: `cn` (Task 1), `@headlessui/react` dialog primitives, plus `Button` (Task 7), `Input` (Task 10), `Textarea` (Task 12) via `dialog.features.stories.tsx`.
- Produces: `Dialog`, `DialogPanel`, `DialogTitle`, `DialogDescription`, types `DialogProps`, `DialogPanelProps`, `DialogTitleProps`, `DialogDescriptionProps`.

- [ ] **Step 1: Copy the failing test**

```powershell
New-Item -ItemType Directory -Force -Path "D:\Repos\forsyteco-brand-ui\packages\react\src\dialog" | Out-Null
Copy-Item "D:\Repos\forsyteco-product-ui\packages\react\src\dialog\dialog.test.tsx" "D:\Repos\forsyteco-brand-ui\packages\react\src\dialog\dialog.test.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/dialog`
Expected: FAIL — `Failed to resolve import "./dialog"`.

- [ ] **Step 3: Copy the implementation and stories**

```powershell
$src = "D:\Repos\forsyteco-product-ui\packages\react\src\dialog"
$dst = "D:\Repos\forsyteco-brand-ui\packages\react\src\dialog"
foreach ($f in @('dialog.tsx','index.ts','dialog.stories.tsx','dialog.features.stories.tsx','dialog.examples.stories.tsx')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

- [ ] **Step 4: Wire exports**

Append to `packages/react/src/index.ts`:

```ts

export { Dialog, DialogPanel, DialogTitle, DialogDescription } from './dialog'
export type { DialogProps, DialogPanelProps, DialogTitleProps, DialogDescriptionProps } from './dialog'
```

Add `'dialog'` to `componentEntries` in `vite.config.ts`, and add to `package.json` `exports`:

```json
    "./dialog": {
      "import": {
        "types": "./dist/dialog/index.d.ts",
        "default": "./dist/dialog/index.mjs"
      },
      "require": {
        "types": "./dist/dialog/index.d.ts",
        "default": "./dist/dialog/index.cjs"
      }
    },
```

- [ ] **Step 5: Run the gate**

Run:
```
pnpm --filter @forsyteco/brand-ui exec vitest run -c vitest.unit.config.ts src/dialog
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: dialog tests PASS; typecheck and build succeed.

- [ ] **Step 6: Commit**

```bash
git add packages/react/src/dialog packages/react/src/index.ts packages/react/vite.config.ts packages/react/package.json
git commit -m "feat: add Dialog"
```

---

### Task 22: Documentation, conventions, and release

**Files:**
- Replace: `README.md` (root — currently the Turborepo starter text)
- Modify: `packages/react/README.md` (document the v1 catalog and CSS imports)
- Create (copy, adapted): `.cursor/rules/react-component-library.mdc`, `.cursor/rules/react-component-library-testing-strategy.mdc`, `.cursor/rules/unit-test-style.mdc`, `.cursor/rules/development-preferences.mdc`
- Modify: `packages/react/package.json` (`version`)

**Interfaces:**
- Consumes: the complete v1 catalog from Tasks 3–21.
- Produces: a publishable `@forsyteco/brand-ui@0.1.0` and the documentation web needs for the migration plan.

- [ ] **Step 1: Copy the component-library conventions**

```powershell
$src = "D:\Repos\forsyteco-product-ui\.cursor\rules"
$dst = "D:\Repos\forsyteco-brand-ui\.cursor\rules"
foreach ($f in @('react-component-library.mdc','react-component-library-testing-strategy.mdc','unit-test-style.mdc','development-preferences.mdc')) {
  Copy-Item "$src\$f" "$dst\$f"
}
```

Then edit each copied file: replace every occurrence of `@forsyteco/product-ui` with `@forsyteco/brand-ui`, and any wording that describes the product design system with the public brand design system. Keep the existing `coding-pattern-preferences.mdc` untouched.

- [ ] **Step 2: Replace the root README**

Replace the entire contents of `README.md` with:

```markdown
# Forsyte Brand UI

Monorepo for Forsyte's public-facing UI packages: a **React 19** design-system component library and an optional **MCP** server. Built with TypeScript, Turborepo, Vite, Vitest, and Storybook.

Brand UI is the public counterpart of [`@forsyteco/product-ui`](https://github.com/forsyteco/product-ui). Component APIs are kept aligned with Product UI; tokens and visuals follow the public brand.

## Packages

| Package | NPM name | Description |
|---------|----------|-------------|
| [`packages/react`](./packages/react) | `@forsyteco/brand-ui` | React component library (Tailwind CSS 4) |
| [`packages/mcp`](./packages/mcp) | `@forsyteco/brand-mcp` | Model Context Protocol server |

## Prerequisites

- Node.js **18+**
- [pnpm](https://pnpm.io/) **9**

## Getting started

```bash
pnpm install
pnpm --filter @forsyteco/brand-ui storybook   # http://localhost:6006
```

## Quality gates

```bash
pnpm --filter @forsyteco/brand-ui test
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```

## Scope

This library ships design-system primitives only. Marketing page composition (section bands, site header/footer, CMS rendering) lives in `forsyteco-web`.

## License

MIT
```

- [ ] **Step 3: Document setup and the catalog in the package README**

In `packages/react/README.md`, replace the `## Setup` and `## Components` sections so setup lists three imports in order and the catalog reflects what shipped:

```markdown
## Setup

```css
/* your global stylesheet, in this order */
@import 'tailwindcss';
@import '@forsyteco/brand-ui/styles.css';
@import '@forsyteco/brand-ui/components.css';
```

`styles.css` provides tokens, fonts, and brand colour utilities. `components.css` provides the compiled CSS-module styles — components render unstyled without it.

Wrap your app in `ThemeProvider`:

```tsx
import { ThemeProvider } from '@forsyteco/brand-ui'

export function App({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
```

## Components

Avatar, Breadcrumb, Button, Card, Checkbox, Dialog, DropdownMenu, FormField, Input, Label, Popover, Select, Skeleton, Spinner, Switch, Textarea, ThemeProvider/useTheme, VisuallyHidden.

Each component is also available as a subpath import, e.g. `@forsyteco/brand-ui/button`.
```

- [ ] **Step 4: Bump the version**

In `packages/react/package.json`, change `"version": "0.0.4"` to `"version": "0.1.0"`.

- [ ] **Step 5: Run the full gate**

Run:
```
pnpm --filter @forsyteco/brand-ui test
pnpm --filter @forsyteco/brand-ui check-types
pnpm --filter @forsyteco/brand-ui build
```
Expected: all pass. Then confirm every exported subpath has build output:

```powershell
foreach ($e in @('avatar','breadcrumb','button','card','checkbox','dialog','dropdown-menu','form-field','input','label','popover','select','skeleton','spinner','switch','textarea','theme','visually-hidden')) {
  $p = "D:\Repos\forsyteco-brand-ui\packages\react\dist\$e\index.mjs"
  if (-not (Test-Path $p)) { Write-Host "MISSING $e" }
}
Test-Path "D:\Repos\forsyteco-brand-ui\packages\react\dist\brand-ui.css"
```
Expected: no `MISSING` lines and `True` for the stylesheet.

- [ ] **Step 6: Verify the Storybook catalog**

Run: `pnpm --filter @forsyteco/brand-ui storybook`
Expected: every v1 component has at least one story, all render without console errors, and the Mode (light/dark) and Colour toolbar controls both work. Stop the server afterwards.

- [ ] **Step 7: Commit**

```bash
git add README.md packages/react/README.md packages/react/package.json .cursor/rules
git commit -m "docs: document brand-ui v1 catalog and bump to 0.1.0"
```

- [ ] **Step 8: Publish**

Run: `pnpm --filter @forsyteco/brand-ui publish --access public`
Expected: `@forsyteco/brand-ui@0.1.0` is published. This requires npm auth for the `@forsyteco` scope; if the org publishes only from CI, open a release PR instead and let the pipeline publish.

---

## Post-plan follow-up

After this plan lands, write the web migration plan (spec Phase 3): add `@forsyteco/brand-ui` to `forsyteco-web`, import `styles.css` + `components.css`, migrate contact/partner forms then shared chrome onto Brand UI, delete `components/ui/*` and `components/button.tsx` as consumers migrate, drop unused Radix dependencies, and keep `Band*`/header/footer as web-local composition.
