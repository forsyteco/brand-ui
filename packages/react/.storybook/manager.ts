import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

import pkg from '../package.json';

addons.setConfig({
    theme: create({
      base: 'dark',
      brandTitle: `@forsyteco/brand-ui@${pkg.version}`,
      brandUrl: 'https://forsyte.co',
      brandTarget: '_blank',
    }),
  });
  