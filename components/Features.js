export default function Features() {
  return (
    <section className="py-16 px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
      {[
        {
          title: "Smart Generator",
          desc: "Automatically create brand assets with AI.",
        },
        {
          title: "Instant Preview",
          desc: "See your brand in action before you publish.",
        },
        {
          title: "Flexible Export",
          desc: "Download your logo, fonts, and style guide instantly.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}