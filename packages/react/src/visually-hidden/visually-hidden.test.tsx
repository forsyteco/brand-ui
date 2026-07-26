import { describe, it, expect } from 'vitest';
import { render, screen } from '#test-utils';
import { VisuallyHidden } from './visually-hidden';

describe('VisuallyHidden', () => {
  describe('when wrapping content', () => {
    it('should render the content for screen readers', () => {
      // Arrange
      // Act
      render(
        <VisuallyHidden>
          <span>Close dialog</span>
        </VisuallyHidden>
      );

      // Assert
      expect(screen.getByText('Close dialog')).toBeInTheDocument();
    });
  });
});
