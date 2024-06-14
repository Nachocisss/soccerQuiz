import React from "react";
import { useScore } from "../../context/ScoreContext.tsx";
import "./End.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.tsx";
import { IoArrowBack } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";

export function End() {
  const navigate = useNavigate();
  const { score } = useScore();

  const endButtons = [
    {
      title: "Back to Menu",
      icon: <IoArrowBack size={14} stroke="white" />,
      type: "Primary",
      onClick: () => navigate("/"),
    },
    {
      title: "High Scores",
      icon: <TfiCup size={14} fill="white" />,
      type: "Primary",
      onClick: () => navigate("/Game"),
    },
  ];

  return (
    <div className="endContainer">
      <span className="endText">Game Over! Your score: {score}</span>
      <div className="buttonsContainer">
        {endButtons.map((option) => {
          return <Button key={option.title} props={option} />;
        })}
      </div>
    </div>
  );
}
