"use client";
import Image from "next/image";
import { useState } from "react";

/**
 * OptimizedImage component that handles both local and external images
 * Falls back to unoptimized if the image fails to load
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  style,
  priority = false,
  ...props 
}) {
  const [useUnoptimized, setUseUnoptimized] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Check if image is external
  const isExternal = src?.startsWith('http://') || src?.startsWith('https://');

  // If error occurs, try with unoptimized
  const handleError = () => {
    if (!useUnoptimized && isExternal) {
      setUseUnoptimized(true);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    // Fallback to regular img tag if Image component completely fails
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        style={style}
        width={width}
        height={height}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      priority={priority}
      unoptimized={useUnoptimized || (isExternal && props.unoptimized)}
      onError={handleError}
      {...props}
    />
  );
}

