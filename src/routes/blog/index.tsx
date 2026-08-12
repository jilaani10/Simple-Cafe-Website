import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllPosts } from "~/content/blog/posts";
import AdSense from "~/components/AdSense";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      {
        title: "Blog — OmniClip AI",
      },
      {
        name: "description",
        content:
          "Insights on content marketing, podcast repurposing, and building a full content engine from every episode. The OmniClip AI blog.",
      },
      { property: "og:title", content: "Blog — OmniClip AI" },
      {
        property: "og:description",
        content:
          "Insights on content marketing, podcast repurposing, and building a full content engine from every episode.",
      },
    ],
  }),
  component: BlogListing,
});

function BlogListing() {
  const posts = getAllPosts();

  return (
    <div className="min-h-dvh bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            OmniClip <span className="text-indigo-600">AI</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-sm font-semibold text-indigo-600"
            >
              Blog
            </Link>
            <Link
              to="/"
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Send us a transcript
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-16 sm:pt-24">
        <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          Blog
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Content marketing &amp; podcasting{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            insights
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Practical guides on turning long-form content into platform-ready
          assets — from the team building OmniClip AI.
        </p>
      </section>

      {/* Post cards */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center">
            <p className="text-gray-500">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <div key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                      {post.category}
                    </span>
                    <span className="text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold leading-tight transition group-hover:text-indigo-600">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition group-hover:gap-2">
                    Read article
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>

                {/* Ad after first 2 posts */}
                {index === 1 && posts.length > 2 && (
                  <AdSense
                    slot="blog-listing-mid"
                    format="horizontal"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Ad at bottom of listing */}
        {posts.length > 0 && (
          <AdSense
            slot="blog-listing-bottom"
            format="horizontal"
            className="mt-12"
          />
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-500 sm:flex-row">
          <span>
            <strong className="text-gray-700">OmniClip AI</strong> — one
            episode, one asset pack.
          </span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-700 transition">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-gray-700 transition">
              Contact
            </Link>
          </div>
          <span>© {new Date().getFullYear()} OmniClip AI</span>
        </div>
      </footer>
    </div>
  );
}
