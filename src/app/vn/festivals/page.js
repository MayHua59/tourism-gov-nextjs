"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/festivals/Festivals.module.css";
import Link from "next/link";
import { faHome, faCalendarAlt , faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchFestivalsList } from "@/lib/api/festival";
import Loading from "@/components/Loading";

  const MONTHS = [
    { value: "All Months", name: "All Months" },
    { value: "January", name: "January" },
    { value: "February", name: "February" },
    { value: "March", name: "March" },
    { value: "April", name: "April" },
    { value: "May", name: "May" },
    { value: "June", name: "June" },
    { value: "July", name: "July" },
    { value: "August", name: "August" },
    { value: "September", name: "September" },
    { value: "October", name: "October" },
    { value: "November", name: "November" },
    { value: "December", name: "December" }
];

export default function FestivalsPage() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [festivals, setFestivals] = useState([]);
  const [meta, setMeta] = useState({ current_page: 1, per_page: 20, total: 0 });
  const [loading, setLoading] = useState(true);

  const fetchPage = async (page) => {
    setLoading(true);
    try {
      // For "All Months", do not add month param
      const monthParam = selectedMonth === "" || selectedMonth === "All Months" ? "" : selectedMonth;
      const result = await fetchFestivalsList(page, meta.per_page, monthParam);
      setFestivals(result.data || []);
      
      setMeta(prevMeta => ({
        ...prevMeta,
        ...result.meta,
        current_page: page
      }));
    } catch (err) {
      console.error("Error fetching festivals:", err);
      setFestivals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset to page 1 when month changes
    fetchPage(1);
  }, [selectedMonth]);

  // Reset meta when month changes to avoid using stale per_page
  useEffect(() => {
    if (selectedMonth !== "") {
      setMeta({ current_page: 1, per_page: 20, total: 0 });
    }
  }, [selectedMonth]);

  const handlePageChange = (page) => {
    if (page !== meta.current_page && page >= 1) {
      fetchPage(page);
    }
  };

  const totalPages = Math.ceil(meta.total / meta.per_page);

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/34.jpg"
        altText="festivals cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/vn", icon: faHome },
          { label: "Festivals", href: "/vn/festivals", active: true }
        ]}
      />
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h1 className={styles.festivalTitle}>Festivals </h1>
          <div className={styles.monthSelectorWrapper}>
            <div className={styles.selectContainer}>
              <select
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                className={styles.monthSelector}
              >
                <option value="" disabled>
                  Select Month
                </option>
                {MONTHS.map(month => (
                  <option key={month.value} value={month.value}>{month.name}</option>
                ))}
              </select>
              <FontAwesomeIcon icon={faChevronDown} className={styles.selectArrow} />
            </div>
          </div>
        </div>
        {loading ? (
          <Loading message="Festivals are loading..."/>
        ) : festivals.length === 0 ? (
          <div className={styles.errorMessage}>
            Festivals data cannot be loaded. Please try again later.
          </div>
        ) : (
          <>
            <div className={styles.festivalList}>
              {festivals.map(festival => (
                <Link
                  key={festival.slug || festival.id}
                  href={`/vn/festivals/${festival.slug || festival.id}`}
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
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  onClick={() => handlePageChange(meta.current_page - 1)}
                  disabled={meta.current_page === 1}
                  className={styles.prevNextBtn}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={meta.current_page === i + 1 ? styles.activePage : ""}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(meta.current_page + 1)}
                  disabled={meta.current_page === totalPages}
                  className={styles.prevNextBtn}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}