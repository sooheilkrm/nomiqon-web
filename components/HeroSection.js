import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white pr-5">
        Build your brand in seconds
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
        Create stunning logos and full brand kits with the power of AI. No design skills required.
      </p>
      <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
}
