import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const sheetURL = 'https://docs.google.com/spreadsheets/d/17aOTjg6rQ_uBer2U-3JeLPKTDWAXmug26NxqwpBP-Aw/gviz/tq?tqx=out:json&sheet=Teams';

const TeamDetail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

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

      const selected = rows[parseInt(id)];
      setTeam(selected);

      // 🛡 Change favicon manually (no Helmet)
      if (selected?.Image) {
        const existingFavicon = document.querySelector("link[rel='icon']");
        if (existingFavicon) {
          existingFavicon.href = selected.Image;
        } else {
          const newFavicon = document.createElement('link');
          newFavicon.rel = 'icon';
          newFavicon.href = selected.Image;
          document.head.appendChild(newFavicon);
        }
      }

      // Optional: change page title dynamically
      document.title = `${selected['Team Name']} - CPL`;
    };

    fetchData();
  }, [id]);

  if (!team) return <div className="p-20 text-white text-center">Loading...</div>;

  const themeColor = team['Color'] || '#f26522';

  return (
    <div style={{ backgroundColor: '#0a0a23', color: '#fff', minHeight: '100vh' }}>
      {/* Header Section */}
      <div style={{ backgroundColor: themeColor }} className="p-6 text-center shadow-lg">
        <img
          src={team['Image']}
          alt={team['Team Name']}
          className="w-28 h-28 rounded-full mx-auto border-4 border-white"
        />
        <h1 className="text-4xl font-bold mt-4">{team['Team Name']}</h1>
        <p className="text-md text-black font-semibold">Captain: {team['Captain']}</p>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Description */}
        {team['Description'] && (
          <>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">About the Team</h2>
            <p className="text-gray-300 leading-relaxed">{team['Description']}</p>
          </>
        )}

        {/* Players */}
        {team['Players'] && (
          <>
            <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-3">Players</h2>
            <div className="grid sm:grid-cols-2 gap-2 text-sm text-white">
              {team['Players'].split(',').map((p, i) => (
                <div
                  key={i}
                  className="bg-indigo-800 p-3 rounded-lg shadow border border-yellow-500 transition-all duration-300 hover:scale-105 hover:bg-indigo-700"
                >
                  {p.trim()}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Trophies */}
        {team['Trophies'] && (
          <>
            <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-3">Trophies</h2>
            <div className="bg-black/20 p-4 rounded-lg text-center border border-yellow-400 text-yellow-300 text-sm">
              🏆 {team['Trophies']}
            </div>
          </>
        )}

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            to="/teams"
            className="text-yellow-300 underline hover:text-yellow-100 transition"
          >
            &larr; Back to All Teams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
