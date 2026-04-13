/**
 * Sync blog posts to Medium via their API.
 *
 * Usage:
 *   MEDIUM_TOKEN=your_token npx ts-node scripts/sync-to-medium.ts [slug]
 *
 * To get your Medium token:
 *   1. Go to https://medium.com/me/settings/security
 *   2. Generate an Integration Token
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const MEDIUM_API = "https://api.medium.com/v1";

async function getMediumUser(token: string) {
  const res = await fetch(`${MEDIUM_API}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.data;
}

async function publishToMedium(
  token: string,
  userId: string,
  title: string,
  content: string,
  tags: string[],
  canonicalUrl?: string
) {
  const res = await fetch(`${MEDIUM_API}/users/${userId}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      contentFormat: "markdown",
      content: `# ${title}\n\n${content}`,
      tags: tags.slice(0, 5), // Medium allows max 5 tags
      canonicalUrl,
      publishStatus: "draft", // Start as draft so you can review
    }),
  });
  return res.json();
}

async function main() {
  const token = process.env.MEDIUM_TOKEN;
  if (!token) {
    console.error("Error: Set MEDIUM_TOKEN environment variable.");
    console.error("Get your token at: https://medium.com/me/settings/security");
    process.exit(1);
  }

  const slug = process.argv[2];
  if (!slug) {
    console.error("Usage: MEDIUM_TOKEN=xxx npx ts-node scripts/sync-to-medium.ts <slug>");
    process.exit(1);
  }

  const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    console.error(`Post not found: ${filePath}`);
    process.exit(1);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  console.log(`Syncing "${data.title}" to Medium...`);

  const user = await getMediumUser(token);
  console.log(`Authenticated as: ${user.name}`);

  // Set your blog URL here once deployed
  const canonicalUrl = `https://your-blog.vercel.app/blog/${slug}`;

  const result = await publishToMedium(
    token,
    user.id,
    data.title,
    content,
    data.tags || [],
    canonicalUrl
  );

  if (result.data) {
    console.log(`Published as draft: ${result.data.url}`);
  } else {
    console.error("Error publishing:", result);
  }
}

main();
