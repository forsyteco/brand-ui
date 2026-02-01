import type React from 'react';
import type { HTMLAttributes } from 'react';

import { cn } from '../utils/tailwind';

/**
 * Provides a component that implements the "visually hidden" technique. This is
 * analogous to the common `sr-only` class. Children that are rendered inside
 * this component will not be visible but will be available to screen readers.
 *
 * Note: if this component, or a descendant, has focus then this component will
 * no longer be visually hidden.
 *
 * @see https://www.scottohara.me/blog/2023/03/21/visually-hidden-hack.html
 */
export const VisuallyHidden = ({className, children, ...rest}: VisuallyHiddenProps) => {
  return (
    <span
      className={cn(
        'absolute h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)]',
        'focus:static focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:[clip-path:none]',
        'active:static active:h-auto active:w-auto active:overflow-visible active:whitespace-normal active:[clip-path:none]',
        'focus-within:static focus-within:h-auto focus-within:w-auto focus-within:overflow-visible focus-within:whitespace-normal focus-within:[clip-path:none]',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

export type VisuallyHiddenProps = React.PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    className?: string
  }
>