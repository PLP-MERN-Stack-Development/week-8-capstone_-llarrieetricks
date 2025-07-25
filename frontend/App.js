import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Orders from './components/Orders';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Food Delivery App</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/orders" style={{ marginRight: '10px' }}>Orders</Link>
          <Link to="/restaurants">Restaurants</Link>
        </nav>

        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
