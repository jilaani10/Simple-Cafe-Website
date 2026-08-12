import { ADSENSE_PUBLISHER_ID } from "~/config/adsense";

interface AdSenseProps {
  /** AdSense ad slot ID (e.g. "1234567890") */
  slot: string;
  /** Ad format: "auto" | "rectangle" | "horizontal" | "vertical" */
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Google AdSense ad unit component.
 *
 * Renders the standard <ins> tag with proper AdSense attributes.
 * Uses a placeholder publisher ID until a real one is configured
 * — the ad slot is invisible in that state and won't break layout.
 */
export default function AdSense({
  slot,
  format = "auto",
  className = "",
}: AdSenseProps) {
  const isPlaceholder = ADSENSE_PUBLISHER_ID === "ca-pub-XXXXXXXXXXXXXXXX";

  if (isPlaceholder) {
    // Render an empty placeholder that reserves space but shows nothing.
    // Once a real publisher ID is set, real ads will fill these slots.
    return (
      <div
        className={`ad-slot-placeholder my-8 flex items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 py-4 text-xs text-gray-400 ${className}`}
        data-ad-slot={slot}
        data-ad-format={format}
      >
        Ad slot — set publisher ID to activate
      </div>
    );
  }

  return (
    <div className={`ad-container my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
