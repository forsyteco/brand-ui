import { type ReactNode } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Button, type ButtonProps } from '../button';
import { cn } from '../utils/tailwind';

export type PopoverProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export type PopoverTriggerProps = Readonly<Omit<ButtonProps, 'as'>>;

export type PopoverContentProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

function PopoverRoot({ children, className }: PopoverProps) {
  return (
    <div className={cn('relative', className)}>
      <Popover>
        {children}
      </Popover>
    </div>
  );
}

export function PopoverTrigger({
  children,
  className,
  variant = 'outline',
  size,
  ...props
}: PopoverTriggerProps) {
  return (
    <PopoverButton
      as={Button}
      variant={variant}
      size={size}
      className={cn(className)}
      {...props}
    >
      {children}
    </PopoverButton>
  );
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <PopoverPanel
      className={cn(
        'absolute z-10 mt-2 w-72 rounded-md bg-background shadow-lg ring-1 ring-border focus:outline-none',
        className
      )}
    >
      <div className="p-4">{children}</div>
    </PopoverPanel>
  );
}

export { PopoverRoot as Popover };
