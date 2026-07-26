import { cn } from '../utils/tailwind';

export type SkeletonProps = React.ComponentProps<'div'>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <span
      data-slot="skeleton"
      className={cn(
        'block max-w-full animate-pulse rounded-xs bg-black/10 dark:bg-white/20',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };