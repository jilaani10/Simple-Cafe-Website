export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string; // 150-160 chars for SEO
  category: string; // e.g. "Content Marketing", "Podcasting", "Social Media"
  author: string;
  date: string; // ISO date
  readTime: string; // e.g. "5 min read"
  content: string; // HTML body
  seoTitle?: string; // overrides title for <title> tag
  seoDescription?: string; // overrides excerpt for meta description
  keywords?: string[]; // for meta keywords
}

/**
 * All blog posts for OmniClip AI.
 *
 * To add a new post:
 * 1. Run the transcript through content-researcher for insights
 * 2. Content-writer drafts the post following the SEO template
 * 3. Add your post object here
 * 4. Run `bun run publish` to deploy
 *
 * Posts are displayed newest-first on /blog.
 */
const blogPosts: BlogPost[] = [
  {
    slug: "one-podcast-episode-week-of-content",
    title: "How to Turn One Podcast Episode Into a Week of Content",
    excerpt:
      "Learn the step-by-step process for transforming a single long-form podcast episode into a full week's worth of high-performing content across LinkedIn, X, email, and short-form video.",
    category: "Content Marketing",
    author: "OmniClip AI Team",
    date: "2026-08-01",
    readTime: "7 min read",
    keywords: [
      "content repurposing",
      "podcast content strategy",
      "social media marketing",
      "content automation",
      "OmniClip AI",
    ],
    content: `
<p>Every week, podcasters and content creators pour hours into recording a single long-form episode — then struggle to find the time to promote it across social media, email, and short-form video. The result? Great conversations that only a fraction of your audience ever sees.</p>

<p>But there's a better way. With the right process, <strong>one podcast episode can fuel an entire week of high-performing content</strong> — without burning out your team or diluting quality.</p>

<p>Here's exactly how to do it, step by step.</p>

<h2>Why Most Repurposing Efforts Fail</h2>

<p>Before we dive into the process, let's address why most "content repurposing" doesn't work:</p>

<ul>
  <li><strong>They start with the wrong episode.</strong> Not every conversation is packed with shareable insights. If the episode didn't have "aha moments," repurposed content won't either.</li>
  <li><strong>They copy-paste across platforms.</strong> A LinkedIn post is not a tweet. An email is not a TikTok script. Each platform has its own rhythm, and audiences can tell when you're phoning it in.</li>
  <li><strong>They add fluff to hit word counts.</strong> Padding the transcript with invented claims or generic advice destroys trust — and trust is the whole game.</li>
</ul>

<p>The fix? A structured pipeline that extracts <em>genuine insights</em> from the episode and formats them natively for each platform.</p>

<h2>Step 1: Extract the 3–5 Strongest Insights</h2>

<p>Listen to (or scan) your transcript and ask: <em>what are the moments where someone would stop scrolling?</em></p>

<p>These are your "aha moments." They're not summaries — they're specific, counterintuitive, or emotionally resonant takeaways. A great insight might be:</p>

<ul>
  <li>A surprising stat the guest shared mid-conversation</li>
  <li>A framework or mental model they explained in their own words</li>
  <li>A personal story with a clear lesson attached</li>
  <li>A controversial opinion backed by experience</li>
</ul>

<p><strong>Pro tip:</strong> If you can't find at least 3 strong insights, that episode probably isn't worth repurposing. Save your energy for the conversations that earn it.</p>

<h2>Step 2: Map Each Insight to the Right Platform</h2>

<p>Not every insight works everywhere. Here's a quick mapping guide:</p>

<ul>
  <li><strong>LinkedIn:</strong> Professional insights, frameworks, and data-driven takeaways. Think: "What would make a VP of Marketing stop scrolling?"</li>
  <li><strong>X (Twitter):</strong> Punchy, opinionated takes and counterintuitive ideas. Think: "What's the one sentence someone would retweet?"</li>
  <li><strong>Email newsletter:</strong> The full narrative arc — summary, key takeaways, and a deeper dive for your most loyal readers.</li>
  <li><strong>TikTok / Reels:</strong> Visual, high-energy hooks from the most emotionally charged moments in the conversation.</li>
</ul>

<h2>Step 3: Write Platform-Native, Not Transcript-Native</h2>

<p>This is where most teams stumble. Writing "platform-native" means:</p>

<ul>
  <li><strong>LinkedIn posts</strong> follow a hook → value → CTA structure. They're professional but conversational — zero corporate jargon.</li>
  <li><strong>X threads</strong> open with a scroll-stopping first tweet, then deliver bullet-point value in scannable beats.</li>
  <li><strong>Email summaries</strong> respect the reader's time: ~200 words, with clear "Key Takeaways" and a "Deep Dive" for those who want more.</li>
  <li><strong>Video scripts</strong> are formatted with visual cues, hooks, and CTAs — ready to hand to an editor or shoot yourself.</li>
</ul>

<h2>Step 4: Ship Everything Together</h2>

<p>Don't drip-feed your content over two weeks. When the episode is fresh in your mind (and your audience's), publish the full asset pack within the same week. This creates a surround-sound effect: your audience sees the episode referenced on LinkedIn, in their inbox, and in their feed — and it reinforces the message every time.</p>

<h2>The OmniClip AI Difference</h2>

<p>Doing all of this manually takes hours — sometimes days — per episode. That's why we built OmniClip AI: a content repurposing studio that does the heavy lifting for you.</p>

<p>Here's what one episode gets you:</p>

<ul>
  <li><strong>2 LinkedIn authority posts</strong> — professional, storytelling-driven, built hook → value → CTA</li>
  <li><strong>1 X (Twitter) educational thread</strong> — 5–7 tweets, high-engagement hook first</li>
  <li><strong>1 email newsletter summary</strong> — ~200 words with takeaways and a deep dive</li>
  <li><strong>3 short-form video scripts</strong> — under 60 seconds each, ready to shoot</li>
</ul>

<p><strong>And here's the best part:</strong> every asset is written in the speaker's voice, strictly grounded in the transcript (zero hallucination), and formatted natively for each platform.</p>

<h2>Ready to turn your next episode into a full content engine?</h2>

<p>Send us a transcript and we'll send back the full asset pack — every piece written, formatted, and ready to publish. <a href="/"><strong>Try OmniClip AI →</strong></a></p>
    `.trim(),
  },
];

/** Returns all blog posts sorted newest-first. */
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Returns a single blog post by slug, or undefined if not found. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Returns all unique blog post slugs (for static path generation). */
export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
