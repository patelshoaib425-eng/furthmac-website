// Furthmac Solutions logo — navy "A" arrow mark with red industrial beams ("F")
// The navy mark + wordmark use currentColor so it adapts to light/dark backgrounds.
export const LogoMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 70"
    className={className}
    fill="none"
    aria-hidden="true"
    role="img"
  >
    {/* navy A — bold angular arrow */}
    <path d="M37 66 L60 13 L81 48 L63 55 L54 32 L55 66 Z" fill="currentColor" />
    {/* red wide top trapezoid — F upper arm */}
    <path d="M67 14 L116 14 L110 33 L73 33 Z" fill="#E31E24" />
    {/* navy shorter middle trapezoid — F middle arm */}
    <path d="M82 39 L108 39 L104 54 L86 54 Z" fill="currentColor" />
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
