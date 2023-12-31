import clsx from "clsx";

/**
 *
 * @param {{
 *   children: string;
 *   className?: string;
 *   size: "md" | "lg";
 *   variant: "primary" | "outline";
 * }} props
 *
 */

export function UiButton({
  children,
  className,
  size,
  variant,
}: {
  children: string;
  className?: string;
  size: "md" | "lg";
  variant: "primary" | "outline";
}) {
  const buttonClassName = clsx(
    "transition-colors font-bold",
    className,
    {
      md: "rounded text-base px-4 py-2",
      lg: "rounded-lg text-2xl px-5 py-2",
    }[size],
    {
      primary: "bg-amber-400 hover:bg-amber-200",
      outline: "border border-amber-400 hover:bg-amber-100",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
}
