// src/pages/AdminLiveAuction.jsx
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const AdminLiveAuction = () => {
  const [players, setPlayers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [bid, setBid] = useState('');
  const [team, setTeam] = useState('');

  const fetchPlayers = async () => {
    const snap = await getDocs(collection(db, 'auctionPlayers'));
    setPlayers(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const startAuction = async (player) => {
    await updateDoc(doc(db, 'auctionPlayers', player.id), {
      isAuctioning: true,
      currentBid: 0,
      currentTeam: '',
    });
    setSelected(player);
    fetchPlayers();
  };

  const submitBid = async () => {
    if (!bid || !team) return;
    await updateDoc(doc(db, 'auctionPlayers', selected.id), {
      currentBid: Number(bid),
      currentTeam: team,
    });
    setBid('');
    setTeam('');
    fetchPlayers();
  };

  const finalizeSale = async () => {
    await updateDoc(doc(db, 'auctionPlayers', selected.id), {
      soldPrice: selected.currentBid,
      team: selected.currentTeam,
      status: 'Sold',
      isAuctioning: false,
    });
    setSelected(null);
    fetchPlayers();
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (!user || user.email !== 'admin@trcc.com') {
      alert('Access denied');
      return;
    }
    fetchPlayers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Live Auction Panel (Admin Only)</h2>

      {!selected ? (
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {players.filter(p => p.status !== 'Sold').map(player => (
            <div key={player.id} className="p-5 bg-purple-800 rounded-lg border border-yellow-400 shadow-md flex justify-between items-center">
              <div>
                <h4 className="font-bold text-xl text-yellow-300">{player.name}</h4>
                <p className="text-sm">Base: ₹{player.basePrice} | Status: {player.status}</p>
              </div>
              <button
                onClick={() => startAuction(player)}
                className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full font-bold"
              >
                Start Auction
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-purple-800 p-6 rounded-xl shadow-md border border-yellow-400">
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">Auctioning: {selected.name}</h3>
          <p className="mb-2">Current Bid: ₹{selected.currentBid || 0}</p>
          <p className="mb-4">Highest Bidder: {selected.currentTeam || '-'}</p>

          <div className="flex flex-col gap-3">
            <input
              placeholder="New Bid ₹"
              value={bid}
              onChange={(e) => setBid(e.target.value)}
              className="p-2 text-black"
              type="number"
            />
            <input
              placeholder="Team Name"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="p-2 text-black"
            />
            <button
              onClick={submitBid}
              className="bg-yellow-400 text-purple-900 px-4 py-2 font-bold rounded-full"
            >
              Submit Bid
            </button>
            <button
              onClick={finalizeSale}
              className="bg-green-500 text-white px-4 py-2 rounded-full"
            >
              Finalize & Sell
            </button>
            <button
              onClick={() => setSelected(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLiveAuction;
