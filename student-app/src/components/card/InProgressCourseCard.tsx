import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

const InProgressCourseCard = () => {
  return (
    <div className="h-[350px] border rounded-xl flex">
      <div className="flex items-center justify-center w-1/3 h-full transition duration-500 bg-offWhite rounded-l-xl">
        <Image
          src={"/images/course/illustration-3.png"}
          alt="course image"
          width={278}
          height={278}
          priority
          objectFit="cover"
        />
      </div>
      <div className="flex w-2/3">
        <div className="w-3/5 p-8">
          <p className="font-semibold uppercase text-neutral-700">
            Python Powerhouse
          </p>
          {/* Subtitle */}
          <h4 className="text-[22px] text-black font-semibold">
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
            <Progress value={75} />

            <span className="text-sm font-medium text-black">75%</span>
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
        <div className="block bg-neutral-400 h-[280px] w-[1px] my-auto" />
        <div className="flex flex-col justify-center w-2/5 px-10">
          <p className="font-semibold text-black">Next Up</p>
          <p className="mt-4 font-medium title">
            <span className=" text-primary">Weekly 5:</span> The Python Race of
            code
          </p>
          <p className="text-sm leading-5 text-neutral-700">
            Deadline: 05 August 2023
          </p>
          1 d
        </div>
      </div>
    </div>
  );
};

export default InProgressCourseCard;
