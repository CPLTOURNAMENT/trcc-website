import React from 'react';
import { Link } from 'react-router-dom';

const teams = [
  { name: 'Team Alpha', players: ['Player A1', 'Player A2', 'Player A3', 'Player A4', 'Player A5'] },
  { name: 'Shadow Kings', players: ['Player S1', 'Player S2', 'Player S3', 'Player S4', 'Player S5'] },
  { name: 'Warriors United', players: ['Player W1', 'Player W2', 'Player W3', 'Player W4', 'Player W5'] },
  { name: 'Dark Knights', players: ['Player D1', 'Player D2', 'Player D3', 'Player D4', 'Player D5'] },
  { name: 'Inferno Squad', players: ['Player I1', 'Player I2', 'Player I3', 'Player I4', 'Player I5'] },
  { name: 'P.E.K.K.A Force', players: ['Player P1', 'Player P2', 'Player P3', 'Player P4', 'Player P5'] },
  { name: 'Clash Titans', players: ['Player C1', 'Player C2', 'Player C3', 'Player C4', 'Player C5'] },
  { name: 'Elixir Lords', players: ['Player E1', 'Player E2', 'Player E3', 'Player E4', 'Player E5'] },
];

const Teams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-14">Meet the TRCC Teams</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {teams.map((team, index) => (
          <Link
            to={`/teams/${team.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
          >
            <div
              className={`bg-gradient-to-br from-indigo-800 to-purple-800 text-center p-6 rounded-xl shadow-xl border-2 border-yellow-400 hover:scale-105 transform transition duration-300 cursor-pointer`}
            >
              <div className="w-20 h-20 mx-auto bg-yellow-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-white">{team.name}</h3>
              <p className="text-sm mt-1 text-gray-200">5 Players</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Teams;
