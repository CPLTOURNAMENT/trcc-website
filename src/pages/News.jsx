// src/pages/News.jsx
import React from 'react';

const news = [
  {
    title: 'TRCC Trophy Semi-Final Teams Confirmed!',
    img: 'https://placehold.co/600x300?text=Clash+Semi',
    date: 'June 12, 2025',
  },
  {
    title: 'Alpha1 Sets New Star Record',
    img: 'https://placehold.co/600x300?text=Alpha1+News',
    date: 'June 11, 2025',
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl text-yellow-300 text-center font-bold mb-12">TRCC Trophy News</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {news.map((item, idx) => (
          <div key={idx} className="bg-white text-purple-900 rounded-xl overflow-hidden shadow-lg">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
