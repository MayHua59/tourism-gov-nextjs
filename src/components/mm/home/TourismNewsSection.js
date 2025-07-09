"use client"
import React, { useState, useEffect, useRef, use } from "react";
import styles from "./TourismNewsSection.module.css";

const newsData = [
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "New Air Routes",
    title: "ရေရှည်တည်တံ့သော ခရီးသွားလုပ်ငန်း အစပျိုးမှုအသစ်များ စတင်လိုက်ပြီ။",
    summary:
      "ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဝန်ကြီးဌာနသည် ကျေးလက်ဒေသဖွံ့ဖြိုးရေးနှင့် ယဉ်ကျေးမှုအမွေအနှစ်များ ထိန်းသိမ်းရေးအတွက် ဒေသခံအခြေပြု ခရီးသွားလုပ်ငန်းစီမံချက်များ အတွက် လမ်းညွှန်ချက်အသစ်များ ထုတ်ပြန်ခဲ့သည်။",
    category: "Transport News",
    date: "22 Nov 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sustainable Tourism",
    title: "ခရီးသွားလုပ်ငန်း ပြန်လည်ထူထောင်ရေး စီမံချက် ကြေညာ",
    summary:
      "ကပ်ရောဂါကြောင့် ထိခိုက်ခဲ့သော ခရီးသွားလုပ်ငန်းအား အရည်အသွေးမြင့် ခရီးသွားလုပ်ငန်း၊ ဒစ်ဂျစ်တယ်အသွင်ကူးပြောင်းရေးနှင့် ကျန်းမာရေးလုံခြုံမှုစည်းမျဉ်းများ မြှင့်တင်ခြင်းဖြင့် ပြန်လည်တည်ဆောက်ရန် ဗျူဟာများ ချမှတ်ထားပါသည်။ ဤကြိုးပမ်းမှုများသည် ဧည့်သည်များ၏ ယုံကြည်မှုကို ပြန်လည်ရရှိစေရန် ရည်ရွယ်ပါသည်။",
    category: "Ministry News",
    date: "15 Jan 2023",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Tourism Recovery",
    title: "မြန်မာနိုင်ငံသို့ နိုင်ငံတကာ လေကြောင်းခရီးစဉ်အသစ်များ",
    summary:
      "လေကြောင်းလိုင်းအချို့မှ ရန်ကုန်နှင့် မန္တလေးသို့ တိုက်ရိုက်ခရီးစဉ်အသစ်များ စတင်မည်ဟု ကြေညာခဲ့ပြီး၊ အာရှနှင့် အရှေ့အလယ်ပိုင်းဒေသ အဓိကဈေးကွက်များသို့ လေကြောင်းဆက်သွယ်ရေး ပိုမိုကောင်းမွန်လာမည် ဖြစ်ပါသည်။",
    category: "Industry Update",
    date: "05 Dec 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 4",
    title: "Eco-Friendly Resort Opens in Bagan",
    summary:
      "A new eco-resort in Bagan sets a benchmark for sustainable hospitality and offers exclusive experiences for eco-conscious travelers.",
    category: "Travel News",
    date: "02 Nov 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 5",
    title: "Myanmar Hosts International Tourism Expo",
    summary:
      "International stakeholders gather in Yangon for the annual expo, discussing opportunities and challenges for Myanmar tourism.",
    category: "Events",
    date: "26 Oct 2022",
  },
  {
    image: "/assets/images/cover-images/water-fall.jpg",
    alt: "Sample News 6",
    title: "Heritage Sites Added to UNESCO List",
    summary:
      "Three Myanmar sites have been recognized by UNESCO, boosting the country's cultural tourism appeal.",
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
          မြန်မာ့ခရီးသွားလုပ်ငန်းကဏ္ဍရှိ နောက်ဆုံးပေါ် တိုးတက်ပြောင်းလဲမှုများ၊ ပွဲလမ်းသဘင်များနှင့် လုပ်ငန်းစီမံချက်များအကြောင်းကို သိရှိနားလည်အောင် ဆောင်ရွက်ပါ။
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