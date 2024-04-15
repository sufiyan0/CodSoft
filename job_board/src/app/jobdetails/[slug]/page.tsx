// "use client";
// import React, { useState } from "react";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import Form from "@/app/components/Form";
// import { useUser } from "@auth0/nextjs-auth0/client";
import JobDetails from "@/app/components/JobDetails";

interface job {
  _id: string;
  author: [];
  jobTitle: string;
  description: string;
  role: string;
  _type: string;
}

const page = async ({ params }: { params: { slug: string } }) => {
  // const { user } = useUser();
  const getClient = async () => {
    const res: job[] = await client.fetch(
      `*[_type == "jobs" && _id == "${params.slug}"]{
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
  const jobDetails: any = await getClient();

  return (
    
    <div className="flex min-h-screen flex-col p-10 dark:bg-slate-800 bg-slate-100  dark:text-white text-black ">
     

      {jobDetails && <JobDetails jobDetails={jobDetails[0]} />}

      
    </div>
  );
};

export default page;
