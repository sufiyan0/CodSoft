interface quiz {
  totalQuestions: number;
  topic:string;
  description:string;
    questions: {
        id: number;
        question: string;
        answers: string[];
        correctAnswer: string;
    }[];

}

export const General: quiz = {
    totalQuestions: 5,
    topic:'General',
    description:"",
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        answers: ['Madrid', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 'Paris',
      },
      {
        id: 2,
        question: 'What is the largest planet in our solar system?',
        answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctAnswer: 'Jupiter',
      },
      {
        id: 3,
        question: 'What is the smallest country in the world?',
        answers: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
        correctAnswer: 'Vatican City',
      },
      {
        id: 4,
        question: 'What is the most widely spoken language in the world?',
        answers: ['English', 'Mandarin', 'Spanish', 'Hindi'],
        correctAnswer: 'Mandarin',
      },
      {
        id: 5,
        question: 'Who is the founder of Microsoft?',
        answers: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
        correctAnswer: 'Bill Gates',
      },
    ],
  };
export const AI: quiz = {
    totalQuestions: 5,
    topic:'AI',
    description:"",
    questions: [
      {
        id: 1,
        question: 'What is AI?',
        answers: ['Madrid', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 'Paris',
      },
      {
        id: 2,
        question: 'What is the largest planet in our solar system?',
        answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctAnswer: 'Jupiter',
      },
      {
        id: 3,
        question: 'What is the smallest country in the world?',
        answers: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
        correctAnswer: 'Vatican City',
      },
      {
        id: 4,
        question: 'What is the most widely spoken language in the world?',
        answers: ['English', 'Mandarin', 'Spanish', 'Hindi'],
        correctAnswer: 'Mandarin',
      },
      {
        id: 5,
        question: 'Who is the founder of Microsoft?',
        answers: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
        correctAnswer: 'Bill Gates',
      },
    ],
  };
export const ML: quiz = {
    totalQuestions: 5,
    description:"",
    topic:'ML',
    questions: [
      {
        id: 1,
        question: 'What is ML?',
        answers: ['Madrid', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 'Paris',
      },
      {
        id: 2,
        question: 'What is the largest planet in our solar system?',
        answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctAnswer: 'Jupiter',
      },
      {
        id: 3,
        question: 'What is the smallest country in the world?',
        answers: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
        correctAnswer: 'Vatican City',
      },
      {
        id: 4,
        question: 'What is the most widely spoken language in the world?',
        answers: ['English', 'Mandarin', 'Spanish', 'Hindi'],
        correctAnswer: 'Mandarin',
      },
      {
        id: 5,
        question: 'Who is the founder of Microsoft?',
        answers: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
        correctAnswer: 'Bill Gates',
      },
    ],
  };


export default {General , AI , ML}
  