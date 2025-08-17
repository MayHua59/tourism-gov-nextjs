
"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

const images = [
  "/assets/images/cover-images-mm-title/7.jpg",
    "/assets/images/cover-images-mm-title/5.jpg",
    "/assets/images/cover-images-mm-title/6.jpg",
  
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Start auto-rotation
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds for each slide

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className={styles.pageContainer}>
<section className={styles.heroSection}>
      <div className={styles.carousel}>
        {images.map((src, idx) => (
          <div
            className={`${styles.slide} ${idx === current ? styles.active : ""}`}
            key={src}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={idx !== current}
          />
        ))}
        <div className={styles.dots}>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}