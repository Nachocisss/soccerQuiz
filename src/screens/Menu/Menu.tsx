import React, { useState } from "react";
import "./Menu.css";
import { FaPlay } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.tsx";
import { Modal } from "../../components/Modal/Modal.tsx";

function menuCard() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const menuButtons = [
    {
      title: "Start Quiz",
      icon: <FaPlay size={15} fill="white" />,
      type: "Primary",
      onClick: () => setOpenModal(true),
    },
    {
      title: "High Scores",
      icon: <TfiCup size={15} />,
      type: "Secondary",
      onClick: () => navigate("/HighScores"),
    },
  ];

  return (
    <div className="menuContainer">
      <h2 className="menuTitle">Soccer Quiz!</h2>
      {openModal && <Modal />}
      <div className="menuSubtitleContainer">
        <p className="menuSubtitle">
          <strong>Test your football knowledge</strong> with exciting questions
          about the World Cups history, iconic players, and memorable moments.
        </p>
      </div>
      <h3>Are you up for the challenge? Play now!</h3>

      {menuButtons.map((m) => {
        return <Button props={m} key={m.title} />;
      })}
    </div>
  );
}

export function Menu() {
  return <div className="menuScreen">{menuCard()}</div>;
}
