import React from "react";
import "./App.css";
import { Menu } from "./screens/Menu/Menu.tsx";
import { Header } from "./screens/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionProvider } from "./context/QuestionContext.tsx";
import { ScoreProvider } from "./context/ScoreContext.tsx";
import { End } from "./screens/End/End.tsx";
import { Game } from "./screens/Game/Game.tsx";
import { HighScores } from "./screens/HighScores/HighScores.tsx";

function App() {
  return (
    <ScoreProvider>
      <QuestionProvider>
        <div className="App">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route index element={<Menu />} />
              <Route path={"/Game"} element={<Game />} />
              <Route path={"/End"} element={<End />} />
              <Route path={"/HighScores"} element={<HighScores />} />
            </Routes>
          </BrowserRouter>
        </div>
      </QuestionProvider>
    </ScoreProvider>
  );
}

export default App;
