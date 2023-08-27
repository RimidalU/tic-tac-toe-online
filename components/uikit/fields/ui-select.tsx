import { SelectHTMLAttributes } from "react";

import { UiFieldMessage } from "./ui-field-message";
import { IOptions } from "../../refactor-game/types";
import { UiFieldSelect } from "./ui-field-select";
import { UiFieldLabel } from "./ui-field-label";

/**
 *
 * @param {{
 *   className?: string;
 *   label?: string;
 *   required?: boolean;
 *   helperText?: string;
 *   errorText?: string;
 *   options: IOptions;
 *   className?: string;
 * } & import('react').SelectHTMLAttributes<HTMLSelectElement>} props
 *
 */

export function UiSelect({
  label,
  required,
  helperText,
  errorText,
  className,
  options,
  ...inputProps
}: {
  label?: string;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  options: IOptions;
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  const htmlId = label?.replace(/\s/g, "-").toLowerCase() || "";

  return (
    <div className={className}>
      {label && (
        <UiFieldLabel label={label} required={required} htmlId={htmlId} />
      )}

      <UiFieldSelect
        htmlId={htmlId}
        required={required}
        options={options}
        {...inputProps}
      />

      {(helperText || errorText) && (
        <UiFieldMessage errorText={errorText} helperText={helperText} />
      )}
    </div>
  );
}
