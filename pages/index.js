
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomiqon</title>
        <meta name="description" content="Your Brand. One Click Away." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-teal-100 to-white flex flex-col items-center justify-center text-center px-4">
        <Image src={Logo} alt="Logo" width={80} height={80} className="mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Nomiqon</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Your brand. One click away.</p>
        <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-all">
          Get Started
        </button>
      </div>
    </>
  );
}
