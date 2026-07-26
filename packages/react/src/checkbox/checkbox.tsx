import { type InputHTMLAttributes, type CSSProperties, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const checkboxVariants = cva(
  [
    // Base
    'relative inline-flex shrink-0 appearance-none items-center justify-center rounded border border-input bg-background text-foreground transition-colors',
    // Focus / disabled
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
    'disabled:cursor-not-allowed disabled:opacity-50',
    // Tick mark (hidden until checked)
    'after:absolute after:left-1/2 after:top-1/2 after:block after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current after:opacity-0',
    'checked:after:opacity-100',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-3 w-3 after:h-1.5 after:w-0.5',
        md: 'h-4 w-4 after:h-2 after:w-1',
        lg: 'h-5 w-5 after:h-2.5 after:w-1.5',
      },
      // Variant for default checked styling (can be disabled when using custom colors)
      useDefaultCheckedStyle: {
        true: 'checked:border-accent checked:bg-accent checked:text-accent-foreground',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      useDefaultCheckedStyle: true,
    },
  }
);

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & VariantProps<typeof checkboxVariants> & {
  label?: string;
  /** Custom background color when checked */
  checkedBackground?: CSSProperties['backgroundColor'];
  /** Custom foreground/tick color when checked */
  checkedForeground?: CSSProperties['color'];
};

function Checkbox({ label, size, className, id, checked, checkedBackground, checkedForeground, ...props }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  // Use custom colors if provided
  const hasCustomColors = checkedBackground || checkedForeground;
  const customStyle: CSSProperties | undefined = checked && hasCustomColors
    ? {
        ...(checkedBackground && { backgroundColor: checkedBackground, borderColor: checkedBackground }),
        ...(checkedForeground && { color: checkedForeground }),
      }
    : undefined;

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        className={cn(checkboxVariants({ size, useDefaultCheckedStyle: !hasCustomColors }), className)}
        style={customStyle}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className="ml-2 text-base text-foreground">
          {label}
        </label>
      )}
    </div>
  );
}

export { Checkbox };

