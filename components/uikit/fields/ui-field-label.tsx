import clsx from "clsx";

/**
 *
 * @param {{
 *   className?: string;
 *   label: string;
 *   htmlId: string;
 *   className?: string;
 * }} props
 *
 */

export function UiFieldLabel({
  label,
  required,
  htmlId,
  className,
}: {
  label: string;
  required?: boolean;
  htmlId: string;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlId}
      className={clsx(
        required && "after:text-red-500 after:content-['*']",
        "mb-2 block text-sm font-medium text-stone-600 after:ml-0.5",
        className,
      )}
    >
      {label}
    </label>
  );
}
