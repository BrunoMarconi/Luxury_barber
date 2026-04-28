"use client";

import { buildWaUrl, CTA_TEXT, CTA_MICRO } from "@/lib/cta";

interface CtaButtonProps {
  page: string;
  label?: string;
  micro?: string | false;
  variant?: "gold" | "ghost-dark" | "ghost-light";
  className?: string;
  fullWidth?: boolean;
}

const BASE =
  "inline-flex items-center justify-center rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] transition";

const VARIANTS: Record<string, string> = {
  gold: "bg-[#f8aa00] text-black hover:bg-[#e69300] px-10 py-4",
  "ghost-dark":
    "border border-black/20 bg-black/5 text-black hover:bg-black/10 hover:border-black/35 px-10 py-4",
  "ghost-light":
    "border border-white/25 bg-transparent text-white/80 hover:border-white/50 hover:text-white px-10 py-4",
};

export default function CtaButton({
  page,
  label = CTA_TEXT,
  micro,
  variant = "gold",
  className = "",
  fullWidth = false,
}: CtaButtonProps) {
  const url = buildWaUrl(page);
  const showMicro = micro !== false;
  const microText = micro || CTA_MICRO;

  return (
    <div className={`flex flex-col items-center gap-1.5 ${fullWidth ? "w-full" : ""}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp-asesoria"
        data-page={page}
        className={`${BASE} ${VARIANTS[variant]} ${fullWidth ? "w-full justify-center" : ""} ${className}`}
      >
        {label}
      </a>
      {showMicro && (
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
            variant === "gold" || variant === "ghost-dark"
              ? "text-black/40"
              : "text-white/40"
          }`}
        >
          {microText}
        </p>
      )}
    </div>
  );
}
