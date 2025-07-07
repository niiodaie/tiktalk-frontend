import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Your Voice. Your Studio. Your World.</h1>
          <p className="mb-6">Join thousands of creators sharing their stories on TikTalk.</p>
          <div className="space-x-4">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md">Start Your Podcast</button>
            <button className="bg-white text-black px-4 py-2 rounded-md">Browse Episodes</button>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img src="/hero_image_1.png" alt="Podcast studio hero" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

