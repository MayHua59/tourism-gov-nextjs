"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Festivals.module.css";
import Link from "next/link";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchFestivalsList } from "@/lib/api/mm-site/festival";
import Loading from "@/components/Loading"; // If you have a Loading component

const MONTHS = [
  { value: "All Months", name: "အားလုံး" },
  { value: "January", name: "ဇန်နဝါရီ" },
  { value: "February", name: "ဖေဖော်ဝါရီ" },
  { value: "March", name: "မတ်" },
  { value: "April", name: "ဧပြီ" },
  { value: "May", name: "မေ" },
  { value: "June", name: "ဇွန်" },
  { value: "July", name: "ဇူလိုင်" },
  { value: "August", name: "သြဂုတ်" },
  { value: "September", name: "စက်တင်ဘာ" },
  { value: "October", name: "အောက်တိုဘာ" },
  { value: "November", name: "နိုဝင်ဘာ" },
  { value: "December", name: "ဒီဇင်ဘာ" }
];



export default function FestivalsPage() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // For "အားလုံး" (All), do not add month param
    const monthParam = selectedMonth === "" || selectedMonth === "အားလုံး" ? "" : selectedMonth;
    fetchFestivalsList(1, 20, monthParam)
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
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ဆယ့်နှစ်လရာသီပွဲတော်များ", href: "/mm/festivals", active: true }
        ]}
      />
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h1 className={styles.festivalTitle}>ဆယ့်နှစ်လရာသီပွဲတော်များ</h1>
          <div className={styles.monthSelectorWrapper}>
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className={styles.monthSelector}
            >
              <option value="" disabled>
                ကျင်းပသောလ ရွေးပါ&nbsp;&#128899;
              </option>
              {MONTHS.map(month => (
                <option key={month.value} value={month.value}>{month.name}</option>
              ))}
            </select>
          </div>
        </div>
        {loading ? (
          <Loading message="ပွဲတော်များ Loading..."/>
        ) : festivals.length === 0 ? (
          <div className={styles.errorMessage}>
            စာရင်းမရှိသော်လည်း၊ နောက်မှထပ်မံကြိုးစားကြည့်ပါ။
          </div>
        ) : (
          <div className={styles.festivalList}>
            {festivals.map(festival => (
              <Link
                key={festival.slug || festival.id}
                href={`/mm/festivals/${festival.slug || festival.id}`}
                className={styles.festivalCard}
              >
                <div className={styles.festivalImageWrapper}>
                  <img
                    src={festival.cover_photo_url}
                    alt={festival.name}
                    className={styles.festivalImg}
                  />
                </div>
                <div className={styles.festivalInfo}>
                  <h2 className={styles.festivalSubtitle}>{festival.name}</h2>
                  <div className={styles.festivalMeta}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
                    <span>
                      <strong>ကျင်းပသောလ:</strong> {festival.month || "N/A"}
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