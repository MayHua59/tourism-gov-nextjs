"use client"
import React, { useState, useEffect, useRef, use } from "react";
import styles from "./TourismNewsSection.module.css";

const newsData = [
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "New Air Routes",
    title: "新しい空路ルート",
    summary:
      "いくつかの航空会社がヤンゴンとマンダライへの直接便を発表し、アジアと中東の主要市場との接続を改善しました。",
    category: "Transport News",
    date: "22 Nov 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sustainable Tourism",
    title: "新しい永続的な観光プロジェクト",
    summary:
      "ホテル観光省は、文化的遺産を保護すると同時に、地域住民に経済的利益をもたらす永続的な観光プロジェクトを導入しました。",
    category: "Ministry News",
    date: "15 Jan 2023",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Tourism Recovery",
    title: "観光回復計画",
    summary:
      "コロナウイルス後の観光回復策は、品質観光、デジタル変革、および健康・安全規定の改善を通じて、観光客の信頼を回復することを目的としています。",
    category: "Industry Update",
    date: "05 Dec 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 4",
    title: "新しい永続的なリゾートがバガンでオープン",
    summary:
      "バガンに新しい永続的なリゾートがオープンし、永続的な観光と環境に配慮した体験を提供します。",
    category: "Travel News",
    date: "02 Nov 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 5",
    title: "ミャンマーが国際観光博覧会を開催",
    summary:
      "国際的な投資家がヤンゴンで年次観光博覧会に参加し、ミャンマーの観光に関する機会と課題を議論します。",
    category: "Events",
    date: "26 Oct 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 6",
    title: "文化遺産がUNESCOリストに追加されました",
    summary:
      "ミャンマーの3か所がUNESCOに認定され、国家文化観光の魅力を高めました。",
    category: "Heritage",
    date: "10 Oct 2022",
  },
];

const DOT_COUNT = 3; // Always 3 dots

const getSlidesPerView = () => (window.innerWidth < 900 ? 1 : 2);

const TourismNewsSection = () => {
  const [currentDot, setCurrentDot] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(
    typeof window !== "undefined" ? getSlidesPerView() : 2
  );
  const intervalRef = useRef();

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay (loops through dots)
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentDot((prev) => (prev + 1) % DOT_COUNT);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  // For 6 cards, 3 dots, 2 cards per group: groups are [0,1], [2,3], [4,5]
  const total = newsData.length;
  const dotStartIndexes = [0, 2, 4];
  const current = dotStartIndexes[currentDot];

  return (
    <section className={styles.newsSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionLead}>
          ミャンマーの観光業界の最新の発展、イベント、および活動についてもらいました。
        </p>
      </div>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselViewport}>
          <div
            className={styles.carouselTrack}
            style={{
              width: `${(100 / slidesPerView) * total}%`,
              transform: `translateX(-${(100 / total) * current}%)`,
            }}
          >
            {newsData.map((item, idx) => (
              <div className={styles.slide} key={idx} style={{ width: `${100 / total}%` }}>
  <div className={styles.imageWrapper}>
    <img src={item.image} alt={item.alt} className={styles.newsImage} />
    <div className={styles.newsCard}>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardSummary}>{item.summary}</p>
      <div className={styles.cardMeta}>
        <span className={styles.metaCategory}>{item.category}</span>
        <span className={styles.metaDate}>{item.date}</span>
      </div>
    </div>
  </div>
</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.paginationDots}>
        {dotStartIndexes.map((startIdx, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${currentDot === idx ? styles.active : ""}`}
            onClick={() => setCurrentDot(idx)}
            aria-label={`Go to slide group ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TourismNewsSection;