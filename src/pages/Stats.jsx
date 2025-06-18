// src/pages/Stats.jsx
import React from 'react';

const topPlayers = [
  { name: 'Alpha1', stars: 18, attacks: 7, winRate: '85%' },
  { name: 'Dark1', stars: 16, attacks: 8, winRate: '80%' },
  { name: 'Shadow1', stars: 15, attacks: 6, winRate: '75%' },
];

const Stats = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl text-yellow-300 text-center font-bold mb-12">Top Performers</h2>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full text-left border border-yellow-500">
          <thead className="bg-yellow-400 text-purple-900">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">Player</th>
              <th className="px-4 py-3">Stars</th>
              <th className="px-4 py-3">Attacks</th>
              <th className="px-4 py-3">Win Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-500">
            {topPlayers.map((p, i) => (
              <tr key={i} className="hover:bg-purple-800 transition">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3 font-bold">{p.name}</td>
                <td className="px-4 py-3">{p.stars}</td>
                <td className="px-4 py-3">{p.attacks}</td>
                <td className="px-4 py-3">{p.winRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
