import React, { useEffect } from "react";

// Declare global interface for window.adsbygoogle to avoid TypeScript errors.
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Interface for the AdSense component props.
 */
interface AdSenseProps {
  /**
   * Your Google AdSense Publisher ID.  Required.
   * Example: "ca-pub-1234567890123456"
   */
  client: string;
  /**
   * The ad slot ID.  Required for manual ad placement.
   * Leave undefined for Auto Ads.
   * Example: "1234567890"
   */
  slot?: string;
  /**
   * The ad format.  Defaults to "auto".
   * Use this for manual ad placements.
   * Valid values depend on ad unit setup in AdSense.
   * Example: "horizontal", "vertical", "square"
   */
  format?: string;
  /**
   * Inline styles for the ad container element.
   */
  style?: React.CSSProperties;
  /**
   * Ad layout.  For responsive ads.  Consult AdSense docs.
   */
  layout?: string;
  /**
   * Ad layout key. For responsive ads. Consult AdSense docs.
   */
  layoutKey?: string;
  /**
   * Ad layout density. For responsive ads. Consult AdSense docs.
   */
  layoutDensity?: string;
}

/**
 * A React component for displaying Google AdSense ads.
 * Supports both manual ad placements and Auto Ads.
 */
const AdSense: React.FC<AdSenseProps> = ({
  client,
  slot,
  format = "auto",
  style = { display: "block" }, // Default style for the ad container
  layout,
  layoutKey,
  layoutDensity,
}) => {
  useEffect(() => {
    const scriptUrl =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

    // Check if the AdSense script is already loaded to prevent duplicate loading.
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.crossOrigin = "anonymous"; // Recommended for security.
      document.head.appendChild(script); // Place in <head> for better performance.

      /**
       * Callback function to execute after the AdSense script has loaded.
       */
      script.onload = () => {
        console.log("AdSense script loaded.");
        // Push an empty object to adsbygoogle to trigger ad display for manual placements
        // *after* the script loads, ensuring adsbygoogle is defined.
        if (slot && window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
        }
      };

      /**
       * Callback function to execute if the AdSense script fails to load.
       */
      script.onerror = () =>
        console.error("Failed to load Google AdSense script.");
    } else if (
      slot &&
      window.adsbygoogle &&
      Array.isArray(window.adsbygoogle)
    ) {
      // If the script is already loaded (e.g., by another AdSense component),
      // and it's a manual placement, push an empty object to trigger ad display.
      window.adsbygoogle.push({});
    }
    // Add 'client' and 'slot' to the dependency array.  If either changes,
    // the effect should re-run to handle potential changes in ad configuration.
  }, [client, slot]);

  // If no 'slot' is provided, it's assumed to be Auto Ads.
  // Auto Ads handles the script inclusion and ad placement automatically,
  // so we return null to avoid rendering a redundant script tag.
  if (!slot) {
    return null;
  }

  // Manual ad placement: render the <ins> tag.
  return (
    <ins
      className="adsbygoogle" // Required class name.
      style={style} // Apply custom styles.
      data-ad-client={client} // Your AdSense Publisher ID.
      data-ad-slot={slot} // The Ad Slot ID.
      data-ad-format={format} // The Ad Format.
      data-ad-layout={layout} // Ad layout (for responsive ads).
      data-ad-layout-key={layoutKey} // Ad layout key (for responsive ads).
      data-ad-layout-density={layoutDensity} // Ad layout density (for responsive ads).
    />
  );
};

export default AdSense;
