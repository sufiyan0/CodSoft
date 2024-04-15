import React from "react";
import img1 from "../public/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
import img2 from "../public/scott-graham-5fNmWej4tAA-unsplash.jpg"
import Image from "next/image";


const About = () => {
  return (
    <div className="bg-slate-900">
      <section className="text-gray-600 body-font">
        <h1 className="flex mx-auto items-center justify-center text-4xl bg-slate-900 py-4 text-white font-bold ">About Us</h1>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Lorem ipsum dolor sit.
              <br className="hidden lg:inline-block" />
              Lorem Dolor.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio rerum amet necessitatibus sed incidunt quae, assumenda eum ea. Numquam dolore quibusdam voluptate, laudantium facilis consequuntur molestias facere cum cupiditate.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                More Details
              </button>
             
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={img1}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-300 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={img2}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
             Lorem ipsum dolor sit.
              <br className="hidden lg:inline-block" />
              Lorem  dolor.
            </h1>
            <p className="mb-8 leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nostrum dignissimos dolores porro accusamus. Accusantium rem voluptas animi. Maiores nisi quasi odit asperiores vitae non voluptate, voluptatem ipsam enim accusantium!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              More Details
              </button>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
