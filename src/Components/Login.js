import React, { useState } from 'react';
import { auth } from '../firebase'; // Import the initialized auth from your firebase config
import { signInWithEmailAndPassword } from 'firebase/auth';
import './styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        // Redirect or perform further actions
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        // Display error message to user
      });
  };

  return (
    <form onSubmit={signIn}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
