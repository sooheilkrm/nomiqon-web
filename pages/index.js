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
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}