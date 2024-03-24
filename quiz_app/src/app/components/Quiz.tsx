"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { General , AI , ML } from "../../data/data";

// async function getData() {
//   const res = await fetch("https://api.quotable.io/random");
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

const  Quiz  = ({data}:any) => {
  // console.log(getData())
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  console.log(data)
  const { questions } = data;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  
  
  const answerSelected = (answer: any, index: any) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    // console.log(answer);
    if (answer === correctAnswer) {
      setSelectedAnswers(true);
      // console.log(true);
    } else {
      setSelectedAnswers(false);
      // console.log(false);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswers
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
            score: prev.score + 5,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
      console.log(showResult);
    }
    setChecked(false);
  };

  return (
    <>
      <div className="containerss">
        <h1 className="text-cyan-400 text-4xl flex items-end justify-center shadow-md">
          Quiz
        </h1>
        <div>
          <h2></h2>

          {!showResult ? (
            <div className="answers">
              Question: {activeQuestion + 1} / {questions.length}
              <h3 className="text-black  ">{question}</h3>
              {answers.map((answer:any, i:any) => (
                <li
                key={i}
                onClick={() => answerSelected(answer, i)}
                className={` text-black ${
                  selectedAnswerIndex === i ? "li-selected" : "li-hover"
                } `}
                
                >
                  {answer}
                </li>
              ))}
              {checked ? (
                <button onClick={nextQuestion} className="btn buttonss">
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="btn-disabled buttonss"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container">
              <h3>Overall Result: {(result.score / 25) * 100}%</h3>
              <p>Total Questions: {questions.length}</p>
              <p>Correct Answers: {result.correctAnswers}</p>
              <p>Wrong Answers: {result.wrongAnswers}</p>
              <p>Your Score: {result.score}</p>
              <button className="btn buttonss" onClick={() => window.location.reload()}>Restart</button>
              <button className="btn buttonss" ><Link href="../">Go Back</Link></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
