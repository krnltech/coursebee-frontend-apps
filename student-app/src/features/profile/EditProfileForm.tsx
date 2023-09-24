"use client";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { PHONE_VALIDATION } from "@/constants";
import HookFormItem from "@/components/hookform/HookFormItem";

const FormSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    firstName: z.string().min(3, "First Name must be at least 3 characters"),
    lastName: z.string().min(3, "Last Name must be at least 3 characters"),
    email: z.string(),
    mobile: z
      .string()
      .regex(PHONE_VALIDATION, "Please enter a valid phone number"),
    current_password: z.string(),
    new_password: z.string(),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Password don't match",
    path: ["confirm_password"],
  });

type FormSchemaType = z.infer<typeof FormSchema>;

const EditProfileForm = () => {
  const router = useRouter();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="p-16 mt-24 border rounded-xl">
      <h4 className="title">Edit Profile</h4>
      <p className="mt-2 leading-8 text-title text-neutral-700">
        Here you can edit public information about yourself.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-16 space-y-8"
        >
          <div className="flex w-full gap-8">
            <HookFormItem name="firstName" label="First Name" className="w-1/3">
              <Input placeholder="Enter your first name" />
            </HookFormItem>
            <HookFormItem name="lastName" label="Last Name" className="w-1/3">
              <Input placeholder="Enter your last name" />
            </HookFormItem>
          </div>

          <div className="flex w-full gap-8">
            <HookFormItem name="email" label="Email" className="w-1/3">
              <Input placeholder="Enter your email" />
            </HookFormItem>
            <FormField
              control={form.control}
              name="mobile"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-1/3">
                  <FormLabel className="flex items-center gap-2">
                    <span>Mobile Number</span> <Badge message="Verified" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      {...field}
                      error={error?.message}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <HookFormItem
            name="current_password"
            label="Current Password"
            className="w-1/3"
          >
            <Input placeholder="Enter your current password" type="password" />
          </HookFormItem>

          <div className="flex w-full gap-8">
            <HookFormItem
              name="new_password"
              label="New Password"
              className="w-1/3"
            >
              <Input placeholder="Enter new password" type="password" />
            </HookFormItem>
            <HookFormItem
              name="confirm_password"
              label="Confirm Password"
              className="w-1/3"
            >
              <Input placeholder="Retype your new password" type="password" />
            </HookFormItem>
          </div>

          <div className="flex justify-end gap-4 !mt-20">
            <Button className="px-14" variant="secondary">
              Cancel
            </Button>
            <Button className="px-14">Update</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditProfileForm;
