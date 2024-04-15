import React from "react";
import JobList from "../components/JobList";
import JobCard from "../components/JobCard";

const page = () => {
  

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const nw = ''

  return (
    <div className="bg-slate-900 text-white">
        <h1 className="text-3xl font-bold text-white flex justify-center p-8 ">Find Your Dream Job</h1>
      <JobCard   />
      <div className="">
        <h1 className="text-3xl font-bold text-white flex justify-center p-6 ">Top rated Jobs</h1>

      <JobList />
      </div>
    </div>
  );
};

export default page;
