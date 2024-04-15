// 'use client'
import React from "react";
import { client } from "../../../sanity/lib/client";
import Card from "./Card";

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

const Filterdata = async () => {
  const data = await getClient();

  return (
    <div className="bg-slate-800 text-white py-10 ">
      {/* <h1 className="text-4xl font-bold py-6 justify-center flex text-white mx-auto">Filterdata</h1> */}

      {data && <Card jobdata={data} />}
    </div>
  );
};

export default Filterdata;
