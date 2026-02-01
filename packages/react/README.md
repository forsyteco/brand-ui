# @forsyteco/brand-ui

React component library for Forsyte app, built with React 19, TypeScript, and Tailwind CSS 4.

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

### 1. Import Tailwind base styles

Make sure Tailwind CSS is imported in your application:

```css
/* src/index.css or your main CSS file */
@import 'tailwindcss';
```

### 2. Import the design system styles

Pull in the design tokens, fonts, and utilities provided by the library:

```css
/* src/index.css or your main CSS file, after tailwindcss */
@import '@forsyteco/brand-ui/styles.css';
```

### 3. Import components

```typescript
import { Spinner } from '@forsyteco/brand-ui'
import type { SpinnerProps } from '@forsyteco/brand-ui'
```

### Example

```tsx
import { Spinner } from '@forsyteco/brand-ui'

function App() {
  return (
    <div>
      <Spinner />
    </div>
  )
}
```

## Components

All components use Tailwind CSS classes directly. Make sure Tailwind CSS is configured in your project.

### Spinner

A loading spinner component.

```tsx
import { Spinner } from '@forsyteco/brand-ui'

// Basic usage
<Spinner />

// Full-width centered spinner
<Spinner full />

// Custom styling with Tailwind classes
<Spinner className="text-blue-500 w-8 h-8" />
```

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
