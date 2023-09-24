import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KeyValueType } from "@/models/general";
import * as SelectPrimitive from "@radix-ui/react-select";

type Props = {
  data: KeyValueType[];
  label?: string | number;
  width?: string;
} & SelectPrimitive.SelectProps;

export function SelectDropdown({ data, width, label, ...props }: Props) {
  return (
    <Select {...props}>
      <SelectTrigger style={{ width: width ?? "180px" }}>
        <SelectValue placeholder={label ?? "Select"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.length > 0 ? (
            data.map((item: KeyValueType, index: number) => (
              <SelectItem
                key={index}
                value={item.value}
                className="text-neutral-700"
              >
                {item?.label}
              </SelectItem>
            ))
          ) : (
            <p className="my-2 text-neutral-700">No Options</p>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
