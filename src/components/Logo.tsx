export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="currentColor" opacity="0.12" />
      <path d="M19 47V17l26 30V17" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="17" r="6" fill="var(--mint)" />
      <circle cx="45" cy="47" r="6" fill="var(--mint)" />
    </svg>
  );
}

export function Logo() {
  return (
    <a className="logo" href="/" aria-label="Nexora, ir al inicio">
      <LogoMark />
      <span>Nexora</span>
    </a>
  );
}
