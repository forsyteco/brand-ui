import { describe, expect, it } from 'vitest';
import { render } from '#test-utils';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  describe('when rendered with a className', () => {
    it('should forward the className to the skeleton element', () => {
      // Arrange
      // Act
      const { container } = render(<Skeleton className="test-skeleton" />);
      const el = container.querySelector('[data-slot="skeleton"]');

      // Assert
      expect(el).toBeInTheDocument();
      expect(el).toHaveClass('test-skeleton');
    });
  });
});
