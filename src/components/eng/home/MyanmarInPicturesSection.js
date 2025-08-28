"use client";
import React, { useState } from "react";
import styles from "./MyanmarInPicturesSection.module.css";

const galleryItems = [
  {
    src: "/assets/images/cover-images/bagan-sunrise.jpg",
    title: "Bagan at Sunrise",
    category: ["nature", "cultural"],
    subtitle: "Bagan, Mandalay",
    alt: "Bagan Temples",
  },
  {
    src: "/assets/images/cover-images/inle-boat.jpg",
    title: "Inle Lake Fishermen",
    category: ["festivals", "nature", "cultural"],
    subtitle: "Inle, Shan State",
    alt: "Inle Lake",
  },
  {
    src: "/assets/images/cover-images/ngapali-beach.jpg",
    title: "Ngapali Sunset",
    category: ["nature", "beaches"],
    subtitle: "Ngapali, Rakhine State",
    alt: "Ngapali Beach",
  },
  {
    src: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    title: "Kyaiktiyo Pagoda",
    category: ["cultural", "festivals"],
    subtitle: "Mon State",
    alt: "Golden Rock",
  },
  {
    src: "/assets/images/cover-images/upaing.jpg",
    title: "U Bein Bridge",
    category: ["nature"],
    subtitle: "Mandalay",
    alt: "Mandalay",
  },
  {
    src: "/assets/images/cover-images/shwedagon.jpg",
    title: "Shwedagon Pagoda",
    category: ["cultural", "festivals"],
    subtitle: "Yangon",
    alt: "Shwedagon",
  },
];

export default function MyanmarInPicturesSection() {
  const [filter, setFilter] = useState("all");
  const filteredItems =
  filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category.map(c => c.toLowerCase()).includes(filter));
  return (
    <section className={styles.picturesSection}>
      <div className={styles.picturesContainer}>
        <div className={styles.picturesHeaderRow}>
          <div className={styles.picturesHeaderCol}>
            <div className={styles.picturesSectionHeader}>
              <h2 className={styles.picturesSectionTitle}>Myanmar in Pictures</h2>
              <span className={styles.picturesTitleBorder}></span>
              <p>
                Explore the beauty and diversity of Myanmar through our photo gallery showcasing iconic
                landmarks and hidden gems.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.picturesFilterWrapper}>
          <div className={styles.picturesFilterGroup}>
             <button
    className={`${styles.picturesFilterBtn} ${filter === "all" ? styles.active : ""}`}
    onClick={() => setFilter("all")}
  >
    All
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "cultural" ? styles.active : ""}`}
    onClick={() => setFilter("cultural")}
  >
    Cultural
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "nature" ? styles.active : ""}`}
    onClick={() => setFilter("nature")}
  >
    Nature
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "beaches" ? styles.active : ""}`}
    onClick={() => setFilter("beaches")}
  >
    Beaches
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "festivals" ? styles.active : ""}`}
    onClick={() => setFilter("festivals")}
  >
    Festivals
  </button>
          </div>
          <div className={styles.picturesGrid}>
  {filteredItems.map((item, i) => (
    <div className={styles.picturesGridItem} key={i}>
      <div className={styles.picturesThumb}>
        <img
          src={item.src}
          alt={item.alt}
          className={styles.picturesImg}
        />
        <div className={styles.picturesOverlayText}>
          <h3 className={styles.picturesOverlayTitle}>
            <a href="/gallery.html">{item.title}</a>
          </h3>
          <span>{item.subtitle}</span>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}