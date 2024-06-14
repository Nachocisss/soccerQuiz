import React from "react";
import "./HighScores.css";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="highScoresBoard">
      <div
        className="iconBackContainer"
        onClick={() => {
          navigate("/");
        }}
      >
        <IoArrowBack size={20} />
        <span className="backText"> Back to menu</span>
      </div>
      <h2> High Scores</h2>
      <div className="podiumContainer">{podium()}</div>
    </div>
  );
}
