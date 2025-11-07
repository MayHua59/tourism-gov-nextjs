
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
              <h2 className={styles.title}>미얀마 관광에 오신 것을 환영합니다</h2>
              <p>
              미얀마는 다양한 문화와 고대 유산, 그리고 아직 잘 알려지지 않은 천연의 아름다움을 축복처럼 간직하고 있습니다.
              </p>
              <p>
                  호텔 및 관광부는 문화적, 자연적 자산을 보존하면서 지역 사회에 도움이 되는 지속 가능한 관광을 개발하는 데 전념하고 있습니다. 우리의 비전은 책임감 있는 여행객들에게 진정한 경험을 제공하는 필수 방문지로 미얀마를 자리매김하는 것입니다.
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000+ 년의 역사
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 민족 그룹
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      1,000 마일 이상의 해안
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/kr/about-myanmar" className={styles.cmnBtn}>
  더 알아보기
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

