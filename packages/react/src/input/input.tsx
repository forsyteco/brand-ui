import { CurrencyFormatInput } from './currency-format-input';
import { isCurrencyInputProps, type InputProps } from './input.types';
import { TextInput } from './text-input';

function Input(props: InputProps) {
  if (isCurrencyInputProps(props)) {
    return <CurrencyFormatInput {...props} />;
  }

  return <TextInput {...props} />;
}

export { Input };
export type { InputProps, TextInputProps, CurrencyInputModeProps } from './input.types';
