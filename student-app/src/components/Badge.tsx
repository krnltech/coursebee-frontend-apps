import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

interface Props {
  variant?: "success" | "warning" | "error";
  message: string;
}
const badgeVariant = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        success: "bg-emerald-100 px-2.5 py-0.5 text-emerald-700",
        warning: " bg-amber-100 px-2.5 py-0.5 text-amber-700",
        error: "bg-red-100 px-2.5 py-0.5 text-red-700",
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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg> */}
        <p className="text-sm whitespace-nowrap">{message}</p>
      </span>
    </div>
  );
};

export default Badge;
