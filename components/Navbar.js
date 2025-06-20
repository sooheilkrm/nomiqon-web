
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <div className="text-xl font-bold">Nomiqon</div>
      <ul className="flex gap-6">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">Blog</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-4">
        <button className="border px-4 py-2 rounded hover:bg-gray-100">Log in</button>
        <button className="bg-black text-white px-4 py-2 rounded hover:opacity-80">Sign up</button>
      </div>
    </nav>
  );
}
