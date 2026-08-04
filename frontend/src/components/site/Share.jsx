import { toast } from "sonner";
import { Share2, Link2, MessageCircle, Linkedin, Facebook, Twitter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const SHARE_TITLE = "Furthmac Solutions — Engineering Excellence That Moves Industries";
const SHARE_TEXT =
  "Furthmac Solutions — reliable industrial relocation, mechanical, electrical & logistics engineering.";

const getUrl = () =>
  typeof window !== "undefined" ? window.location.href : "https://furthmacsolutions.com";

export const ShareButton = ({ className = "" }) => {
  const url = getUrl();

  const nativeShare = async () => {
    try {
      await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url });
    } catch (_) {
      /* user cancelled */
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard.");
    } catch (_) {
      toast.error("Could not copy the link.");
    }
  };

  const links = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${url}`)}`,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      key: "facebook",
      label: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      key: "x",
      label: "X (Twitter)",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(SHARE_TEXT)}`,
    },
  ];

  const canNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  if (canNativeShare) {
    return (
      <button
        data-testid="share-btn"
        onClick={nativeShare}
        aria-label="Share this site"
        className={`h-10 w-10 grid place-items-center border border-border hover:border-red transition-colors duration-200 ${className}`}
      >
        <Share2 size={16} />
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          data-testid="share-btn"
          aria-label="Share this site"
          className={`h-10 w-10 grid place-items-center border border-border hover:border-red transition-colors duration-200 ${className}`}
        >
          <Share2 size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-none w-48">
        {links.map((l) => (
          <DropdownMenuItem key={l.key} asChild className="rounded-none cursor-pointer">
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              data-testid={`share-${l.key}`}
              className="flex items-center gap-3"
            >
              <l.icon size={15} className="text-red" />
              <span className="text-sm">{l.label}</span>
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          data-testid="share-copy"
          onClick={copyLink}
          className="rounded-none cursor-pointer flex items-center gap-3"
        >
          <Link2 size={15} className="text-red" />
          <span className="text-sm">Copy link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
