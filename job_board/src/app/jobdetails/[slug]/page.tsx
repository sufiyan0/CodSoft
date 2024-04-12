"use client";
import React, { useState } from "react";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import Form from "@/app/components/Form";

interface job {
  _id: string;
  author: [];
  jobTitle: string;
  description: string;
  role: string;
  _type: string;
}

const page = async ({ params }: { params: { slug: string } }) => {
  // const [formApply, setFormApply] = useState(false);

  const getClient = async () => {
    const res: job[] = await client.fetch(
      `*[_type == "jobs" && _id == "${params.slug}"]{
        _id,
        author,
        jobTitle,
        description,
        role,
        _type
      }`
    );
    return res;
  };
  const jobDetails: any = await getClient(); 

  return (
    <div>
      <h1>{jobDetails[0].jobTitle}</h1>
      <p>{jobDetails[0].description}</p>
      <p>{jobDetails[0].role}</p>
      <Link href={'/applynow'}>Apply now</Link>
      
    </div>
  );

  // formApply ? (
  //   <Form />
  // ) : (
  //   <div className="">
  //     <h1>{jobDetails[0].jobTitle}</h1>
  //     <p>{jobDetails[0].description}</p>
  //     <p>{jobDetails[0].role}</p>
  //     <Link href={"#"} onClick={() => setFormApply(true)}>
  //       Apply now
  //     </Link>
  //   </div>
  // );

  // if(!formApply == true){
  //   return(
  //     <div>
  //       <Form/>
  //     </div>
  //   )
  // }

  // console.log(jobDetails);
  // if(!formApply){

  //   return(
  //     <div>
  //     <h1>{jobDetails[0].jobTitle}</h1>
  //     <p>{jobDetails[0].description}</p>
  //     <p>{jobDetails[0].role}</p>

  //     <Link href={'#'}>Apply now</Link>
  //     <Form/>

  //   </div>
  // )
  // }
};

export default page;
