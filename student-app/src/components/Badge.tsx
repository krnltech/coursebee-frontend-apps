import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

interface Props {
  variant?: "success" | "warning" | "error" | "info";
  message: string;
}
const badgeVariant = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1",
  {
    variants: {
      variant: {
        success: "bg-emerald-100 text-emerald-700",
        warning: " bg-amber-100 text-amber-700",
        info: " bg-blue-50 text-blue-600",
        error: "bg-red-100 text-red-700",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);
const Badge = ({ variant, message }: Props) => {
  return (
    <div>
      <span className={cn(badgeVariant({ variant }))}>
        <p className="text-sm font-medium whitespace-nowrap">{message}</p>
      </span>
    </div>
  );
};

export default Badge;
