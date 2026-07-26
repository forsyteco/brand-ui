import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ForwardedRef,
  type ReactNode,
} from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '../utils/tailwind';
import styles from './button.module.css';
import { Spinner } from '../spinner';
import { VisuallyHidden } from '../visually-hidden';
import {
  buttonVariants,
  iconButtonSizes,
  iconSizes,
  normalizeButtonVariant,
  type IconOnlyButtonSize,
} from './button-variants';

type IconComponent = ComponentType<{ className?: string }>;

type SharedButtonProps = {
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
};

type TextButtonProps = SharedButtonProps &
  VariantProps<typeof buttonVariants> & {
    icon?: never;
    children?: ReactNode;
    variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    shape?: never;
  } & Omit<ComponentPropsWithoutRef<'button'>, keyof SharedButtonProps | 'children'>;

type IconOnlyButtonBaseProps = SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
};

type IconOnlyButtonAsButton = IconOnlyButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'> & {
    as?: 'button';
    href?: never;
  };

type IconOnlyButtonAsAnchor = IconOnlyButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'> & {
    as: 'a';
    href: string;
  };

export type IconOnlyButtonProps = IconOnlyButtonAsButton | IconOnlyButtonAsAnchor;

export type ButtonProps = TextButtonProps | IconOnlyButtonProps;

function isIconOnlyButtonProps(props: ButtonProps): props is IconOnlyButtonProps {
  return 'icon' in props && props.icon != null;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  if (isIconOnlyButtonProps(props)) {
    return <IconOnlyButtonInner {...props} ref={ref} />;
  }

  return <TextButtonInner {...props} ref={ref as ForwardedRef<HTMLButtonElement>} />;
});

const TextButtonInner = forwardRef<HTMLButtonElement, TextButtonProps>(function TextButtonInner(
  {
    variant,
    size = 'md',
    children,
    className,
    inactive = false,
    loading = false,
    description,
    keybindingHint,
    tooltipDirection = 's',
    ...props
  },
  ref
) {
  const tooltipText = description ?? (typeof props['aria-label'] === 'string' ? props['aria-label'] : undefined);
  const title = keybindingHint && tooltipText ? `${tooltipText} (${keybindingHint})` : tooltipText;

  return (
    <button
      ref={ref}
      type={props.type ?? 'button'}
      className={cn(
        buttonVariants({
          variant: normalizeButtonVariant(variant),
          size,
          shape: 'square',
        }),
        inactive && styles.inactive,
        className
      )}
      aria-busy={loading || undefined}
      data-tooltip-direction={tooltipDirection}
      data-inactive={inactive || undefined}
      title={title}
      {...props}
    >
      {loading === true ? <Spinner size={18} colors={['currentColor']} /> : children}
    </button>
  );
});

const IconOnlyButtonInner = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconOnlyButtonProps>(
  function IconOnlyButtonInner(props, ref) {
    const {
      as = 'button',
      icon: Icon,
      variant,
      size = 'md',
      shape = 'square',
      inactive = false,
      loading = false,
      description,
      children,
      keybindingHint,
      tooltipDirection = 's',
      className,
      'aria-label': ariaLabel,
      ...rest
    } = props;

    const Component = as === 'a' ? 'a' : 'button';
    const tooltipText = description ?? ariaLabel;
    const title = keybindingHint ? `${tooltipText} (${keybindingHint})` : tooltipText;
    const resolvedSize: IconOnlyButtonSize = size ?? 'md';
    const iconClassName = iconSizes[resolvedSize];
    const sharedClassName = cn(
      buttonVariants({
        variant: normalizeButtonVariant(variant),
        shape,
      }),
      iconButtonSizes[resolvedSize],
      inactive && styles.inactive,
      className
    );
    const screenReaderText = description ?? (typeof children === 'string' ? children : undefined);
    const content =
      loading === true ? (
        <Spinner size={18} colors={['currentColor']} />
      ) : (
        <Icon aria-hidden className={cn(iconClassName)} />
      );

    if (Component === 'a') {
      const { href, ...anchorProps } = rest as Omit<IconOnlyButtonAsAnchor, keyof IconOnlyButtonBaseProps>;

      return (
        <a
          {...anchorProps}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={sharedClassName}
          aria-label={ariaLabel}
          aria-busy={loading || undefined}
          data-tooltip-direction={tooltipDirection}
          data-inactive={inactive || undefined}
          title={title}
        >
          {content}
          {screenReaderText ? <VisuallyHidden>{screenReaderText}</VisuallyHidden> : null}
          {children && typeof children !== 'string' ? <VisuallyHidden>{children}</VisuallyHidden> : null}
        </a>
      );
    }

    const buttonProps = rest as Omit<IconOnlyButtonAsButton, keyof IconOnlyButtonBaseProps>;

    return (
      <button
        {...buttonProps}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={buttonProps.type ?? 'button'}
        className={sharedClassName}
        aria-label={ariaLabel}
        aria-busy={loading || undefined}
        data-tooltip-direction={tooltipDirection}
        data-inactive={inactive || undefined}
        title={title}
      >
        {content}
        {screenReaderText ? <VisuallyHidden>{screenReaderText}</VisuallyHidden> : null}
        {children && typeof children !== 'string' ? <VisuallyHidden>{children}</VisuallyHidden> : null}
      </button>
    );
  }
);

export { Button, buttonVariants };
