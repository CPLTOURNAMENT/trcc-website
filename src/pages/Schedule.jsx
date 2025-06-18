// src/pages/Schedule.jsx
import React from 'react';

const matches = [
  { round: 'Quarterfinal 1', match: 'Team Alpha vs Shadow Kings', date: 'June 14', time: '6:00 PM' },
  { round: 'Quarterfinal 2', match: 'Warriors United vs Dark Knights', date: 'June 15', time: '7:30 PM' },
  { round: 'Quarterfinal 3', match: 'Inferno Squad vs Clash Titans', date: 'June 16', time: '6:00 PM' },
  { round: 'Quarterfinal 4', match: 'P.E.K.K.A Force vs Elixir Lords', date: 'June 17', time: '7:30 PM' },
  { round: 'Semifinal 1', match: 'Winner QF1 vs Winner QF2', date: 'June 20', time: '6:00 PM' },
  { round: 'Semifinal 2', match: 'Winner QF3 vs Winner QF4', date: 'June 21', time: '6:00 PM' },
  { round: 'Final', match: 'Winner SF1 vs Winner SF2', date: 'June 24', time: '7:00 PM' },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">Tournament Schedule</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {matches.map((m, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-yellow-500 bg-purple-900 shadow-md">
            <h4 className="text-xl font-bold text-yellow-200">{m.round}</h4>
            <p>{m.match}</p>
            <p>{m.date} — {m.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
