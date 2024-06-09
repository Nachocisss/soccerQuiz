import React from "react";
import "./App.css";
import { Menu } from "./screens/Menu/Menu.tsx";
import { Header } from "./screens/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./screens/Game/Game.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Menu />} />
          <Route path={"/Game"} element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
