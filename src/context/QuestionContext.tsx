import React, { createContext, useContext, useState } from "react";
import questions from "../constants/Questions/Questions.json";

const questionTotal = questions.length;
const initialIndex = generateNewIndex();
const initialQuestion = questions[initialIndex];

function generateNewIndex() {
  return Math.floor(Math.random() * questionTotal);
}
const questionContext = createContext({
  currentQuestion: initialQuestion,
  askedQuestionIndex: [initialIndex],
  generateNewQuestion: () => {},
  dificult: null,
  selectDificult: (d) => {
    return d;
  },
  resetQuestions: () => {},
});

export function QuestionProvider({ children }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [askedQuestionIndex, setAskedQuestionIndex] = useState([initialIndex]);
  const [dificult, setDificult] = useState(null);

  function generateNewQuestion() {
    const newIndex = generateNewIndex();
    setAskedQuestionIndex((prev) => [...prev, newIndex]);
    setCurrentQuestion(questions[newIndex]);
  }

  function selectDificult(d) {
    setDificult(d);
  }

  function resetQuestions() {
    setCurrentQuestion(initialQuestion);
    setAskedQuestionIndex([initialIndex]);
  }

  return (
    <questionContext.Provider
      value={{
        currentQuestion,
        askedQuestionIndex,
        generateNewQuestion,
        dificult,
        selectDificult,
        resetQuestions,
      }}
    >
      {children}
    </questionContext.Provider>
  );
}

export function useQuestionContext() {
  return useContext(questionContext);
}
