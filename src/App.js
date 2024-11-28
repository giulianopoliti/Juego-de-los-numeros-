import React, { useState } from "react";
import InsertNumbers from "./components/InsertNumbers.tsx";
import GameOver from "./components/GameOver.tsx"; // Asegúrate de tener este componente para mostrar "GANASTE" o "PERDISTE"

export default function App() {
  const [gameOver, setGameOver] = useState(false);  // Definir el tipo de estado correctamente
  const [gameResult, setGameResult] = useState("");   // Definir el tipo de estado correctamente

  // Función que manejará el fin del juego
  const handleGameOver = (result) => {
    setGameOver(true);
    setGameResult(result);
  };

  // Reiniciar el juego
  const resetGame = () => {
    setGameOver(false);
    setGameResult("");
  };

  return (
    <div className="app-container">
      {gameOver ? (
        <div className="game-over-container">
          <h1>{gameResult}</h1>
          <button onClick={resetGame}>Volver a jugar</button>
        </div>
      ) : (
        <InsertNumbers onGameOver={handleGameOver} />
      )}
    </div>
  );
}
