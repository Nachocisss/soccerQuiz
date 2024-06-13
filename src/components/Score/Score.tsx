import React from "react";
import { useScore } from "../../context/ScoreContext.tsx";
import "./Score.css";
export function Score() {
  const { score } = useScore();
  return (
    <div className="scoreContainer">
      <span className="scoreText">Your Score: {score}</span>
    </div>
  );
}
