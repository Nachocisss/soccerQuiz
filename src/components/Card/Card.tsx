import React from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";
import { useGameContext } from "../../context/GameContext.tsx";

export function Card() {
  const { currentQuestion, askedQuestionIndex } = useGameContext();
  const steps = askedQuestionIndex.length;
  return (
    <div className="cardContainer">
      <h2>World Cup Party Quiz</h2>
      <p className={"cardQuestion"}>{currentQuestion.question}</p>
      <p>Pregunta {steps} de 10</p>
      <progress value={steps * 10} max="100" className="progressBar" />
      {currentQuestion.alternatives.map((m) => {
        return <Button props={{ title: m }} key={m} />;
      })}
    </div>
  );
}
