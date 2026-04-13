import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
        Blog
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Insights &amp; Analysis
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl">
        Technical deep-dives on AI, machine learning, and how enterprises
        can leverage these technologies for real business impact.
      </p>

      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              <div className="mt-2 flex gap-4 text-sm text-[var(--muted)]">
                <time>{post.date}</time>
                <span>{post.readingTime}</span>
              </div>
              <p className="mt-3 text-[var(--muted)]">{post.description}</p>
              <div className="mt-3 flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
