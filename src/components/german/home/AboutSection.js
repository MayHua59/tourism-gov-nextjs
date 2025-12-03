
"use client"
import React, { useState, useEffect } from 'react';

import styles from "./AboutSection.module.css";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function AboutSection() {
    const [offsetX, setOffsetX] = useState(0);
     const handleScroll = () => {
    // Adjust the multiplier (e.g., 0.25) to change the parallax speed
    setOffsetX(window.scrollY * -0.25);
  };
    useEffect(() => {
    // Set up the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component is removed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
     <section className={styles.aboutSection}>
       <div className={styles.aboutElementOne}>
        <img src="/assets/images/shape.png" alt="element shape" />
      </div>
       {/* The aeroplane - Parallax effect applied via inline style */}
      <div
        className={styles.aboutElementTwo}
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        <img src="/assets/images/shape-2.png" alt="element shape 2" />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg6}>
            <div className={styles.aboutLeftContent}>
              <h2 className={styles.title}>Willkommen bei Myanmar Tourismus</h2>
              <p>
                Myanmar, das Goldene Land, ist reich an vielfältigen Kulturen,
                antikem Erbe und natürlicher Schönheit, die größtenteils noch
                unentdeckt ist.
              </p>
              <p>
              Das Ministerium für Hotels und Tourismus engagiert sich für die Entwicklung eines nachhaltigen Tourismus, der den lokalen Gemeinschaften zugutekommt und gleichzeitig unser kulturelles und natürliches Erbe bewahrt. Unsere Vision ist es, Myanmar als ein unbedingt sehenswertes Reiseziel zu positionieren, das authentische Erlebnisse für verantwortungsbewusste Reisende bietet.
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000+ Jahre Geschichte
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 ethnische Gruppen
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Über 1.000 Meilen Küste
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/de/information-pages/about-myanmar" className={styles.cmnBtn}>
  Mehr erfahren
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}