import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useI18n, LANGS } from "../../i18n/i18n";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  const current = LANGS.find((l) => l.code === lang) || LANGS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          data-testid="language-switcher"
          aria-label="Change language"
          className="h-10 px-3 inline-flex items-center gap-2 border border-border hover:border-red transition-colors duration-200"
        >
          <Globe size={16} />
          <span className="overline">{current.short}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-none w-40">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            data-testid={`lang-${l.code}`}
            onClick={() => setLang(l.code)}
            className="rounded-none cursor-pointer flex items-center justify-between"
          >
            <span className="text-sm">{l.label}</span>
            {l.code === lang && <Check size={15} className="text-red" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
