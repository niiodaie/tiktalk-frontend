import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Placeholder pages
const StartPage = () => <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center text-3xl">Start a Podcast Page</div>;
const BrowsePage = () => <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center text-3xl">Browse Shows Page</div>;
const LoginPage = () => <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center text-3xl">Login / Sign Up Page</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

