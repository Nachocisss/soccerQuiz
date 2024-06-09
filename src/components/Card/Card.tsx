import React from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";
import questions from "../../constants/QuestionsEasyEN.json";

export function Card() {
  const question = questions[0];
  return (
    <div className="cardContainer">
      <h2>World Cup Party Quiz</h2>
      <p className={"cardQuestion"}>{question.question}</p>
      <p>Pregunta 1 de 10</p>
      <progress value="10" max="100" className="progressBar" />
      {question.alternatives.map((m) => {
        return <Button props={{ title: m }} key={m} />;
      })}
    </div>
  );
}
