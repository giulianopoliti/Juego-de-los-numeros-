import React, { useEffect, useState } from "react";
import MyButton from "./Button.tsx";
import ResponseNumbers from "./ResponseNumbers.tsx";
import { obtenerDatos, retornarResultados } from "../api.ts";
import GameOver from "./GameOver.tsx";
import "../App.css"; // Importa los estilos

interface InsertNumbersProps {
    onGameOver: (result: string) => void; // Recibimos una función para notificar el resultado
  }

export default function InsertNumbers({ onGameOver }: InsertNumbersProps) {
    const [numbers, setNumbers] = useState("");
    const [result, setResult] = useState<string>("");
    const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);
    const [responses, setResponses] = useState<string[]>([]);
    const [intentos, setIntentos] = useState<number>(0);
  
    useEffect(() => {
      const initialNumbers = obtenerDatos();
      setGeneratedNumbers(initialNumbers);
    }, []);
  
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
  
      const inputArray: number[] = numbers
        .split("")
        .map((num) => parseInt(num.trim())) // Convierte cada elemento en un número
        .filter((num) => !isNaN(num));
  
      const resultadoString = retornarResultados(inputArray, generatedNumbers);
      setResponses((prevResponses) => [...prevResponses, resultadoString]);
      setResult(resultadoString);
      setIntentos(intentos + 1);
  
      if (resultadoString === "WIN") {
        onGameOver("GANASTE");
      }
  
      if (intentos >= 9) {
        onGameOver("PERDISTE");
      }
    }
  
    const resetGame = () => {
      setNumbers("");
      setResult("");
      setResponses([]);
      setGeneratedNumbers(obtenerDatos());
      setIntentos(0);
    };
  
    return (
      <div className="game-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="input-text"
            placeholder="Ingrese los números"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
          <MyButton text="Enviar" onClick={handleSubmit} />
        </form>
  
        {responses.length > 0 && <ResponseNumbers responses={responses} />}
  
        <div className="attempts-container">
          <p>Intentos restantes: {9 - intentos}</p>
        </div>
      </div>
    );
  }