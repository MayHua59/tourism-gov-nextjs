"use client"; 
import React, { useEffect, useRef, useState } from "react";

import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Reset timeout when current image changes or images array changes
  useEffect(() => {
    // Clear any existing timeout to prevent multiple timers running
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds for each slide

    return () => {
      // Cleanup on unmount or when dependencies change
      clearTimeout(timeoutRef.current);
    };
  }, [current, images]); 
  if (!images || images.length === 0) {
    return null; // Don't render if no images
  }

  return (
    <div className={styles.carouselContainer}> 
      <div className={styles.carousel}>
        {images.map((src, idx) => (
          <div
            className={`${styles.slide} ${idx === current ? styles.active : ""}`}
            key={src}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={idx !== current}
          />
        ))}
        {images.length > 1 && ( // Only show dots if there's more than one image
          <div className={styles.dots}>
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
                onClick={() => {
                  setCurrent(idx); // Allow manual navigation by clicking dots
                }}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}