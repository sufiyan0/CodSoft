import React from "react";
import JobList from "../components/JobList";
import JobCard from "../components/JobCard";

const page = () => {
  return (
    <div>
      <JobCard />
      <div className="">
        <h1 className="text-3xl font-bold">Top rated Jobs</h1>

      <JobList />
      </div>
    </div>
  );
};

export default page;
