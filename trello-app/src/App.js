import "./App.scss";
import React from "react";
import BoardBar from "./Components/AppBoard/BoardBar";
import AppBar from "./Components/AppBar/AppBar";
import BoardCon from "./Components/BoardContent/BoardCon";
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
