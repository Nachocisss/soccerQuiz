import React from "react";
import "./HighScores.css";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { BackButton } from "../../components/Button/BackButton/BackButton.tsx";

const NO_NAME_YET = "No one yet!";

export function HighScores() {
  const podiumLevels = [
    {
      name: NO_NAME_YET,
      className: "podiumSilver",
      icon: <TbHexagonNumber2 size={60} fill="silver" />,
    },
    {
      name: NO_NAME_YET,
      className: "podiumGold",
      icon: <TbHexagonNumber1 size={60} fill="gold" />,
    },
    {
      name: NO_NAME_YET,
      className: "podiumBronze",
      icon: <TbHexagonNumber3 size={60} fill="#bd371c" />,
    },
  ];

  const podiumLevelRender = (level) => {
    return (
      <div className="podium" key={level.name}>
        <span>{level.name}</span>
        <div className={level.className}>{level.icon}</div>
      </div>
    );
  };
  return (
    <div className="highScoresBoard">
      <BackButton />
      <h2> High Scores </h2>
      <div className="podiumContainer">
        {podiumLevels.map((level) => {
          return podiumLevelRender(level);
        })}
      </div>
    </div>
  );
}
