import InProgressCourseCard from "@/components/card/InProgressCourseCard";
import React from "react";

const EnrolledCourseProfileCard = () => {
  return (
    <div className="p-12 mt-12 border rounded-xl">
      <h4 className="title">Enrolled Courses</h4>
      <div className="mt-8 space-y-10">
        {[1, 2].map((c, i) => (
          <InProgressCourseCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourseProfileCard;
