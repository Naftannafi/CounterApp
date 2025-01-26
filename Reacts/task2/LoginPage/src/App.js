// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // You can style this file if needed
import SignIn from './pages/SignIn'; // Ensure SignIn component is correctly placed
import SignUp from './pages/SignUp'; // Ensure SignUp component is correctly placed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route to the SignIn page */}
          <Route path="/signin" element={<SignIn />} />
          
          {/* Route to the SignUp page */}
          <Route path="/signup" element={<SignUp />} />
          
          {/* Optionally, you can set a default route for '/' to go to SignIn */}
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
