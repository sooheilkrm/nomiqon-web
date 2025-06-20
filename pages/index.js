import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Linear Style Site</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-6xl font-bold mb-4">Welcome to Linear Style Site</h1>
        <p className="text-xl text-gray-400">A minimal, animated interface inspired by linear.app</p>
      </main>
    </>
  )
}