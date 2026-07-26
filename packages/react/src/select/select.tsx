import { type SelectHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';
import { resolveFieldAutofillProps } from '../utils/field-autofill-props';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

const selectVariants = cva(
  'relative block w-full cursor-default rounded-md border border-input bg-background py-2 pl-3 pr-10 text-left text-base text-foreground shadow-sm ring-1 ring-inset ring-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background appearance-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      error: {
        true: 'border-destructive-border focus:border-destructive focus:ring-destructive',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & VariantProps<typeof selectVariants> & {
  options: SelectOption[];
  placeholder?: string;
};

function Select({ options, placeholder, error, className, autoComplete, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(selectVariants({ error }), className)}
        {...props}
        {...resolveFieldAutofillProps({ autoComplete })}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className="h-5 w-5 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
  );
}

export { Select };

