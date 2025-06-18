import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const sheetURL = 'https://docs.google.com/spreadsheets/d/189AW9kKmDwBO5nX2g1Qyo1jhXq18t2AZWuUon-AUViA/gviz/tq?tqx=out:json';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  const fetchSheet = async () => {
    const res = await fetch(sheetURL);
    const text = await res.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const headers = json.table.cols.map(col => col.label);
    return json.table.rows.map(row => {
      return row.c.reduce((acc, cell, idx) => {
        acc[headers[idx]] = cell?.v || '';
        return acc;
      }, {});
    });
  };

  const fetchFantasyTeams = async () => {
    const snap = await getDocs(collection(db, 'fantasyTeams'));
    return snap.docs.map(doc => doc.data());
  };

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
        const stat = statMap[p.name];
        if (stat) {
          score += stat.stars * 10 + stat.successRate + stat.attacks * 2;
        }
      });
      return {
        email: team.email,
        score: Math.round(score)
      };
    }).sort((a, b) => b.score - a.score);
  };

  useEffect(() => {
    const load = async () => {
      const [stats, teams] = await Promise.all([fetchSheet(), fetchFantasyTeams()]);
      setData(calculateScores(teams, stats));
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">Leaderboard</h2>
      <div>
        {data.map((entry, i) => (
          <div key={i} className="border-b border-gray-700 py-2">
            <p>{i + 1}. {entry.email} — <span className="text-green-400">Score: {entry.score}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
