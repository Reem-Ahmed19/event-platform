import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/i18n';           // Initialize i18n
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './Home';
import '../src/global.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Preloader: show for 2.2 seconds, then fade out
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Preloader overlay */}
      <Preloader isVisible={loading} />

      {/* Main App */}
      <div className="app-root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as the project grows */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
