import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

interface Props {
  dropdownItems: string[];
}
const FilterDropdown = ({ dropdownItems }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="py-6 font-semibold outline-none bg-offWhite focus-visible:outline-none"
      >
        <Button variant="outline">
          Sort By
          <ChevronDown className="w-5 h-5 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-offWhite">
        {dropdownItems.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
