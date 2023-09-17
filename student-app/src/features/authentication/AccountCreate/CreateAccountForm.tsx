"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import HookFormItem from "@/components/hookform/HookFormItem";

const FormSchema = z
  .object({
    firstName: z.string().min(3, {
      message: "First name must be at least 3 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email(),
  })
  .required();

type FormSchemaType = z.infer<typeof FormSchema>;

export function CreateAccountForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col h-full pt-24 pl-32 space-y-8 "
      >
        <h3>Create Account</h3>
        <div className="flex-1 max-w-md space-y-6 ">
          <HookFormItem name="firstName" label="First Name">
            <Input placeholder="Enter your first name" />
          </HookFormItem>
          <HookFormItem name="lastName" label="Last Name">
            <Input placeholder="Enter your last name" />
          </HookFormItem>
          <HookFormItem name="email" label="Email">
            <Input placeholder="Enter your email" />
          </HookFormItem>
        </div>
        <div className="flex items-center justify-center gap-4 pb-20">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
}
