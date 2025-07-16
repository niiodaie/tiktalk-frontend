import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-[#0D0D0D] text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#00FFD1]">
          TikTalk
        </div>
        <div className="space-x-6">
          <a href="/" className="hover:text-[#00FFD1] transition-colors duration-300">Home</a>
          <a href="/start" className="hover:text-[#00FFD1] transition-colors duration-300">Start a Podcast</a>
          <a href="/browse" className="hover:text-[#00FFD1] transition-colors duration-300">Browse Shows</a>
          <a href="/login" className="hover:text-[#00FFD1] transition-colors duration-300">Login / Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

