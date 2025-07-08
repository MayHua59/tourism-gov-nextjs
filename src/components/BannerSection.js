"use client";
import React from "react";
import styles from "./BannerSection.module.css";

export default function BannerSection({ imageUrl, altText = "Banner image" }) {
  if (!imageUrl) {
    return null; // Don't render anything if no image is provided
  }

  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="img"
      aria-label={altText}
    >
      <div className={styles.overlay}></div>
    </section>
  );
}