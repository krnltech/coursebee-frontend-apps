import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      placeholder,
      error,
      label,
      autoComplete = "off",
      ...props
    },
    ref
  ) => {
    return (
      <>
        {label && (
          <label
            htmlFor={label}
            className="block mb-1 ml-1 text-base font-semibold text-neutral-500"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-lg border border-input bg-background px-4 py-6 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/75 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-300 text-black disabled:text-neutral-700",
            error && " focus-visible:ring-danger",
            className
          )}
          autoComplete={autoComplete}
          placeholder={placeholder ?? ""}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
