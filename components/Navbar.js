import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900">Nomiqon</h1>
      <div className="space-x-4">
        <Link href="/about" legacyBehavior><a className="text-gray-600 hover:text-black">About</a></Link>
        <Link href="/contact" legacyBehavior><a className="text-gray-600 hover:text-black">Contact</a></Link>
        <Link href="/blog" legacyBehavior><a className="text-gray-600 hover:text-black">Blog</a></Link>
        <Link href="/brand-form" legacyBehavior><a className="text-gray-600 hover:text-black">Create Brand</a></Link>
      </div>
    </nav>
  );
}
