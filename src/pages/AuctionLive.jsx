import React, { useEffect, useState } from 'react';

const AuctionLive = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const sound = new Audio('/auction-sound.mp3');

  useEffect(() => {
    sound.play();
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">🏏 Live Auction</h1>
      <p className="text-7xl">{timeLeft}s</p>
    </div>
  );
};

export default AuctionLive;
