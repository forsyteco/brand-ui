import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '#test-utils';
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from './dialog';

describe('Dialog', () => {
  describe('when open is true', () => {
    it('should render the title and description', async () => {
      // Arrange
      const onClose = vi.fn();

      // Act
      await act(async () => {
        render(
          <Dialog open={true} onClose={onClose}>
            <DialogPanel>
              <DialogTitle>Test Dialog</DialogTitle>
              <DialogDescription>Test description</DialogDescription>
            </DialogPanel>
          </Dialog>
        );
        await Promise.resolve();
      });

      // Assert
      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });
  });

  describe('when open is false', () => {
    it('should not render dialog content', async () => {
      // Arrange
      const onClose = vi.fn();

      // Act
      await act(async () => {
        render(
          <Dialog open={false} onClose={onClose}>
            <DialogPanel>
              <DialogTitle>Test Dialog</DialogTitle>
            </DialogPanel>
          </Dialog>
        );
        await Promise.resolve();
      });

      // Assert
      expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
    });
  });
});
