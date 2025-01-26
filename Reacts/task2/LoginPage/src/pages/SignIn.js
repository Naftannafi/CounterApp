// src/pages/SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'; // Optional CSS for styling

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signed in with:", email, password);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
      <div className="links">
        <Link to="/signup">Create an account</Link>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default SignIn;
