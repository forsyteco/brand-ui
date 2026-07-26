import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import {
  clampCurrencyValue,
  DEFAULT_CURRENCY_DECIMAL_SCALE,
  formatCurrencyInputNumber,
  formatCurrencyInputString,
  normalizeCurrencyRaw,
} from './currency-format';
import type { CurrencyInputModeProps } from './input.types';
import { TextInput } from './text-input';

export function CurrencyFormatInput({
  value,
  onValueChange,
  decimalScale = DEFAULT_CURRENCY_DECIMAL_SCALE,
  locale = 'en-GB',
  min,
  max,
  currencySymbol = '£',
  leadingVisual,
  onBlur,
  format: _format,
  ...props
}: CurrencyInputModeProps) {
  const [displayValue, setDisplayValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const lastValueRef = useRef<number | undefined>(value);
  const fractionDigitsRef = useRef(0);

  useEffect(() => {
    if (isEditing || value == null) return;

    const valueChanged = lastValueRef.current !== value;
    if (valueChanged) {
      fractionDigitsRef.current = 0;
    }

    const minFractionDigits =
      fractionDigitsRef.current > 0
        ? Math.min(fractionDigitsRef.current, decimalScale)
        : 0;

    const nextDisplay = formatCurrencyInputNumber(
      value,
      locale,
      decimalScale,
      minFractionDigits
    );
    if (nextDisplay !== displayValue) {
      setDisplayValue(nextDisplay);
    }
    lastValueRef.current = value;
  }, [decimalScale, displayValue, isEditing, locale, value]);

  return (
    <TextInput
      {...props}
      type="text"
      inputMode="decimal"
      leadingVisual={leadingVisual ?? (currencySymbol ? <span>{currencySymbol}</span> : undefined)}
      value={displayValue}
      onBlur={(event) => {
        setIsEditing(false);
        const rawValue = event.currentTarget.value;
        const { parsed, decimals } = normalizeCurrencyRaw(rawValue, decimalScale);

        if (parsed === undefined) {
          setDisplayValue('');
          fractionDigitsRef.current = 0;
          onValueChange?.(undefined);
          onBlur?.(event);
          return;
        }

        const clamped = clampCurrencyValue(parsed, min, max);
        const minFractionDigits = decimals;
        fractionDigitsRef.current = minFractionDigits;
        setDisplayValue(
          formatCurrencyInputNumber(clamped, locale, decimalScale, minFractionDigits)
        );
        onValueChange?.(clamped);
        onBlur?.(event);
      }}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setIsEditing(true);
        const nextDisplay = formatCurrencyInputString(event.target.value, locale, decimalScale);
        setDisplayValue(nextDisplay);

        const { parsed, decimals } = normalizeCurrencyRaw(nextDisplay, decimalScale);
        if (parsed === undefined) {
          fractionDigitsRef.current = 0;
          onValueChange?.(undefined);
          return;
        }

        const clamped = clampCurrencyValue(parsed, min, max);
        fractionDigitsRef.current = decimals;
        lastValueRef.current = clamped;
        onValueChange?.(clamped);
      }}
    />
  );
}
