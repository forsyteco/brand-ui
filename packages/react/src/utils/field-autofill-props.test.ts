import { describe, it, expect } from 'vitest';

import { isPasswordManagerSuppressed, resolveFieldAutofillProps } from './field-autofill-props';

describe('resolveFieldAutofillProps', () => {
  describe('when autoComplete is not provided', () => {
    it('should disable browser autofill and password manager heuristics', () => {
      // Act
      const result = resolveFieldAutofillProps();

      // Assert
      expect(result).toEqual({
        autoComplete: 'off',
        'data-1p-ignore': true,
        'data-lpignore': 'true',
        'data-bwignore': true,
        'data-form-type': 'other',
        'data-protonpass-ignore': 'true',
      });
    });
  });

  describe('when autoComplete is off', () => {
    it('should apply suppression attributes', () => {
      // Act
      const result = resolveFieldAutofillProps({ autoComplete: 'off' });

      // Assert
      expect(result.autoComplete).toBe('off');
      if (!isPasswordManagerSuppressed(result)) {
        throw new Error('Expected password manager suppression attributes');
      }
      expect(result['data-lpignore']).toBe('true');
    });
  });

  describe('when autoComplete is explicitly enabled', () => {
    it('should return only the provided autoComplete token', () => {
      // Act
      const result = resolveFieldAutofillProps({ autoComplete: 'email' });

      // Assert
      expect(result).toEqual({ autoComplete: 'email' });
    });
  });
});
