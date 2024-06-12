import React from "react";
import { useScore } from "../../context/ScoreContext.tsx";
import "./Timer.css";

export function Timer() {
  const { time } = useScore();
  return (
    <div className="timeContainer">
      <span className="timerText">{time}</span>
    </div>
  );
}
