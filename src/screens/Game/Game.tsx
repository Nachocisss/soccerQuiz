import React from "react";
import "./Game.css";
import { Card } from "../../components/Card/Card.tsx";

export function Game() {
  return <div className="gameScreen">{<Card />}</div>;
}
