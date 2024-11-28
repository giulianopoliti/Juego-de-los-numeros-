import React from "react";
import "../App.css"; // Asegúrate de importar los estilos

interface ButtonProps {
  text: string;
  onClick: (e: React.FormEvent) => void;
}

const MyButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
