import React, { useMemo } from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";
import { Timer } from "../Timer/Timer.tsx";
import { Score } from "../Score/Score.tsx";
import { useGameContext } from "../../context/GameContext.tsx";
import { useScore } from "../../context/ScoreContext.tsx";
import { useNavigate } from "react-router-dom";

const NUMBER_OF_QUESTION = 10;

export function Card() {
  const { currentQuestion, askedQuestionIndex, generateNewQuestion } =
    useGameContext();
  const { resetTime, addScore } = useScore();
  const steps = askedQuestionIndex.length;
  const navigate = useNavigate();

  const checkAnswer = (alternativeIndex) => {
    if (alternativeIndex === currentQuestion.answer) {
      addScore();
    }
  };

  const onClickHandler = (index) => {
    checkAnswer(index);
    if (steps === NUMBER_OF_QUESTION) {
      navigate("/End");
    } else {
      generateNewQuestion();
      resetTime();
    }
  };

  const optionsRender = () => {
    return currentQuestion.alternatives.map((alternative, index) => {
      return (
        <Button
          props={{
            title: alternative,
            onClick: () => onClickHandler(index),
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
  }, [currentQuestion]);

  return (
    <div className="cardContainer">
      <Score />
      <Timer />
      {cardContent}
    </div>
  );
}
