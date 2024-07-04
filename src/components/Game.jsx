import React, { useState, useEffect } from "react";
import Board from "./Board";
import Confetti from "react-confetti";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const current = history[stepNumber];

  useEffect(() => {
    setWinner(calculateWinner(current));
  }, [current]);

  useEffect(() => {
    if (winner) {
      document.getElementById("winner-audio").play();
    }
  }, [winner]);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.slice();

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";
    setHistory(newHistory.concat([squares]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
    setWinner(null);
    const audioElement = document.getElementById("winner-audio");
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center">
      {winner && <Confetti />}
      <audio id="winner-audio" src="/winner-audio.mp3"></audio>
      <div className="status mb-4 text-lg">{status}</div>
      <Board squares={current} onClick={handleClick} />
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out text-xl"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
