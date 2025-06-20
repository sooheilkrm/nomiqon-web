
export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <h1 className="text-4xl font-bold mb-4 text-white">Your Brand. One Click Away.</h1>
      <p className="text-lg text-white mb-6">Nomiqon helps you launch powerful brand identities in seconds.</p>
      <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">Get Started</button>
    </section>
  );
}
