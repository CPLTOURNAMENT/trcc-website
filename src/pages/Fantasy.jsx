// src/pages/Fantasy.jsx
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const deadline = new Date('2025-06-15T12:30:00Z'); // IST: 6:00 PM

const allPlayers = [
  { name: 'Alpha1', role: 'Attacker' },
  { name: 'Alpha2', role: 'Attacker' },
  { name: 'Shadow1', role: 'Defender' },
  { name: 'Dark2', role: 'Defender' },
  { name: 'Inferno3', role: 'Strategist' },
  { name: 'Clash4', role: 'Strategist' },
];

const Fantasy = () => {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [existing, setExisting] = useState([]);
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const checkSubmitted = async () => {
      const q = query(collection(db, 'fantasyTeams'), where('uid', '==', user.uid));
      const snap = await getDocs(q);
      const data = snap.docs.map(d => d.data());
      if (data.length) {
        setExisting(data[0].team);
        setSubmitted(true);
      }
    };

    checkSubmitted();
  }, [user, navigate]);

  const roleCount = (role) => selected.filter(p => p.role === role).length;

  const toggleSelect = (player) => {
    if (submitted || new Date() > deadline) return;
    const already = selected.some(p => p.name === player.name);
    if (already) {
      setSelected(selected.filter(p => p.name !== player.name));
    } else {
      if (selected.length < 5) setSelected([...selected, player]);
    }
  };

  const validateTeam = () => {
    return (
      selected.length === 5 &&
      roleCount('Attacker') >= 2 &&
      roleCount('Defender') >= 2 &&
      roleCount('Strategist') === 1
    );
  };

  const submitTeam = async () => {
    if (!validateTeam()) return alert("Invalid team");
    await addDoc(collection(db, 'fantasyTeams'), {
      uid: user.uid,
      email: user.email,
      team: selected,
      submittedAt: new Date().toISOString()
    });
    setSubmitted(true);
    setExisting(selected);
  };

  const team = submitted || new Date() > deadline ? existing : selected;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-yellow-300 text-center mb-8">Build Your Fantasy 5</h2>
      {submitted && <p className="text-green-400 text-center mb-4">✅ Team Submitted!</p>}
      {new Date() > deadline && !submitted && (
        <p className="text-red-400 text-center mb-4">⛔ Submissions are closed.</p>
      )}
      <div className="flex justify-center gap-4 mb-6">
        {['All', 'Attacker', 'Defender', 'Strategist'].map(filter => (
          <button
            key={filter}
            className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full"
            onClick={() => setSelected(allPlayers.filter(p => filter === 'All' || p.role === filter))}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {allPlayers.map((player, i) => (
          <div
            key={i}
            onClick={() => toggleSelect(player)}
            className={`cursor-pointer p-5 rounded-xl text-center shadow-md transition ${
              team.some(p => p.name === player.name)
                ? 'bg-yellow-400 text-purple-900'
                : 'bg-white text-purple-900'
            }`}
          >
            <h4 className="font-bold text-lg">{player.name}</h4>
            <p className="text-sm text-gray-600">{player.role}</p>
          </div>
        ))}
      </div>

      {!submitted && new Date() < deadline && (
        <div className="text-center mt-8">
          <button
            disabled={!validateTeam()}
            onClick={submitTeam}
            className={`px-6 py-3 font-bold rounded-full ${
              validateTeam()
                ? 'bg-green-400 text-black hover:bg-green-500'
                : 'bg-gray-500 text-white cursor-not-allowed'
            }`}
          >
            Submit My Team
          </button>
        </div>
      )}
    </div>
  );
};

export default Fantasy;
