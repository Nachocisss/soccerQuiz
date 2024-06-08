import React from "react";
import "./App.css";
import { Menu } from "./screens/Menu/Menu.tsx";
import { Header } from "./screens/Header/Header.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
  );
}

export default App;
