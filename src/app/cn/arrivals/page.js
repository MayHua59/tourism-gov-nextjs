"use client";

import React, { useEffect, useState } from "react";
import BannerSection from "../../../components/BannerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "./Arrivals.module.css";
import Image from "next/image";
import { fetchArrivals } from "../../../lib/api/arrival";
import AttachmentTable from "@/components/AttachmentTable";
import Loading from "@/components/Loading";

const MONTHS = [
  { label: "一月", value: "01" },
  { label: "二月", value: "02" },
  { label: "三月", value: "03" },
  { label: "四月", value: "04" },
  { label: "五月", value: "05" },
  { label: "六月", value: "06" },
  { label: "七月", value: "07" },
  { label: "八月", value: "08" },
  { label: "九月", value: "09" },
  { label: "十月", value: "10" },
  { label: "十一月", value: "11" },
  { label: "十二月", value: "12" },
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
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "入境统计", active: true }
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
              <option value="">选择年份</option>
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
              <option value="">选择月份</option>
              {MONTHS.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.mainContent}>
          {loading ? (
            <Loading message="加载入境统计数据中..."/>
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
                          
                          <div className={styles.cardTitle}>{`${item.name} 在 ${getMonthName(month)} ${year} `}</div>
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

