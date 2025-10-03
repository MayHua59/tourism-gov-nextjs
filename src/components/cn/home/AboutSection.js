
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
              <h2 className={styles.title}>欢迎来到缅甸旅游</h2>
              <p>
              缅甸，这片金色的土地，承载着多元的文化、古老的遗产和大多尚未被发掘的自然美景。

              </p>
              <p>
              酒店与旅游部致力于发展可持续旅游业，让当地社区受益，同时保护我们的文化和自然财富。我们的愿景是将缅甸打造成为负责任旅行者提供纯正体验的必游目的地。
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000多年悠久历史
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135个民族多元共存
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      逾1000英里绵长海岸线
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/cn/about-myanmar" className={styles.cmnBtn}>
              了解更多
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}