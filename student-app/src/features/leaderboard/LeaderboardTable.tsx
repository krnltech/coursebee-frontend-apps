import { LeaderBoard, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<LeaderBoard[]> {
  // Fetch data from your API here.
  return [
    {
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo ab ad voluptates maxime eum hic dolores optio, veritatis possimus?",
      course: "Mathematics",
      points: 92,
    },
    {
      name: "Alice Johnson",
      course: "History",
      points: 88,
    },
    {
      name: "David Lee",
      course: "Biology",
      points: 78,
    },
    {
      name: "Sarah Davis",
      course: "Chemistry",
      points: 85,
    },
    {
      name: "Michael Wilson",
      course: "Physics",
      points: 90,
    },
    {
      name: "Emily Brown",
      course: "English",
      points: 95,
    },
    {
      name: "Daniel Taylor",
      course: "Computer Science",
      points: 87,
    },
    {
      name: "Olivia Anderson",
      course: "Psychology",
      points: 82,
    },
    {
      name: "James Clark",
      course: "Art",
      points: 75,
    },
    {
      name: "Sophia Hall",
      course: "Music",
      points: 93,
    },
  ];
}

export default async function LeaderboardTable() {
  const data = await getData();

  return (
    <div className="py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
