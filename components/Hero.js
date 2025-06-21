export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <div className="transition-opacity duration-1000 opacity-0 animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Brand. One Click Away.</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Nomiqon helps you launch powerful brand identities in seconds.</p>
        <button className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition">Try it Free</button>
      </div>
    </section>
  );
}