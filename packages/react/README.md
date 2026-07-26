# @forsyteco/brand-ui

Forsyte's public brand design system for React, built with React 19, TypeScript, and Tailwind CSS 4.

## Installation

```bash
npm install @forsyteco/brand-ui
# or
pnpm add @forsyteco/brand-ui
# or
yarn add @forsyteco/brand-ui
```

## Peer Dependencies

This package requires React 19.x and Tailwind CSS 4.x:

```bash
npm install react@^19.2.1 react-dom@^19.2.1 tailwindcss@^4.1.17
```

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

## Development

This package is part of a Turborepo monorepo. For local development:

```bash
# Install dependencies
pnpm install

# Build the package
pnpm turbo run build --filter=@forsyteco/brand-ui

# Run Storybook
pnpm --filter @forsyteco/brand-ui storybook
```

## License

MIT
