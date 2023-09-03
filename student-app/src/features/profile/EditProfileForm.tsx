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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const EditProfileForm = () => {
  const router = useRouter();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="p-16 mt-24 border rounded-xl">
      <h3 className="font-normal">Edit Profile</h3>
      <p className="text-[22px] leading-8 text-neutral-700 mt-2">
        Here you can edit public information about yourself.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-16 space-y-8"
        >
          <div className="flex w-full gap-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-1/3 ">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      {...field}
                      error={error?.message}
                      className=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-1/3">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      {...field}
                      error={error?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full gap-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-1/3 ">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      error={error?.message}
                      className=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
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

          <FormField
            control={form.control}
            name="username"
            render={({ field, fieldState: { error } }) => (
              <FormItem className="w-1/3">
                <FormLabel className="flex items-center gap-2">
                  Current Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    {...field}
                    error={error?.message}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full gap-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-1/3 ">
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter new password"
                      {...field}
                      error={error?.message}
                      className=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-1/3">
                  <FormLabel>Retype Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Retype your new password"
                      {...field}
                      error={error?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
