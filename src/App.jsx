import { useState } from "react";
import StartGame from "./comp/StartGame";
import GamePlay from "./comp/GamePlay";
import './App.css';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="app-container">
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;