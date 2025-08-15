
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
              <h2 className={styles.title}>Welcome to Myanmar Tourism</h2>
              <p>
                Myanmar, the Golden Land, is blessed with diverse cultures,
                ancient heritage, and natural beauty that remains largely
                undiscovered.
              </p>
              <p>
                The Ministry of Hotels and Tourism is committed to developing
                sustainable tourism that benefits local communities while
                preserving our cultural and natural assets. Our vision is to
                position Myanmar as a must-visit destination that offers
                authentic experiences to responsible travelers.
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000+ years of history
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 ethnic groups
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Over 1,000 miles of coastline
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/en/about-myanmar" className={styles.cmnBtn}>
  Learn More
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}