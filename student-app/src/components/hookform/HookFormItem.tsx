import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  children?: any;
  name: string;
  label?: string;
  className?: string;
}

const HookFormItem = ({ children, name, label, className }: Props) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {React.cloneElement(children, {
              ...field,
              error: error?.message,
            })}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default HookFormItem;
