import React from "react";
import "./Card.css";
import { Button } from "../Button/Button.tsx";

export function Card({ buttons }: any) {
  return (
    <div className="CardContainer">
      <h2>World Cup Party Quiz</h2>
      <h3>{"aqui la pregunta"}</h3>
      <progress value="10" max="100" className="progressBar" />
      {buttons.map((m) => {
        return <Button props={m} key={m.title} />;
      })}
    </div>
  );
}
