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
      onClick: () => navigate("/Game"),
    },
  ];

  return (
    <div className="cardContainer">
      {openModal && <Modal />}
      <h2>World Cup Party Quiz</h2>
      <h3>{"subtitle"}</h3>

      {menuButtons.map((m) => {
        return <Button props={m} key={m.title} />;
      })}
    </div>
  );
}

export function Menu() {
  return <div className="menuScreen">{menuCard()}</div>;
}
