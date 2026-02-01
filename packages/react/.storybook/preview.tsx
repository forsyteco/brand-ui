import '../styles.css';
import * as React from 'react';
import type { Decorator, Preview } from '@storybook/react-vite';

import {
  ThemeProvider,
  type ColourScheme,
  type ThemeMode,
} from '../src/theme/theme-provider';

import type { StorybookViewport } from './types';

// Breakpoints to Storybook viewports
const defaultBreakpoints = ['320px', '544px', '768px', '1012px', '1280px', '1400px'] as const;

export const Breakpoints = {
  xsmall: { width: defaultBreakpoints[0] },
  small: { width: defaultBreakpoints[1] },
  medium: { width: defaultBreakpoints[2] },
  large: { width: defaultBreakpoints[3] },
  xlarge: { width: defaultBreakpoints[4] },
  xxlarge: { width: defaultBreakpoints[5] },
} as const;

type BreakpointKey = keyof typeof Breakpoints;

const storybookViewports = (
  Object.entries(Breakpoints) as Array<[BreakpointKey, (typeof Breakpoints)[BreakpointKey]]>
).reduce<Record<BreakpointKey, StorybookViewport>>(
  (acc, [viewport, { width }]) => {
    acc[viewport] = {
      name: viewport,
      styles: { width, height: '100%' },
    };
    return acc;
  },
  {} as Record<BreakpointKey, StorybookViewport>
);

// Theme reset (optional; keep if you want Storybook always “fresh”)
const storybookThemeStorageKey = 'forsyteco-theme-storybook';

if (typeof window !== 'undefined') {
  window.localStorage.removeItem(`${storybookThemeStorageKey}-colour-scheme`);
  window.localStorage.removeItem(`${storybookThemeStorageKey}-mode`);
}

/**
 * Toolbar globals (Storybook "globalTypes")
 * These keys become context.globals.<key>
 */
export const globalTypes = {
  mode: {
    name: 'Mode',
    description: 'Theme mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light', left: '☀️' },
        { value: 'dark', title: 'Dark', left: '🌗' },
        { value: 'system', title: 'System', left: '🖥️' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  colourScheme: {
    name: 'Colour',
    description: 'Colour scheme',
    defaultValue: 'yellow',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'yellow', title: 'Yellow', left: '🟡' },
        { value: 'blue', title: 'Blue', left: '🔵' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
} as const;

type StorybookGlobals = Partial<{
  mode: ThemeMode;
  colourScheme: ColourScheme;
}>;

export const decorators: Decorator[] = [
  (Story, context) => {
    const globals = (context.globals ?? {}) as StorybookGlobals;

    // Guard/fallbacks in case a toolbar value is missing
    const mode: ThemeMode = globals.mode ?? 'light';
    const colourScheme: ColourScheme = globals.colourScheme ?? 'yellow';

    return (
      <ThemeProvider
        colourScheme={colourScheme}
        defaultMode={mode}
        storageKey={storybookThemeStorageKey}
      >
        <Story />
      </ThemeProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    html: {
      root: '#html-addon-root',
      removeEmptyComments: true,
    },

    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    // SB10-safe storySort (object form)
    options: {
      storySort: {
        order: [
          [
            'Components',
            [
              [
                '*',
                ['README', '*', 'Playground', /Playground$/, 'Features', 'Examples'],
              ],
            ],
          ],
          '*',
        ],
      },
    },

    viewport: {
      viewports: storybookViewports,
    },

    docs: {
      codePanel: true,
    },
  },
};

export default preview;