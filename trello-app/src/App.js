import "./App.scss";
import React from "react";
import BoardBar from "./components/AppBoard/BoardBar";
import AppBar from "./components/AppBar/AppBar";
import BoardCon from "./components/BoardContent/BoardCon";
// import { Button } from 'antd'

function App() {
  return (
    <div className="trello-container">
      <AppBar />
      <BoardBar />
      <BoardCon />
    </div>
  );
}

export default App;
