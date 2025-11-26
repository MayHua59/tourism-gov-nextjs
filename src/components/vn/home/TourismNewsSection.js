"use client"
import React, { useState, useEffect, useRef, use } from "react";
import styles from "./TourismNewsSection.module.css";

const newsData = [
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "New Air Routes",
    title: "Các đường bay mới",
    summary:
      "Vài hãng hàng không đã thông báo các chuyến bay trực tiếp đến Yangon và Mandalay, cải thiện kết nối với các thị trường chính của châu Á và Trung Đông.",
    category: "Transport News",
    date: "22 Nov 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sustainable Tourism",
    title: "Các dự án du lịch bền vững mới",
    summary:
      "Bộ Khách sạn và Du lịch đã giới thiệu các hướng dẫn mới cho các dự án du lịch cộng đồng nhằm bảo tồn di sản văn hóa trong khi tạo ra cơ hội kinh tế ở các vùng nông thôn.",
    category: "Ministry News",
    date: "15 Jan 2023",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Tourism Recovery",
    title: "Kế hoạch phục hồi du lịch",
    summary:
      "Chiến lược phục hồi sau dịch bệnh tập trung vào du lịch chất lượng, biến đổi số và các quy tắc an toàn sức khỏe được cải thiện để tái tạo sự tin tưởng của du khách.",
    category: "Industry Update",
    date: "05 Dec 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 4",
    title: "Resort bền vững mới mở cửa tại Bagan",
    summary:
      "Một resort bền vững mới tại Bagan đặt một bách kỳ cho du lịch bền vững và cung cấp trải nghiệm độc đáo cho du khách có ý thức về môi trường.",
    category: "Travel News",
    date: "02 Nov 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 5",
    title: "Myanmar tổ chức Triển lãm Du lịch Quốc tế",
    summary:
      "Các nhà đầu tư quốc tế tập trung tại Yangon để tham dự triển lãm du lịch hàng năm, thảo luận về cơ hội và thách thức cho du lịch Myanmar.",
    category: "Events",
    date: "26 Oct 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 6",
    title: "Các di sản văn hóa được thêm vào danh sách UNESCO",
    summary:
      "Ba điểm của Myanmar đã được UNESCO nhận diện, tăng cường sự hấp dẫn của du lịch văn hóa quốc gia.",
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
          Stay informed about the latest developments, events, and initiatives in Myanmar&apos;s tourism sector.
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