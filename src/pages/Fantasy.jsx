import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signInWithPopup, signOut } from 'firebase/auth';
import { provider } from '../firebase';

const FANTASY_DEADLINE = new Date("2025-06-19T13:00:00+05:30"); // set 1 min before war start

const Fantasy = () => {
  const [user, setUser] = useState(null);
  const [team, setTeam] = useState([]);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now > FANTASY_DEADLINE) setLocked(true);

    auth.onAuthStateChanged(setUser);
  }, []);

  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  const addPlayer = (name, role) => {
    if (locked || team.length >= 5) return;
    setTeam([...team, { name, role }]);
  };

  const submitTeam = async () => {
    if (locked || !user || team.length !== 5) return;
    await addDoc(collection(db, 'fantasyTeams'), {
      email: user.email,
      team,
      timestamp: new Date()
    });
    alert('Team submitted!');
  };

  return (
    <div className="p-6 text-white bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">TRCC Fantasy League</h1>

      {user ? (
        <div className="mb-4">
          <p>Welcome, {user.email}</p>
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </div>
      ) : (
        <button onClick={login} className="bg-green-500 px-4 py-2 rounded">Login with Google</button>
      )}

      {locked && <p className="text-red-400 mt-4">Fantasy selection is locked. War has started.</p>}

      {!locked && user && (
        <div className="mt-4">
          <button onClick={() => addPlayer('Player 1', 'Attacker')}>+ Add Player 1</button>
          {/* Add your actual player buttons */}
        </div>
      )}

      {team.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Your Team:</h2>
          <ul>{team.map((p, i) => <li key={i}>{p.name} - {p.role}</li>)}</ul>
          {team.length === 5 && <button onClick={submitTeam} className="bg-blue-500 px-3 py-1 mt-2 rounded">Submit</button>}
        </div>
      )}
    </div>
  );
};

export default Fantasy;
