'use client'
import React, { useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Filterdata from "./Filterdata";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const getClient = async () => {
  const res = await client.fetch(
    `*[_type == "jobs"]{
      _id,
      author,
      jobTitle,
      description,
      role,
      _type,
      shortdescription,
      company
    }`
  );
  return res;
};


const getjobdetails = async (id:string) => {
  const res = await client.fetch(
    `*[_type == "jobs" && _id == "${id}"]{
      _id,
      author,
      jobTitle,
      description,
      role,
      _type,
      shortdescription,
      company
    }`
  );
  return res;
};

interface job {
  _id: string;
  author: [];
  jobTitle: string;
  description: string;
  role: string;
  _type?: string;
  shortdescription:string;
  company:string
}
const JobList = async () => {
  // const dispatch = useDispatch()

  const jobDetails: job[] = await getClient();

 

  return (
    <div className="bg-slate-800 min-h-[50vh] items-center justify-center my-auto">
      <h1 className="text-4xl font-bold py-6 justify-center flex text-white mx-auto">Jobs List</h1>
      <Carousel responsive={responsive}>
      {jobDetails.map((job: job) => (
        <div key={job._id} className="max-w-sm min-w-72 justify-center flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
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
      </Carousel>
      
    </div>
  );
};

export default JobList;
