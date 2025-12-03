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
              <h2 className={styles.tdTitle}>Desarrollo del Turismo en Myanmar</h2>
              <p>
                El Ministerio de Hoteles y Turismo está implementando planes estratégicos para desarrollar infraestructura turística, mejorar los estándares de servicio y promover iniciativas de turismo comunitario en toda Myanmar. Nuestro enfoque es el crecimiento sostenible que beneficie a las comunidades locales mientras preservamos nuestro patrimonio cultural y el entorno natural.
              </p>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Políticas de visa mejoradas
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Conectividad aérea mejorada
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Planes de zonificación turística
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Proyectos de turismo comunitario
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Conservación del patrimonio
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Plataformas turísticas digitales
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