/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { posix as pathPosix, resolve } from 'path';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import type { ModuleFormat } from 'rollup';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const componentEntries = [
  'theme',
  'visually-hidden',
  'spinner',
  'button',
  'label',
  'popover',
  'input',
  'form-field',
  'textarea',
];

const libEntries = {
  index: resolve(__dirname, 'src/index.ts'),
  ...Object.fromEntries(componentEntries.map(entry => [entry, resolve(__dirname, `src/${entry}/index.ts`)])),
};

const isEsOrCjs = (format: ModuleFormat): format is 'es' | 'cjs' =>
  format === 'es' || format === 'cjs';

const withFileName = (entryName: string, format: ModuleFormat) => {
  if (!isEsOrCjs(format)) {
    // This shouldn't happen given build.lib.formats, but keeps TS + runtime honest.
    throw new Error(`Unsupported output format: ${format}`);
  }

  return entryName === 'index'
    ? `index.${format === 'es' ? 'mjs' : 'cjs'}`
    : pathPosix.join(entryName, `index.${format === 'es' ? 'mjs' : 'cjs'}`);
};

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    tailwindcss(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      entryRoot: 'src',
      outDir: 'dist',
    }),
  ],
  resolve: {
    alias: {
      '#test-utils': resolve(__dirname, 'src/test/test-utils.tsx'),
    },
  },
  build: {
    lib: {
      entry: libEntries,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => withFileName(entryName, format),
    },
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
        assetFileNames: 'brand-ui.css',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/*.stories.test.{ts,tsx}'],
    projects: [
      {
        extends: true,
        test: {
          include: ['src/**/*.test.{ts,tsx}'],
          exclude: ['**/node_modules/**', '**/dist/**', '**/*.stories.test.{ts,tsx}'],
        },
      },
      {
        plugins: [
          react({ jsxRuntime: 'automatic' }),
          tailwindcss(),
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          globals: true,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
