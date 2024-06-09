import React from "react";
import "./Game.css";
import { Card } from "../../components/Card/Card.tsx";
const menuButtons = [
  {
    title: "Start Quiz",
    to: "/Game",
  },
];

export function Game() {
  return (
    <div className="gameScreen">
      <Card buttons={menuButtons} />
    </div>
  );
}
