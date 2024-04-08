"use client";
import React, { useEffect, useState } from "react";
import Quiz from "../../components/Quiz";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AI , General , ML } from '../../../data/data';

interface quiz {
  totalQuestions: number;
  topic:string;
    questions: {
        id: number;
        question: string;
        answers: string[];
        correctAnswer: string;
    }[];

}

const page = ({ params }: { params: { slug: string } }) => {

  const [activeQuiz , setActiveQuiz] = useState({})

useEffect(() => {
  if(params.slug === "General"){
    setActiveQuiz(General)
  } else if(params.slug === "AI"){
    setActiveQuiz(AI)
  } else if(params.slug === "ML"){
    setActiveQuiz(ML)
  }
}, [params.slug])
  




  
if(activeQuiz === General){
  return (
    <>
      <Quiz data={General} />
    </>
  )
} else if(activeQuiz === AI){
  return (
    <>
      <Quiz data={AI} />
    </>
  )
} else if(activeQuiz === ML){
  return (
    <>
      <Quiz data={ML} />
    </>
  )
}
}
export default page;
