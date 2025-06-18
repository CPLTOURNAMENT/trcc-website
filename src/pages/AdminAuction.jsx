// src/pages/AdminAuction.jsx
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const AdminAuction = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    role: '',
    basePrice: '',
    status: 'Unsold',
    soldPrice: '',
    team: '',
  });

  const fetchPlayers = async () => {
    const snap = await getDocs(collection(db, 'auctionPlayers'));
    setPlayers(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleAdd = async () => {
    await addDoc(collection(db, 'auctionPlayers'), newPlayer);
    setNewPlayer({
      name: '',
      role: '',
      basePrice: '',
      status: 'Unsold',
      soldPrice: '',
      team: '',
    });
    fetchPlayers();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'auctionPlayers', id));
    fetchPlayers();
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (!user || user.email !== 'admin@trcc.com') {
      alert('Access Denied');
      return;
    }
    fetchPlayers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16 px-6">
      <h2 className="text-4xl text-yellow-300 font-bold text-center mb-10">Admin – Manage Auction Players</h2>

      {/* Add New Player */}
      <div className="bg-purple-800 p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-10 space-y-4">
        <input placeholder="Name" className="w-full p-2 text-black" value={newPlayer.name}
          onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })} />
        <input placeholder="Role" className="w-full p-2 text-black" value={newPlayer.role}
          onChange={(e) => setNewPlayer({ ...newPlayer, role: e.target.value })} />
        <input placeholder="Base Price" type="number" className="w-full p-2 text-black" value={newPlayer.basePrice}
          onChange={(e) => setNewPlayer({ ...newPlayer, basePrice: e.target.value })} />
        <input placeholder="Sold Price" type="number" className="w-full p-2 text-black" value={newPlayer.soldPrice}
          onChange={(e) => setNewPlayer({ ...newPlayer, soldPrice: e.target.value })} />
        <input placeholder="Team" className="w-full p-2 text-black" value={newPlayer.team}
          onChange={(e) => setNewPlayer({ ...newPlayer, team: e.target.value })} />
        <select className="w-full p-2 text-black"
          value={newPlayer.status}
          onChange={(e) => setNewPlayer({ ...newPlayer, status: e.target.value })}
        >
          <option value="Sold">Sold</option>
          <option value="Unsold">Unsold</option>
        </select>
        <button onClick={handleAdd} className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold">Add Player</button>
      </div>

      {/* Player List */}
      <div className="max-w-5xl mx-auto space-y-4">
        {players.map((p, i) => (
          <div key={p.id} className="bg-purple-800 p-4 rounded-xl shadow-md flex justify-between items-center border border-yellow-500">
            <div>
              <p className="font-bold text-yellow-300">{p.name}</p>
              <p className="text-sm">Role: {p.role} | ₹{p.basePrice} | Status: {p.status} | Sold: ₹{p.soldPrice} | Team: {p.team}</p>
            </div>
            <button
              onClick={() => handleDelete(p.id)}
              className="bg-red-500 px-3 py-1 text-white rounded-full"
            >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAuction;
