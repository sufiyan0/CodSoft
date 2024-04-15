// 'use client'
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
// import React, { useEffect } from "react";
// import { Image } from "next/image";
import hero from "../public/4380-min-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../lib/features/jobsdata/jobdataSlice";
import JobList from "./JobList";
import JobCard from "./JobCard";
import { useEffect } from "react";
import About from "./About";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import Filterdata from "./Filterdata";

const HeroMain = () => {
  const containerStyle = "flex flex-wrap items-center justify-center";

  return (
    <div>
      <Hero />
      <Filterdata />
      <section className="">
        <About />
      </section>
      <section className="">
        <JobList />
      </section>
      <section className="bg-slate-800 py-12">
        <Testimonial />
      </section>
    </div>
  );
};

export default HeroMain;
