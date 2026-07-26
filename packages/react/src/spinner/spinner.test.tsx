import { describe, expect, it, vi } from 'vitest';
import { act, render } from '#test-utils';
import { Spinner } from './spinner';

describe('Spinner', () => {
  describe('when rendered with default props', () => {
    it('should render the wrapper and svg', () => {
      // Arrange
      // Act
      const { container } = render(<Spinner />);
      const wrapper = container.querySelector('div');
      const svg = container.querySelector('svg');
      const circle = container.querySelector('circle');

      // Assert
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass('inline-flex');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('animate-spinner-rotate');
      expect(circle).toBeInTheDocument();
      expect(circle).toHaveClass('animate-spinner-dash');
    });
  });

  describe('when className is provided', () => {
    it('should apply the className to the wrapper', () => {
      // Arrange
      // Act
      const { container } = render(<Spinner className="text-blue-500" />);

      // Assert
      expect(container.querySelector('div')).toHaveClass('text-blue-500');
    });
  });

  describe('when custom colors are provided', () => {
    it('should cycle through colors over time', () => {
      // Arrange
      vi.useFakeTimers();
      const { container, unmount } = render(<Spinner colors={['#111111', '#222222']} />);
      const circle = container.querySelector('circle');

      // Assert
      expect(circle).toHaveStyle({ stroke: '#111111' });

      // Act
      act(() => {
        vi.advanceTimersByTime(1500);
      });

      // Assert
      expect(circle).toHaveStyle({ stroke: '#222222' });

      // Act
      act(() => {
        unmount();
      });
      vi.useRealTimers();
    });
  });
});
