import React, { useEffect } from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";
import questions from "../../constants/QuestionsEasyEN.json";
import { useGameContext } from "../../context/GameContext.tsx";

export function Card() {
  const { askedQuestionIndex, addQuestionIndex } = useGameContext();
  const questionIndex = 0;
  const question = questions[questionIndex];

  useEffect(() => {
    addQuestionIndex(questionIndex);
  }, []);

  return (
    <div className="cardContainer">
      <h2>World Cup Party Quiz</h2>
      {askedQuestionIndex.map((q) => {
        return <p key={q}>{q}</p>;
      })}
      <span className={"cardQuestion"}>{question.question}</span>
      <p>Pregunta 1 de 10</p>
      <progress value="10" max="100" className="progressBar" />
      {question.alternatives.map((m) => {
        return <Button props={{ title: m }} key={m} />;
      })}
    </div>
  );
}
