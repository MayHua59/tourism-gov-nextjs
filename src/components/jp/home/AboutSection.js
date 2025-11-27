
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
              <h2 className={styles.title}>ミャンマー観光へようこそ</h2>
              <p>
                Myanmar, 金の地, 多くの文化、観光スポット、自然の美しさが少なくともわかる。
              </p>
              <p>
                ホテル観光省は、文化的、自然資産を保護すると同時に、地域住民に利益をもたらす永続的な観光開発を承諾しています。私たちの見通しは、ミャンマーを世界中の観光客が訪れるべき観光地として位置づけることです。
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000+ 年の歴史
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 民族グループ
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      1,000 海里以上の海岸線
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/vn/about-myanmar" className={styles.cmnBtn}>
  Tìm hiểu thêm
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}