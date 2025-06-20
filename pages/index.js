import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-nomiqon">Welcome to Nomiqon</h1>
      <p className="text-lg md:text-xl mb-8 text-center">A modern platform inspired by Linear.app</p>
      <div className="flex gap-4">
        <Link href="/about" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">About Us</Link>
        <Link href="/contact" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Contact</Link>
        <Link href="/blog" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Blog</Link>
      </div>
    </main>
  );
}