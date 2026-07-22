import type { CSSProperties } from "react";

export function DoodleArrow({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        d="M15 88 C 15 50 25 20 55 12"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M46 20 L55 12 L43 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleLike({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path
        d="M12 50 L28 50 L28 88 L12 88 Q6 88 6 82 L6 56 Q6 50 12 50 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M28 50 L34 50 L46 18 Q49 10 57 12 Q64 14 62 22 L56 42 L84 42 Q92 42 90 50 L84 76 Q82 88 70 88 L28 88"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path
        d="M50 8 C 74 8 90 28 90 50 C 90 74 70 92 48 90 C 26 88 10 70 10 50 C 10 30 26 10 50 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path
        d="M50 6 L58 40 L92 40 L64 60 L74 94 L50 72 L26 94 L36 60 L8 40 L42 40 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
