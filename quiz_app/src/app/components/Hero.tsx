'use client';
import React from "react";

import Image from "next/image";
import quiz from "../public/quizz.png";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Hero = () => {
  const { user } = useUser();
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
            Start Your favorite Quiz
           
          </h1>
          <p className="mb-8 leading-relaxed text-cyan-600 font-semibold text-lg">

            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href={`/quizes`}>
              <button className="inline-flex text-white font-semibold bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-xl">View all Quizes</button>
            </Link>
            
            {!user ? (

              <button className="ml-4 inline-flex text-white bg-cyan-600 text-xl font-semibold border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded">
                <Link href={`/api/auth/login`}>Login</Link>
              </button>
            ): ("")
          }
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          
          <Image
            src={quiz}
            width={400}
            height={600}
            alt="quiz image"
            className="h-[300px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
