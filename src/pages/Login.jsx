// src/pages/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/fantasy');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-purple-900 text-white flex flex-col justify-center items-center p-6">
      <h2 className="text-3xl mb-6">Login</h2>
      <input type="email" placeholder="Email" className="mb-3 p-2 text-black" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="mb-3 p-2 text-black" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold">Login</button>
    </div>
  );
};

export default Login;
