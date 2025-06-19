import React from 'react';

export default function FormSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Build Your Brand</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Business Name" className="w-full px-4 py-2 border rounded" />
        <input type="text" placeholder="Tagline" className="w-full px-4 py-2 border rounded" />
        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Create Brand</button>
      </form>
    </section>
  );
}
