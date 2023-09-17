import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface Props {
  className?: string | undefined;
  placeholder?: string | undefined;
}

const Searchbox = ({ className, placeholder }: Props) => {
  return (
    <div className={cn("relative pt-2 mx-auto text-gray-600", className)}>
      <Input className="pl-10 py-7 rounded-xl" placeholder={placeholder} />
      <Button className="absolute py-3 right-2 top-4" variant="light">
        Search
      </Button>
      <Search className="absolute w-5 h-5 top-7 left-3" />
    </div>
  );
};

export default Searchbox;
