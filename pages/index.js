import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import BlogPreview from '../components/BlogPreview'
import FormSection from '../components/FormSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomiqon</title>
      </Head>
      <HeroSection />
      <HowItWorks />
      <BlogPreview />
      <FormSection />
      <Footer />
    </>
  )
}
