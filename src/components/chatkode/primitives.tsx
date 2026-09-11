import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/* ---------------- Button ---------------- */

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-[transform,background-color,border-color,box-shadow,filter] duration-200 ease-out active:translate-y-0";
  const sizes = {
    md: "min-h-11 px-4 text-sm",
    lg: "min-h-12 px-6 text-[0.95rem]",
  } as const;
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_8px_24px_-14px_oklch(0.83_0.15_172_/_80%)] hover:-translate-y-0.5 hover:brightness-110",
    outline:
      "border border-border-strong bg-surface/60 text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-raised",
    ghost: "text-muted-foreground hover:text-foreground",
  } as const;

  const content = (
    <>
      {children}
      {withArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} aria-label={ariaLabel} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

/* ---------------- Section shell ---------------- */

export function Section({
  id,
  children,
  className,
  tone = "base",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative scroll-mt-24 border-t border-border py-24 sm:py-28 lg:py-36",
        tone === "raised" && "bg-surface/40",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  index,
  label,
  title,
  description,
  id,
  align = "left",
  className,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      <Reveal className="flex items-center gap-3" delay={0}>
        {index && <span className="label-mono text-primary">{index}</span>}
        <span className="h-px w-6 bg-border-strong" aria-hidden="true" />
        <span className="label-mono">{label}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          id={id}
          className="mt-5 text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-[2.9rem]"
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className={cn(
              "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Wordmark ---------------- */

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 28 28" className="h-6 w-6" aria-hidden="true" focusable="false">
        <rect
          x="1.25"
          y="1.25"
          width="25.5"
          height="25.5"
          rx="5"
          fill="none"
          stroke="var(--color-border-strong)"
        />
        <path
          d="M11 9.5 7 14l4 4.5"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 9.5 21 14l-4 4.5"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        Chat<span className="text-primary">Kode</span>
      </span>
    </span>
  );
}
