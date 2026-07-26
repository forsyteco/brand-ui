import { describe, it, expect } from 'vitest';
import { render, screen } from '#test-utils';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

describe('Popover', () => {
  describe('when rendered with trigger and content', () => {
    it('should render the trigger', () => {
      // Arrange
      // Act
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );

      // Assert
      expect(screen.getByText('Open')).toBeInTheDocument();
    });

    it('should reveal panel content when the trigger is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      );

      // Act
      await user.click(screen.getByText('Open'));

      // Assert
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });
});
