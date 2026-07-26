import { useEffect, useState } from 'react';
import { cn } from '../utils/tailwind';

const DEFAULT_COLORS = ['var(--color-spinner-primary)', 'var(--color-spinner-secondary)', 'var(--color-spinner-tertiary)'];

export type SpinnerProps = Readonly<{
  size?: number;
  strokeWidth?: number;
  colors?: string[];
  className?: string;
}>;

function Spinner({
  size = 50,
  strokeWidth = 5,
  colors = DEFAULT_COLORS,
  className,
}: SpinnerProps) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (colors.length === 0) return;
    const interval = setInterval(() => {
      setColorIndex((c) => (c + 1) % colors.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [colors]);

  const color = colors[colorIndex] || colors[0] || '#000000';

  return (
    <div className={cn('inline-flex', className)}>
      <svg
        viewBox="0 0 50 50"
        style={{ width: size, height: size }}
        className="animate-spinner-rotate -rotate-90"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{ stroke: color }}
          className="animate-spinner-dash origin-center"
        />
      </svg>
    </div>
  );
}

export { Spinner };