import { describe, it, expect } from 'vitest';
import { render, screen } from '#test-utils';
import { Textarea } from './textarea';
import styles from './textarea.module.css';

describe('Textarea', () => {
  describe('when rendered with default props', () => {
    it('should render a textarea textbox', () => {
      // Arrange
      render(<Textarea />);

      // Act
      const textarea = screen.getByRole('textbox');

      // Assert
      expect(textarea).toBeInTheDocument();
    });
  });

  describe('when error is true', () => {
    it('should apply error styling class', () => {
      // Arrange
      const { container } = render(<Textarea error />);

      // Act
      const textarea = container.querySelector('textarea');

      // Assert
      expect(textarea).toHaveClass(styles.error);
    });
  });

  describe('when disabled is true', () => {
    it('should disable the textarea control', () => {
      // Arrange
      render(<Textarea disabled />);

      // Act
      const textarea = screen.getByRole('textbox');

      // Assert
      expect(textarea).toBeDisabled();
    });
  });

  describe('when placeholder is provided', () => {
    it('should render the placeholder text', () => {
      // Arrange
      render(<Textarea placeholder="Enter text..." />);

      // Act
      const textarea = screen.getByPlaceholderText('Enter text...');

      // Assert
      expect(textarea).toBeInTheDocument();
    });
  });
});

