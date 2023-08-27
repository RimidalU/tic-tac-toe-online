import { InputHTMLAttributes } from "react";

import { UiFieldMessage } from "./ui-field-message";
import { UiFieldLabel } from "./ui-field-label";
import { UiFieldInput } from "./ui-field-input";

/**
 *
 * @param {{
 *   className?: string;
 *   label?: string;
 *   required?: boolean;
 *   helperText?: string;
 *   errorText?: string;
 *   className?: string;
 * } & import('react').InputHTMLAttributes<HTMLInputElement>} props
 *
 */

export function UiInput({
  label,
  required,
  helperText,
  errorText,
  className,

  ...inputProps
}: {
  label?: string;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  const htmlId = label?.replace(/\s/g, "-").toLowerCase() || "";

  return (
    <div className={className}>
      {label && (
        <UiFieldLabel label={label} required={required} htmlId={htmlId} />
      )}

      <UiFieldInput
        required={required}
        errorText={errorText}
        htmlId={htmlId}
        {...inputProps}
      />

      {(helperText || errorText) && (
        <UiFieldMessage errorText={errorText} helperText={helperText} />
      )}
    </div>
  );
}
