'use client';
import React from "react";
import Image from "next/image";
import quiz from "../public/download.jpeg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-cyan-800 body-font text-xl">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-8">
          <Image
            src={quiz}
            width={500}
            height={800}
            alt="quiz image"
            className="h-[300px] md:h-[500px]"
          />
        </div>
       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-700">
            Please Login to view Quizes
          </h1>
          <p className="mb-8 leading-relaxed text-cyan-600 font-semibold">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href={`/api/auth/login`}>
              <button className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
                Login{" "}
              </button>
            </Link>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
