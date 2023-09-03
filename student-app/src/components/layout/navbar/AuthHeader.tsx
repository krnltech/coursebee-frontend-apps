import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function AuthHeader() {
  return (
    <div className="flex items-center justify-between w-full px-16 py-6 shadow-sm">
      <Image
        src={"/images/coursebeeLogo.svg"}
        alt="coursebee"
        width={120}
        height={32}
        priority
      />
      <Link
        href={"/"}
        className="flex items-center gap-2 font-semibold text-primary"
      >
        <ArrowLeft className="w-5 h-5" /> Go to Homepage
      </Link>
    </div>
  );
}
