"use client";
import React, { useState, useEffect } from "react";
import styles from "./TourismDevelopmentSection.module.css";
import { FaCheck } from "react-icons/fa";

export default function TourismDevelopmentSection() {
  const [planeX, setPlaneX] = useState(0);

  useEffect(() => {
    // On mount, capture scroll
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Move right (positive) when scrolling down, left (negative) when up
      setPlaneX((prev) => {
        let next = prev + (currentScrollY - lastScrollY) * 0.7;
        // Clamp between -60 and 60
        if (next > 60) next = 60;
        if (next < -60) next = -60;
        return next;
      });
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.tdSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Image column */}
          <div className={styles.colLeft}>
            <img
              src="/assets/images/cover-images/bagan.jpg"
              alt="Tourism Myanmar"
              className={styles.tdImage}
            />
          </div>
          {/* Text column with moving airplane background */}
          <div className={styles.colRight}>
            <div
              className={styles.tdPlaneBg}
              style={{
                transform: `translateX(${planeX}px)`
              }}
              aria-hidden="true"
            >
              <img src="/assets/images/overview-bg.png" alt="" />
            </div>
            <div className={styles.tdContent}>
              <h2 className={styles.tdTitle}>미얀마의 관광 개발</h2>
              <p>
                호텔 및 관광부는 관광 인프라를 개발하고 서비스 표준을 향상시키며 미얀마 전역에서 지역 기반 관광 이니셔티브를 촉진하기 위한 전략적 계획을 시행하고 있습니다. 우리의 관심은 문화 유산과 자연 환경을 보존하면서 지역 커뮤니티에 이익을 주는 지속 가능한 성장입니다.
              </p>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      비자 정책 개선
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      항공 연결 강화
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      관광 지역 계획
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      지역 관광 프로젝트
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      문화 유산 보존
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      디지털 관광 플랫폼
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

