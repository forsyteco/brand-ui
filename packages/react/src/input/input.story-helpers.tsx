import { CircleHelp } from 'lucide-react';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';

import { Popover, PopoverContent, PopoverTrigger } from '../popover';

export function InputFeatureLayout({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return <div className={clsx('w-64', className)}>{children}</div>;
}

export function InputLabelHelpPopover({ side }: Readonly<{ side: 'top' | 'right' | 'bottom' | 'left' }>) {
  return (
    <Popover>
      <PopoverTrigger variant="ghost" size="sm" aria-label={`Help (${side})`}>
        <CircleHelp className="size-4" aria-hidden />
      </PopoverTrigger>
      <PopoverContent>
        Tooltip on {side}
      </PopoverContent>
    </Popover>
  );
}
