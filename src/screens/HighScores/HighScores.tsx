import React from "react";
import "./HighScores.css";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { BackButton } from "../../components/Button/BackButton/BackButton.tsx";
import { getHighScores } from "../../utils/localStorage.tsx";

const NO_NAME_YET = "No one yet!";

export function HighScores() {
  const records = getHighScores();
  const podiumLevels = [
    {
      name: records.second?.name ?? NO_NAME_YET,
      className: "podiumSilver",
      icon: <TbHexagonNumber2 size={60} fill="silver" />,
      score: records.second?.score ?? null,
    },
    {
      name: records.first?.name ?? NO_NAME_YET,
      className: "podiumGold",
      icon: <TbHexagonNumber1 size={60} fill="gold" />,
      score: records.first?.score ?? null,
    },
    {
      name: records.third?.name ?? NO_NAME_YET,
      className: "podiumBronze",
      icon: <TbHexagonNumber3 size={60} fill="#bd371c" />,
      score: records.third?.score ?? null,
    },
  ];

  const podiumLevelRender = (level) => {
    console.log(level.score);

    return (
      <div className="podium" key={level.name}>
        <span className="podiumText">{level.name}</span>
        <div className={`podiumInside ${level.className}`}>
          {level.icon}
          {level.score ? (
            <div className="scoreContainer">
              <p className="podiumScore">Score: {level.score}</p>
            </div>
          ) : null}
        </div>
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
