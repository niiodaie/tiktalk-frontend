import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;

