import CourseCard from "@/components/card/CourseCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const SimilarCourse = () => {
  return (
    <div>
      <h3 className="font-bold text-center">Similar Courses</h3>
      <div className="grid grid-cols-3 gap-4 mt-12 justify-items-center">
        {[1, 2, 3].map((item) => (
          <CourseCard key={item} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8 text-neutral-500">
        <ArrowLeft className="cursor-pointer" />
        <ArrowRight className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SimilarCourse;
