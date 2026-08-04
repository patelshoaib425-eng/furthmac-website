// Furthmac Solutions logo — navy "A" arrow mark with red industrial beams ("F")
// The navy mark + wordmark use currentColor so it adapts to light/dark backgrounds.
export const LogoMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 58 48"
    className={className}
    fill="none"
    aria-hidden="true"
    role="img"
  >
    {/* navy F stem (slightly slanted, industrial) */}
    <path d="M13 4 H24 L16 44 H5 Z" fill="currentColor" />
    {/* red top beam (F upper arm) */}
    <path d="M21 4 H56 L51.5 13 H19 Z" fill="#E11D2E" />
    {/* red mid beam (F lower arm) */}
    <path d="M18.5 21 H49 L45 30 H16.5 Z" fill="#E11D2E" />
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
