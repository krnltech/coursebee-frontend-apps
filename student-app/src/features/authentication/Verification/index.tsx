"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpInput from "./OtpInput";
import { Button } from "@/components/ui/button";

const Verification = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  return (
    <div
      className="max-w-lg p-4 mx-auto mt-20 mb-10 bg-white border rounded-3xl shadow-main sm:p-6 lg:p-8"
      role="alert"
    >
      <div className="flex justify-end">
        <Link href={"/"} className="font-semibold text-primary">
          Login as Instructor
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="p-6 rounded-full bg-orange-light">
          <Image
            src={"/icons/boxes.svg"}
            alt="phone"
            width={56}
            height={56}
            priority
          />
        </div>
        <h4 className="mt-4 title">Check Phone</h4>
        <p className="mt-1 text-center paragraph">
          We have sent a 6 digit code to{" "}
          <span className="font-bold">01963224053</span>. Please enter the code.
        </p>
      </div>

      <h6 className="mt-8 mb-2 title-secondary">Enter Code</h6>
      <OtpInput
        value={otp}
        otpLength={6}
        onChange={(newValue) => setOtp(newValue)}
      />
      {otp.length === 6 && (
        <div className="flex items-center justify-center gap-2 py-3 mt-6 rounded-lg bg-green-light">
          <Image
            src={"/icons/green-check.svg"}
            alt="check"
            height={20}
            width={20}
            priority={false}
          />
          <p className="font-medium leading-6 text-green">Matched</p>
        </div>
      )}
      <Button
        disabled={otp.length !== 6}
        className="w-full my-6"
        onClick={() => router.push("/create-account")}
      >
        Proceed
      </Button>

      <p className="text-center paragraph">
        Didn’t receive any code?{" "}
        <span className="font-semibold cursor-pointer text-primary">
          Send Again
        </span>
      </p>
    </div>
  );
};

export default Verification;
