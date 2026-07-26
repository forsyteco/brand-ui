import { describe, expect, it } from 'vitest';
import { render, screen } from '#test-utils';

import { Label } from './label';
import styles from './label.module.css';

describe('Label', () => {
  describe('when rendered with default props', () => {
    it('should render with default variant and default size styling', () => {
      // Arrange
      render(<Label>Status</Label>);

      // Act
      const label = screen.getByText('Status');

      // Assert
      expect(label).toHaveAttribute('data-slot', 'label');
      expect(label).toHaveAttribute('data-variant', 'default');
      expect(label).toHaveClass(styles['variant-default'], styles['size-default']);
    });
  });

  describe('when a variant is provided', () => {
    it.each([
      ['default', 'variant-default'],
      ['primary', 'variant-primary'],
      ['secondary', 'variant-secondary'],
      ['ghost', 'variant-ghost'],
      ['success', 'variant-success'],
      ['severe', 'variant-severe'],
      ['danger', 'variant-danger'],
    ] as const)('should apply %s styling', (variant, expectedClassName) => {
      // Arrange
      render(<Label variant={variant}>Status</Label>);

      // Act
      const label = screen.getByText('Status');

      // Assert
      expect(label).toHaveClass(styles[expectedClassName]);
      expect(label).toHaveAttribute('data-variant', variant);
    });
  });

  describe('when size is sm', () => {
    it('should apply small size styling', () => {
      // Arrange
      render(<Label size="sm">3</Label>);

      // Act
      const label = screen.getByText('3');

      // Assert
      expect(label).toHaveClass(styles['size-sm']);
    });
  });

  describe('when size is lg', () => {
    it('should apply large size styling', () => {
      // Arrange
      render(<Label size="lg">Featured</Label>);

      // Act
      const label = screen.getByText('Featured');

      // Assert
      expect(label).toHaveClass(styles['size-lg']);
    });
  });

  describe('when children are empty', () => {
    it('should hide the label element', () => {
      // Arrange
      const { container } = render(<Label>{''}</Label>);

      // Assert
      expect(container.querySelector('[data-slot="label"]')).toHaveClass(styles.root);
    });
  });
});
