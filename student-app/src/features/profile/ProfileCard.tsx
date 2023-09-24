"use client";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = () => {
  const router = useRouter();
  return (
    <div className="p-12 mt-12 border rounded-xl">
      <h4 className="title">Personal Information</h4>
      <p className="mt-2 leading-8 text-title text-neutral-700">
        Here you can view public information about yourself.
      </p>

      <div className="flex mt-8">
        <div className="w-1/3">
          <p className="mb-2 text-base font-semibold text-neutral-500">
            First Name
          </p>
          <p className="font-medium title">Ifaz</p>
        </div>
        <div className="w-1/3">
          <p className="mb-2 text-base font-semibold text-neutral-500">
            Last Name
          </p>
          <p className="font-medium title">Ahmed</p>
        </div>
      </div>

      <div className="w-1/3 mt-8">
        <p className="mb-2 text-base font-semibold text-neutral-500">Email</p>
        <p className="font-medium title">ifazahmed@gamil.com</p>
      </div>

      <div className="w-1/3 mt-8">
        <div className="flex gap-2">
          <p className="mb-2 text-base font-semibold text-neutral-500">
            Mobile Number
          </p>
          <Badge message="Verified" />
        </div>
        <p className="font-medium title">0123847213</p>
      </div>

      <Button
        className="px-8 py-6 mt-8"
        variant="light"
        onClick={() => router.push("/profile/edit")}
      >
        <Image
          src={"/icons/edit.svg"}
          alt="edit"
          width={24}
          height={24}
          className="mr-1.5"
        />
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileCard;
