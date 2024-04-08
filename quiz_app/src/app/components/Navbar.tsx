"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { user } = useUser();

  return (
    <header className="text-cyan-800  body-font w-full ">
      <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-cyan-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-cyan-600">QuizBuzz</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link ref=""></Link> */}

          <Link href={`./`} className="mr-5 text-xl hover:underline">
            Home
          </Link>

          <Link href={`/quizes`} className="mr-5 text-xl hover:underline">
            All Quizes
          </Link>
          <Link href={`#`} className="mr-5 text-xl hover:underline">
            About
          </Link>
          <Link href="#" className="mr-5 text-xl  hover:underline">
            Contact Us
          </Link>
        </nav>

        {user ? (
          <button className="inline-flex items-center text-gray-100 font-semibold text-md bg-cyan-600 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-700 rounded text-base mt-4 md:mt-0">
            <a href="/api/auth/logout">Logout</a>
          </button>
        ) : (
          <button className="inline-flex items-center text-gray-100 font-semibold text-md bg-cyan-600 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-700 rounded text-base mt-4 md:mt-0">
            <a href="/api/auth/login">Login</a>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
