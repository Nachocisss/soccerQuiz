import React from "react";
import "./Modal.css";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaTemperatureFull } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../context/ScoreContext.tsx";

const dificultsOptions = [
  {
    title: "Easy",
    icon: <FaTemperatureQuarter size={100} fill="green" />,
  },
  {
    title: "Medium",
    icon: <FaTemperatureHalf size={100} fill="yellow" />,
  },
  {
    title: "Hard",
    icon: <FaTemperatureFull size={100} fill="red" />,
  },
];

export function Modal() {
  const navigate = useNavigate();
  const { resetTime } = useScore();

  const clickHandler = () => {
    resetTime();
    navigate("/Game");
  };

  const optionRender = (option) => {
    return (
      <div
        className={`dificultContainer dificultContainer${option.title}`}
        onClick={() => clickHandler()}
      >
        {option.icon}
        <span className="dificultText"> {option.title}</span>
      </div>
    );
  };

  return (
    <div className="modalContainer">
      <div className="titleContainer">
        <span className="modalTitle">
          What difficulty would you like to play at?
        </span>
      </div>
      <div className="levelsContainer">
        {dificultsOptions.map((option) => {
          return optionRender(option);
        })}
      </div>
    </div>
  );
}
