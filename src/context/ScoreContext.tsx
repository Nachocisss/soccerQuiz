import React, { createContext, useContext, useEffect, useState } from "react";

const initialStates = {
  score: 0,
  addScore: () => {},
  time: 7,
  resetTime: () => {},
  resetGame: () => {},
};

const ScoreContext = createContext(initialStates);
const INITIAL_TIME_SECONDS = 7;

export function ScoreProvider({ children }: any) {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(INITIAL_TIME_SECONDS);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  function resetTime() {
    setTime(INITIAL_TIME_SECONDS);
  }
  function resetGame() {
    setTime(INITIAL_TIME_SECONDS);
    setScore(0);
  }

  function addScore() {
    setScore((prev) => prev + time);
  }
  return (
    <ScoreContext.Provider
      value={{ score, addScore, time, resetTime, resetGame }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScoreContext() {
  return useContext(ScoreContext);
}
