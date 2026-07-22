export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path
        d="M13.7 6.2c-1.8 0-3 1.2-3 3.2V11H8.5v2.3H10.7V20h2.6v-6.7H15.7l.3-2.3H13.3V9.7c0-.7.3-1.1 1.1-1.1H16V6.3c-.5-.05-1.3-.1-2.3-.1Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function TiktokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3c.5 2.3 2 3.8 4.5 4.2" fill="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 8.5C10.5 7.5 13.5 7.5 16 8.5" />
      <path d="M7 9c-2 3-2.5 6-2 8.5 1.6 1.2 3.2 1.9 4.8 2.2l.9-1.6" />
      <path d="M17 9c2 3 2.5 6 2 8.5-1.6 1.2-3.2 1.9-4.8 2.2l-.9-1.6" />
      <ellipse cx="9" cy="13.5" rx="1.2" ry="1.4" fill="currentColor" stroke="none" />
      <ellipse cx="15" cy="13.5" rx="1.2" ry="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
