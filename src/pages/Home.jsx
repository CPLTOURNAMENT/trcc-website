// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-950 to-indigo-900 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wider text-yellow-400">TRCC TROPHY</h1>
        <nav className="space-x-5 font-medium text-lg">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/points-table" className="hover:text-yellow-300">Points Table</a>
          <a href="/teams" className="hover:text-yellow-300">Teams</a>
          <a href="/schedule" className="hover:text-yellow-300">Schedule</a>
          <a href="/results" className="hover:text-yellow-300">Results</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800">
        <h2 className="text-6xl font-extrabold text-yellow-300 drop-shadow-lg">The Battle Begins</h2>
        <p className="text-xl mt-6 max-w-3xl mx-auto font-light text-white">8 Elite Clans. 40 Warriors. One Champion. Welcome to the biggest Clash of Clans tournament – TRCC TROPHY.</p>
        <div className="mt-10 space-x-4">
          <a href="/teams" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            View Teams
          </a>
          <a href="/schedule" className="bg-white hover:bg-gray-200 text-purple-900 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            View Schedule
          </a>
        </div>
      </section>

      {/* FEATURED MATCHES */}
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-900 to-purple-900">
        <h3 className="text-4xl font-bold text-center text-yellow-400 mb-12">Upcoming Matches</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-tr from-purple-700 to-indigo-700 p-6 rounded-2xl shadow-xl border border-yellow-500">
            <h4 className="text-2xl font-semibold text-yellow-200 mb-2">🔥 Team Alpha vs Shadow Kings</h4>
            <p className="text-lg">Match 1 – June 14, 2025 – 6:00 PM IST</p>
          </div>
          <div className="bg-gradient-to-tr from-purple-700 to-indigo-700 p-6 rounded-2xl shadow-xl border border-yellow-500">
            <h4 className="text-2xl font-semibold text-yellow-200 mb-2">⚡ Warriors United vs Dark Knights</h4>
            <p className="text-lg">Match 2 – June 15, 2025 – 7:30 PM IST</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-950 text-center text-sm p-6">
        <p className="text-yellow-200">© 2025 TRCC TROPHY. Powered by Clash Legends.</p>
      </footer>
    </div>
  );
};

export default Home;
