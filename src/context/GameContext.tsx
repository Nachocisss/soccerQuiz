import React, { createContext, useContext, useState } from "react";

const gameContext = createContext({
  askedQuestionIndex: [],
});

export function GameProvider({ children }: any) {
  const [askedQuestionIndex, setAskedQuestionIndex] = useState([4]);

  function addQuestionIndex(value) {
    setAskedQuestionIndex((prev) => [...prev, value]);
  }
  return (
    <gameContext.Provider value={{ askedQuestionIndex, addQuestionIndex }}>
      {children}
    </gameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(gameContext);
}
