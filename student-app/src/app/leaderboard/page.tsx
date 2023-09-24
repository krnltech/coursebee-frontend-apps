import Searchbox from "@/components/Searchbox";
import LeaderboardTable from "@/features/leaderboard/LeaderboardTable";
import React from "react";

const Page = () => {
  return (
    <div className="mt-20">
      <h3>Leaderboard</h3>
      <div className="flex items-center gap-2 mb-8 text-black">
        <p>Building with MERN</p>
        <span className="block w-1 h-1 bg-black rounded-full" />
        <p>Batch 02</p>
      </div>
      <Searchbox placeholder="Search" />
      <div>
        <LeaderboardTable />
      </div>
    </div>
  );
};

export default Page;
