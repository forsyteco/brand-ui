import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '#test-utils';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, useTheme } from './theme-provider';
import { useTheme as useThemeFromHook } from './use-theme';

function ThemeConsumer() {
  const { colourScheme, mode, resolvedMode, setColourScheme, setMode } = useTheme();

  return (
    <div>
      <span data-testid="colour-scheme">{colourScheme}</span>
      <span data-testid="mode">{mode}</span>
      <span data-testid="resolved-mode">{resolvedMode}</span>
      <button type="button" onClick={() => setColourScheme('blue')}>
        Set blue
      </button>
      <button type="button" onClick={() => setMode('dark')}>
        Set dark
      </button>
    </div>
  );
}

function ThemeHookConsumer() {
  const { mode } = useThemeFromHook();
  return <span data-testid="hook-mode">{mode}</span>;
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    globalThis.localStorage.clear();
    Object.defineProperty(globalThis.window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });
  });

  describe('when a child reads the theme context', () => {
    it('should expose the default colour scheme and mode', () => {
      // Arrange
      // Act
      render(
        <ThemeProvider colourScheme="yellow" defaultMode="light">
          <ThemeConsumer />
        </ThemeProvider>
      );

      // Assert
      expect(screen.getByTestId('colour-scheme')).toHaveTextContent('yellow');
      expect(screen.getByTestId('mode')).toHaveTextContent('light');
      expect(screen.getByTestId('resolved-mode')).toHaveTextContent('light');
    });
  });

  describe('when the colour scheme and mode are updated', () => {
    it('should update context values and document data attributes', async () => {
      // Arrange
      const user = userEvent.setup();

      render(
        <ThemeProvider storageKey="test-theme">
          <ThemeConsumer />
        </ThemeProvider>
      );

      // Act
      await user.click(screen.getByRole('button', { name: 'Set blue' }));
      await user.click(screen.getByRole('button', { name: 'Set dark' }));

      // Assert
      expect(screen.getByTestId('colour-scheme')).toHaveTextContent('blue');
      expect(screen.getByTestId('mode')).toHaveTextContent('dark');
      expect(screen.getByTestId('resolved-mode')).toHaveTextContent('dark');
      expect(document.documentElement.dataset.colourScheme).toBe('blue');
      expect(document.documentElement.dataset.colourMode).toBe('dark');
      expect(globalThis.localStorage.getItem('test-theme-colour-scheme')).toBe('blue');
      expect(globalThis.localStorage.getItem('test-theme-mode')).toBe('dark');
    });
  });

  describe('when useTheme is called outside a provider', () => {
    it('should throw an error', () => {
      // Arrange
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

      // Act
      const renderOutsideProvider = () => render(<ThemeHookConsumer />);

      // Assert
      expect(renderOutsideProvider).toThrow('useTheme must be used within a ThemeProvider');
      consoleError.mockRestore();
    });
  });
});
