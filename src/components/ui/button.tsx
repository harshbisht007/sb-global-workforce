import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-gradient text-white shadow-glow hover:shadow-[0_24px_60px_-12px_rgba(6,182,212,0.5)] hover:brightness-[1.05]",
        accent:
          "bg-accent text-white shadow-[0_16px_40px_-12px_rgba(249,140,7,0.6)] hover:brightness-[1.05]",
        dark: "bg-ink text-white hover:bg-ink-soft shadow-soft",
        outline:
          "border border-border bg-white/60 text-ink backdrop-blur hover:border-primary/40 hover:bg-white hover:text-primary-700 shadow-soft",
        ghost: "text-ink hover:bg-secondary hover:text-primary-700",
        white:
          "bg-white text-ink shadow-soft hover:shadow-card hover:text-primary-700",
        link: "text-primary-700 underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base h-[3.25rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Polymorphic button — renders a next/link when `href` points to an internal
 * route, a plain anchor for external/protocol links, and a <button> otherwise.
 */
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...rest}
        />
      );
    }

    return (
      <a
        href={href}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...rest}
      />
    );
  }

  return (
    <button
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(props as ButtonAsButton)}
    />
  );
});

Button.displayName = "Button";

export { buttonVariants };
