import React from "react";
import { useScoreContext } from "../../context/ScoreContext.tsx";
import "./Timer.css";

export function Timer() {
  const { time } = useScoreContext();
  return (
    <div className="timeContainer">
      <span className="timerText">{time}</span>
    </div>
  );
}
