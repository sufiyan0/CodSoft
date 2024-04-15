"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useEditState } from "sanity";
import Filterdata from "./Filterdata";
import Link from "next/link";

interface job {
  _id: string;
  author: [];
  jobTitle: string;
  description: string;
  role: string;
  _type?: string;
  shortdescription: string;
  company: string;
}
[];
const Card = ({ jobdata }: any) => {
  const [filterdata, setFilterdata] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e: any) => {
    setSelectedRole(e.target.value);
  };

  useEffect(() => {
    const filteredJobs = selectedRole
      ? jobdata.filter((job: job) => job.role == selectedRole)
      : [];
    setFilterdata(filteredJobs);
  }, [selectedRole]);

  console.log(jobdata);

  filterdata && console.log(filterdata);
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="text-4xl font-bold py-3  flex text-white ">Find Your Dream Role</h1>
        </div>
        <div className="  md:mt-8 md:mr-6 md:right-0 my-3">
          <label htmlFor="role" className="text-white text-xl md:text-2xl">Filter by Role :</label>
          <select
            id="role"
            className="bg-slate-700 p-2 rounded-md mx-4"
            value={selectedRole}
            onChange={() => handleRoleChange(event)}
          >
            <option value="">Find Roles</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full-stack Developer">Full-stack Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {filterdata.map((job: job) => (
            <div
              key={job._id}
              className="max-w-sm min-w-72 justify-center flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"
            >
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {job.jobTitle}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {job.shortdescription}
              </p>
              <Link
                href={`/jobdetails/${job._id}`}
                className="inline-flex items-center px-3 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
