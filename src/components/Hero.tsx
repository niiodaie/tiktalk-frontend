import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#0D0D0D] text-white px-6 py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-[#00FFD1]">
            Your Voice. Your Studio. Your World.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80 text-white">
            Join thousands of creators sharing their stories on TikTalk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#00FFD1] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FF597B] transition-all duration-300">
              Start Your Podcast
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300">
              Browse Shows
            </button>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src="/hero.jpg" alt="Podcast studio hero" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

