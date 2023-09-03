"use client";
import SingleElementSlider from "@/components/slider/SingleElementSlider";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OnboardingSidebar = () => {
  const sliderContent = [
    {
      url: "/images/course/illustration-1.png",
      text: "Master the Art of Skills Seamlessly.",
    },
    {
      url: "/images/course/illustration-2.png",
      text: "Join Community",
    },
    {
      url: "/images/course/illustration-3.png",
      text: "Learn from the best",
    },
    {
      url: "/images/course/illustration-4.png",
      text: "Develop the Art of Skills Seamlessly",
    },
  ];
  return (
    <div className="relative flex flex-col justify-center h-full">
      <div className="absolute top-20 left-10">
        <Image
          src={"/images/coursebeeLogo.svg"}
          alt="coursebee"
          width={120}
          height={32}
          priority
        />
      </div>
      <SingleElementSlider
        sliderData={sliderContent}
        height={214}
        width={214}
      />
      <Link
        href={"/"}
        className="absolute flex items-center gap-2 font-semibold bottom-8 left-8 text-primary"
      >
        <ArrowLeft className="w-5 h-5" /> Go to Homepage
      </Link>
    </div>
  );
};

export default OnboardingSidebar;
