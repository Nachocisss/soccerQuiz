import React from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";

export function Card({ buttons, subtitle }: any) {
  return (
    <div className="CardContainer">
      <h2>Football Quiz</h2>
      <h3>{subtitle}</h3>
      {buttons.map((m) => {
        return <Button props={m} key={m.title} />;
      })}
    </div>
  );
}
