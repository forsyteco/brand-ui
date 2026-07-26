import { describe, expect, it } from 'vitest';

import { cn } from './tailwind';

describe('cn', () => {
  describe('when given conditional class values', () => {
    it('should drop falsy values and join the rest', () => {
      // Arrange
      const isActive = false;

      // Act
      const result = cn('px-2', isActive && 'font-bold', undefined, 'text-sm');

      // Assert
      expect(result).toBe('px-2 text-sm');
    });
  });

  describe('when given conflicting tailwind classes', () => {
    it('should keep the last conflicting class only', () => {
      // Arrange
      const base = 'p-2';

      // Act
      const result = cn(base, 'p-4');

      // Assert
      expect(result).toBe('p-4');
    });
  });
});
