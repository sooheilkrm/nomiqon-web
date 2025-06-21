import { useEffect, useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://zgr71f0x.api.sanity.io/v1/data/query/production?query=*[_type=="blogPost"]{title,slug,excerpt}')
      .then((res) => res.json())
      .then((data) => setPosts(data.result || []));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest Blog Posts</h1>
      {posts.length === 0 && <p className="text-center text-gray-500">No posts found.</p>}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug.current} className="p-6 border border-gray-200 rounded-lg hover:shadow transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}