import { Field, Label, Description, Switch as HeadlessSwitch } from '@headlessui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const switchVariants = cva(
  'group ml-3 inline-flex items-center rounded-full bg-muted transition data-checked:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

const switchThumbVariants = cva(
  'pointer-events-none rounded-full bg-white transition',
  {
    variants: {
      size: {
        sm: 'size-3 translate-x-0.5 group-data-checked:translate-x-5',
        md: 'size-4 translate-x-1 group-data-checked:translate-x-6',
        lg: 'size-5 translate-x-1.5 group-data-checked:translate-x-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type SwitchProps = Omit<VariantProps<typeof switchVariants>, 'disabled'> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
};

function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  size,
  className,
}: SwitchProps) {
  const isDisabled = Boolean(disabled);

  return (
    <Field className={cn('flex items-center', className)}>
      {label && (
        <Label
          className={cn(
            'text-base font-medium',
            isDisabled ? 'text-muted-foreground opacity-50' : 'text-foreground'
          )}
        >
          {label}
        </Label>
      )}
      {description && (
        <Description
          className={cn(
            'text-base',
            isDisabled ? 'text-muted-foreground opacity-50' : 'text-muted-foreground'
          )}
        >
          {description}
        </Description>
      )}
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
        className={switchVariants({ size, disabled: isDisabled })}
      >
        <span className={switchThumbVariants({ size })} />
      </HeadlessSwitch>
    </Field>
  );
}

export { Switch };

