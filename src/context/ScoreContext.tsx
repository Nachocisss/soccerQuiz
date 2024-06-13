import React, { createContext, useContext, useEffect, useState } from "react";

const initialStates = {
  score: 0,
  addScore: () => {},
  time: 7,
  resetTime: () => {},
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

  function addScore() {
    setScore((prev) => prev + time);
  }
  return (
    <ScoreContext.Provider value={{ score, addScore, time, resetTime }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  return useContext(ScoreContext);
}
