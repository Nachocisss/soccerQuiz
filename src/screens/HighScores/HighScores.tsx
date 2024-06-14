import React from "react";
import "./HighScores.css";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";

const podium = () => {
  return (
    <>
      <div className="podium podiumSilver">
        <TbHexagonNumber2 size={60} fill="silver" />
      </div>
      <div className="podium podiumGold">
        <TbHexagonNumber1 size={60} fill="gold" />
      </div>
      <div className="podium podiumBronze">
        <TbHexagonNumber3 size={60} fill="#bd371c" />
      </div>
    </>
  );
};
export function HighScores() {
  return (
    <div className="highScoresBoard">
      <h2> High Scores</h2>
      <div className="podiumContainer">{podium()}</div>
    </div>
  );
}
