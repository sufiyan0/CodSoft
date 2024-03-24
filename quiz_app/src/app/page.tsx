"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import { useUser } from '@auth0/nextjs-auth0/client';
// import { quiz } from "@/data/data";

export default function Home() {
  return (
    <>
      <main>
        <div className=" flex flex-col">
          
          <Hero />
        </div>
      </main>
    </>
  );
}
