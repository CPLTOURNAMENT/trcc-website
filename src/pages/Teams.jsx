import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sheetURL = 'https://docs.google.com/spreadsheets/d/17aOTjg6rQ_uBer2U-3JeLPKTDWAXmug26NxqwpBP-Aw/gviz/tq?tqx=out:json&sheet=Teams';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState('');
  const [dark, setDark] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(sheetURL);
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));
      const headers = json.table.cols.map(col => col.label);
      const rows = json.table.rows.map(row =>
        row.c.reduce((acc, cell, i) => {
          acc[headers[i]] = cell?.v || '';
          return acc;
        }, {})
      );
      setTeams(rows);
    };
    fetchData();
  }, []);

  const filteredTeams = teams.filter(team =>
    team['Team Name']?.toLowerCase().includes(search.toLowerCase()) ||
    team['Captain']?.toLowerCase().includes(search.toLowerCase())
  );

  const bgStyle = dark
    ? 'from-[#0f0c29] via-[#302b63] to-[#24243e]'
    : 'from-white via-gray-100 to-gray-200';

  const textColor = dark ? 'text-white' : 'text-gray-900';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgStyle} ${textColor} relative`}>
      
      {/* SVG Background Pattern */}
      <svg className="absolute opacity-10 -z-10 top-0 left-0 w-full h-full">
        <defs>
          <radialGradient id="pattern" r="75%" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>

      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400">🏆 TRCC Teams</h1>
        <button
          onClick={() => setDark(!dark)}
          className="bg-yellow-400 text-black px-4 py-2 rounded font-bold"
        >
          Toggle {dark ? 'Light' : 'Dark'}
        </button>
      </header>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <input
          type="text"
          placeholder="Search team or captain..."
          className="w-full md:w-1/2 px-4 py-2 rounded border border-yellow-500 bg-opacity-20 backdrop-blur"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Teams Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20">
        {filteredTeams.map((team, index) => (
          <div
            key={index}
            onClick={() => navigate(`/team/${index}`)}
            className="cursor-pointer bg-indigo-700 hover:bg-indigo-800 rounded-xl p-5 border border-yellow-400 shadow-lg transition hover:scale-105"
          >
            <img
              src={team['Image'] || `https://source.unsplash.com/featured/100x100/?${team['Team Name']},clash`}
              alt={team['Team Name']}
              className="mx-auto mb-4 rounded-full border-4 border-yellow-500 object-cover w-24 h-24"
            />
            <h3 className="text-xl font-bold text-yellow-300 text-center">{team['Team Name']}</h3>
            <p className="text-sm text-center">Captain: {team['Captain']}</p>
            <p className="text-xs text-center text-yellow-200">Clan: {team['Clan']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
