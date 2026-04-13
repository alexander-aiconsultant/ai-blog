import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
      >
        ← Back to all posts
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="mt-4 flex gap-4 text-sm text-gray-500">
            <time>{post.date}</time>
            <span>{post.readingTime}</span>
          </div>
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
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
