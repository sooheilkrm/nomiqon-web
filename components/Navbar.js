import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900">Nomiqon</h1>
      <div className="space-x-4">
        <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
        <Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
        <Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
        <Link href="/brand-form" className="text-gray-600 hover:text-black">Create Brand</Link>
      </div>
    </nav>
  );
}