'use client';

import BoringAvatarComponent from 'boring-avatars';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '../utils/tailwind';

const BORING_AVATAR_COLORS = [
    "#ff0000","#0000ff"
] as const;

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;

function Avatar({ className, ...props }: Readonly<AvatarProps>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  );
}

export type AvatarImageProps = React.ComponentPropsWithoutRef<'img'>;

function AvatarImage({ className, alt = '', ...props }: Readonly<AvatarImageProps>) {
  // Render a real <img> so tests and consumers can rely on DOM semantics,
  // while still letting Radix control loading/fallback behavior.
  return (
    <AvatarPrimitive.Image asChild>
      <img
        data-slot="avatar-image"
        alt={alt}
        className={cn('aspect-square size-full', className)}
        {...props}
      />
    </AvatarPrimitive.Image>
  );
}

type AvatarFallbackBaseProps = Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, 'children'> & {
  className?: string;
};

type AvatarFallbackDefaultProps = AvatarFallbackBaseProps & {
  variant?: 'default';
  children?: React.ReactNode;
};

type AvatarFallbackInitialsProps = AvatarFallbackBaseProps & {
  variant: 'initials';
  name: string;
};

type AvatarFallbackBoringProps = AvatarFallbackBaseProps & {
  variant: 'boring';
  name: string;
};

export type AvatarFallbackProps =
  | AvatarFallbackDefaultProps
  | AvatarFallbackInitialsProps
  | AvatarFallbackBoringProps;

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join('');
}

function AvatarFallback(props: Readonly<AvatarFallbackProps>) {
  switch (props.variant) {
    case undefined:
    case 'default': {
      const { variant, children, className, ...rest } = props;

      return (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn(
            'flex size-full items-center justify-center rounded-full bg-muted text-base font-medium uppercase text-foreground',
            className
          )}
          {...rest}
        >
          {children}
        </AvatarPrimitive.Fallback>
      );
    }

    case 'initials': {
      const { variant, name, className, ...rest } = props;

      return (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn(
            'flex size-full items-center justify-center rounded-full bg-muted text-base font-medium uppercase text-foreground',
            className
          )}
          {...rest}
        >
          {getInitials(name)}
        </AvatarPrimitive.Fallback>
      );
    }

    case 'boring': {
      const { variant, name, className, ...rest } = props;

      return (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn('relative flex size-full items-center justify-center overflow-hidden rounded-full', className)}
          asChild
          {...rest}
        >
          <div className="relative size-full">
            <BoringAvatarComponent
              variant="beam"
              name={name}
              className="size-full"
              colors={[...BORING_AVATAR_COLORS]}
            />
            <span className="absolute inset-0 flex items-center justify-center text-base font-semibold uppercase text-foreground mix-blend-overlay">
              {getInitials(name)}
            </span>
          </div>
        </AvatarPrimitive.Fallback>
      );
    }
  }
}

export { Avatar, AvatarFallback, AvatarImage };