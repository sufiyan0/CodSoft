"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const Quiz = ({ data }: any) => {
  interface quiz {
    id: number;
    question: string;
    answer: string;
    correctAnswer: string;
  }

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
  const [finalResult, setFinalResult] = useState<quiz[]>([]);

  console.log(data);
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

    if (selectedAnswers) {
      const resultdata: quiz = {
        id: activeQuestion + 1,
        question: question,
        answer: "Correct Answer",
        correctAnswer: correctAnswer,
      };

      setFinalResult([...finalResult, resultdata]);
    } else {
      const resultdata = {
        id: activeQuestion + 1,
        question: question,
        correctAnswer: correctAnswer,
        answer: "Wrong Answer",
      };

      setFinalResult([...finalResult, resultdata]);
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
      console.log(showResult);
    }

    setChecked(false);
  };
  console.log(finalResult);

  useCallback(() => {}, [nextQuestion]);

  return (
    <>
      <div className="containerss mb-6 min-h-screen items-center justify-center">
        <h1 className="text-cyan-600 text-4xl flex items-end justify-center shadow-md">
          Quiz
        </h1>
        <div>
          <h2></h2>

          {!showResult ? (
            <div className=" my-6">
              Question: {activeQuestion + 1} / {questions.length}
              <h3 className="text-black text-3xl mt-4 mb-6 ">{question}</h3>
              {answers.map((answer: any, i: any) => (
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
              <div className=" font-semibold text-xl">
                <h3 className="my-2 mb-6 underline text-2xl">Overall Result: {(result.score / 25) * 100}%</h3>
                <p className="my-2 ">Total Questions: {questions.length}</p>
                <p className="my-2 ">Correct Answers: {result.correctAnswers}</p>
                <p className="my-2 ">Wrong Answers: {result.wrongAnswers}</p>
                <p className="my-2 mb-12">Your Score: {result.score}</p>
              </div>

              <div>
                {finalResult.map((data) => (
                  <div
                    key={data.id}
                    className="flex flex-col w-full border-2 rounded-md p-4 my-3 "
                  >
                    <p
                      className={`${
                        data.answer == "Correct Answer"
                          ? "text-green-500"
                          : "text-red-500"
                      } font-bold text-xl underline `}
                    >
                      {data.answer}
                    </p>
                    <p className=" text-lg my-3 ">
                      <span className="font-bold">Question :</span>{" "}
                      {data.question}
                    </p>
                  </div>
                ))}
              </div>
              <button
                className="btn buttonss"
                onClick={() => window.location.reload()}
              >
                Restart
              </button>
              <button className="btn buttonss">
                <Link href="../">Go Back</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
