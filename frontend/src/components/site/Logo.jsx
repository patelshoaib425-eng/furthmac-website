// Furthmac Solutions logo — navy "A" arrow mark with red industrial beams ("F")
// The navy mark + wordmark use currentColor so it adapts to light/dark backgrounds.
export const LogoMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 84"
    className={className}
    fill="none"
    aria-hidden="true"
    role="img"
  >
    {/* navy stem */}
    <path d="M10 6 L26 6 L18 78 L2 78 Z" fill="currentColor" />
    {/* red top arm (trapezoid, wider on top) */}
    <path d="M23 6 L60 6 L54 30 L20 30 Z" fill="#E11D2E" />
    {/* navy middle arm (shorter trapezoid) */}
    <path d="M19 38 L50 38 L45 60 L16 60 Z" fill="currentColor" />
  </svg>
);

export const Logo = ({ className = "", markClass = "h-8", showWord = true, wordClass = "" }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <LogoMark className={`${markClass} w-auto`} />
    {showWord && (
      <span
        className={`font-display font-extrabold tracking-tighter leading-none text-2xl ${wordClass}`}
      >
        Furthmac
      </span>
    )}
  </span>
);
