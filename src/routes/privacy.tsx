import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — OmniClip AI" },
      {
        name: "description",
        content:
          "OmniClip AI privacy policy — how we collect, use, and protect your data when you use our content repurposing service.",
      },
    ],
  }),
  component: PrivacyPage,
});

/**
 * Privacy Policy page.
 *
 * NOTE: This is a standard template created for AdSense compliance.
 * It has NOT been reviewed by a legal professional. Review with counsel
 * before relying on it for legal purposes.
 */
function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-500">
          Last updated: August 12, 2026
        </p>

        <div className="prose prose-gray mt-10 max-w-none space-y-8">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              OmniClip AI ("we," "our," or "us") operates the website at
              omniclip.ai. We collect information in the following ways:
            </p>
            <ul>
              <li>
                <strong>Information you provide directly:</strong> When you
                contact us via email or submit a transcript for processing, we
                collect your name, email address, and the content you share with
                us.
              </li>
              <li>
                <strong>Automatically collected information:</strong> When you
                visit our site, we may automatically collect certain information
                including your IP address, browser type, operating system,
                referring URLs, and pages visited. This is standard for most
                websites.
              </li>
              <li>
                <strong>Cookies and tracking technologies:</strong> We use
                cookies and similar technologies through third-party services
                (including Google AdSense) to display relevant advertisements
                and analyze site traffic. These cookies may collect information
                about your browsing behavior across sites.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our content repurposing service</li>
              <li>Respond to your inquiries and deliver requested services</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Analyze site usage and improve the user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>3. Third-Party Services</h2>
            <p>
              We use the following third-party services that may collect
              information about you:
            </p>
            <ul>
              <li>
                <strong>Google AdSense:</strong> We display advertisements
                through Google AdSense. Google uses cookies to serve ads based
                on your prior visits to our site and other sites on the
                internet. You may opt out of personalized advertising by
                visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline"
                >
                  Google Ads Settings
                </a>
                . For more information about how Google uses data, see{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline"
                >
                  Google's Partner Sites Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Cookie Consent</h2>
            <p>
              By using our website, you consent to the use of cookies as
              described in this policy. You can control cookie preferences
              through your browser settings. Please note that disabling cookies
              may affect the functionality of certain parts of our site.
            </p>
          </section>

          <section>
            <h2>5. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law. Transcripts submitted for
              processing are deleted after the service is completed unless you
              request otherwise.
            </p>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information from unauthorized access, alteration, or disclosure.
              However, no method of electronic transmission or storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Children's Privacy</h2>
            <p>
              Our service is not directed to children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you believe we have inadvertently collected such
              information, please contact us so we can promptly remove it.
            </p>
          </section>

          <section>
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will post
              any changes on this page and update the "Last updated" date.
              Continued use of the site after changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

          <section>
            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at{" "}
              <a
                href="mailto:privacy@omniclip.ai"
                className="text-indigo-600 underline"
              >
                privacy@omniclip.ai
              </a>
              .
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
