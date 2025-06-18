// src/pages/Compare.jsx
import React, { useState } from 'react';

const sampleData = {
  'Alpha1': { stars: 18, attacks: 7, rate: '85%' },
  'Dark1': { stars: 16, attacks: 8, rate: '80%' },
};

const Compare = () => {
  const [player1, setPlayer1] = useState('Alpha1');
  const [player2, setPlayer2] = useState('Dark1');

  const p1 = sampleData[player1];
  const p2 = sampleData[player2];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 px-6">
      <h2 className="text-4xl text-yellow-300 text-center font-bold mb-10">Player Comparison</h2>
      <div className="flex justify-center gap-10 mb-8">
        <select onChange={e => setPlayer1(e.target.value)} className="text-black p-2 rounded">
          <option value="Alpha1">Alpha1</option>
          <option value="Dark1">Dark1</option>
        </select>
        <span className="text-yellow-300 font-bold text-xl">vs</span>
        <select onChange={e => setPlayer2(e.target.value)} className="text-black p-2 rounded">
          <option value="Alpha1">Alpha1</option>
          <option value="Dark1">Dark1</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto">
        {[player1, player2].map((player, i) => {
          const data = i === 0 ? p1 : p2;
          return (
            <div key={player} className="bg-purple-800 p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">{player}</h3>
              <p>⭐ Stars: {data.stars}</p>
              <p>⚔️ Attacks: {data.attacks}</p>
              <p>🎯 Success Rate: {data.rate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Compare;
