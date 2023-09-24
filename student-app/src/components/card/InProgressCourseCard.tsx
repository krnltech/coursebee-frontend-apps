"use client";
import Image from "next/image";
import { Progress } from "../ui/progress";
import Badge from "../Badge";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const InProgressCourseCard = () => {
  const router = useRouter();
  return (
    <div className="h-[325px] border rounded-xl flex">
      <div className="flex items-center justify-center w-1/4 h-full transition duration-500 bg-offWhite rounded-l-xl">
        <Image
          src={"/images/course/illustration-4.png"}
          alt="course image"
          width={240}
          height={240}
          priority
          objectFit="cover"
        />
      </div>
      <div className="flex w-3/4">
        {/* Info */}
        <div className="w-4/6 p-8">
          <p className="font-bold text-orange-400 uppercase">
            Python Powerhouse
          </p>
          {/* Subtitle */}
          <h4 className="font-semibold text-black text-title">
            Unlocking Its Full Potential
          </h4>
          {/* Description */}
          <p className="mt-3 text-neutral-700 line-clamp-3">
            Unleash Pythons power: Build robust applications and solve complex
            problems with this versatile programming language.
          </p>

          {/* Course Progression */}
          <>
            <h6 className="mt-6 text-sm leading-5 text-neutral-700">
              Progress
            </h6>
            <div className="flex items-center gap-8 mt-1">
              <Progress value={75} />

              <span className="text-sm font-medium text-black">75%</span>
            </div>
          </>

          {/* Footer - Date & Button */}
          <div className="mt-6 mb-2">
            <p className="text-neutral-700">Started on </p>
            <p className="font-semibold text-black"> 27 June 2023</p>
          </div>
        </div>
        <div className="block bg-neutral-200 h-[280px] w-[1px] my-auto" />
        {/* Schedule */}
        <div className="flex flex-col justify-between w-2/6 p-8">
          <div className="flex items-center justify-between">
            <Badge message="Running" variant="info" />
            <MoreVertical className="h-5" />
          </div>
          <div>
            <p className="font-medium text-neutral-700">Next Up</p>
            <p className="mt-4 text-[20px] font-medium leading-7 line-clamp-3">
              <span className="text-primary">Weekly 5:</span> The Python Race of
              code
            </p>
            <p className="mt-2 text-sm leading-5 text-neutral-700">
              Deadline: 05 August 2023
            </p>
          </div>
          <div className="ml-auto space-x-3">
            <Button
              variant="light"
              size="sm"
              className="font-semibold"
              onClick={() => router.push("/leaderboard")}
            >
              Leaderboard
            </Button>
            <Button
              size="sm"
              onClick={() => router.push("/course/enrolled/123")}
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgressCourseCard;
