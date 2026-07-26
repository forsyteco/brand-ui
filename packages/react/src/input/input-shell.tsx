import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { clsx } from 'clsx';

import styles from './input.module.css';

export const inputVariants = cva(styles.root, {
  variants: {
    size: {
      default: styles['size-default'],
      sm: styles['size-sm'],
      lg: styles['size-lg'],
    },
    error: {
      true: styles['root--error'],
      false: '',
    },
    success: {
      true: styles['root--success'],
      false: '',
    },
  },
  defaultVariants: {
    size: 'default',
    error: false,
    success: false,
  },
});

export type InputSize = NonNullable<VariantProps<typeof inputVariants>['size']>;

export function getInputInnerClassName({
  hasLeadingVisual,
  hasTrailingVisual,
  inputClassName,
}: {
  hasLeadingVisual?: boolean;
  hasTrailingVisual?: boolean;
  inputClassName?: string;
}) {
  return clsx(
    styles.input,
    styles['input-pad'],
    hasLeadingVisual && styles['input-pad-none-left'],
    hasTrailingVisual && styles['input-pad-none-right'],
    inputClassName
  );
}

export type InputShellProps = VariantProps<typeof inputVariants> & {
  className?: string;
  /** Decorative or non-interactive leading content (e.g. icon, flag). */
  leadingVisual?: React.ReactNode;
  /** Decorative or non-interactive trailing content (e.g. spinner). */
  trailingVisual?: React.ReactNode;
  /** Interactive trailing button content. Takes precedence over `trailingVisual`. */
  trailingAction?: React.ReactNode;
  children: React.ReactNode;
};

export function InputShell({
  className,
  leadingVisual,
  trailingVisual,
  trailingAction,
  size = 'default',
  error,
  success,
  children,
}: InputShellProps) {
  const hasError = error === true;
  const hasSuccess = success === true && !hasError;
  const trailingContent = trailingAction ?? trailingVisual;

  return (
    <div
      className={clsx(
        inputVariants({ size, error: hasError, success: hasSuccess }),
        className
      )}
    >
      {leadingVisual ? (
        <div className={clsx(styles.slot, styles['slot-pad'])}>{leadingVisual}</div>
      ) : null}
      {children}
      {trailingContent ? (
        <div className={clsx(styles.slot, styles['slot-pad'])}>{trailingContent}</div>
      ) : null}
    </div>
  );
}
