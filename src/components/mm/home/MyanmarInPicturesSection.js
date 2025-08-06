
"use client";
import React, { useState } from "react";

import styles from "./MyanmarInPicturesSection.module.css";

const galleryItems = [
  {
    src: "/assets/images/cover-images/bagan-sunrise.jpg",
    title: "ပုဂံနေထွက်ချိန်",
    category: ["nature", "cultural"],
    subtitle: "ရှေးဟောင်းဘုရားပုထိုး",
    alt: "Bagan Temples",
  },
  {
    src: "/assets/images/cover-images/inle-boat.jpg",
    title: "အင်းလေးကန် ငါးဖမ်းသမားများ",
    category: ["nature", "cultural"],
    subtitle: "တစ်မူထူးခြားသော ရိုးရာဓလေ့",
    alt: "Inle Lake",
  },
  {
    src: "/assets/images/cover-images/ngapali-beach.jpg",
    title: "ငပလီကမ်းခြေ၏ နေဝင်ဆည်းလည်း",
    category: ["nature", "beaches"],
    subtitle: "သဘာဝအတိုင်း သန့်ပြန့်လှပသော ကမ်းခြေများ",
    alt: "Ngapali Beach",
  },
  {
    src: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    title: "ကျိုက်ထီးရိုးစေတီတော်",
    category: ["cultural", "festivals"],
    subtitle: "သန့်ရှင်းမြင့်မြတ်သော ဘုရားပုထိုးမျာ",
    alt: "Golden Rock",
  },
  {
    src: "/assets/images/cover-images/upaing.jpg",
    title: "ဦးပိန် တံတား",
    category: ["nature"],
    subtitle: "ဂန္ထဝင်အထိမ်းအမှတ်နေရာများ",
    alt: "Mandalay",
  },
  {
    src: "/assets/images/cover-images/shwedagon.jpg",
    title: "ရွှေတိဂုံစေတီတော်",
    category: ["cultural", "festivals"],
    subtitle: "ဘာသာရေး အထိမ်းအမှတ်",
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
              <h2 className={styles.picturesSectionTitle}>မြန်မာ့အလှတရား</h2>
              <span className={styles.picturesTitleBorder}></span>
              <p>
                ကျွန်ုပ်တို့၏ ဓာတ်ပုံပြခန်းမှတစ်ဆင့် မြန်မာ့အလှတရားနှင့် စုံလင်မျိုးစုံသော ရှုခင်းများကို စူးစမ်းလေ့လာပါ။ ထင်ရှားကျော်ကြားသော လက္ခဏာများနှင့် ဖုံးကွယ်နေသည့် အံ့ဖွယ်ရတနာများကို
                            ဖော်ပြထားပါသည်။
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
    အားလုံး
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "cultural" ? styles.active : ""}`}
    onClick={() => setFilter("cultural")}
  >
    ယဉ်ကျေးမှုဆိုင်ရာ
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "nature" ? styles.active : ""}`}
    onClick={() => setFilter("nature")}
  >
    သဘာဝရှုခင်း
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "beaches" ? styles.active : ""}`}
    onClick={() => setFilter("beaches")}
  >
    ကမ်းခြေများ
  </button>
  <button
    className={`${styles.picturesFilterBtn} ${filter === "festivals" ? styles.active : ""}`}
    onClick={() => setFilter("festivals")}
  >
    ပွဲတော်များ
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
            <a>{item.title}</a>
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