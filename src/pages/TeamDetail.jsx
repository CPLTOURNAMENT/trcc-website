// src/pages/TeamDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const teamsData = {
  'team-alpha': {
    name: 'Team Alpha',
    color: 'from-purple-600 to-purple-800',
    overview: 'Team Alpha is known for precision attacks and strong coordination.',
    stats: { played: 6, won: 5, lost: 1, stars: 22 },
    players: [
      { name: 'Alpha1', role: 'Attacker', stars: 6, attacks: 4, rate: '75%' },
      { name: 'Alpha2', role: 'Defender', stars: 3, attacks: 2, rate: '60%' },
      { name: 'Alpha3', role: 'Strategist', stars: 5, attacks: 3, rate: '67%' },
      { name: 'Alpha4', role: 'Support', stars: 4, attacks: 2, rate: '70%' },
      { name: 'Alpha5', role: 'Attacker', stars: 4, attacks: 3, rate: '80%' },
    ],
  },
  // Add Shadow Kings, etc...
};

const TeamDetail = () => {
  const { slug } = useParams();
  const team = teamsData[slug];
  const [activeTab, setActiveTab] = useState('overview');

  if (!team) return <div className="text-white text-center py-20">Team Not Found</div>;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${team.color} text-white py-20 px-6`}>
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-yellow-300 mb-2">{team.name}</h2>
      </div>

      {/* TAB MENU */}
      <div className="flex justify-center gap-6 mb-10">
        {['overview', 'squad', 'stats'].map(tab => (
          <button
            key={tab}
            className={`uppercase px-4 py-2 font-semibold rounded-full ${
              activeTab === tab
                ? 'bg-yellow-400 text-purple-900'
                : 'bg-white/20 hover:bg-white/30'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'overview' && (
          <div className="text-center text-lg bg-white/10 p-6 rounded-lg">
            {team.overview}
          </div>
        )}

        {activeTab === 'squad' && (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {team.players.map((player, idx) => (
              <div
                key={idx}
                className="bg-white text-purple-900 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                  <img
                    src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${player.name}`}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{player.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{player.role}</p>
                <div className="text-sm text-gray-700">
                  <p>⭐ Stars: {player.stars}</p>
                  <p>⚔️ Attacks: {player.attacks}</p>
                  <p>🎯 Rate: {player.rate}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="text-center text-lg bg-white/10 p-6 rounded-lg space-y-2">
            <p>🕹 Matches Played: <span className="text-yellow-300">{team.stats.played}</span></p>
            <p>🏆 Wins: <span className="text-yellow-300">{team.stats.won}</span></p>
            <p>❌ Losses: <span className="text-yellow-300">{team.stats.lost}</span></p>
            <p>⭐ Total Stars: <span className="text-yellow-300">{team.stats.stars}</span></p>
            <p>🔥 Win Rate: <span className="text-yellow-300">{Math.round((team.stats.won / team.stats.played) * 100)}%</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamDetail;
