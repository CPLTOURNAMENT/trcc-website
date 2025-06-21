import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white font-sans flex flex-col">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-950 to-indigo-900 shadow-md py-4 px-6">
        <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-wider text-yellow-400">TRCC TROPHY</h1>
          <nav className="mt-4 md:mt-0 space-x-4 text-sm md:text-base font-medium">
            {[
              { label: 'Home', href: '/' },
              { label: 'Points Table', href: '/points-table' },
              { label: 'Teams', href: '/teams' },
              { label: 'Schedule', href: '/schedule' },
              { label: 'Results', href: '/results' },
              { label: 'Auction', href: '/auction' },
              { label: 'About', href: '/about' },
              { label: 'Records', href: '/records' },
              { label: 'Trophies', href: '/trophys' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="hover:text-yellow-300">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800">
        <h2 className="text-6xl font-extrabold text-yellow-300 drop-shadow-lg">The Battle Begins</h2>
        <p className="text-xl mt-6 max-w-3xl mx-auto font-light text-white">
          8 Elite Clans. 40 Warriors. One Champion. Welcome to the biggest Clash of Clans tournament – TRCC TROPHY.
        </p>
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
        <h3 className="text-4xl font-bold text-center text-yellow-400 mb-12">🔥 Upcoming Matches</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-tr from-purple-700 to-indigo-700 p-6 rounded-2xl shadow-xl border border-yellow-500">
            <h4 className="text-2xl font-semibold text-yellow-200 mb-2">Team Alpha vs Shadow Kings</h4>
            <p className="text-lg">Match 1 – June 14, 2025 – 6:00 PM IST</p>
          </div>
          <div className="bg-gradient-to-tr from-purple-700 to-indigo-700 p-6 rounded-2xl shadow-xl border border-yellow-500">
            <h4 className="text-2xl font-semibold text-yellow-200 mb-2">Warriors United vs Dark Knights</h4>
            <p className="text-lg">Match 2 – June 15, 2025 – 7:30 PM IST</p>
          </div>
        </div>
      </section>

      {/* TROPHY SHOWCASE */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-800 to-indigo-800">
        <h3 className="text-4xl font-bold text-center text-yellow-400 mb-12">🏆 Trophy Showcase</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-indigo-900 p-6 rounded-xl border border-yellow-500 text-center shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/431/431646.png" alt="Champions" className="w-14 h-14 mx-auto mb-4" />
            <h4 className="text-yellow-300 font-semibold text-xl">Season Champions</h4>
            <p className="text-sm text-gray-300 mt-2">Glory to the best clan of the season. Champions forever.</p>
          </div>
          <div className="bg-indigo-900 p-6 rounded-xl border border-yellow-500 text-center shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/786/786453.png" alt="Moments" className="w-14 h-14 mx-auto mb-4" />
            <h4 className="text-yellow-300 font-semibold text-xl">Legendary Moments</h4>
            <p className="text-sm text-gray-300 mt-2">Finest turnarounds and triple-star war attacks captured forever.</p>
          </div>
          <div className="bg-indigo-900 p-6 rounded-xl border border-yellow-500 text-center shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/3129/3129380.png" alt="Trophy Wall" className="w-14 h-14 mx-auto mb-4" />
            <h4 className="text-yellow-300 font-semibold text-xl">Trophy Wall</h4>
            <p className="text-sm text-gray-300 mt-2">All-time record trophies and MVP medals earned by top clans.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-950 text-center text-sm p-6 mt-auto">
        <p className="text-yellow-200">© 2025 TRCC TROPHY. Powered by Clash Legends.</p>
      </footer>
    </div>
  );
};

export default Home;
