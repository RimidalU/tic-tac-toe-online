import { HTMLAttributes } from "react";
import clsx from "clsx";

/**
 *
 * @param {{
 *   className?: string;
 *   label?: string;
 *   required?: boolean;
 *   helperText?: string;
 *   errorText?: string;
 *   className?: string;
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 *
 */

export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  placeholder,
  ...inputProps
}: {
  label?: string;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  className?: string;
  placeholder?: string;
  inputProps?: HTMLAttributes<HTMLInputElement>[];
}) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor="example2"
          className={clsx(
            required && "after:text-red-500 after:content-['*']",
            "mb-1 block text-sm font-medium text-stone-600 after:ml-0.5",
          )}
        >
          {label}
        </label>
      )}

      <input
        type="email"
        id="example2"
        required={required}
        className={clsx(
          `text-base px-4 py-2 block w-full rounded-md outline-0 border bg-slate-200 shadow-sm focus:ring 
            disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-stone-300`,
          errorText
            ? " focus:border-red-500/60  focus:ring-red-500/60 border-red-300"
            : " focus:border-indigo-600/60  focus:ring-indigo-600/60 border-gray-300",
        )}
        placeholder={placeholder}
        {...inputProps}
      />
      {(helperText || errorText) && (
        <p
          className={clsx(
            errorText ? "text-red-500" : "text-stone-600",
            "mt-1 text-sm",
          )}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}
