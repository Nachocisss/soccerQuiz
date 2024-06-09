import React from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";
import { FaPlay } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";

const menuButtons = [
  {
    title: "Start Quiz",
    icon: <FaPlay size={14} fill="white" />,
    type: "Primary",
  },
  { title: "High Scores", icon: <TfiCup size={14} />, type: "Secondary" },
];

export function Card() {
  return (
    <div className="CardContainer">
      <h2>Football Quiz</h2>
      <h3> Test your knowledge on this beautifull sport</h3>
      {menuButtons.map((m) => {
        return <Button props={m} key={m.title} />;
      })}
    </div>
  );
}
