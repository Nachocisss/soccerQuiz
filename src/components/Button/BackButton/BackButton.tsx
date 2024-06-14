import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./BackButton.css";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="iconBackContainer"
      onClick={() => {
        navigate("/");
      }}
    >
      <IoArrowBack size={14} />
      <span className="backText"> Back to menu</span>
    </div>
  );
}
