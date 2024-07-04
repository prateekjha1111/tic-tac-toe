// src/App.js
import React from 'react';
import Game from './components/Game';
import './index.css';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black opacity-9 flex-col">
      <h1 className='text-5xl text-white font-semibold text-center mb-2'>Tic Tac Toe Game in <span className='text-cyan-500'>React</span></h1>
      <Game />
      <h4 className="mt-5 text-lg font-cursive">
        Made with <span className="text-red-500">❤️</span> by Prateek
      </h4>
    </div>
  );
};

export default App;
