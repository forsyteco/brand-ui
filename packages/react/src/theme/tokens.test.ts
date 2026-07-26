import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const stylesheet = readFileSync(path.resolve(__dirname, '../../styles.css'), 'utf8');

describe('brand tokens', () => {
  describe('when the stylesheet declares the brand palette', () => {
    it('should expose a tailwind colour utility for every brand colour', () => {
      // Arrange
      const expected = [
        '--color-brand-black: rgb(var(--brand-black))',
        '--color-brand-yellow: rgb(var(--brand-yellow))',
        '--color-brand-grey: rgb(var(--brand-grey))',
        '--color-brand-blue: rgb(var(--brand-blue))',
        '--color-brand-white: rgb(var(--brand-white))',
      ];

      // Act
      const missing = expected.filter(declaration => !stylesheet.includes(declaration));

      // Assert
      expect(missing).toEqual([]);
    });

    it('should define the raw brand grey and blue channels', () => {
      // Arrange
      const expected = ['--brand-grey: 28 28 28', '--brand-blue: 246 249 255'];

      // Act
      const missing = expected.filter(declaration => !stylesheet.includes(declaration));

      // Assert
      expect(missing).toEqual([]);
    });
  });

  describe('when the stylesheet declares layout spacing', () => {
    it('should expose the section and container spacing scales', () => {
      // Arrange
      const expected = [
        '--spacing-section-sm: 3rem',
        '--spacing-section-md: 4rem',
        '--spacing-section-lg: 6rem',
        '--spacing-section-xl: 8rem',
        '--spacing-container-sm: 1rem',
        '--spacing-container-md: 2rem',
        '--spacing-container-lg: 4rem',
        '--spacing-container-xl: 6rem',
      ];

      // Act
      const missing = expected.filter(declaration => !stylesheet.includes(declaration));

      // Assert
      expect(missing).toEqual([]);
    });
  });
});
