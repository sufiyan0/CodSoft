"use client";
import React from "react";
import { General, AI, ML } from "../../data/data";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Hero from "./Hero";
import Hero1 from "./Hero1";

const ShowQuizes = () => {
    const { user, isLoading } = useUser();
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!user) {
      return (
        <>
          <Hero1 />
        </>
      );
    } else {
      return (
        <>
          <div className="flex flex-col flex-wrap items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-cyan-800 items-center justify-center flex p-4 m-4 ">
              Quiz App
            </h1>
  
            <div className="flex flex-wrap">
              <div className="flex flex-col w-96 p-4 m-4  rounded-md border border-cyan-500 shadow-lg bg-cyan-50 ">
                <h1 className="text-2xl mb-4 text-cyan-800 font-semibold  ">
                  {General.topic}
                </h1>
                <p>{General.description}</p>
                <button className="p-4 m-4 border rounded-md border-cyan-800 mt-6 text-white font-bold shadow-lg bg-cyan-500 hover:scale-x-105 text-2xl  ">
                  <Link href={`/quiz/${General.topic}`}>Start Quiz</Link>
                </button>
              </div>
              <div className="flex flex-col w-96 p-4 m-4  rounded-md border border-cyan-500 shadow-lg bg-cyan-50 ">
                <h1 className="text-2xl mb-4 text-cyan-800 font-semibold   ">
                  {AI.topic}
                </h1>
                <p>{AI.description}</p>
                <button className="p-4 m-4 border rounded-md border-cyan-800 mt-6 text-white font-bold shadow-lg bg-cyan-500 hover:scale-x-105 text-2xl   ">
                  <Link href={`/quiz/${AI.topic}`}>Start Quiz</Link>
                </button>
              </div>
              <div className="flex flex-col w-96 p-4 m-4  rounded-md border border-cyan-500 shadow-lg bg-cyan-50 ">
                <h1 className="text-2xl mb-4 text-cyan-800 font-semibold   ">
                  {ML.topic}
                </h1>
                <p>{ML.description}</p>
                <button className="p-4 m-4 border rounded-md border-cyan-800 mt-6 text-white font-bold shadow-lg bg-cyan-500 hover:scale-x-105 text-2xl   ">
                  <Link href={`/quiz/${ML.topic}`}>Start Quiz</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
}

export default ShowQuizes