import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight">Alexander AI Consulting</h1>
        <p className="mt-4 text-lg text-gray-600">
          Insights on AI, machine learning, and building intelligent systems.
        </p>
      </header>

      <section>
        {posts.map((post) => (
          <article key={post.slug} className="mb-12 group">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <div className="mt-2 flex gap-4 text-sm text-gray-500">
                <time>{post.date}</time>
                <span>{post.readingTime}</span>
              </div>
              <p className="mt-3 text-gray-600">{post.description}</p>
              <div className="mt-3 flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
