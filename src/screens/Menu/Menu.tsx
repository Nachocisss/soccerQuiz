import React from "react";
import "./Menu.css";
import { FaPlay } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { Button } from "../../components/Button/Button.tsx";
const menuButtons = [
  {
    title: "Start Quiz",
    icon: <FaPlay size={15} fill="white" />,
    type: "Primary",
    to: "/Game",
  },
  {
    title: "High Scores",
    icon: <TfiCup size={15} />,
    type: "Secondary",
  },
];

function menuCard() {
  return (
    <div className="cardContainer">
      <h2>World Cup Party Quiz</h2>
      <h3>{"subtitle"}</h3>
      {menuButtons.map((m) => {
        return <Button props={m} key={m.title} />;
      })}
    </div>
  );
}

export function Menu() {
  return <div className="menuScreen">{menuCard()}</div>;
}
