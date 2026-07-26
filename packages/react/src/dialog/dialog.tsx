import { type ReactNode } from 'react';
import {
  Description,
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
} from '@headlessui/react';
import { cn } from '../utils/tailwind';

export type DialogProps = Readonly<{
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}>;

export type DialogTitleProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export type DialogDescriptionProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export type DialogPanelProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

function Dialog({ open, onClose, children, className }: DialogProps) {
  return (
    <HeadlessDialog open={open} onClose={onClose}>
      <div className={cn('relative z-50', className)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </HeadlessDialog>
  );
}

export function DialogPanel({ children, className }: DialogPanelProps) {
  return (
    <HeadlessDialogPanel
      className={cn(
        'w-full max-w-md rounded-lg bg-white p-6 shadow-xl',
        className
      )}
    >
      {children}
    </HeadlessDialogPanel>
  );
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <HeadlessDialogTitle className={cn('text-lg font-medium text-gray-900', className)}>
      {children}
    </HeadlessDialogTitle>
  );
}

export function DialogDescription({ children, className }: DialogDescriptionProps) {
  return (
    <Description className={cn('mt-2 text-base text-gray-600', className)}>
      {children}
    </Description>
  );
}

export { Dialog };
