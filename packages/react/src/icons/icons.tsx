import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function createIcon(displayName: string, path: ReactNode, viewBox = '0 0 24 24') {
  function Icon({ className, ...props }: Readonly<IconProps>) {
    return (
      <svg
        className={className}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {path}
      </svg>
    );
  }

  Icon.displayName = displayName;
  return Icon;
}

export const CalendarIcon = createIcon('CalendarIcon', (
  <>
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </>
));

export const ChevronLeftIcon = createIcon('ChevronLeftIcon', <path d="m15 18-6-6 6-6" />);
export const ChevronRightIcon = createIcon('ChevronRightIcon', <path d="m9 18 6-6-6-6" />);
export const ChevronDownIcon = createIcon('ChevronDownIcon', <path d="m6 9 6 6 6-6" />);

export const ClockIcon = createIcon('ClockIcon', (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>
));

export const CopyIcon = createIcon('CopyIcon', (
  <>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </>
));

export const FilterIcon = createIcon('FilterIcon', <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />);

export const SearchIcon = createIcon('SearchIcon', (
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
));

export const ArrowUpIcon = createIcon('ArrowUpIcon', (
  <>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </>
));

export const ArrowDownIcon = createIcon('ArrowDownIcon', (
  <>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </>
));

export const ArrowUpDownIcon = createIcon('ArrowUpDownIcon', (
  <>
    <path d="m21 16-4 4-4-4" />
    <path d="M17 20V4" />
    <path d="m3 8 4-4 4 4" />
    <path d="M7 4v16" />
  </>
));

export const MoreHorizontalIcon = createIcon('MoreHorizontalIcon', (
  <>
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
  </>
));
