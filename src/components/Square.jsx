import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-24 h-24 bg-gray-900 border-2 border-black shadow-2xl flex items-center justify-center text-6xl font-semibold text-cyan-400 hover:bg-gray-800 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
