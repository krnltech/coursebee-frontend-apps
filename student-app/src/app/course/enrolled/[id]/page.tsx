"use client";
import TabSelection from "@/components/TabSelection";
import { courseDetailsTab } from "@/constants/staticData";
import SimilarCourse from "@/features/course/SimilarCourse";
import CourseInfo from "@/features/enrolledCourse/enrolledCourseDetails/CourseInfo";
import CourseModule from "@/features/enrolledCourse/enrolledCourseDetails/courseModule/CourseModule";
import { CourseDetailsTabType } from "@/models/course";
import { useState } from "react";

const Page = () => {
  const [currentTab, setCurrentTab] = useState<CourseDetailsTabType>("Modules");
  return (
    <div>
      <CourseInfo />
      <div className="mt-24">
        <TabSelection
          tabs={courseDetailsTab}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <CourseModule />
      <SimilarCourse />
    </div>
  );
};

export default Page;
