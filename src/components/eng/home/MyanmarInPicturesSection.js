import React from "react";
import styles from "./MyanmarInPicturesSection.module.css";

const galleryItems = [
  {
    src: "/assets/images/cover-images/bagan-sunrise.jpg",
    title: "Bagan at Sunrise",
    category: ["nature", "beaches"],
    subtitle: "Ancient Temples",
    alt: "Bagan Temples",
  },
  {
    src: "/assets/images/cover-images/inle-boat.jpg",
    title: "Inle Lake Fishermen",
    category: ["festivals", "beaches"],
    subtitle: "Unique Culture",
    alt: "Inle Lake",
  },
  {
    src: "/assets/images/cover-images/ngapali-beach.jpg",
    title: "Ngapali Sunset",
    category: ["nature", "beaches"],
    subtitle: "Pristine Beaches",
    alt: "Ngapali Beach",
  },
  {
    src: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    title: "Kyaiktiyo Pagoda",
    category: ["cultural", "festivals"],
    subtitle: "Sacred Sites",
    alt: "Golden Rock",
  },
  {
    src: "/assets/images/cover-images/upaing.jpg",
    title: "U Bein Bridge",
    category: ["nature", "beaches"],
    subtitle: "Iconic Landmarks",
    alt: "Mandalay",
  },
  {
    src: "/assets/images/cover-images/shwedagon.jpg",
    title: "Shwedagon Pagoda",
    category: ["cultural", "festivals"],
    subtitle: "Spiritual Heart",
    alt: "Shwedagon",
  },
];

export default function MyanmarInPicturesSection() {
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
            <button className={`${styles.picturesFilterBtn} ${styles.active}`}>All</button>
            <button className={styles.picturesFilterBtn}>Cultural</button>
            <button className={styles.picturesFilterBtn}>Nature</button>
            <button className={styles.picturesFilterBtn}>Beaches</button>
            <button className={styles.picturesFilterBtn}>Festivals</button>
          </div>
          <div className={styles.picturesGrid}>
            {galleryItems.map((item, i) => (
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