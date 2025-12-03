"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./LatestNewsSection.module.css";
import { fetchNewsList } from "@/lib/api/news";
import Image from "next/image";

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = React.useState(2); 
  React.useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 600 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return slidesPerView;
}

export default function LatestNewsSection() {
  const slidesPerView = useSlidesPerView();
  const [current, setCurrent] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      try {
        const res = await fetchNewsList(1, 10); // page 1, 10 items
        setNewsList(res.data);
        setError("");
      } catch (err) {
        setError("Failed to load news.");
      }
      setLoading(false);
    }
    loadNews();
  }, []);

  const maxIndex = newsList.length - 1;

  const getVisibleSlides = () => {
    if (newsList.length <= slidesPerView) {
      return newsList;
    }
    if (current + slidesPerView <= newsList.length) {
      return newsList.slice(current, current + slidesPerView);
    } else {
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

const truncateDescription = (description, maxLength) => {
  if (!description) return ""; // Handles null, undefined, or empty string
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
};

// If there are no news items after loading (and no error), render nothing
if (!loading && !error && newsList.length === 0) {
  return null;
}

  return (
    <section className={styles.latestNewsSection}>
      <div className="container py-5">
        <h2 className="text-center mb-5" style={{ fontSize: "2rem" }}>Ultime Notizie</h2>
        {loading && (
  <div className={styles.loadingWrapper}>
    <div className={styles.loadingSpinner}></div>
    <div className={styles.loadingText}>Caricamento...</div>
  </div>
)}
        {error && <div className="text-danger text-center py-5">{error}</div>}
        {!loading && !error && (
          <div className={styles.carouselWrapper}>
            <button
              className={styles.carouselBtn}
              onClick={handlePrev}
              aria-label="Previous"
              disabled={newsList.length <= slidesPerView}
            >
              &lt;
            </button>
            <div className={styles.carouselTrack} style={{ gap: 24 }}>
              {visibleSlides.map((news) => (
                <div className={styles.newsCard} key={news.id}>
                {news.cover_photo && (
  <Image
    src={news.cover_photo}
    alt={news.name}
    width={400}
    height={250}
    className={styles.newsImg}
  />
)}
                  <div className={styles.newsContent}>
                    <h5 className={styles.newsTitle}>{news.name}</h5>
                    <p className={styles.newsDate}>{new Date(news.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}</p>
                    <p
    className={styles.newsSummary}
    dangerouslySetInnerHTML={{ __html: truncateDescription(news.description, 150) }}
  ></p>
                    <Link href={`/it/news/${news.slug}`} className={readMore}>
                      Scopri di più
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={styles.carouselBtn}
              onClick={handleNext}
              aria-label="Next"
              disabled={newsList.length <= slidesPerView}
            >
              &gt;
            </button>
          </div>
        )}
        <div className="text-center mt-4">
          <Link href="/it/news" className="btn btn-outline-primary rounded-0">
            Vedi tutte le notizie
          </Link>
        </div>
      </div>
    </section>
  );
}