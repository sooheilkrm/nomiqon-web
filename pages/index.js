import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
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
        <div className="p-6">
          {/* دکمه تست فعال بودن Tailwind */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            تست Tailwind
          </button>
        </div>
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
