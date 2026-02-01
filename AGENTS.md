# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed by Turborepo; shared configs live at `pnpm-workspace.yaml`, `turbo.json`, and `tsconfig.base.json`.
- `packages/react`: Vite-based React component library using Tailwind CSS 4; entrypoint is `src/index.ts` with utilities in `src/utils` and components in feature folders (e.g., `spinner/`).
- `packages/mcp`: Model Context Protocol server scaffold; `src/server.ts` defines the MCP server instance, re-exported from `src/index.ts`.
- Styles sit in `packages/react/src/globals.css`; colocate stories next to components (see `spinner/spinner.stories.tsx`).

## Build, Test, and Development Commands
- `pnpm install` (Node >=18, pnpm 9) to bootstrap dependencies.
- `pnpm run dev` to start workspace dev tasks; filter for a package with `pnpm turbo run dev --filter=react`.
- `pnpm run build` builds all packages; `pnpm turbo run build --filter=react` targets the component library only.
- `pnpm run lint` runs lint pipelines; `pnpm run check-types` runs TypeScript checks; `pnpm run format` applies Prettier to `ts/tsx/md` files.
- Storybook: `pnpm --filter react storybook -p 6006` for interactive docs.
- Vitest: `pnpm vitest run --dir packages/react` (add `--watch` during development).

## Coding Style & Naming Conventions
- TypeScript-first; prefer functional React components with props types named `*Props`.
- Default to 2-space indentation and Prettier formatting; keep imports sorted logically (external, internal utils, styles).
- Components/files use PascalCase (`Spinner.tsx`); helpers use camelCase (`cn`). Keep Tailwind strings concise and merge with `cn`.

## Testing Guidelines
- Use Vitest for unit tests near the code as `*.test.ts`/`*.test.tsx`; assert behaviors over implementation details.
- Maintain Storybook stories beside components to exercise states and edge cases; keep controls minimal.
- Cover exported behaviors (loading states, variants) and prefer deterministic fixtures.

## Commit & Pull Request Guidelines
- Follow Conventional Commits as seen in history (`feat:`, `fix:`, `chore:`) with short scopes.
- Before opening a PR, run `pnpm run lint`, `pnpm run check-types`, and any relevant builds/tests (include filters used).
- PRs should include a concise summary, linked issue/ticket, testing notes, and screenshots/GIFs for UI changes (Storybook captures welcome).

## Security & Configuration Tips
- Never commit secrets or generated artifacts outside `dist/**`; rely on local env variables.
- Leverage Turborepo caching; keep lockfile changes clean (`pnpm dedupe` when touching dependencies).
- Note engine constraints: Node >=18, pnpm 9.
