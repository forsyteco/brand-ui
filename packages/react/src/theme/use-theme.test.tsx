import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '#test-utils';

import { ThemeProvider } from './theme-provider';
import { useTheme } from './use-theme';

function ThemeReader() {
  const { colourScheme, mode } = useTheme();
  return (
    <span>
      {colourScheme}:{mode}
    </span>
  );
}

describe('useTheme', () => {
  beforeEach(() => {
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

  describe('when used inside ThemeProvider', () => {
    it('should return the current theme values', () => {
      // Arrange
      // Act
      render(
        <ThemeProvider colourScheme="blue" defaultMode="dark">
          <ThemeReader />
        </ThemeProvider>
      );

      // Assert
      expect(screen.getByText('blue:dark')).toBeInTheDocument();
    });
  });
});
