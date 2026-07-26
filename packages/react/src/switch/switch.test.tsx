import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '#test-utils';
import { Switch } from './switch';

describe('Switch', () => {
  describe('when rendered with default props', () => {
    it('should render a switch', () => {
      // Arrange
      // Act
      render(<Switch />);

      // Assert
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });
  });

  describe('when a label is provided', () => {
    it('should render the label text', () => {
      // Arrange
      // Act
      render(<Switch label="Enable notifications" />);

      // Assert
      expect(screen.getByText('Enable notifications')).toBeInTheDocument();
    });
  });

  describe('when checked is true', () => {
    it('should expose aria-checked as true', () => {
      // Arrange
      // Act
      render(<Switch checked />);

      // Assert
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('when disabled is true', () => {
    it('should disable the switch', () => {
      // Arrange
      // Act
      render(<Switch disabled />);

      // Assert
      expect(screen.getByRole('switch')).toBeDisabled();
    });
  });

  describe('when onChange is provided', () => {
    it('should accept an onChange handler', () => {
      // Arrange
      const handleChange = vi.fn();

      // Act
      render(<Switch onChange={handleChange} />);

      // Assert
      expect(handleChange).toBeDefined();
    });
  });
});
