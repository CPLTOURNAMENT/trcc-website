// src/pages/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const AdminPanel = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTeams = async () => {
    const snapshot = await getDocs(collection(db, 'fantasyTeams'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTeams(data);
    setLoading(false);
  };

  const deleteEntry = async (id) => {
    await deleteDoc(doc(db, 'fantasyTeams', id));
    fetchTeams();
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (!user || user.email !== 'admin@trcc.com') {
      alert('Access Denied');
    } else {
      fetchTeams();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-yellow-300 text-center mb-12">Admin Panel – Manage Entries</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="space-y-4 max-w-4xl mx-auto">
          {teams.map((team) => (
            <div key={team.id} className="p-5 bg-purple-800 border border-yellow-500 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <p className="font-bold text-yellow-200">{team.email}</p>
                <p className="text-sm text-white">Team: {team.team.join(', ')}</p>
              </div>
              <button
                onClick={() => deleteEntry(team.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
