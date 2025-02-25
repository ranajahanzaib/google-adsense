import React, { useEffect, useRef, useState } from "react";

// Declare global interface for window.adsbygoogle to avoid TypeScript errors.
declare global {
  interface Window {
    adsbygoogle?: Array<{}>;
  }
}

/**
 * Interface for the AdSense component props.
 */
interface AdSenseProps {
  /**
   * Your Google AdSense Publisher ID. Required.
   * Example: "ca-pub-1234567890123456"
   */
  client: string;
  /**
   * The ad slot ID. Required for manual ad placement.
   * Leave undefined for Auto Ads.
   * Example: "1234567890"
   */
  slot?: string;
  /**
   * The ad format. Defaults to "auto".
   * Use this for manual ad placements.
   * Valid values depend on ad unit setup in AdSense.
   * Example: "horizontal", "vertical", "square"
   */
  format?: string;
  /**
   * Class name for the ad element (<ins></ins> tags).
   */
  className?: string;
  /**
   * Additional class names for the ad container element.
   */
  containerClass?: string;
  /**
   * Inline styles for the ad container element.
   */
  style?: React.CSSProperties;
  /**
   * Ad layout.  For responsive ads. Consult AdSense docs.
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
  /**
   * Full width responsive ads. Defaults to false.
   */
  fullWidthResponsive?: boolean;
  /**
   * Width of the ad container. Defaults to "100%".
   */
  width?: string;
  /**
   * Height of the ad container. Defaults to "auto".
   */
  height?: string;
}

/**
 * A React component for displaying Google AdSense ads.
 * Supports both manual ad placements and Auto Ads.
 */
const AdSense: React.FC<AdSenseProps> = ({
  client,
  slot,
  format = "auto",
  style = { display: "block", minHeight: "90px" }, // Ensuring minimum height to prevent zero-height errors
  className,
  containerClass,
  layout,
  layoutKey,
  layoutDensity,
  fullWidthResponsive = false, // Default to false
  width = "100%", // Ensure a valid width
  height = "auto", // Ensure a valid height
}) => {
  const adRef = useRef<HTMLDivElement | null>(null);
  const [showAd, setShowAd] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!slot || !adRef.current) return;

    const adElement = adRef.current.querySelector("ins");
    if (!adElement) return;

    // MutationObserver to check if the ad failed to load
    const observer = new MutationObserver(() => {
      const adStatus = adElement.getAttribute("data-ad-status");

      if (adStatus === "unfilled") {
        console.warn(
          "AdSense returned an unfilled ad. Rechecking in 3 seconds; if it remains unloaded, it will be removed..."
        );

        setTimeout(() => {
          if (adElement.getAttribute("data-ad-status") === "unfilled") {
            console.warn("AdSense ad unfilled, removing.");
            setShowAd(false);
            observer.disconnect();
          }
        }, 3000); // Wait 3 seconds before removing
      }
    });

    observer.observe(adElement, {
      attributes: true, // Observe changes to attributes
      attributeFilter: ["data-ad-status"],
    });

    // Push ad immediately if adsbygoogle exists
    if (window.adsbygoogle) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense push error: ", e);
        setShowAd(false);
      }
    }

    return () => observer.disconnect();
  }, [client, slot]);

  useEffect(() => {
    const scriptUrl = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;

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
        setScriptLoaded(true); // Set script loaded state
        // Push an empty object to adsbygoogle to trigger ad display for manual placements
        // *after* the script loads, ensuring adsbygoogle is defined.
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      };

      /**
       * Callback function to execute if the AdSense script fails to load.
       */
      script.onerror = () => {
        console.error("Failed to load Google AdSense script.");
        setScriptLoaded(false); // Set script loaded state to false
      };
    } else {
      // Ensures that scriptLoaded reflects the actual state of adsbygoogle, preventing potential issues
      // where scriptLoaded is set to true even if adsbygoogle is undefined.
      setScriptLoaded(!!window.adsbygoogle);
    }
  }, []);

  // If no 'slot' is provided, it's assumed to be Auto Ads.
  // Auto Ads handles the script inclusion and ad placement automatically,
  // so we return null to avoid rendering a redundant script tag.
  if (!showAd || !slot) return null;

  // Manual ad placement: render the <ins> tag.
  return (
    <div ref={adRef} style={{ width, height }} className={containerClass}>
      <ins
        className={`adsbygoogle ${className || ""}`} // Include required class name `adsbygoogle`.
        data-ad-client={client} // Your AdSense Publisher ID.
        data-ad-slot={slot} // The Ad Slot ID.
        data-ad-format={format} // The Ad Format.
        data-ad-layout={layout} // Ad layout (for responsive ads).
        data-ad-layout-key={layoutKey} // Ad layout key (for responsive ads).
        data-ad-layout-density={layoutDensity} // Ad layout density (for responsive ads).
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"} // Full width responsive ads or not.
        style={{ ...style, width, height }} // Inline styles ensuring valid dimensions.
      />
    </div>
  );
};

export default AdSense;
