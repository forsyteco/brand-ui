// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [getAbsolutePath('@storybook/addon-vitest')],
  framework: getAbsolutePath('@storybook/react-vite'),

  // ✅ THIS is where it belongs
  staticDirs: ['./public'],

  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      base: '/brand-ui/',
      plugins: [tailwindcss()],
    });
  },
};

export default config;