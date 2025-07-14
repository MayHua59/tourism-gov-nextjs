"use client"

import React, { useState } from "react";
import Link from "next/link";
import styles from "./LatestNewsSection.module.css";


const newsList = [
  {
    id: 1,
    img: "/assets/images/news-images/russia.jpg",
    date: "June 11, 2025",
    title: "Myanmar participates in Russia's 5th “Let's Travel!” International Travel Forum opening event",
    summary: "MYANMAR delegation led by Union Minister for Hotels andTourism U Kyaw Soe Win attended...",
    link: "/en/news/myanmar-participates-international-travel-forum-opening-event"
  },
  {
    id: 2,
    img: "/assets/images/news-images/moht.jpg",
    date: "May 04, 2025",
    title: "Homes for flood victims handed over",
    summary: "UNION Minister for Hotels and Tourism U Kyaw Soe Win, accompanied by relevant officials, attended the handover...",
    link: "/en/news/homes-for-flood-victims-handed-over"
  },
  {
    id: 3,
    img: "/assets/images/news3.jpg",
    date: "June 20, 2025",
    title: "News Title 3",
    summary: "A third news summary. You can add as many news cards as you need.",
    link: "news-detail.html?id=3"
  }
];

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = React.useState(2); 
  React.useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 600 ? 1 : 2);
    };
    // Set initially on mount
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return slidesPerView;
}

  

export default function LatestNewsSection() {
  const slidesPerView = useSlidesPerView();
  const [current, setCurrent] = useState(0);

  const maxIndex = newsList.length - 1;

  // Calculate the indices for the cards to display
  const getVisibleSlides = () => {
    if (newsList.length <= slidesPerView) {
      return newsList;
    }
    if (current + slidesPerView <= newsList.length) {
      return newsList.slice(current, current + slidesPerView);
    } else {
      // Wrap around if at the end
      return [
        ...newsList.slice(current, newsList.length),
        ...newsList.slice(0, (current + slidesPerView) % newsList.length)
      ];
    }
  };

  const visibleSlides = getVisibleSlides();

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? newsList.length - slidesPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev === newsList.length - slidesPerView ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.latestNewsSection}>
      <div className="container py-5">
        <h2 className="text-center mb-5">Latest News</h2>
        <div className={styles.carouselWrapper}>
          <button
            className={styles.carouselBtn}
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className={styles.carouselTrack} style={{ gap: 24 }}>
            {visibleSlides.map((news) => (
              <div className={styles.newsCard} key={news.id}>
                <img src={news.img} alt={news.title} className={styles.newsImg} />
                <div className={styles.newsContent}>
                  <h5 className={styles.newsTitle}>{news.title}</h5>
                  <p className={styles.newsDate}>{news.date}</p>
                  <p className={styles.newsSummary}>{news.summary}</p>
                  <a href={news.link} className="btn btn-primary btn-sm rounded-0">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            className={styles.carouselBtn}
            onClick={handleNext}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        <div className="text-center mt-4">
          <Link href="/en/news" className="btn btn-outline-primary rounded-0">
    View All News
  </Link>
        </div>
      </div>
    </section>
  );
}