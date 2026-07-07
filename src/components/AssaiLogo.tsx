import React from "react";

interface AssaiLogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function AssaiLogo({ className = "", showText = true, light = true }: AssaiLogoProps) {
  // Direct Imgur image URL for high fidelity rendering
  const imageUrl = "https://i.imgur.com/wCZYLnN.png";

  // Check if class contains standard Tailwind width/height constraints
  const hasWidth = className.includes("w-") || className.includes("max-w-");
  const hasHeight = className.includes("h-") || className.includes("max-h-");

  // Determine standard size layout if not size-constrained from outside
  const defaultSizeClasses = (hasWidth || hasHeight)
    ? ""
    : showText
      ? "h-10 md:h-12 w-auto" // Standard layout size for Header / Cover
      : "h-8 w-8";           // Compact fallback

  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`} 
      id="assai-logo-container"
    >
      <img
        src={imageUrl}
        alt="Assaí Atacadista"
        className={`object-contain max-w-full max-h-full transition-transform ${defaultSizeClasses}`}
        referrerPolicy="no-referrer"
        id="assai-logo-img"
        style={{
          // Set safety variables to prevent distortion
          display: "block",
        }}
      />
    </div>
  );
}
