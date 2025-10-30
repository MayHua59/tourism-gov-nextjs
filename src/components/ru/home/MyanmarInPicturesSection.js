"use client";
import React, { useState } from "react";
import styles from "./MyanmarInPicturesSection.module.css";

const galleryItems = [
  {
    src: "/assets/images/cover-images/bagan-sunrise.jpg",
    title: "Баган на рассвете",
    category: ["nature", "cultural"],
    subtitle: "Баган, Мьянма",
    alt: "Храмы Багана",
  },
  {
    src: "/assets/images/cover-images/inle-boat.jpg",
    title: "Рыбаки озера Инле",
    category: ["festivals", "nature", "cultural"],
    subtitle: "Инле, Шан-штат",
    alt: "Озеро Инле",
  },
  {
    src: "/assets/images/cover-images/ngapali-beach.jpg",
    title: "Закат на пляже Нагапали",
    category: ["nature", "beaches"],
    subtitle: "Нагапали, Ракхин-штат",
    alt: "Ngapali Beach",
  },
  {
    src: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    title: "Храм Кяиктио",
    category: ["cultural", "festivals"],
    subtitle: "Мон-штат",
    alt: "Золотая Гора",
  },
  {
    src: "/assets/images/cover-images/upaing.jpg",
    title: "Мост У Бьен",
    category: ["nature"],
    subtitle: "Мандалая",
    alt: "Mandalay",
  },
  {
    src: "/assets/images/cover-images/shwedagon.jpg",
    title: "Храм Шведзон",
    category: ["cultural", "festivals"],
    subtitle: "Янгон",
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
              <h2 className={styles.picturesSectionTitle}>Мьянма в картинках</h2>
              <span className={styles.picturesTitleBorder}></span>
              <p>
                Исследуйте красоту и разнообразие Мьянмы через нашу фотогалерею, представляющую знаковые
                достопримечательности и скрытые сокровища.
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
    Все
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "cultural" ? styles.active : ""}`}
    onClick={() => setFilter("cultural")}
  >
    Культурные
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "nature" ? styles.active : ""}`}
    onClick={() => setFilter("nature")}
  >
    Природные
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "beaches" ? styles.active : ""}`}
    onClick={() => setFilter("beaches")}
  >
    Пляжи
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "festivals" ? styles.active : ""}`}
    onClick={() => setFilter("festivals")}
  >
    Праздники
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