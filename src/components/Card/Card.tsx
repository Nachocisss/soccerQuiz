import React from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";
import { useGameContext } from "../../context/GameContext.tsx";
import { Timer } from "../Timer/Timer.tsx";

const NUMBER_OF_QUESTION = 10;

export function Card() {
  const { currentQuestion, askedQuestionIndex, generateNewQuestion } =
    useGameContext();
  const steps = askedQuestionIndex.length;

  const optionsRender = () => {
    return currentQuestion.alternatives.map((m) => {
      return (
        <Button
          props={{ title: m, onClick: () => generateNewQuestion() }}
          key={m}
        />
      );
    });
  };

  return (
    <div className="cardContainer">
      <Timer />
      <h2>World Cup Party Quiz</h2>
      <p className={"cardQuestion"}>{currentQuestion.question}</p>

      <p>
        Pregunta {steps} de {NUMBER_OF_QUESTION}
      </p>
      <progress value={steps * 10} max="100" className="progressBar" />
      {optionsRender()}
    </div>
  );
}
