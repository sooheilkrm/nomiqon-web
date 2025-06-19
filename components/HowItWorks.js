import React from 'react';

export default function HowItWorks() {
  const steps = [
    'Describe your business',
    'Choose your style',
    'Preview your brand',
    'Download and use'
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">{idx + 1}</div>
            <h3 className="font-semibold mb-2">{step}</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
