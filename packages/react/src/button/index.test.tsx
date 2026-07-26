import { describe, expect, it } from 'vitest';
import { Button, buttonVariants } from './index';

describe('button index exports', () => {
  describe('when importing from the barrel', () => {
    it('should expose the Button component and buttonVariants helper', () => {
      // Arrange
      // Act
      // Assert
      expect(Button).toBeDefined();
      expect(buttonVariants).toBeDefined();
      expect(typeof buttonVariants).toBe('function');
    });
  });
});
