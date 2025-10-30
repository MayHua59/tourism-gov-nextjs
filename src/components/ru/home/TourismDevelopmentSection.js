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
              <h2 className={styles.tdTitle}>Развитие туризма в Мьянме</h2>
              <p>
                Министерство по делам отелей и туризма реализует стратегические планы для развития туристской инфраструктуры, улучшения стандартов обслуживания и продвижения инициатив местного туризма по всей Мьянме. Наша цель - устойчивый рост, который выгоден местным сообществам, сохраняя при этом наше культурное наследие и природное окружение.
              </p>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Улучшенные правила виз
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Улучшенная воздушная связь
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Планирование туристских зон
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Проекты местного туризма
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Сохранение культурного наследия
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Цифровые платформы туризма
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