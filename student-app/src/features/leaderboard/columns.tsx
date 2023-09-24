"use client";

import GenerationActions from "@/components/table/GenerationActions";
import { ColumnDef } from "@tanstack/react-table";

export type LeaderBoard = {
  rank?: string;
  name: string;
  course: string;
  points: any;
};

export const columns: ColumnDef<LeaderBoard>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ row }) => <div>{`#${row.index + 1}`}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",

    cell: ({ row }) => (
      <div className="w-[300px] truncate">{`${row.original.name}`}</div>
    ),
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => (
      <div className="w-[300px] truncate">{`${row.original.course}`}</div>
    ),
  },
  {
    accessorKey: "points",
    header: "Points",
    cell: ({ row }) => <div>{`${row.getValue("points")} pts.`}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const course = row.original;
      return (
        <div className="text-right">
          <GenerationActions />
        </div>
      );
    },
  },
];
