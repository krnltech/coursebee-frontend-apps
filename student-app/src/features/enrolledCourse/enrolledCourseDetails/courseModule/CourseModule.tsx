import CourseInstructorCard from "../CourseInstructorCard";
import ModuleItem from "./ModuleItem";

const CourseModule = () => {
  return (
    <div className="flex gap-12 mt-12 mb-32">
      {/* Module Data  */}
      <div className="w-2/3 space-y-6">
        <ModuleItem />
        <ModuleItem />
        <ModuleItem />
        <ModuleItem />
      </div>
      {/* Course Instructor Details */}
      <div className="w-1/3">
        <CourseInstructorCard />
      </div>
    </div>
  );
};

export default CourseModule;
