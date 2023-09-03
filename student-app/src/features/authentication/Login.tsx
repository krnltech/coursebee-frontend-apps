"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div
      className="max-w-lg p-4 mx-auto mt-24 bg-white border rounded-3xl shadow-main sm:p-6 lg:p-8"
      role="alert"
    >
      <div className="flex justify-end">
        <Link href={"/"} className="font-semibold text-primary">
          Login as Instructor
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="p-8 rounded-full bg-orange-light">
          <Image
            src={"/icons/phone.svg"}
            alt="phone"
            width={38}
            height={38}
            priority
          />
        </div>
        <h4 className="mt-4 title">Your Phone</h4>
        <p className="paragraph">Please enter your phone number</p>
      </div>

      <div className="mt-8 mb-4">
        <Input label="Mobile Number" />
      </div>
      <Button
        className="w-full"
        variant="light"
        onClick={() => router.push("/verification")}
      >
        Send Code
      </Button>
    </div>
  );
};

export default Login;
