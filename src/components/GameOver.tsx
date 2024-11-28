import React from 'react';
import MyButton from './Button.tsx'; // Asumiendo que tienes un componente de botón.

interface GameOverProps {
    text: string;
    onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ text, onRestart }) => {
    return (
        <div className="game-over-container">
            <h2>{text}</h2> {/* Muestra el mensaje de fin de juego */}
        </div>
    );
};

export default GameOver;
