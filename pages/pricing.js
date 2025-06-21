export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Starter",
            price: "$0",
            features: ["Basic brand generator", "Limited exports", "Community support"]
          },
          {
            title: "Pro",
            price: "$19/mo",
            features: ["Full brand generator", "Unlimited exports", "Priority support"]
          },
          {
            title: "Enterprise",
            price: "Custom",
            features: ["Dedicated solutions", "Custom export formats", "24/7 premium support"]
          },
        ].map(plan => (
          <div key={plan.title} className="border border-gray-300 rounded-lg p-6 text-center shadow-sm hover:shadow transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h2>
            <p className="text-3xl font-bold text-teal-500 mb-4">{plan.price}</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              {plan.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}