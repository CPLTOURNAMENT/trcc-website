// src/pages/AuctionLive.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const AuctionLive = () => {
  const [livePlayer, setLivePlayer] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'auctionPlayers'), (snap) => {
      const players = snap.docs.map(doc => doc.data());
      const current = players.find(p => p.isAuctioning === true);
      setLivePlayer(current);
    });

    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 px-6 text-center">
      <h2 className="text-4xl text-yellow-300 font-bold mb-10">🔥 Live Auction Feed</h2>
      {livePlayer ? (
        <div className="bg-purple-800 p-8 rounded-lg border border-yellow-400 max-w-xl mx-auto shadow-lg">
          <h3 className="text-3xl font-bold text-yellow-200 mb-4">{livePlayer.name}</h3>
          <p className="text-lg">Role: {livePlayer.role}</p>
          <p>Base Price: ₹{livePlayer.basePrice}</p>
          <p className="text-2xl mt-6 font-bold text-green-300">💰 ₹{livePlayer.currentBid || 0}</p>
          <p className="text-md mt-2">🏷️ Highest Bidder: {livePlayer.currentTeam || 'Waiting...'}</p>
        </div>
      ) : (
        <p className="text-gray-400 text-lg">No live auction at the moment.</p>
      )}
    </div>
  );
};

export default AuctionLive;
