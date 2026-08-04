import Marquee from "react-fast-marquee";
import { MARQUEE_ITEMS } from "../../data/content";

export const Ticker = () => (
  <div
    data-testid="marquee"
    className="bg-navy border-y border-white/10 py-5 select-none"
  >
    <Marquee speed={38} gradient={false} autoFill>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="overline text-white/80 px-8 text-sm tracking-[0.22em]">
            {item}
          </span>
          <span className="h-1.5 w-1.5 bg-red rotate-45" />
        </span>
      ))}
    </Marquee>
  </div>
);
