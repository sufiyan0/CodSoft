interface quiz {
  totalQuestions: number;
  topic: string;
  description: string;
  questions: {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
}

export const General: quiz = {
  totalQuestions: 5,
  topic: "General",
  description: "Embark on a journey through a plethora of topics with our General Knowledge Quiz! From iconic landmarks to historical events, and from scientific discoveries to cultural phenomena, this quiz encompasses a wide array of subjects to test your diverse knowledge. Whether you're a trivia buff or simply curious about the world around you, challenge yourself with this quiz to uncover new facts and expand your understanding of the world.",
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: ["Madrid", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      id: 3,
      question: "What is the smallest country in the world?",
      answers: ["Monaco", "Maldives", "Vatican City", "San Marino"],
      correctAnswer: "Vatican City",
    },
    {
      id: 4,
      question: "What is the most widely spoken language in the world?",
      answers: ["English", "Mandarin", "Spanish", "Hindi"],
      correctAnswer: "Mandarin",
    },
    {
      id: 5,
      question: "Who is the founder of Microsoft?",
      answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
      correctAnswer: "Bill Gates",
    },
  ],
};
export const AI: quiz = {
  totalQuestions: 5,
  topic: "AI",
  description: "Explore the forefront of technological innovation with our Artificial Intelligence Quiz! Delve into the realms of machine learning, neural networks, and natural language processing as you unravel the complexities of AI technology. Whether you're an AI enthusiast, a budding developer, or simply intrigued by the possibilities of artificial intelligence, this quiz offers an opportunity to deepen your understanding and discover the transformative potential of AI in our lives.",
  questions: [
    {
      id: 1,
      question: "What does AI stand for?",
      answers: [
        "Artificial Intellect",
        "Automated Interaction",
        "Artificial Intelligence",
        "Advanced Inference"
      ],
      correctAnswer: "Artificial Intelligence",
    },
    {
      id: 2,
      question: "Which programming language is commonly used in AI?",
      answers: ["Java", "Python", "C++", "Ruby"],
      correctAnswer: "Python",
    },
    {
      id: 3,
      question: "What is the Turing Test?",
      answers: [
        "A test to check computer graphics",
        "A test to evaluate AI conversational abilities",
        "A test to measure computational speed",
        "A test to assess machine learning algorithms"
      ],
      correctAnswer: "A test to evaluate AI conversational abilities",
    },
    {
      id: 4,
      question:
        "Which company developed the AI-powered personal assistant Siri?",
      answers: ["Google", "Apple", "Microsoft", "Amazon"],
      correctAnswer: "Apple",
    },
    {
      id: 5,
      question: "What is a neural network?",
      answers: [
        "A type of computer memory",
        "A type of internet connection",
        "A network of biological neurons",
        "A computational model inspired by the human brain"
      ],
      correctAnswer: "A computational model inspired by the human brain",
    },
  ],
};

export const ML = {
  totalQuestions: 5,
  topic: "ML",
  description: "Venture into the realm of data-driven decision-making with our Machine Learning Quiz! From supervised and unsupervised learning to classification algorithms and model evaluation techniques, this quiz covers essential concepts in the field of machine learning. Whether you're a data scientist, a student, or an aspiring ML practitioner, put your knowledge to the test and refine your understanding of this powerful tool shaping industries and driving innovation.",
  questions: [
    {
      id: 1,
      question: "What is Machine Learning?",
      answers: [
        "A type of programming language",
        "A branch of computer science",
        "An advanced form of robotics",
        "A type of cloud computing"
      ],
      correctAnswer: "A branch of computer science",
    },
    {
      id: 2,
      question: "Which of the following is NOT a type of Machine Learning?",
      answers: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Directed Learning"
      ],
      correctAnswer: "Directed Learning",
    },
    {
      id: 3,
      question: "What is the purpose of training data in Machine Learning?",
      answers: [
        "To test the model",
        "To validate the model",
        "To optimize the model",
        "To teach the model"
      ],
      correctAnswer: "To teach the model",
    },
    {
      id: 4,
      question:
        "Which algorithm is commonly used for classification tasks in Machine Learning?",
      answers: ["Linear Regression", "K-Means", "Decision Trees", "Apriori"],
      correctAnswer: "Decision Trees",
    },
    {
      id: 5,
      question: "What is overfitting in the context of Machine Learning?",
      answers: [
        "When the model performs poorly on training data",
        "When the model generalizes well to unseen data",
        "When the model memorizes noise in the training data",
        "When the model is undertrained"
      ],
      correctAnswer: "When the model memorizes noise in the training data",
    },
  ],
};

export default { General, AI, ML };
