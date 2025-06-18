// src/pages/Results.jsx
import React from 'react';

const results = [
  { match: 'Team Alpha vs Shadow Kings', score: 'Team Alpha Won by 3 Stars' },
  { match: 'Warriors United vs Dark Knights', score: 'Dark Knights Won by 2 Stars' },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">Match Results</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {results.map((res, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-yellow-500 bg-purple-900 shadow-md">
            <h4 className="text-xl font-semibold text-yellow-200">{res.match}</h4>
            <p>{res.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
