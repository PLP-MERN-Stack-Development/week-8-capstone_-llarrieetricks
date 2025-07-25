// frontend/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orders from './pages/Orders'; // <-- Import Orders page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the MERN Bug Tracker</h1>} />
        <Route path="/orders" element={<Orders />} /> {/* Add this */}
      </Routes>
    </Router>
  );
}

export default App;
