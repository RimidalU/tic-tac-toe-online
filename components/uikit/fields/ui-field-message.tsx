import clsx from "clsx";

/**
 *
 * @param {{
 *   helperText?: string;
 *   errorText?: string;
 *   className?: string;
 * }} props
 *
 */

export function UiFieldMessage({
  helperText,
  errorText,
  className,
}: {
  helperText?: string;
  errorText?: string;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        errorText ? "text-red-500" : "text-stone-600",
        "mt-2 text-sm",
        className,
      )}
    >
      {errorText ?? helperText}
    </p>
  );
}
