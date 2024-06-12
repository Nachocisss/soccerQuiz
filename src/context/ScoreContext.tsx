import React, { createContext, useContext, useEffect, useState } from "react";

const ScoreContext = createContext({});
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

  function addScore(scoreToAdd) {
    setScore((prev) => prev + scoreToAdd);
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
