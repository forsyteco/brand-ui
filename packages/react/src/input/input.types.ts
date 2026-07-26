import { type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import type { IconOnlyButtonProps } from '../button';
import type { inputVariants } from './input-shell';

type InputShellProps = VariantProps<typeof inputVariants> & {
  ref?: React.Ref<HTMLInputElement | null>;
  className?: string;
  /** Decorative or non-interactive leading content (e.g. icon, flag). */
  leadingVisual?: React.ReactNode;
  /** Decorative or non-interactive trailing content (e.g. spinner). */
  trailingVisual?: React.ReactNode;
  /** Interactive trailing button (e.g. show password, open picker). */
  trailingAction?: IconOnlyButtonProps;
  inputClassName?: string;
};

export type TextInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'children' | 'size'> &
  InputShellProps & {
    format?: never;
  };

export type CurrencyInputModeProps = Omit<
  InputShellProps,
  'trailingVisual' | 'trailingAction'
> &
  Omit<
    React.ComponentPropsWithoutRef<'input'>,
    'children' | 'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'inputMode'
  > & {
    format: 'currency';
    value?: number;
    onValueChange?: (value?: number) => void;
    decimalScale?: number;
    locale?: string;
    min?: number;
    max?: number;
    currencySymbol?: string;
    trailingVisual?: React.ReactNode;
    trailingAction?: IconOnlyButtonProps;
  };

export type InputProps = TextInputProps | CurrencyInputModeProps;

export function isCurrencyInputProps(props: InputProps): props is CurrencyInputModeProps {
  return props.format === 'currency';
}
