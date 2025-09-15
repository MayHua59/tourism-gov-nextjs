"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Festivals.module.css";
import Link from "next/link";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchFestivalsList } from "@/lib/api/festival";
import Loading from "@/components/Loading";

const MONTHS = [
  "All Months","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function FestivalsPage() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch festivals when page loads or selectedMonth changes
  useEffect(() => {
    setLoading(true);
    fetchFestivalsList(1, 20, selectedMonth === "All Months" ? "" : selectedMonth)
      .then(({ data }) => setFestivals(data || []))
      .catch(() => setFestivals([]))
      .finally(() => setLoading(false));
  }, [selectedMonth]);

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/34.jpg"
        altText="festivals cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Festivals", href: "/en/festivals", active: true }
        ]}
      />
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h1 className={styles.festivalTitle}>Festivals in Myanmar</h1>
          <div className={styles.monthSelectorWrapper}>
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className={styles.monthSelector}
            >
              <option value="" disabled>
    Choose Month&nbsp;&#128899;
  </option>
              {MONTHS.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>
        {loading ? (
          <Loading message="Loading Festivals..."/>
        ) : festivals.length === 0 ? (
          <div className="errorMessage">
            Sorry, we couldn&apos;t load festival data. Please try again later.
          </div>
        ) : (
          <div className={styles.festivalList}>
            {festivals.map(festival => (
              <Link
                key={festival.slug || festival.id}
                href={`/en/festivals/${festival.slug || festival.id}`}
                className={styles.festivalCard}
              >
                <div className={styles.festivalImageWrapper}>
                  <img
                    src={festival.cover}
                    alt={festival.name}
                    className={styles.festivalImg}
                  />
                </div>
                <div className={styles.festivalInfo}>
                  <h2 className={styles.festivalSubtitle}>{festival.name}</h2>
                  <div className={styles.festivalMeta}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
                    <span>
                      <strong>Month:</strong> {festival.month || "N/A"}
                      {festival.start_date && festival.end_date
                        ? ` | ${new Date(festival.start_date).toLocaleDateString()} - ${new Date(festival.end_date).toLocaleDateString()}`
                        : ""}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}