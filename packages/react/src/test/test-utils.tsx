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
