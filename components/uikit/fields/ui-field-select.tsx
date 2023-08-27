import { SelectHTMLAttributes } from "react";
import clsx from "clsx";

import { IOptions } from "../../refactor-game/types";

/**
 *
 * @param {{
 *   required?: boolean;
 *   htmlId: string;
 *   errorText?: string;
 *   className?: string;
 *   options: IOptions;
 * } & import('react').SelectHTMLAttributes<HTMLSelectElement>} props
 *
 */

export function UiFieldSelect({
  required,
  htmlId,
  className,
  errorText,
  options,
  ...inputProps
}: {
  required?: boolean;
  htmlId: string;
  errorText?: string;
  options: IOptions;
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
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
    >
      {options?.map((item) => <option key={item.id}>{item.value}</option>)}
    </select>
  );
}
