import { Button } from "@/components/ui/button";
import React from "react";

const NoEnrolledCourse = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-20">
      <h4 className="title">No Enrolled Courses</h4>
      <p className="max-w-[250px] text-center paragraph">
        Seems like you don’t have any courses enrolled yet.
      </p>
      <Button className="mt-4">Explore Courses</Button>
    </div>
  );
};

export default NoEnrolledCourse;
