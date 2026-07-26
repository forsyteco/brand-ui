import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '#test-utils';
import userEvent from '@testing-library/user-event';
import { DropdownMenu, DropdownMenuItem, DropdownMenuButton } from './dropdown-menu';

describe('DropdownMenu', () => {
  describe('when rendered with a trigger and items', () => {
    it('should render the trigger', () => {
      // Arrange
      // Act
      render(
        <DropdownMenu trigger={<button type="button">Open</button>}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenu>
      );

      // Assert
      expect(screen.getByText('Open')).toBeInTheDocument();
    });

    it('should reveal menu items when the trigger is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <DropdownMenu trigger={<button type="button">Open</button>}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenu>
      );

      // Act
      await user.click(screen.getByText('Open'));

      // Assert
      expect(await screen.findByText('Item 1')).toBeInTheDocument();
      expect(await screen.findByText('Item 2')).toBeInTheDocument();
    });
  });

  describe('when className is provided', () => {
    it('should apply the custom className', () => {
      // Arrange
      // Act
      const { container } = render(
        <DropdownMenu trigger={<button type="button">Open</button>} className="custom-class">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenu>
      );

      // Assert
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });
});

describe('DropdownMenuItem', () => {
  describe('when clicked', () => {
    it('should call onClick', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <DropdownMenu trigger={<button type="button">Open</button>}>
          <DropdownMenuItem onClick={handleClick}>Click me</DropdownMenuItem>
        </DropdownMenu>
      );

      // Act
      await user.click(screen.getByText('Open'));
      await user.click(await screen.findByText('Click me'));

      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when disabled is true', () => {
    it('should disable the menu item', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <DropdownMenu trigger={<button type="button">Open</button>}>
          <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
        </DropdownMenu>
      );

      // Act
      await user.click(screen.getByText('Open'));

      // Assert
      expect(await screen.findByText('Disabled')).toBeDisabled();
    });
  });
});

describe('DropdownMenuButton', () => {
  describe('when used as the trigger', () => {
    it('should render the button label', () => {
      // Arrange
      // Act
      render(
        <DropdownMenu trigger={<DropdownMenuButton>Menu</DropdownMenuButton>}>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenu>
      );

      // Assert
      expect(screen.getByText('Menu')).toBeInTheDocument();
    });
  });
});
