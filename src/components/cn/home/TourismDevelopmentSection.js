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
              <h2 className={styles.tdTitle}>缅甸旅游发展</h2>
              <p>
                酒店与旅游部正在实施战略性计划，在全国范围内发展旅游基础设施、提升服务标准并推广社区旅游项目。我们专注于可持续增长，既造福当地社区，又保护我们的文化遗产和自然环境。
              </p>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      签证政策优化
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      航空连通增强
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      旅游功能区规划
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      社区旅游项目
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      遗产保护计划
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      数字旅游平台
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