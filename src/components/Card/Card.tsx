import React, { useMemo } from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";
import { useGameContext } from "../../context/GameContext.tsx";
import { Timer } from "../Timer/Timer.tsx";
import { useScore } from "../../context/ScoreContext.tsx";
import { Score } from "../Score/Score.tsx";

const NUMBER_OF_QUESTION = 10;

export function Card() {
  const { currentQuestion, askedQuestionIndex, generateNewQuestion } =
    useGameContext();
  const { resetTime, addScore } = useScore();
  const steps = askedQuestionIndex.length;

  const checkAnswer = (alternativeIndex) => {
    console.log(alternativeIndex, currentQuestion.answer);
    if (alternativeIndex === currentQuestion.answer) {
      addScore();
    }
  };

  const optionsRender = () => {
    return currentQuestion.alternatives.map((alternative, index) => {
      return (
        <Button
          props={{
            title: alternative,
            onClick: () => {
              checkAnswer(index), generateNewQuestion(), resetTime();
            },
          }}
          key={alternative}
        />
      );
    });
  };

  const cardContent = useMemo(() => {
    return (
      <>
        <h2>World Cup Party Quiz</h2>
        <p className={"cardQuestion"}>{currentQuestion.question}</p>
        <p>
          Pregunta {steps} de {NUMBER_OF_QUESTION}
        </p>
        <progress value={steps * 10} max="100" className="progressBar" />
        {optionsRender()}
      </>
    );
  }, []);

  return (
    <div className="cardContainer">
      <Score />
      <Timer />
      {cardContent}
    </div>
  );
}
