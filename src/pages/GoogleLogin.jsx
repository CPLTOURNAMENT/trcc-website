// src/pages/GoogleLogin.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/fantasy');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-purple-900 text-white flex flex-col justify-center items-center">
      <h2 className="text-3xl mb-6">Login with Google</h2>
      <button
        onClick={loginWithGoogle}
        className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
