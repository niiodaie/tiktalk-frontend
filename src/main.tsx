import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import StartPodcast from './pages/StartPodcast';
import BrowseShows from './pages/BrowseShows';
import Login from './pages/Login';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/start" element={<StartPodcast />} />
        <Route path="/browse" element={<BrowseShows />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

