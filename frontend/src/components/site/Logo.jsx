// Furthmac Solutions logo — navy "A" arrow mark with red industrial beams ("F")
// The navy mark + wordmark use currentColor so it adapts to light/dark backgrounds.
export const LogoMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 56 48"
    className={className}
    fill="none"
    aria-hidden="true"
    role="img"
  >
    {/* navy A / upward arrow */}
    <path
      d="M18 5 L34 43 L24.5 43 L18 30 L11.5 43 L2 43 Z"
      fill="currentColor"
    />
    {/* red top beam (F upper arm) */}
    <path d="M22.5 4 H54 L49.5 12.5 H27 Z" fill="#E11D2E" />
    {/* red mid beam (F lower arm) */}
    <path d="M26.5 20 H47 L43 28 H26.5 Z" fill="#E11D2E" />
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
