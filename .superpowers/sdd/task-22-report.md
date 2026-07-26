# Task 22 Report — Documentation, conventions, and release

## Status

DONE_WITH_CONCERNS

Documentation, conventions, and the `0.1.0` version bump were completed and committed as `c3d84a43506b5bcbe1c8156548a90ca8fca6d1b6` (`docs: document brand-ui v1 catalog and bump to 0.1.0`).

## Delivered

- Replaced the Turborepo starter README with the Brand UI monorepo documentation from the implementation plan.
- Updated `packages/react/README.md` with the required Tailwind, token, and compiled component CSS imports plus the complete v1 catalog.
- Copied and adapted the four Product UI component-library rules for `@forsyteco/brand-ui`; the existing `coding-pattern-preferences.mdc` was left unchanged.
- Bumped `@forsyteco/brand-ui` from `0.0.4` to `0.1.0`.

## Verification

- `pnpm --filter @forsyteco/brand-ui test` — passed: 23 files, 100 tests.
- `pnpm --filter @forsyteco/brand-ui check-types` — passed.
- `pnpm --filter @forsyteco/brand-ui build` — exited 0.
- Verified all 18 exported component subpaths emit `dist/<subpath>/index.mjs`.
- Verified `packages/react/dist/brand-ui.css` exists.
- `pnpm --filter @forsyteco/brand-ui build-storybook` — completed successfully.
- Verified every visual component family has a story; FormField is covered by Input feature stories and ThemeProvider is wired through the Storybook preview.
- Verified the Storybook preview defines Mode (light/dark/system) and Colour (yellow/blue) toolbar controls.

## Publish

`pnpm --filter @forsyteco/brand-ui publish --access public` was attempted and exited before npm authentication with `ERR_PNPM_GIT_UNCLEAN`. The pre-existing untracked `.superpowers/` directory and `task-8-review.diff` keep the working tree unclean. Git checks were not disabled, so `@forsyteco/brand-ui@0.1.0` was not published.

## Concerns

- Publish remains blocked until it is run from a clean checkout or the unrelated untracked files are handled by their owner.
- Vite and Storybook builds exit successfully but continue to print the pre-existing non-fatal `vite-plugin-dts` CSS-module declaration diagnostics.
- Storybook reports a non-fatal large-chunk warning for the preview bundle.

## Final-review fixes

- Removed React and React DOM from runtime dependencies; both remain peer dependencies.
- Removed the five deferred-component dependencies after confirming there are no importers under `packages/react/src`.
- Moved `lucide-react` to development dependencies because it is used only by stories.
- Updated the package README to describe the public Forsyte brand design system.
- Added public npm access through `publishConfig`.
- `pnpm install` — passed and refreshed `pnpm-lock.yaml`.
- `pnpm --filter @forsyteco/brand-ui test` — passed: 23 files, 100 tests.
- `pnpm --filter @forsyteco/brand-ui check-types` — passed.
- `pnpm --filter @forsyteco/brand-ui build` — exited 0; the pre-existing non-fatal
  `vite-plugin-dts` CSS-module declaration diagnostics remain.
