// Decorative network of nodes that echoes the logo mark; it carries no data.
export function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g className="art-lines" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M70 90 L200 60 L330 120 L300 250 L170 220 L70 90" />
        <path d="M200 60 L170 220 L120 330 L300 250 L330 120" />
        <path d="M170 220 L70 90 M120 330 L300 250" />
      </g>
      <g className="art-nodes">
        <circle cx="70" cy="90" r="7" fill="var(--mint)" />
        <circle cx="200" cy="60" r="10" fill="var(--indigo-light)" />
        <circle cx="330" cy="120" r="7" fill="var(--mint)" />
        <circle cx="300" cy="250" r="12" fill="var(--indigo-light)" />
        <circle cx="170" cy="220" r="8" fill="var(--mint)" />
        <circle cx="120" cy="330" r="6" fill="var(--indigo-light)" />
      </g>
    </svg>
  );
}
