"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./MyanmarInPicturesSection.module.css";

const galleryItems = [
  {
    src: "/assets/images/cover-images/bagan-sunrise.jpg",
    title: "พระอาทิตย์ตกที่บากาน",
    category: ["nature", "cultural"],
    subtitle: "Bagan, Mandalay",
    alt: "Bagan Temples",
  },
  {
    src: "/assets/images/cover-images/inle-boat.jpg",
    title: "ชาวประมงที่ทะเลสาบอินเล",
    category: ["festivals", "nature", "cultural"],
    subtitle: "Inle, Shan State",
    alt: "Inle Lake",
  },
  {
    src: "/assets/images/cover-images/ngapali-beach.jpg",
    title: "พระอาทิตย์ตกที่หาดงาปาลี",
    category: ["nature", "beaches"],
    subtitle: "Ngapali, Rakhine State",
    alt: "Ngapali Beach",
  },
  {
    src: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    title: "พระพุทธรูปเจดีย์ไจก์ทิโย",
    category: ["cultural", "festivals"],
    subtitle: "Mon State",
    alt: "Golden Rock",
  },
  {
    src: "/assets/images/cover-images/upaing.jpg",
    title: "สะพานอูเบ็ง",
    category: ["nature"],
    subtitle: "Mandalay",
    alt: "Mandalay",
  },
  {
    src: "/assets/images/cover-images/shwedagon.jpg",
    title: "พระพุทธรูปชเวดากอง",
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
              <h2 className={styles.picturesSectionTitle}>ภาพถ่ายเมียนมาร์</h2>
              <span className={styles.picturesTitleBorder}></span>
              <p>
                สำรวจความงามและความหลากหลายของเมียนมาร์ นำเสนอจุดหมายปลายทางที่โดดเด่นและสมบัติที่ซ่อนอยู่
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
    ทั้งหมด
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "cultural" ? styles.active : ""}`}
    onClick={() => setFilter("cultural")}
  >
    วัฒนธรรม
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "nature" ? styles.active : ""}`}
    onClick={() => setFilter("nature")}
  >
    ธรรมชาติ
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "beaches" ? styles.active : ""}`}
    onClick={() => setFilter("beaches")}
  >
      ชายหาด
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "festivals" ? styles.active : ""}`}
    onClick={() => setFilter("festivals")}
  >
    เทศกาล
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

