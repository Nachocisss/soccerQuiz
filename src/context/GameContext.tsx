import React, { createContext, useContext, useState } from "react";
import questions from "../constants/QuestionsEasyEN.json";

const questionTotal = questions.length;
const initialIndex = generateNewIndex();
const initialQuestion = questions[initialIndex];

function generateNewIndex() {
  return Math.floor(Math.random() * questionTotal);
}
const gameContext = createContext({
  currentQuestion: initialQuestion,
  askedQuestionIndex: [initialIndex],
  generateNewQuestion: () => {},
});

export function GameProvider({ children }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [askedQuestionIndex, setAskedQuestionIndex] = useState([initialIndex]);

  function generateNewQuestion() {
    const newIndex = generateNewIndex();
    setAskedQuestionIndex((prev) => [...prev, newIndex]);
    setCurrentQuestion(questions[newIndex]);
  }

  return (
    <gameContext.Provider
      value={{ currentQuestion, askedQuestionIndex, generateNewQuestion }}
    >
      {children}
    </gameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(gameContext);
}
