// Furthmac Solutions logo — navy "A" arrow mark with red industrial beams ("F")
// The navy mark + wordmark use currentColor so it adapts to light/dark backgrounds.
export const LogoMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 132 90"
    className={className}
    fill="none"
    aria-hidden="true"
    role="img"
  >
    {/* navy A (bold angular arrow) */}
    <path
      d="M6 84 L54 8 L86 50 L66 58 L48 34 L28 84 Z"
      fill="currentColor"
    />
    {/* red top beam — F upper arm (trapezoid, wider on top) */}
    <path d="M92 10 H130 L124 40 H98 Z" fill="#E11D2E" />
    {/* navy mid beam — F middle arm (shorter trapezoid) */}
    <path d="M96 46 H124 L119 68 H101 Z" fill="currentColor" />
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
