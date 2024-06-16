import React from "react";
import "./HighScores.css";
import { BackButton } from "../../components/Button/BackButton/BackButton.tsx";
import { getHighScores } from "../../utils/localStorage.tsx";
import { positionIcons } from "../../constants/PlacesConstans.tsx";

const NO_NAME_YET = "No one yet!";

export function HighScores() {
  const records = getHighScores();
  const podiumLevels = [
    {
      name: records.second?.name ?? NO_NAME_YET,
      className: "podiumSilver",
      icon: positionIcons["secondPlace"],
      score: records.second?.score ?? null,
    },
    {
      name: records.first?.name ?? NO_NAME_YET,
      className: "podiumGold",
      icon: positionIcons["firstPlace"],
      score: records.first?.score ?? null,
    },
    {
      name: records.third?.name ?? NO_NAME_YET,
      className: "podiumBronze",
      icon: positionIcons["thirdPlace"],
      score: records.third?.score ?? null,
    },
  ];

  const podiumLevelRender = (level) => {
    return (
      <div className="podium" key={level.className}>
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
