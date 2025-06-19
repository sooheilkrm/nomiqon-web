import React from 'react'

export default function BlogPreview() {
  const posts = [
    {
      title: 'How AI is Changing Branding',
      excerpt: 'Explore how artificial intelligence streamlines the branding process and enables rapid experimentation.'
    },
    {
      title: 'Design Tips for Non-Designers',
      excerpt: 'Simple techniques to help anyone create a professional visual identity without prior experience.'
    },
    {
      title: 'Launching Your New Brand',
      excerpt: 'Best practices for rolling out your freshly generated brand across all customer touchpoints.'
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">From the Blog</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="opacity-0 animate-fadeIn p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-50"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
