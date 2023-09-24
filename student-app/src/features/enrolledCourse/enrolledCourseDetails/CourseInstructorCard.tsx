import Image from "next/image";
import React from "react";

const CourseInstructorCard = () => {
  return (
    <div className="p-5 text-black border rounded-xl shadow-primary">
      <p
        className="text-sm font-semibold text-neutral-700"
        data-animate="text"
        data-delay="1"
      >
        Instructor
      </p>
      <div className="flex items-center gap-3 mt-4">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src="/images/instructor.jpg"
          className="w-12 h-12 border-2 border-white rounded-full"
          alt="Avatar"
        />
        <div data-animate="text" data-delay="1.4">
          <p className="text-xl font-semibold">Ifaz Ahmed Aflan</p>
          <p className="text-neutral-700">UX Designer at Williams LTD.</p>
        </div>
      </div>
      <div data-animate="text" data-delay="1.6">
        <p className="mb-1 text-sm font-semibold text-neutral-700 mt-7">
          Experiences
        </p>
        <p className="font-semibold text-black">
          UI Designer at Axiata LTD.
          <span className="ml-2 text-neutral-700">2021 - 2023</span>
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        <Image
          src="/icons/linkedIn-outline.svg"
          alt="linkedIn"
          height={24}
          width={24}
        />
        <Image
          src="/icons/instagram-outline.svg"
          alt="instagram"
          height={24}
          width={24}
        />
        <Image
          src="/icons/twitter-outline.svg"
          alt="twitter"
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};

export default CourseInstructorCard;
