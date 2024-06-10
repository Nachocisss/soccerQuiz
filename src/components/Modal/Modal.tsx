import React from "react";
import "./Modal.css";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaTemperatureFull } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export function Modal() {
  const navigate = useNavigate();
  return (
    <div className="modalContainer">
      <div className="titleContainer">
        <span className="modalTitle">
          What difficulty would you like to play at?
        </span>
      </div>
      <div className="levelsContainer">
        <div
          className="dificultContainer dificultContainerEasy"
          onClick={() => navigate("/Game")}
        >
          <FaTemperatureQuarter size={100} fill="green" />
          <span className="dificultText"> Easy</span>
        </div>
        <div
          className="dificultContainer dificultContainerMedium"
          onClick={() => navigate("/Game")}
        >
          <FaTemperatureHalf size={100} fill="yellow" />
          <span className="dificultText"> Medium</span>
        </div>
        <div
          className="dificultContainer dificultContainerHard"
          onClick={() => navigate("/Game")}
        >
          <FaTemperatureFull size={100} fill="red" />
          <span className="dificultText"> Hard</span>
        </div>
      </div>
    </div>
  );
}
