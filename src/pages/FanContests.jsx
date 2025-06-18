// src/pages/FanContests.jsx
import React from 'react';

const contests = [
  {
    title: 'Predict the Finalist',
    description: 'Guess the two teams that will reach the TRCC TROPHY Final and win TRCC merch!',
    image: 'https://placehold.co/600x300?text=Predict+Finals',
  },
  {
    title: 'Fantasy 5 Champions',
    description: 'Top 3 fantasy teams will receive exclusive in-game rewards and profile badges.',
    image: 'https://placehold.co/600x300?text=Fantasy+5+Contest',
  },
];

const FanContests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-300 text-center mb-12">Fan Contests</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {contests.map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-purple-900 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FanContests;
