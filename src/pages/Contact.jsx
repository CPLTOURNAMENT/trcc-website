// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Contact Us</h2>
      <form className="max-w-3xl mx-auto bg-purple-800 p-8 rounded-xl shadow-md space-y-6 border border-yellow-500">
        <div>
          <label className="block text-sm text-yellow-300 mb-1">Name</label>
          <input type="text" className="w-full p-3 rounded-md bg-indigo-900 text-white" />
        </div>
        <div>
          <label className="block text-sm text-yellow-300 mb-1">Email</label>
          <input type="email" className="w-full p-3 rounded-md bg-indigo-900 text-white" />
        </div>
        <div>
          <label className="block text-sm text-yellow-300 mb-1">Message</label>
          <textarea rows="5" className="w-full p-3 rounded-md bg-indigo-900 text-white"></textarea>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-6 rounded-full shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
