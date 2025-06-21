export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900">Nomiqon</h1>
      <div className="space-x-4">
        <a href="#features" className="text-gray-600 hover:text-black">Features</a>
        <a href="#about" className="text-gray-600 hover:text-black">About</a>
        <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
      </div>
    </nav>
  );
}