import Head from 'next/head'
import { getSlogan } from '../lib/getSlogan'
import { getFooter } from '../lib/getFooter'
import { getPost } from '../lib/getPost'
import BlogPreview from '../components/BlogPreview'

export default function Home({ slogan, footer, posts }) {
  const steps = [
    {
      title: 'Describe your business',
      desc: 'Tell us about your company so our AI can generate relevant branding.'
    },
    {
      title: 'Choose your style',
      desc: 'Select from curated styles that match your vision.'
    },
    {
      title: 'Preview your brand',
      desc: 'See your new logo and brand kit instantly.'
    },
    {
      title: 'Download and use',
      desc: 'Start using your new brand assets anywhere.'
    }
  ]

  const features = [
    {
      title: 'AI Powered',
      desc: 'Leverage artificial intelligence to create unique branding in seconds.'
    },
    {
      title: 'Easy to Use',
      desc: 'Our intuitive process makes it simple for anyone to craft a brand.'
    },
    {
      title: 'Complete Brand Kit',
      desc: 'Logos, colors and fonts that work together perfectly.'
    }
  ]

  return (
    <>
      <Head>
        <title>Nomiqon</title>
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{slogan?.text}</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">{slogan?.sloganSubText}</p>
        <a href="#how-it-works" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">Get Started</a>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">{idx + 1}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      {BlogPreview && <BlogPreview posts={posts} />}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-sm">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
        <p className="text-center mt-8">{footer?.copyrightText}</p>
      </footer>
    </>
  )
}

export async function getStaticProps() {
  const slogan = await getSlogan()
  const footer = await getFooter()
  const posts = await getPost()
  return { props: { slogan, footer, posts } }
}