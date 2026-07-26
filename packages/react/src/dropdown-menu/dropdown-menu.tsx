import { Fragment, type ReactNode } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Button, type ButtonProps } from '../button';
import { cn } from '../utils/tailwind';

export type DropdownMenuProps = Readonly<{
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'right';
}>;

export type DropdownMenuItemProps = Readonly<{
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}>;

export type DropdownMenuButtonProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

function DropdownMenu({ trigger, children, className, align = 'right' }: DropdownMenuProps) {
  return (
    <Menu as="div" className={cn('relative inline-block text-left', className)}>
      <MenuButton as={Fragment}>{trigger}</MenuButton>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          className={cn(
            'absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-border focus:outline-none',
            align === 'left' ? 'left-0' : 'right-0'
          )}
        >
          <div className="py-1">{children}</div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}

export function DropdownMenuItem({ children, onClick, disabled, className }: DropdownMenuItemProps) {
  return (
    <MenuItem disabled={disabled}>
      {({ focus }) => (
        <Button
          type="button"
          variant="ghost"
          onClick={onClick}
          disabled={disabled}
          className={cn(
            'w-full justify-start rounded-none px-4 py-2 text-left disabled:cursor-not-allowed',
            focus && 'bg-accent text-accent-foreground hover:bg-accent',
            !focus && 'hover:bg-muted',
            className
          )}
        >
          {children}
        </Button>
      )}
    </MenuItem>
  );
}

export function DropdownMenuButton({
  children,
  className,
  ...props
}: DropdownMenuButtonProps & Omit<ButtonProps, 'as'>) {
  return (
    <MenuButton
      as={Button}
      variant="outline"
      className={cn('w-full justify-center gap-x-1.5', className)}
      {...props}
    >
      {children}
    </MenuButton>
  );
}

export { DropdownMenu };
