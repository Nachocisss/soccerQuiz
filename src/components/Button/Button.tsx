import React from "react";
import "./Button.css";
import "./ButtonPrimary.css";
import "./ButtonSecondary.css";

export function Button({ props }: any) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`buttonContainer buttonContainer${props.type}`}
    >
      {props.icon ? props.icon : null}
      <span className={`buttonTitle buttonTitle${props.type}`}>
        {props.title}
      </span>
    </button>
  );
}
