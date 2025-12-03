"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./LatestAnnouncementsSection.module.css";
import { fetchAnnouncementList } from "@/lib/api/announcement";
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

export default function LatestAnnouncementsSection() {
  const slidesPerView = useSlidesPerView();
  const [current, setCurrent] = useState(0);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAnnouncements() {
      setLoading(true);
      try {
        const res = await fetchAnnouncementList(1, 20);
        setAnnouncements(res.data);
        setError("");
      } catch (err) {
        setError("Failed to load announcements.");
      }
      setLoading(false);
    }
    loadAnnouncements();
  }, []);

  const getVisibleSlides = () => {
    if (announcements.length <= slidesPerView) {
      return announcements;
    }
    if (current + slidesPerView <= announcements.length) {
      return announcements.slice(current, current + slidesPerView);
    } else {
      return [
        ...announcements.slice(current, announcements.length),
        ...announcements.slice(0, (current + slidesPerView) % announcements.length)
      ];
    }
  };

  const visibleSlides = getVisibleSlides();

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? announcements.length - slidesPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev === announcements.length - slidesPerView ? 0 : prev + 1
    );
  };

const truncateDescription = (description, maxLength) => {
  if (!description) return ""; // Return empty string if null or undefined
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
};

  return (
    <section className={styles.announcementsSection}>
      <div className={styles.announcementsContainer}>
        <h2 className={styles.sectionTitle}>Latest Announcements</h2>
        {loading && (
          <div className={styles.loadingWrapper}>
            <div className={styles.loadingSpinner}></div>
            <div className={styles.loadingText}>Loading...</div>
          </div>
        )}
        {error && <div className={styles.errorMessage}>{error}</div>}
        {!loading && !error && (
          <div className={styles.carouselWrapper}>
            <button
              className={styles.carouselBtn}
              onClick={handlePrev}
              aria-label="Previous"
              disabled={announcements.length <= slidesPerView}
            >
              &lt;
            </button>
            <div className={styles.carouselTrack}>
              {visibleSlides.map((item) => (
                <div className={styles.announcementCard} key={item.id}>
                  <div className={styles.cardHeader}>
                    {item.cover_photo && (
                      <Image
                        src={item.cover_photo}
                        alt={item.name}
                        width={800}
                        height={260}
                        className={styles.announcementImg}
                      />
                    )}
                    <span className={styles.dateBadge}>
  {new Date(item.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h5 className={styles.announcementTitle}>{item.name}</h5>
                        <p
      className={styles.announcementSummary}
      dangerouslySetInnerHTML={{ __html: truncateDescription(item.description, 150) }}
    ></p>
                    <Link href={`/de/announcements/${item.slug}`} className={styles.readMoreBtn}>
                      Details ansehen
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={styles.carouselBtn}
              onClick={handleNext}
              aria-label="Next"
              disabled={announcements.length <= slidesPerView}
            >
              &gt;
            </button>
          </div>
        )}
        <div className={styles.viewAllWrapper}>
          <Link href="/de/announcements" className={styles.viewAllBtn}>
            Alle Ankündigungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}