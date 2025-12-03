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
              <h2 className={styles.tdTitle}>Sviluppo del Turismo in Myanmar</h2>
              <p>
                Il Ministero degli Hotel e del Turismo implementa piani strategici per lo sviluppo dell&apos;infrastruttura turistica, il miglioramento degli standard di servizio e la promozione di iniziative di turismo comunitario in Myanmar. Il nostro focus è sulla crescita sostenibile che avvantaggia le comunità locali preservando il nostro patrimonio culturale e l&apos;ambiente naturale.
              </p>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Politiche sui Visti Migliorate
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Collegamenti Aerei Migliorati
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Piani per Zone Turistiche
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Progetti di Turismo Comunitario
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Conservazione del Patrimonio
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Piattaforme Digitali per il Turismo
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