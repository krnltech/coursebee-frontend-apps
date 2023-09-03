import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className?: string | undefined;
  placeholder?: string | undefined;
}

const Searchbox = ({ className, placeholder }: Props) => {
  return (
    <div
      className={cn("relative pt-2 mx-auto text-gray-600 shadow-sm", className)}
    >
      <Input className="py-7" placeholder={placeholder} />
      <Button className="absolute py-3 right-2 top-4">Search</Button>
    </div>
  );
};

export default Searchbox;
