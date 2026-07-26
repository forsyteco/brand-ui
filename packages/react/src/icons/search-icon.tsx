import type { IconProps } from './icon-props';

export function SearchIcon({ className }: Readonly<IconProps>) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M9 3a6 6 0 1 0 3.476 10.892l3.316 3.316a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 0 0 9 3Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
