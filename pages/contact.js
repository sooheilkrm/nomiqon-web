export default function Contact() {
  return (
    <section className="max-w-xl mx-auto px-6 py-20">
      <div className="transition-opacity duration-700 opacity-0 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea rows="5" className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
          </div>
          <button className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}