"use client";

import React, { useEffect, useState } from "react";
import BannerSection from "../../../components/BannerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "./Arrivals.module.css";
import Image from "next/image";
import { fetchArrivals } from "../../../lib/api/arrival";

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

function getYears(arrivals) {
  const years = new Set();
  arrivals.forEach(item => {
    if (item.year) years.add(item.year);
    // If your data uses a date field:
    // if (item.date) years.add(item.date.split("-")[0]);
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
        setArrivals(res?.data || []);
        setYears(getYears(res?.data || []));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = arrivals;
    if (selectedYear) {
      result = result.filter(item => String(item.year) === selectedYear);
    }
    if (selectedMonth) {
      // If your data has a "month" property:
      result = result.filter(item => String(item.month).padStart(2, "0") === selectedMonth);
      // If your data uses "date" property in "YYYY-MM-DD" format, use:
      // result = result.filter(item => item.date.split("-")[1] === selectedMonth);
    }
    setFiltered(result);
  }, [arrivals, selectedYear, selectedMonth]);

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/default-arrival-cover.jpg"
        alt="Arrivals Cover Photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Arrivals", active: true }
        ]}
      />

      <div className={styles.container}>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <div>
            <select
              className={styles.select}
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
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
              <option value="">Select Month</option>
              {MONTHS.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.mainContent}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f7f7f7" }}>
                    <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>#</th>
                    <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>Year</th>
                    <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>Month</th>
                    <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>Description</th>
                    {/* Add more columns as needed */}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} style={{ textAlign: "center", padding: "1rem" }}>No data found</td>
                    </tr>
                  )}
                  {filtered.map((item, idx) => (
                    <tr key={item.id}>
                      <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{idx + 1}</td>
                      <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{item.name}</td>
                      <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{item.year}</td>
                      <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                        {MONTHS.find(m => m.value === String(item.month).padStart(2, "0"))?.label || item.month}
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                        <span dangerouslySetInnerHTML={{ __html: item.description }} />
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}