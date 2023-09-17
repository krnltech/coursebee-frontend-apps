"use client";
import Searchbox from "@/components/Searchbox";
import EnrolledCourseCard from "@/components/card/EnrolledCourseCard";
import InProgressCourseCard from "@/components/card/InProgressCourseCard";
import FilterDropdown from "@/components/dropdown/FilterDropdown";
import SimilarCourse from "@/features/course/SimilarCourse";
import CourseSelectionTab from "@/features/enrolledCourse/CourseSelectionTab";
import NoEnrolledCourse from "@/features/enrolledCourse/NoEnrolledCourse";
import { CourseSelectionTabType } from "@/models/course";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const MyCoursePage = () => {
  const [selectedTab, setSelectedTab] = useState<CourseSelectionTabType>("all");
  const dropdownItems = [
    "Ascending order (A-Z)",
    "Descending order (Z-A)",
    "Duration (Short to Long)",
    "Duration (Long to Short)",
    "Price (Low to High)",
    "Price (High to Low)",
  ];
  return (
    <div>
      <div className="flex items-center justify-between mt-12">
        <div>
          <h2 className="font-semibold">My Courses</h2>
        </div>
        <div>
          <CourseSelectionTab
            selectionTab={selectedTab}
            setSelectionTab={setSelectedTab}
          />
        </div>
      </div>
      <Searchbox className="mt-8 bg-white" placeholder="Search Course" />
      <div className="flex justify-end my-6">
        <FilterDropdown dropdownItems={dropdownItems} />
      </div>

      {selectedTab === "in-progress" ? (
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <InProgressCourseCard key={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 justify-items-center gap-y-8">
          {[1, 2, 3, 4].map((item) => (
            <EnrolledCourseCard key={item} />
          ))}
        </div>
      )}
      <div className="flex items-center justify-center gap-2 mt-8 text-neutral-500">
        <ArrowLeft className="cursor-pointer" />
        <ArrowRight className="cursor-pointer" />
      </div>
      <div className="mt-40">
        <SimilarCourse />
      </div>
    </div>
  );
};

export default MyCoursePage;
