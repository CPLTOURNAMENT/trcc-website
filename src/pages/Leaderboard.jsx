// src/pages/Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const sheetURL = 'https://docs.google.com/spreadsheets/d/189AW9kKmDwBO5nX2g1Qyo1jhXq18t2AZWuUon-AUViA/gviz/tq?tqx=out:json';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  // 1. Fetch War Stats from Google Sheet
  const fetchWarStats = async () => {
    const res = await fetch(sheetURL);
    const text = await res.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));

    const headers = json.table.cols.map(col => col.label);
    const rows = json.table.rows.map(r =>
      r.c.reduce((acc, c, i) => {
        acc[headers[i]] = c?.v || '';
        return acc;
      }, {})
    );

    return rows;
  };

  // 2. Fetch Fantasy Teams from Firebase
  const fetchFantasyTeams = async () => {
    const snap = await getDocs(collection(db, 'fantasyTeams'));
    return snap.docs.map(doc => doc.data());
  };

  // 3. Calculate Scores
  const calculateScores = (teams, stats) => {
    const statMap = {};
    stats.forEach(s => {
      statMap[s.playerName] = {
        stars: parseInt(s.stars) || 0,
        successRate: parseFloat(s.successRate) || 0,
        attacks: parseInt(s.attacks) || 0,
      };
    });

    return teams.map(team => {
      let score = 0;
      team.team.forEach(p => {
        const s = statMap[p.name];
        if (s) {
          score += (s.stars * 10) + s.successRate + (s.attacks * 2);
        }
      });

      return {
        email: team.email,
        score: Math.round(score),
        players: team.team.map(p => p.name).join(', ')
      };
    }).sort((a, b) => b.score - a.score);
  };

  useEffect(() => {
    const load = async () => {
      const [stats, teams] = await Promise.all([
        fetchWarStats(),
        fetchFantasyTeams()
      ]);
      const scored = calculateScores(teams, stats);
      setData(scored);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-300 text-center mb-10">Fantasy Leaderboard</h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="bg-purple-800 p-5 rounded-xl border border-yellow-400 shadow-md">
            <h4 className="text-yellow-200 font-bold text-lg">{idx + 1}. {item.email}</h4>
            <p className="text-sm">Team: {item.players}</p>
            <p className="text-green-300 font-bold mt-1">Score: {item.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
