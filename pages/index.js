import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomiqon</title>
        <meta name="description" content="Your Brand. One Click Away." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />

        {/* Hero Section */}
        <section className="text-center py-20 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Brand. One Click Away.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Nomiqon helps you launch powerful brand identities in seconds.</p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition">
            Try it Free
          </button>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Smart Generator",
              desc: "Automatically create brand assets with AI.",
            },
            {
              title: "Instant Preview",
              desc: "See your brand in action before you publish.",
            },
            {
              title: "Flexible Export",
              desc: "Download your logo, fonts, and style guide instantly.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-100 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Trusted by brands like</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 px-4">
            {['Notion', 'Figma', 'Vercel', 'Zapier', 'Spotify'].map((brand) => (
              <div key={brand} className="text-gray-600 text-lg font-medium">{brand}</div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}