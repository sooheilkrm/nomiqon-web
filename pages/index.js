
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="text-3xl font-bold text-center mt-20 text-teal-600">
      Welcome to Nomiqon
    </div>
  )
}
    <>
      <Head>
        <title>Nomiqon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  )
}
