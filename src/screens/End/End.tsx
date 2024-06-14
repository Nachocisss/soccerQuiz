import React from "react";
import { useScore } from "../../context/ScoreContext.tsx";
import "./End.css";
export function End() {
  const { score } = useScore();
  return (
    <div className="endContainer">
      <span className="endText">Game Over! Your score: {score}</span>
    </div>
  );
}
