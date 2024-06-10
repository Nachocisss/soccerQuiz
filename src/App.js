import React from "react";
import "./App.css";
import { Menu } from "./screens/Menu/Menu.tsx";
import { Header } from "./screens/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./screens/Game/Game.tsx";
import { GameProvider } from "./context/GameContext.tsx";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Menu />} />
            <Route path={"/Game"} element={<Game />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GameProvider>
  );
}

export default App;
