'use client'
import React, { useEffect, useState } from 'react'
import Quiz from './Quiz'
import { General, AI, ML } from '../../data/data'

const MultiQuiz = ({option}:any) => {
  
    console.log(option)
    const [activeQuiz , setActiveQuiz] = useState({})

    useEffect(() => {
      if(option === "General"){
        setActiveQuiz("General")
      } else if(option === "AI"){
        setActiveQuiz("AI")
      } else if(option === "ML"){
        setActiveQuiz("ML")
      }
    }, [option])
      
      
    if(activeQuiz === "General"){
      return (
        <>
          <Quiz data={General} />
        </>
      )
    } else if(activeQuiz === "AI"){
      return (
        <>
          <Quiz data={AI} />
        </>
      )
    } else if(activeQuiz === "ML"){
      return (
        <>
          <Quiz data={ML} />
        </>
      )
    }
}

export default MultiQuiz