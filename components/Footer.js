export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-6 mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; 2025 Nomiqon. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Facebook</a>
        </div>
      </div>
    </footer>
  );
}