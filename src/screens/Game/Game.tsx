import React, { useMemo } from "react";
import "./Game.css";
import { Button } from "../../components/Button/Button.tsx";
import { Timer } from "../../components/Timer/Timer.tsx";
import { Score } from "../../components/Score/Score.tsx";
import { useQuestionContext } from "../../context/QuestionContext.tsx";
import { useScoreContext } from "../../context/ScoreContext.tsx";
import { useNavigate } from "react-router-dom";

const NUMBER_OF_QUESTION = 10;

export function Game() {
  const { currentQuestion, askedQuestionIndex, generateNewQuestion } =
    useQuestionContext();
  const { resetTime, addScore } = useScoreContext();
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

  const GameContent = useMemo(() => {
    return (
      <>
        <h2>World Cup Party Quiz</h2>
        <p className={"gameQuestion"}>{currentQuestion.question}</p>
        <p>
          Pregunta {steps} de {NUMBER_OF_QUESTION}
        </p>
        <progress value={steps * 10} max="100" className="progressBar" />
        {optionsRender()}
      </>
    );
  }, [currentQuestion]);

  return (
    <div className="gameScreen">
      <div className="gameContainer">
        <Score />
        <Timer />
        {GameContent}
      </div>
    </div>
  );
}
