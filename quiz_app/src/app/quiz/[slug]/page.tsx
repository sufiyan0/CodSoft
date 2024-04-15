
import React, { useEffect, useState } from "react";
import Quiz from "../../components/Quiz";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AI , General , ML } from '../../../data/data';
import MultiQuiz from "@/app/components/MultiQuiz";

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



return(
  <>
    <MultiQuiz option={params.slug} />
  </>
)
}
export default page;
