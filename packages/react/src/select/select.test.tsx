import { describe, it, expect } from 'vitest';
import { render, screen } from '#test-utils';
import { Select } from './select';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Select', () => {
  describe('when rendered with options', () => {
    it('should render the first option label', () => {
      // Arrange
      // Act
      render(<Select options={options} />);

      // Assert
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
  });

  describe('when a placeholder is provided', () => {
    it('should render the placeholder text', () => {
      // Arrange
      // Act
      render(<Select options={options} placeholder="Choose..." />);

      // Assert
      expect(screen.getByText('Choose...')).toBeInTheDocument();
    });
  });

  describe('when error is true', () => {
    it('should apply error styling', () => {
      // Arrange
      // Act
      const { container } = render(<Select options={options} error />);

      // Assert
      expect(container.querySelector('select')).toHaveClass('border-destructive-border');
    });
  });

  describe('when disabled is true', () => {
    it('should disable the select', () => {
      // Arrange
      // Act
      render(<Select options={options} disabled />);

      // Assert
      expect(screen.getByRole('combobox')).toBeDisabled();
    });
  });
});
