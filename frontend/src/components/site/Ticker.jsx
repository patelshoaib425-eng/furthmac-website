import Marquee from "react-fast-marquee";
import { useI18n } from "../../i18n/i18n";

export const Ticker = () => {
  const { t } = useI18n();
  return (
    <div data-testid="marquee" className="bg-navy border-y border-white/10 py-5 select-none">
      <Marquee speed={38} gradient={false} autoFill>
        {t.marquee.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="overline text-white/80 px-8 text-sm tracking-[0.22em]">{item}</span>
            <span className="h-1.5 w-1.5 bg-red rotate-45" />
          </span>
        ))}
      </Marquee>
    </div>
  );
};
