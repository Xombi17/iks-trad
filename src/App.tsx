import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import WisdomPage from './pages/WisdomPage';
import HealersPage from './pages/HealersPage';
import InteractivePage from './pages/InteractivePage';
import VideoPage from './pages/VideoPage';
import GamesPage from './pages/GamesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/wisdom" element={<WisdomPage />} />
          <Route path="/healers" element={<HealersPage />} />
          <Route path="/interactive" element={<InteractivePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
        
        <footer className="bg-amber-900 text-amber-100 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-serif">
              Preserving Ancient Wisdom for Future Generations
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;