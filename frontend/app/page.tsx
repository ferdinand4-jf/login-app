'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {

    try {

      const res = await axios.post(
        'http://localhost:5000/login',
        {
          email,
          password
        }
      );

      alert(res.data.message);

    } catch (error) {

      alert('Connexion refusée');

    }

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <h1 className="text-3xl font-bold mb-5">
        Login
      </h1>

      <input
        className="border p-2 mb-3"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 mb-3"
        placeholder="Mot de passe"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white p-2"
        onClick={login}
      >
        Se connecter
      </button>

    </div>
  );
}