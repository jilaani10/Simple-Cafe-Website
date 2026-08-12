import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OmniClip AI — Turn one podcast episode into a full content engine" },
      {
        name: "description",
        content:
          "OmniClip AI turns a single podcast transcript into a complete pack of platform-ready assets — LinkedIn posts, X threads, newsletters, and short-form video scripts. One episode in, everything out.",
      },
      { property: "og:title", content: "OmniClip AI — Turn one podcast episode into a full content engine" },
      {
        property: "og:description",
        content:
          "OmniClip AI turns a single podcast transcript into a complete pack of platform-ready assets — LinkedIn posts, X threads, newsletters, and short-form video scripts.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const deliverables = [
  {
    tag: "LinkedIn ×2",
    title: "Authority posts",
    desc: "Professional, human-sounding posts built hook → value → CTA. Storytelling and data where the episode earns it — zero corporate fluff.",
  },
  {
    tag: "X (Twitter) ×1",
    title: "Educational thread",
    desc: "A 5–7 tweet thread that opens with a high-engagement hook, then delivers the goods in scannable, retweetable beats.",
  },
  {
    tag: "Email ×1",
    title: "Newsletter summary",
    desc: "A ~200-word email with the episode summary, 3 Key Takeaways, and a Deep Dive section readers actually finish.",
  },
  {
    tag: "TikTok/Reels ×3",
    title: "Video scripts",
    desc: "Three sub-60-second scripts, each formatted [Visual Cue] [Hook] [Body] [CTA] — ready to shoot or hand to an editor.",
  },
];

const steps = [
  {
    num: "1",
    title: "Share your transcript",
    desc: "Drop in a raw podcast or long-form conversation transcript — that's all we need.",
  },
  {
    num: "2",
    title: "We extract the core insights",
    desc: "We pull the 3–5 strongest aha moments and actionable takeaways from the conversation.",
  },
  {
    num: "3",
    title: "You get the full asset pack",
    desc: "Every platform piece, written in the speaker's voice and ready to publish the same week.",
  },
];

const qualityNotes = [
  {
    title: "Voice-matched tone",
    desc: "Conversational, authoritative, accessible — written to sound like the person who actually said it.",
  },
  {
    title: "Strictly grounded in the transcript",
    desc: "No invented facts, no embellished claims, no hallucinated numbers. If it isn't in the episode, it isn't in the pack.",
  },
  {
    title: "Platform-native formatting",
    desc: "Every asset is structured for the platform it lives on — the way that audience actually reads and shares.",
  },
];

function Home() {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            OmniClip <span className="text-indigo-600">AI</span>
          </span>
          <div className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
            >
              Blog
            </Link>
            <a
              href="#get-started"
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Send us a transcript
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          Podcast → full content engine
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Turn one podcast episode into a{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            full content engine
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          OmniClip AI turns a single long-form transcript into a complete pack of
          platform-ready assets — LinkedIn posts, an X thread, an email
          newsletter, and short-form video scripts. One episode in, everything
          out.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#get-started"
            className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Send us a transcript
          </a>
          <a
            href="#what-you-get"
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            See what's in the pack
          </a>
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What you get
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Every episode becomes one asset pack, built from the{" "}
            <strong className="text-gray-900">3–5 strongest insights</strong>{" "}
            in the conversation:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {deliverables.map((d) => (
              <div
                key={d.tag}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  {d.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            No extra charge for length. Short episodes, long episodes — the pack
            is the same, and it ships together.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                  {s.num}
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality notes */}
      <section className="bg-gray-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Written like you, not like a machine
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {qualityNotes.map((q) => (
              <div key={q.title}>
                <h3 className="text-lg font-bold text-indigo-300">{q.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-300">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Send us a transcript
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have an episode that deserves a bigger audience? Send us the
            transcript and we'll send back the full asset pack — every piece
            written, formatted, and ready to publish.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-sm">
              Your transcript → your asset pack
            </span>
            <p className="text-sm text-gray-500">
              First pack ships as soon as the first transcript lands.
            </p>
          </div>
        </div>
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
