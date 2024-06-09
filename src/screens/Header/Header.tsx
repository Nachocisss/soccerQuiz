import React from "react";
import "./Header.css";
import { PiSoccerBallFill } from "react-icons/pi";

export function Header() {
  return (
    <div className="headerContainer">
      <h1> World Cup Quiz</h1>
      <PiSoccerBallFill
        size={50}
        style={{ backgroundColor: "white", borderRadius: 9999 }}
      />
    </div>
  );
}
