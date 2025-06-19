// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Teams from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import Schedule from './pages/Schedule';
import Results from './pages/Results';
import PointsTable from './pages/PointsTable';
import Stats from './pages/Stats';
import Compare from './pages/Compare';
import News from './pages/News';
import Fixtures from './pages/Fixtures';
import FanContests from './pages/FanContests';
import Auction from './pages/Auction';
import AdminAuction from './pages/AdminAuction';
import AdminLiveAuction from './pages/AdminLiveAuction.jsx';
import AuctionLive from './pages/AuctionLive';
import Fantasy from './pages/Fantasy';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import GoogleLogin from './pages/GoogleLogin';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* MAIN SITE PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:slug" element={<TeamDetail />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/results" element={<Results />} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/news" element={<News />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/fan-contests" element={<FanContests />} />

        {/* AUCTION SYSTEM */}
        <Route path="/auction" element={<Auction />} />
        <Route path="/admin-auction" element={<AdminAuction />} />
        <Route path="/admin-live-auction" element={<AdminLiveAuction />} />
        <Route path="/auction-live" element={<AuctionLive />} />

        {/* FANTASY SYSTEM */}
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/google-login" element={<GoogleLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
