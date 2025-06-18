// src/pages/PointsTable.jsx
import React from 'react';

const tableData = [
  { pos: 1, team: 'Dark Knights', played: 6, won: 5, lost: 1, nrr: '+1.245', points: 10 },
  { pos: 2, team: 'Team Alpha', played: 6, won: 4, lost: 2, nrr: '+0.980', points: 8 },
  { pos: 3, team: 'Shadow Kings', played: 6, won: 4, lost: 2, nrr: '+0.702', points: 8 },
  { pos: 4, team: 'Inferno Squad', played: 6, won: 3, lost: 3, nrr: '+0.411', points: 6 },
  { pos: 5, team: 'Clash Titans', played: 6, won: 3, lost: 3, nrr: '+0.099', points: 6 },
  { pos: 6, team: 'P.E.K.K.A Force', played: 6, won: 2, lost: 4, nrr: '-0.672', points: 4 },
  { pos: 7, team: 'Warriors United', played: 6, won: 1, lost: 5, nrr: '-1.221', points: 2 },
  { pos: 8, team: 'Elixir Lords', played: 6, won: 1, lost: 5, nrr: '-1.390', points: 2 },
];

const PointsTable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-300 text-center mb-12">Points Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-yellow-500">
          <thead className="bg-yellow-400 text-purple-900 text-sm uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Pos</th>
              <th className="py-3 px-4">Team</th>
              <th className="py-3 px-4">Pld</th>
              <th className="py-3 px-4">Won</th>
              <th className="py-3 px-4">Lost</th>
              <th className="py-3 px-4">Net RR</th>
              <th className="py-3 px-4">Pts</th>
            </tr>
          </thead>
          <tbody className="text-white bg-purple-800 divide-y divide-yellow-400">
            {tableData.map((team, index) => (
              <tr key={index} className="hover:bg-purple-700 transition">
                <td className="py-3 px-4">{team.pos}</td>
                <td className="py-3 px-4 font-semibold">{team.team}</td>
                <td className="py-3 px-4">{team.played}</td>
                <td className="py-3 px-4">{team.won}</td>
                <td className="py-3 px-4">{team.lost}</td>
                <td className="py-3 px-4">{team.nrr}</td>
                <td className="py-3 px-4">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
