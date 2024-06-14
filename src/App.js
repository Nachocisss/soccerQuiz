import React from "react";
import "./App.css";
import { Menu } from "./screens/Menu/Menu.tsx";
import { Header } from "./screens/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./screens/Game/Game.tsx";
import { GameProvider } from "./context/GameContext.tsx";
import { ScoreProvider } from "./context/ScoreContext.tsx";
import { End } from "./screens/End/End.tsx";

function App() {
  return (
    <ScoreProvider>
      <GameProvider>
        <div className="App">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route index element={<Menu />} />
              <Route path={"/Game"} element={<Game />} />
              <Route path={"/End"} element={<End />} />
            </Routes>
          </BrowserRouter>
        </div>
      </GameProvider>
    </ScoreProvider>
  );
}

export default App;
