import { InputHTMLAttributes } from "react";
import clsx from "clsx";

/**
 *
 * @param {{
 *   className?: string;
 *   required?: boolean;
 *   errorText?: string;
 *   htmlId?: string;
 * } & import('react').InputHTMLAttributes<HTMLInputElement>} props
 *
 */

export function UiFieldInput({
  required,
  errorText,
  htmlId,
  className,
  ...inputProps
}: {
  required?: boolean;
  errorText?: string;
  htmlId?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={htmlId}
      required={required}
      className={clsx(
        `text-base px-4 py-2 block w-full rounded-md outline-0 border bg-slate-200 shadow-sm focus:ring 
            disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-stone-300`,
        errorText
          ? " focus:border-red-500/60  focus:ring-red-500/60 border-red-300"
          : " focus:border-indigo-600/60  focus:ring-indigo-600/60 border-gray-300",
        className,
      )}
      {...inputProps}
    />
  );
}
