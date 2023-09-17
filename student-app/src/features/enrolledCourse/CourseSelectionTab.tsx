import { cn } from "@/lib/utils";
import { CourseSelectionTabType } from "@/models/course";
import clsx from "clsx";
import React from "react";

interface Props {
  selectionTab: CourseSelectionTabType;
  setSelectionTab: React.Dispatch<React.SetStateAction<CourseSelectionTabType>>;
}
const CourseSelectionTab = ({ selectionTab, setSelectionTab }: Props) => {
  const className =
    "px-4 py-2 font-medium text-black transition-colors duration-200 border shadow-sm cursor-pointer rounded-xl";
  return (
    <div className="flex items-center gap-4">
      <div
        className={clsx(
          className,
          selectionTab === "all" && "bg-primary text-white"
        )}
        onClick={() => setSelectionTab("all")}
      >
        All
      </div>
      <div
        className={clsx(
          className,
          selectionTab === "in-progress" && "bg-primary text-white"
        )}
        onClick={() => setSelectionTab("in-progress")}
      >
        In Progress
      </div>
      <div
        className={clsx(
          className,
          selectionTab === "completed" && "bg-primary text-white"
        )}
        onClick={() => setSelectionTab("completed")}
      >
        Completed
      </div>
    </div>
  );
};

export default CourseSelectionTab;
