import React, { useEffect, useState } from "react";
import { useScoreContext } from "../../context/ScoreContext.tsx";
import "./End.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.tsx";
import { IoArrowBack } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { checkHighScore, setNewHighScore } from "../../utils/localStorage.tsx";
import { positionIcons } from "../../constants/PlacesConstans.tsx";

export function End() {
  const navigate = useNavigate();
  const { score } = useScoreContext();
  const [rankingPosition, setRankingPosition] = useState("");
  const [highScoreNameSubmited, setHighScoreNameSubmited] = useState(false);

  useEffect(() => {
    const podiumPosition = checkHighScore(score);
    if (podiumPosition) {
      setRankingPosition(podiumPosition);
    }
  }, []);

  const endButtons = [
    {
      title: "Back to Menu",
      icon: <IoArrowBack size={14} stroke="white" />,
      type: "Primary",
      onClick: () => navigate("/"),
    },
    {
      title: "High Scores",
      icon: <TfiCup size={14} fill="white" />,
      type: "Primary",
      onClick: () => navigate("/HighScores"),
    },
  ];

  const submitHandler = (e) => {
    setHighScoreNameSubmited(true);
    e.preventDefault();
    const name = document.getElementById("inputName")?.value ?? "";
    if (rankingPosition) {
      setNewHighScore(
        rankingPosition,
        JSON.stringify({ name: name, score: score })
      );
    }
  };

  const rankingFormRender = () => {
    return (
      <>
        <div className="iconContainer">
          <p className="congratsText"> Congrats! You are on the podium! </p>
          <TfiCup size={60} fill="white" stroke="yellow" strokeWidth={0.5} />
          {positionIcons[rankingPosition]}
        </div>
        {!highScoreNameSubmited ? (
          <form className="endForm" onSubmit={submitHandler}>
            <label htmlFor="name" className="endInputLabel">
              Your Name:{" "}
            </label>
            <input className="endInputInput" type="text" id="inputName" />
            <button className="endInputButton">Submit</button>
          </form>
        ) : (
          <p className="congratsText"> Submited! Check the High Score Board </p>
        )}
      </>
    );
  };

  return (
    <div className="endContainer">
      <span className="endText">Game Over! Your score: {score}</span>
      {rankingPosition && rankingFormRender()}
      <div className="buttonsContainer">
        {endButtons.map((option) => {
          return <Button key={option.title} props={option} />;
        })}
      </div>
    </div>
  );
}
