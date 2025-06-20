
export default function Features() {
  return (
    <section className="py-20 px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Smart Generator</h3>
        <p>Automatically create brand assets with AI.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Instant Preview</h3>
        <p>See your brand in action before you publish.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Flexible Export</h3>
        <p>Download your logo, fonts, and style guide instantly.</p>
      </div>
    </section>
  )
}
