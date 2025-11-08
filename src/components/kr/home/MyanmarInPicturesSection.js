"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./MyanmarInPicturesSection.module.css";

const galleryItems = [
  {
    src: "/assets/images/cover-images/bagan-sunrise.jpg",
    title: "바간 해변 해질녘",
    category: ["nature", "cultural"],
    subtitle: "Bagan, Mandalay",
    alt: "Bagan Temples",
  },
  {
    src: "/assets/images/cover-images/inle-boat.jpg",
    title: "인레 호수 어부들",
    category: ["festivals", "nature", "cultural"],
    subtitle: "Inle, Shan State",
    alt: "Inle Lake",
  },
  {
    src: "/assets/images/cover-images/ngapali-beach.jpg",
    title: "낭팔리 해변 해질녘",
    category: ["nature", "beaches"],
    subtitle: "Ngapali, Rakhine State",
    alt: "Ngapali Beach",
  },
  {
    src: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    title: "키아이크티오 부처",
    category: ["cultural", "festivals"],
    subtitle: "Mon State",
    alt: "Golden Rock",
  },
  {
    src: "/assets/images/cover-images/upaing.jpg",
    title: "우비인 다리",
    category: ["nature"],
    subtitle: "Mandalay",
    alt: "Mandalay",
  },
  {
    src: "/assets/images/cover-images/shwedagon.jpg",
    title: "쉐도간 부처",
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
              <h2 className={styles.picturesSectionTitle}>미얀마 사진</h2>
              <span className={styles.picturesTitleBorder}></span>
              <p>
                미얀마의 아름다움과 다양성을 탐험하세요. 대표적인 목적지와 숨겨진 보물을 소개합니다.
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
    모두
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "cultural" ? styles.active : ""}`}
    onClick={() => setFilter("cultural")}
  >
    문화
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "nature" ? styles.active : ""}`}
    onClick={() => setFilter("nature")}
  >
    자연
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "beaches" ? styles.active : ""}`}
    onClick={() => setFilter("beaches")}
  >
      해변
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "festivals" ? styles.active : ""}`}
    onClick={() => setFilter("festivals")}
  >
    축제
  </button>
          </div>
          <div className={styles.picturesGrid}>
  {filteredItems.map((item, i) => (
    <div className={styles.picturesGridItem} key={i}>
      <div className={styles.picturesThumb}>
        <Image
          src={item.src}
          alt={item.alt}
          className={styles.picturesImg}
          width={800}
          height={500}
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

