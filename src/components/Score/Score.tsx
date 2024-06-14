import React from "react";
import { useScoreContext } from "../../context/ScoreContext.tsx";
import "./Score.css";
export function Score() {
  const { score } = useScoreContext();
  return (
    <div>
      <span className="scoreText">Your Score: {score}</span>
    </div>
  );
}
