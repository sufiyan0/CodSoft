'use client';
import React from 'react'
import {General , AI , ML} from '../../data/data'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';
import Hero from '../components/Hero';
import Hero1 from '../components/Hero1';  



const page = () => {
  const { user } = useUser();
  if(!user){
    return(
      <>
        <Hero1/>
      </>
    )
  }else{

  
  return (
    <>
    {console.log(user)}
      <div className='flex flex-col flex-wrap items-center justify-center'>
        
        <h1 className='text-4xl font-bold text-cyan-800 items-center justify-center flex p-4 m-4 '>Quiz App</h1>


        <div className="flex flex-wrap">
        <div className='flex flex-col w-96 p-4 m-4  rounded-md border border-cyan-500 shadow-lg bg-cyan-100 '>
          <h1 className='text-xl text-gray-600 f '>{General.topic}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus debitis animi reiciendis numquam atque, deleniti dicta quisquam ex deserunt.</p>
          <button className='p-4 m-4 border border-cyan-300 shadow-lg bg-cyan-200 hover:scale-x-105 font-semibold text-xl  '><Link href={`/quiz/${General.topic}`}>start quiz</Link></button>
        </div>
        <div className='flex flex-col w-96 p-4 m-4  rounded-md border border-cyan-500 shadow-lg bg-cyan-100 '>
          <h1 className='text-xl text-gray-600 f '>{AI.topic}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus debitis animi reiciendis numquam atque, deleniti dicta quisquam ex deserunt.</p>
          <button className='p-4 m-4 border border-cyan-300 shadow-lg bg-cyan-200 hover:scale-x-105 font-semibold text-xl  '><Link href={`/quiz/${AI.topic}`}>start quiz</Link></button>
        </div>
        <div className='flex flex-col w-96 p-4 m-4  rounded-md border border-cyan-500 shadow-lg bg-cyan-100 '>
          <h1 className='text-xl text-gray-600 f '>{ML.topic}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus debitis animi reiciendis numquam atque, deleniti dicta quisquam ex deserunt.</p>
          <button className='p-4 m-4 border border-cyan-300 shadow-lg bg-cyan-200 hover:scale-x-105 font-semibold text-xl  '><Link href={`/quiz/${ML.topic}`}>start quiz</Link></button>
        </div>
        </div>

       
      </div>
    </>
  )
  }
}

export default page