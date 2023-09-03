"use client";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = () => {
  const router = useRouter();
  return (
    <div className="p-16 mt-24 border rounded-xl">
      <h3 className="font-normal">Personal Information</h3>
      <p className="text-[22px] leading-8 text-neutral-700 mt-2">
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
        className="mt-8 px-14"
        onClick={() => router.push("/profile/edit")}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileCard;
