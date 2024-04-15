"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

const JobDetails = ({ jobDetails }: any) => {
  const { user } = useUser();
  return (
    <div>
      {" "}
      {user ? (
        <div>
          <div className="flex flex-col  justify-center h-screen max-w-2xl mx-auto my-auto  ">
            <span className="text-2xl md:text-4xl font-bold mb-16 md:mb-24">
              Job Details
            </span>
            <h1 className="text-3xl font-bold">
              {jobDetails.company} is looking for {jobDetails.jobTitle}
            </h1>
            <p className="text-gl my-6 ">
              <span className="text-xl font-bold">Job Role : </span>{" "}
              {jobDetails.role}
            </p>
            <p className="text-gl my-3">
              <span className="text-xl font-bold">Detail Description : </span>{" "}
              {jobDetails.description}
            </p>
            <Link
              className="my-6 text-md font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2 "
              href={"/applynow"}
            >
              Apply now
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  justify-center items-center h-[50vh] max-w-2xl mx-auto my-auto text-2xl sm:text-4xl ">
          <span className="text-2xl md:text-4xl font-bold mb-16 md:mb-24">
            Job Details
          </span>
          <h1>Please login First To view the details </h1>
          <Link
              className="my-6 text-md font-bold text-white bg-gradient-to-r w-full from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2 "
              href={"/api/auth/login"}
            >
              Login 
            </Link>

        </div>
      )}
    </div>
  );
};

export default JobDetails;
