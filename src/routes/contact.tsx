import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OmniClip AI" },
      {
        name: "description",
        content:
          "Get in touch with OmniClip AI. Send us a transcript, ask a question, or start turning your podcast episodes into a full content engine.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Have a question, a transcript to share, or want to learn more about
          OmniClip AI? We'd love to hear from you.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {/* Email card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
              <svg
                className="h-5 w-5 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-bold">Email us</h2>
            <p className="mt-2 text-gray-600">
              The fastest way to reach us. Send your transcript or any question
              to:
            </p>
            <a
              href="mailto:hello@omniclip.ai"
              className="mt-3 inline-block text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition"
            >
              hello@omniclip.ai
            </a>
          </div>

          {/* What to include card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
              <svg
                className="h-5 w-5 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-bold">What to include</h2>
            <p className="mt-2 text-gray-600">
              When you email us, let us know:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
              <li>What kind of content you're repurposing (podcast, webinar, etc.)</li>
              <li>How many episodes you'd like processed</li>
              <li>Any specific platform needs or preferences</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-indigo-50 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Ready to send a transcript?
          </h2>
          <p className="mt-2 text-gray-600">
            The first asset pack ships as soon as the first transcript lands —
            no setup, no contracts.
          </p>
          <a
            href="mailto:hello@omniclip.ai"
            className="mt-4 inline-block rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Email us a transcript →
          </a>
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
