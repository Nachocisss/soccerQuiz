import React from "react";
import "./Menu.css";
import { Card } from "../../components/Card/Card.tsx";
import { FaPlay } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
const menuButtons = [
  {
    title: "Start Quiz",
    icon: <FaPlay size={15} fill="white" />,
    type: "Primary",
    to: "/Game",
  },
  {
    title: "High Scores",
    icon: <TfiCup size={15} fill="white" />,
    type: "Secondary",
  },
];

export function Menu() {
  return (
    <div className="menuScreen">
      <Card buttons={menuButtons} />
    </div>
  );
}
