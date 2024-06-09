import React from "react";
import "./Button.css";
import "./ButtonPrimary.css";
import "./ButtonSecondary.css";
import { Link } from "react-router-dom";

export function Button({ props }: any) {
  return (
    <Link to={props.to}>
      <button className={`buttonContainer buttonContainer${props.type}`}>
        {props.icon ? props.icon : null}
        <span className={`buttonTitle buttonTitle${props.type}`}>
          {props.title}
        </span>
      </button>
    </Link>
  );
}
