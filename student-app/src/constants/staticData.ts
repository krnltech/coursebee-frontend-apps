import { CourseDetailsTabType } from "@/models/course";
import { KeyValueType } from "@/models/general";

export const courseDetailsTab: CourseDetailsTabType[] = [
  "Modules",
  "Assignments",
  "Discussions",
];

export const ROWS_PER_PAGE: KeyValueType[] = [
  { label: "5 items per page", value: "5" },
  { label: "10 items per page", value: "10" },
  { label: "20 items per page", value: "20" },
];
