import React, { useEffect, useState } from 'react';

const sheetURL = 'https://docs.google.com/spreadsheets/d/17aOTjg6rQ_uBer2U-3JeLPKTDWAXmug26NxqwpBP-Aw/gviz/tq?tqx=out:json&sheet=Teams';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(sheetURL);
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2)); // Remove junk
      
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-14">📋 TRCC Team List</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teams.map((team, index) => (
          <div key={index} className="bg-indigo-800 p-5 rounded-xl border border-yellow-400 shadow-lg text-center">
            <h3 className="text-xl font-bold text-yellow-300 mb-1">{team['Team Name']}</h3>
            <p className="text-sm text-white">Captain: {team['Captain']}</p>
            <p className="text-sm text-gray-300">Clan: {team['Clan']}</p>
            <p className="text-sm text-gray-400">Power: {team['Strength']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
