export default function Features() {
  return (
    <section className="py-16 px-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-xl font-semibold mb-2">Smart Generator</h3>
        <p className="text-gray-600">Automatically create brand assets with AI.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Instant Preview</h3>
        <p className="text-gray-600">See your brand in action before you publish.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Flexible Export</h3>
        <p className="text-gray-600">Download your logo, fonts, and style guide instantly.</p>
      </div>
    </section>
  );
}