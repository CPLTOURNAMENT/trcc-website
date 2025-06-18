// src/pages/Auction.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Auction = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, 'auctionPlayers'));
      setPlayers(snap.docs.map(doc => doc.data()));
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-300 text-center mb-12">TRCC Player Auction</h2>
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="min-w-full text-left border border-yellow-400">
          <thead className="bg-yellow-400 text-purple-900 text-sm uppercase">
            <tr>
              <th className="px-4 py-3">Player</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Base Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Sold Price</th>
              <th className="px-4 py-3">Bought By</th>
            </tr>
          </thead>
          <tbody className="bg-purple-800 divide-y divide-yellow-500">
            {players.map((p, i) => (
              <tr key={i} className="hover:bg-purple-700 transition">
                <td className="px-4 py-3 font-semibold">{p.name}</td>
                <td className="px-4 py-3">{p.role}</td>
                <td className="px-4 py-3">₹{p.basePrice}</td>
                <td className={`px-4 py-3 ${p.status === 'Sold' ? 'text-green-300' : 'text-red-400'}`}>{p.status}</td>
                <td className="px-4 py-3">{p.soldPrice !== '-' ? `₹${p.soldPrice}` : '-'}</td>
                <td className="px-4 py-3">{p.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auction;
