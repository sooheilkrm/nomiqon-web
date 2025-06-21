export default function BrandForm() {
  return (
    <section className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Your Brand</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-700">Brand Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="e.g. Nomiqon" />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Business Type</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="e.g. Tech, Fashion..." />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Preferred Color</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="e.g. Teal, Blue..." />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Keywords</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="e.g. AI, Minimal, Bold" />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition">Generate Brand</button>
      </form>
    </section>
  );
}