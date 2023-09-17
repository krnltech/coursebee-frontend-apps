"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import clsx from "clsx";
import { Grip, Trophy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CourseStats from "./CourseStats";

const CourseInfo = () => {
  const [showCourseStats, setShowCourseStats] = useState<boolean>(false);
  return (
    <div className="mt-24 ">
      <div className="flex w-full">
        <div className="w-2/3 space-y-6">
          <p className="font-bold uppercase text-primary">
            User-Centric Design
          </p>
          <h1 className="text-[48px] text-black font-medium">
            Entering into the field of UX/UI
          </h1>
          <p className="paragraph">
            Unlock the World of User Experience Design. Gain in-demand skills,
            create stunning interfaces, and launch your career in less than 6
            months.
          </p>
        </div>
        <div className="w-1/3 rounded-3xl h-[240px] overflow-hidden">
          <Image
            src="/images/heroImage.png"
            alt="courseImage"
            width="0"
            height="0"
            sizes="100vw"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center w-2/3 gap-24">
          <div className="flex w-1/3 gap-4">
            <Button disabled className="!cursor-not-allowed !bg-[#A4B0C3]">
              Enrolled
            </Button>
            <p className="text-neutral-700">
              Started on <br />{" "}
              <span className="font-semibold">27 June 2023</span>
            </p>
          </div>
          <div className="w-2/3 px-8 border-l-2 border-r-2">
            <h6 className="leading-5 text-neutral-700">Progress</h6>
            <div className="flex items-center gap-8 mt-1">
              <Progress value={40} />

              <span className="text-sm font-medium text-black">40%</span>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <Button
            variant="outline"
            size="sm"
            className={clsx(
              "py-3 rounded-lg transition-colors duration-200 ease-in-out",
              showCourseStats &&
                "bg-orange-light text-primary hover:bg-orange-light hover:text-primary "
            )}
            onClick={() => setShowCourseStats(!showCourseStats)}
          >
            <Grip className="w-4 h-4 mr-1" /> Details
          </Button>
          <Button variant="outline" size="sm" className="py-3 rounded-lg">
            <Trophy className="w-4 h-4 mr-1 text-neutral-700" />
            Leaderboard
          </Button>
        </div>
      </div>

      <div>{showCourseStats && <CourseStats />}</div>
    </div>
  );
};

export default CourseInfo;
