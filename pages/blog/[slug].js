import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const { query } = useRouter();
  const { slug } = query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const encodedSlug = encodeURIComponent(slug);
    fetch(`https://zgr71f0x.api.sanity.io/v1/data/query/production?query=*[_type=="blogPost" && slug.current=="${encodedSlug}"][0]{title, body}`)
      .then((res) => res.json())
      .then((data) => setPost(data.result));
  }, [slug]);

  if (!post) return <div className="text-center mt-20 text-gray-500">Loading post...</div>;

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.body }} />
    </section>
  );
}