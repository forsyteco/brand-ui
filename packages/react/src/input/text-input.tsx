import * as React from 'react';
import { clsx } from 'clsx';
import { Input as BaseInput } from '@base-ui/react/input';

import { Button, type IconOnlyButtonProps } from '../button';
import { resolveFieldAutofillProps } from '../utils/field-autofill-props';
import { getInputInnerClassName, InputShell } from './input-shell';
import type { TextInputProps } from './input.types';
import styles from './input.module.css';

const defaultTrailingActionProps = {
  variant: 'ghost',
  size: 'sm',
  shape: 'square',
} as const satisfies Partial<IconOnlyButtonProps>;

export function TextInput({
  ref,
  className,
  inputClassName,
  type,
  leadingVisual,
  trailingVisual,
  trailingAction,
  size = 'default',
  error,
  success,
  'aria-invalid': ariaInvalid,
  disabled,
  autoComplete,
  ...props
}: TextInputProps) {
  const hasError = error === true;
  const trailingActionContent = trailingAction ? (
    <TrailingActionButton {...trailingAction} />
  ) : undefined;
  const hasTrailingContent = Boolean(trailingActionContent ?? trailingVisual);

  return (
    <InputShell
      className={className}
      size={size}
      error={hasError}
      success={success}
      leadingVisual={leadingVisual}
      trailingVisual={trailingAction ? undefined : trailingVisual}
      trailingAction={trailingActionContent}
    >
      <BaseInput
        {...props}
        {...resolveFieldAutofillProps({ autoComplete })}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={hasError ? true : ariaInvalid}
        data-slot="input"
        className={getInputInnerClassName({
          hasLeadingVisual: Boolean(leadingVisual),
          hasTrailingVisual: hasTrailingContent,
          inputClassName,
        })}
      />
    </InputShell>
  );
}

function TrailingActionButton({
  className,
  ...trailingAction
}: IconOnlyButtonProps) {
  return (
    <Button
      {...defaultTrailingActionProps}
      {...trailingAction}
      className={clsx(styles['slot-action-button'], className)}
    />
  );
}
