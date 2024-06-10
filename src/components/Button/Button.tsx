import React from "react";
import "./Button.css";
import "./ButtonPrimary.css";
import "./ButtonSecondary.css";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext.tsx";

export function Button({ props }: any) {
  const navigate = useNavigate();
  const { generateNewQuestion } = useGameContext();

  const clickHandler = (props) => {
    navigate(props.to);
    generateNewQuestion();
  };

  return (
    <button
      onClick={() => clickHandler(props)}
      className={`buttonContainer buttonContainer${props.type}`}
    >
      {props.icon ? props.icon : null}
      <span className={`buttonTitle buttonTitle${props.type}`}>
        {props.title}
      </span>
    </button>
  );
}
