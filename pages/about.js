export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="transition-all duration-700 opacity-0 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Nomiqon</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Nomiqon is a revolutionary platform that empowers creators, entrepreneurs, and businesses
          to build powerful brand identities in just seconds using cutting-edge AI technology.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our mission is simple: to democratize branding. We believe everyone should have access to tools
          that were once exclusive to large agencies and corporations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">Driven by the latest advancements in artificial intelligence.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Friendly</h3>
            <p className="text-gray-600 text-sm">No design skills required — just your idea.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">From concept to assets in less than a minute.</p>
          </div>
        </div>
      </div>
    </section>
  );
}