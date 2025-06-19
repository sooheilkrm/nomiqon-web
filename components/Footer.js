import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-sm">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Blog</a>
        <a href="#" className="hover:text-white">Contact</a>
        <a href="#" className="hover:text-white">Privacy</a>
      </div>
      <p className="text-center mt-8">
        &copy; {new Date().getFullYear()} Nomiqon. All rights reserved.
      </p>
    </footer>
  );
}
