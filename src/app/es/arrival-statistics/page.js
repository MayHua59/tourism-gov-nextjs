"use client";

import React, { useEffect, useState } from "react";
import BannerSection from "../../../components/BannerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/en/arrival-statistics/Arrivals.module.css";
import Image from "next/image";
import { fetchArrivals } from "../../../lib/api/arrival";
import AttachmentTable from "@/components/AttachmentTable";
import Loading from "@/components/Loading";

const MONTHS = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];
function getMonthName(monthValue) {
  const month = MONTHS.find(m => m.value === monthValue);
  return month ? month.label : monthValue;
}

function getYears(arrivals) {
  const years = new Set();
  arrivals.forEach(item => {
    // Use month_and_year if available
    if (item.month_and_year) {
      years.add(item.month_and_year.split("-")[0]);
    } else if (item.year) {
      years.add(item.year);
    }
  });
  return Array.from(years).sort((a, b) => b - a);
}

export default function ArrivalsPage() {
  const [arrivals, setArrivals] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArrivals()
      .then(res => {
        const dataArr = Array.isArray(res?.data) ? res.data : [];
        setArrivals(dataArr);
        setYears(getYears(dataArr));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = arrivals;
    if (selectedYear) {
      result = result.filter(item => {
        const year = item.month_and_year
          ? item.month_and_year.split("-")[0]
          : item.year;
        return String(year) === selectedYear;
      });
    }
    if (selectedMonth) {
      result = result.filter(item => {
        const month = item.month_and_year
          ? item.month_and_year.split("-")[1]
          : String(item.month).padStart(2, "0");
        return month === selectedMonth;
      });
    }
    setFiltered(result);
  }, [arrivals, selectedYear, selectedMonth]);

  

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/10.jpg"
        alt="Arrivals Cover Photo"
      />
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/es", icon: faHome },
          { label: "Estadísticas de Llegadas", active: true }
        ]}
      />

      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <div>
            <select
              className={styles.select}
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
            >
              <option value="">Chọn năm</option>
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              className={styles.select}
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
            >
              <option value="">Chọn tháng</option>
              {MONTHS.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.mainContent}>
          {loading ? (
            <Loading message="Đang tải thống kê đến cảnh..."/>
          ) : (
            <div>
              {filtered.length === 0 ? (
                <div className={styles.noDataMessage}>
                  
                </div>
              ) : (
                <div className={styles.arrivalsGrid}>
                  {filtered.map((item, idx) => {
                    const year = item.month_and_year
                      ? item.month_and_year.split("-")[0]
                      : item.year;
                    const month = item.month_and_year
                      ? item.month_and_year.split("-")[1]
                      : String(item.month).padStart(2, "0");
                    return (
                      <div key={item.id} className={styles.arrivalCard}>
                        <div className={styles.cardHeader}>
                          
                          <div className={styles.cardTitle}>{`${item.name} in ${getMonthName(month)} ${year} `}</div>
                        </div>
                        <div className={styles.cardMeta}>
                          
                         
                        </div>
                        <div className={styles.cardDescription}>
                          <span dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                        {/* {item.attachments && item.attachments.length > 0 && (
                  <AttachmentTable attachments={item.attachments} />
                )} */}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}


        </div>

      </div>
    </div>
  );
}