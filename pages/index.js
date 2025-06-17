import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-gray-800">
      <Head>
        <title>Nomiqon - Build your brand in seconds</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Build your brand in seconds</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">Create stunning logos and full brand kits with the power of AI. No design skills required.</p>
        <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">Get Started</button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {['Describe your business', 'Choose your style', 'Preview your brand', 'Download and use'].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">{idx+1}</div>
              <h3 className="font-semibold mb-2">{step}</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'AI Logo Generator', desc: 'Generate unique logos tailored to your brand.' },
            { title: 'Customizable Branding', desc: 'Edit colors, fonts and layouts with ease.' },
            { title: 'Instant Previews', desc: 'See your brand on real mockups instantly.' }
          ].map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-12 w-12 mx-auto bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">{idx+1}</div>
              <h3 className="font-semibold mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-500">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Previews */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Brand previews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1,2,3,4,5,6].map(num => (
            <div key={num} className="h-40 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">What people are saying</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-600 italic">"This platform made branding effortless and fun!"</div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build your brand?</h2>
        <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">Try it now</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-sm">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
        <p className="text-center mt-8">&copy; {new Date().getFullYear()} Nomiqon. All rights reserved.</p>
      </footer>
    </div>
  )
}
