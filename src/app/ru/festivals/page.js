"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Festivals.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchFestivalsList } from "@/lib/api/ru-site/festival";
import Loading from "@/components/Loading"; 

const MONTHS = [
  { value: "All Months", name: "Все Месяцы" },
  { value: "January", name: "Январь" },
  { value: "February", name: "Февраль" },
  { value: "March", name: "Март" },
  { value: "April", name: "Апрель" },
  { value: "May", name: "Май" },
  { value: "June", name: "Июнь" },
  { value: "July", name: "Июль" },
  { value: "August", name: "Август" },
  { value: "September", name: "Сентябрь" },
  { value: "October", name: "Октябрь" },
  { value: "November", name: "Ноябрь" },
  { value: "December", name: "Декабрь" }
];



export default function FestivalsPage() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // For "အားလုံး" (All), do not add month param
    const monthParam = selectedMonth === "" || selectedMonth === "Все Месяцы" ? "" : selectedMonth;
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
          { label: "Главная", href: "/ru", icon: faHome },
          { label: "Фестивали", href: "/ru/festivals", active: true }
        ]}
      />
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h1 className={styles.festivalTitle}>Фестивали в Мьянме (Festivals in Myanmar)</h1>
          <div className={styles.monthSelectorWrapper}>
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className={styles.monthSelector}
            >
              <option value="" disabled>
                Выберите Месяц&nbsp;&#128899;
              </option>
              {MONTHS.map(month => (
                <option key={month.value} value={month.value}>{month.name}</option>
              ))}
            </select>
          </div>
        </div>
        {loading ? (
          <Loading message="Фестивали загружаются..."/>
        ) : festivals.length === 0 ? (
          <div className={styles.errorMessage}>
            Извините, мы не смогли загрузить данные о фестивале. Пожалуйста, попробуйте позже.
          </div>
        ) : (
          <div className={styles.festivalList}>
            {festivals.map(festival => (
              <Link
                key={festival.slug || festival.id}
                href={`/ru/festivals/${festival.slug || festival.id}`}
                className={styles.festivalCard}
              >
                <div className={styles.festivalImageWrapper}>
                  <img
                    src={festival.cover_photo}
                    alt={festival.name}
                    className={styles.festivalImg}
                  />
                </div>
                <div className={styles.festivalInfo}>
                  <h2 className={styles.festivalSubtitle}>{festival.name}</h2>
                  <div className={styles.festivalMeta}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
                    <span>
                      <strong>Месяц:</strong> {festival.month || "N/A"}
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