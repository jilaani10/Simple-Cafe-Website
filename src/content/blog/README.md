# OmniClip AI — Blog Content Pipeline

This directory holds the blog content data model used by the OmniClip AI site. Follow this process to add new posts.

## How to Add a New Blog Post

### 1. Run the transcript through the content-researcher
The content-researcher agent extracts the 3–5 strongest insights ("aha moments") from the raw podcast transcript. These become the backbone of the blog post.

### 2. Content-writer drafts the post
The content-writer agent writes the full article following this SEO-friendly template:
- **H1 title** — clear, keyword-rich, under 60 characters
- **Introduction** — 2–3 paragraphs framing the problem and the promise
- **Body** — H2/H3 sections, bullet points where appropriate, structured for skimmability
- **CTA** — a clear next step tied to OmniClip AI's value prop
- **Length** — 800–1200 words
- **Excerpt** — 150–160 characters for SEO meta description

### 3. Add the post object to `posts.ts`
Open `src/content/blog/posts.ts` and add a new `BlogPost` object to the `blogPosts` array:

```ts
{
  slug: "your-post-slug",           // URL-friendly, lowercase, hyphens
  title: "Your Post Title",
  excerpt: "150-160 char excerpt.", // Keep within SEO limits
  category: "Content Marketing",    // Pick from existing or add new
  author: "OmniClip AI Team",
  date: "2026-08-15",               // ISO date format
  readTime: "6 min read",
  keywords: ["keyword1", "keyword2"],
  content: `<p>HTML body here...</p>`,
}
```

### 4. Deploy
Run `bun run publish` from `/home/team/shared/site`. The build regenerates the route tree automatically — your new post will appear on `/blog` and at `/blog/your-post-slug`.

## SEO Checklist Per Post
- [ ] Title is under 60 characters and includes primary keyword
- [ ] Excerpt is 150–160 characters and includes primary keyword
- [ ] Content uses H2/H3 headings with secondary keywords
- [ ] Keywords array has 3–5 relevant terms
- [ ] CTA links back to the main site
- [ ] Post date is accurate (used for schema.org structured data)
