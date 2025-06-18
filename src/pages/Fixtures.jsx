// src/pages/Fixtures.jsx
import React from 'react';

const fixtures = [
  { date: 'June 14, 2025', match: 'Team Alpha vs Shadow Kings', time: '6:00 PM IST' },
  { date: 'June 15, 2025', match: 'Warriors United vs Dark Knights', time: '7:30 PM IST' },
  { date: 'June 16, 2025', match: 'Inferno Squad vs Clash Titans', time: '6:00 PM IST' },
  { date: 'June 17, 2025', match: 'P.E.K.K.A Force vs Elixir Lords', time: '7:30 PM IST' },
];

const Fixtures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-300 text-center mb-12">Match Fixtures</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {fixtures.map((item, idx) => (
          <div
            key={idx}
            className="bg-purple-800 border-l-8 border-yellow-400 shadow-lg p-6 rounded-lg"
          >
            <h4 className="text-xl font-bold text-yellow-300">{item.match}</h4>
            <p className="text-sm text-gray-200">{item.date} — {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixtures;
