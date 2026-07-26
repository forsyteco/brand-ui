import { forwardRef, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

import styles from './label.module.css';

export const labelVariants = cva(styles.root, {
  variants: {
    variant: {
      default: styles['variant-default'],
      primary: styles['variant-primary'],
      secondary: styles['variant-secondary'],
      ghost: styles['variant-ghost'],
      success: styles['variant-success'],
      severe: styles['variant-severe'],
      danger: styles['variant-danger'],
    },
    size: {
      default: styles['size-default'],
      sm: styles['size-sm'],
      lg: styles['size-lg'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type LabelProps = Omit<React.ComponentProps<'span'>, 'children'> &
  VariantProps<typeof labelVariants> & {
    children?: ReactNode;
  };

const Label = forwardRef<HTMLSpanElement, LabelProps>(function Label(
  { variant = 'default', size = 'default', className, children, ...props },
  ref
) {
  return (
    <span
      ref={ref}
      data-slot="label"
      data-variant={variant ?? 'default'}
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
});

Label.displayName = 'Label';

export { Label };
