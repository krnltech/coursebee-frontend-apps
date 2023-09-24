import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { Progress } from "../ui/progress";

interface Props {
  price?: number;
  progress?: number;
  date?: string;
}
const EnrolledCourseCard = ({ price, progress, date }: Props) => {
  return (
    <div className="relative block overflow-hidden group w-[400px] border rounded-xl">
      <div className="flex items-center justify-center w-full transition duration-500 bg-offWhite">
        <Image
          src={"/images/course/illustration-2.png"}
          alt="course image"
          width={278}
          height={278}
          priority
          className="object-cover"
        />
      </div>

      <div className="relative p-6 bg-white">
        <MoreVertical className="absolute text-black cursor-pointer top-4 right-2" />

        {/* Title */}
        <p className="font-semibold uppercase text-neutral-700">
          Python Powerhouse
        </p>
        {/* Subtitle */}
        <h4 className="font-semibold text-black text-title">
          Unlocking Its Full Potential
        </h4>
        {/* Description */}
        <p className="mt-3 text-sm text-neutral-500 line-clamp-3">
          Unleash Pythons power: Build robust applications and solve complex
          problems with this versatile programming language.
        </p>

        {/* Course Progression */}
        <h6 className="mt-8 text-sm leading-5 text-neutral-700">
          OVERALL PROGRESS
        </h6>
        <div className="flex items-center gap-8 mt-6 mb-8">
          <Progress value={33} />

          <span className="text-sm font-medium text-black">48%</span>
        </div>

        {/* Footer - Date & Button */}
        <div className="flex items-center justify-between mb-2">
          <div className="paragraph">
            Started on <br />
            27 June 2023
          </div>
          <Button size="sm">Course Details</Button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
