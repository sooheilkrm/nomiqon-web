import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomiqon - Your Brand. One Click Away.</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-indigo-600 to-teal-600 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-extrabold mb-6 text-center">Build Your Brand in Seconds</h1>
        <p className="text-lg mb-8 text-center max-w-xl">AI-powered branding platform to generate logos, slogans, and full identity kits.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">About</Link>
          <Link href="/blog" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Blog</Link>
          <Link href="/contact" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Contact</Link>
        </div>
      </main>
    </>
  );
}
