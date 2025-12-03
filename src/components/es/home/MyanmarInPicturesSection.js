"use client";
import React, { useState } from "react";
import styles from "./MyanmarInPicturesSection.module.css";

const galleryItems = [
  {
    src: "/assets/images/cover-images/bagan-sunrise.jpg",
    title: "Bagan al Amanecer",
    category: ["nature", "cultural"],
    subtitle: "Bagan, Mandalay",
    alt: "Bagan Temples",
  },
  {
    src: "/assets/images/cover-images/inle-boat.jpg",
    title: "Pescadores de Inle Lake",
    category: ["festivals", "nature", "cultural"],
    subtitle: "Inle, Shan State",
    alt: "Inle Lake",
  },
  {
    src: "/assets/images/cover-images/ngapali-beach.jpg",
    title: "Puesta de Sol en Ngapali",
    category: ["nature", "beaches"],
    subtitle: "Ngapali, Rakhine State",
    alt: "Ngapali Beach",
  },
  {
    src: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    title: "Pagoda Kyaiktiyo",
    category: ["cultural", "festivals"],
    subtitle: "Mon State",
    alt: "Golden Rock",
  },
  {
    src: "/assets/images/cover-images/upaing.jpg",
    title: "Puente U Bein",
    category: ["nature"],
    subtitle: "Mandalay",
    alt: "Mandalay",
  },
  {
    src: "/assets/images/cover-images/shwedagon.jpg",
    title: "Pagoda Shwedagon",
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
              <h2 className={styles.picturesSectionTitle}>Myanmar en Imágenes</h2>
              <span className={styles.picturesTitleBorder}></span>
              <p>
                Explora la belleza y diversidad de Myanmar a través de nuestra galería de fotos que muestra los destinos icónicos y los gemas ocultas.
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
    Todos
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "cultural" ? styles.active : ""}`}
    onClick={() => setFilter("cultural")}
  >
    Culturales
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "nature" ? styles.active : ""}`}
    onClick={() => setFilter("nature")}
  >
    Naturaleza
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "beaches" ? styles.active : ""}`}
    onClick={() => setFilter("beaches")}
  >
    Playas
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "festivals" ? styles.active : ""}`}
    onClick={() => setFilter("festivals")}
  >
    Festivales
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