import { describe, it, expect } from 'vitest';
import { render, screen } from '#test-utils';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  describe('when rendered with default props', () => {
    it('should render a checkbox', () => {
      // Arrange
      // Act
      render(<Checkbox />);

      // Assert
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('when a label is provided', () => {
    it('should associate the label with the checkbox', () => {
      // Arrange
      // Act
      render(<Checkbox label="Accept terms" />);

      // Assert
      expect(screen.getByText('Accept terms')).toBeInTheDocument();
      expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });
  });

  describe('when defaultChecked is true', () => {
    it('should render as checked', () => {
      // Arrange
      // Act
      render(<Checkbox defaultChecked />);

      // Assert
      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });

  describe('when disabled is true', () => {
    it('should disable the checkbox', () => {
      // Arrange
      // Act
      render(<Checkbox disabled />);

      // Assert
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });
  });
});
