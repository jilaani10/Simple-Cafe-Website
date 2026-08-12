import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OmniClip AI" },
      {
        name: "description",
        content:
          "OmniClip AI turns a single podcast transcript into a complete content engine — LinkedIn posts, X threads, newsletters, and video scripts. Learn about our mission.",
      },
      { property: "og:title", content: "About — OmniClip AI" },
      {
        property: "og:description",
        content:
          "OmniClip AI turns a single podcast transcript into a complete content engine — LinkedIn posts, X threads, newsletters, and video scripts.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            OmniClip <span className="text-indigo-600">AI</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/blog" className="text-sm font-semibold text-indigo-600">
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

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <section>
          <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            About us
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            One episode, one asset pack — that's{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              OmniClip AI
            </span>
          </h1>
        </section>

        <div className="prose prose-lg prose-gray mt-10 max-w-none space-y-8">
          <section>
            <h2>What we do</h2>
            <p>
              OmniClip AI is a content repurposing studio that turns long-form
              podcast transcripts into high-performing, platform-specific
              content assets. We take one raw transcript — from a podcast,
              interview, webinar, or long-form conversation — and extract the
              3–5 most impactful insights. Then we build a full asset pack
              around those insights, formatted natively for every platform where
              your audience lives.
            </p>
            <p>
              The result? LinkedIn authority posts, an X (Twitter) educational
              thread, an email newsletter summary, and short-form video scripts
              — all written in the speaker's voice, strictly grounded in the
              original conversation, and ready to publish the same week.
            </p>
          </section>

          <section>
            <h2>Why we built it</h2>
            <p>
              Podcasters and content creators pour hours into recording
              incredible conversations — then struggle to promote them across
              channels. The typical workflow is broken: teams either burn out
              trying to manually repurpose every episode, or they let great
              content sit unseen.
            </p>
            <p>
              We built OmniClip AI to solve that. The idea is simple: one
              transcript in, one full asset pack out. No fluff, no invented
              facts, no generic AI tone. Just the strongest insights from the
              conversation, rewritten for each platform by someone who
              understands how those platforms actually work.
            </p>
          </section>

          <section>
            <h2>How it works</h2>
            <ol>
              <li>
                <strong>You share a transcript.</strong> Drop in a raw podcast
                or long-form conversation transcript — that's all we need to get
                started.
              </li>
              <li>
                <strong>We extract the core insights.</strong> Our team pulls
                the 3–5 strongest "aha moments" and actionable takeaways from
                the conversation. These become the backbone of every asset.
              </li>
              <li>
                <strong>You get the full asset pack.</strong> Every platform
                piece, written in the speaker's voice and ready to publish —
                delivered as a complete pack, not a drip feed.
              </li>
            </ol>
          </section>

          <section>
            <h2>What makes us different</h2>
            <ul>
              <li>
                <strong>Voice-matched tone.</strong> Conversational,
                authoritative, accessible — written to sound like the person who
                actually said it, not like a generic AI.
              </li>
              <li>
                <strong>Strictly grounded in the transcript.</strong> No
                invented facts, no embellished claims, no hallucinated numbers.
                If it isn't in the episode, it isn't in the pack.
              </li>
              <li>
                <strong>Platform-native formatting.</strong> Every asset is
                structured for the platform it lives on — the way that audience
                actually reads, scrolls, and shares.
              </li>
              <li>
                <strong>Zero hallucination.</strong> We don't make things up.
                Every insight, stat, and quote comes directly from the
                transcript.
              </li>
            </ul>
          </section>

          <section>
            <h2>Ready to turn your next episode into a full content engine?</h2>
            <p>
              <Link
                to="/"
                className="font-semibold text-indigo-600 underline"
              >
                Send us a transcript →
              </Link>{" "}
              and we'll send back the full asset pack — every piece written,
              formatted, and ready to publish.
            </p>
          </section>
        </div>
      </main>

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
