import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug } from "~/content/blog/posts";
import AdSense from "~/components/AdSense";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const post = loaderData;
    if (!post) return { meta: [{ title: "Post Not Found — OmniClip AI" }] };

    const title = post.seoTitle || post.title;
    const description = post.seoDescription || post.excerpt;
    const canonicalUrl = `https://omniclip.ai/blog/${post.slug}`;
    const keywords = post.keywords?.join(", ") || "";

    return {
      meta: [
        { title: `${title} — OmniClip AI` },
        { name: "description", content: description },
        ...(keywords ? [{ name: "keywords", content: keywords }] : []),
        { property: "og:title", content: `${title} — OmniClip AI` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${title} — OmniClip AI` },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "OmniClip AI",
            },
            ...(keywords ? { keywords: keywords } : {}),
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  const contentParts = post.content.split(/(?<=<\/p>)\s*(?=<p|<h2|<h3|<ul|<ol)/);

  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            OmniClip <span className="text-indigo-600">AI</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/blog" className="text-sm font-semibold text-indigo-600">Blog</Link>
            <Link to="/" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">Send us a transcript</Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-16 sm:pt-24">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition">
          <span aria-hidden="true">←</span> Back to blog
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            {post.category}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{post.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose prose-lg prose-gray mt-10 max-w-none">
          {contentParts.map((part, i) => (
            <div key={i}>
              <div dangerouslySetInnerHTML={{ __html: part }} />
              {i === 1 && <AdSense slot="blog-post-mid" format="rectangle" />}
            </div>
          ))}
        </div>

        <AdSense slot="blog-post-bottom" format="horizontal" className="mt-12" />

        <div className="mt-12 border-t border-gray-100 pt-8">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition">
            <span aria-hidden="true">←</span> Back to blog
          </Link>
        </div>
      </article>

      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-500 sm:flex-row">
          <span><strong className="text-gray-700">OmniClip AI</strong> — one episode, one asset pack.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-700 transition">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gray-700 transition">Contact</Link>
          </div>
          <span>© {new Date().getFullYear()} OmniClip AI</span>
        </div>
      </footer>
    </div>
  );
}
