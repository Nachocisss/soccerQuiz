import React, { createContext, useContext, useState } from "react";

const ScoreContext = createContext({});

export function ScoreProvider({ children }: any) {
  const [score, setScore] = useState(0);

  function addScore(scoreToAdd) {
    setScore((prev) => prev + scoreToAdd);
  }
  return (
    <ScoreContext.Provider value={{ score, addScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  return useContext(ScoreContext);
}
