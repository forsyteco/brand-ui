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
