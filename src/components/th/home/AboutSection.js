
"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";

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
        <Image src="/assets/images/shape.png" alt="element shape" width={380} height={350} />
      </div>
       {/* The aeroplane - Parallax effect applied via inline style */}
      <div
        className={styles.aboutElementTwo}
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        <Image src="/assets/images/shape-2.png" alt="element shape 2" width={280} height={230} />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg6}>
            <div className={styles.aboutLeftContent}>
              <h2 className={styles.title}>ยินดีต้อนรับสู่การท่องเที่ยวเมียนมาร์</h2>
              <p>
              เมียนมาร์มีวัฒนธรรมที่หลากหลายและมรดกโบราณ ตลอดจนความงามทางธรรมชาติที่ยังไม่เป็นที่รู้จักมากนัก เปรียบเสมือนพรที่ได้รับ
              </p>
              <p>
                  กระทรวงโรงแรมและการท่องเที่ยวมุ่งมั่นในการพัฒนาการท่องเที่ยวอย่างยั่งยืนที่ช่วยเหลือชุมชนท้องถิ่น ในขณะที่รักษามรดกทางวัฒนธรรมและธรรมชาติ วิสัยทัศน์ของเราคือการทำให้เมียนมาร์เป็นจุดหมายปลายทางที่ต้องไปเยือน ซึ่งมอบประสบการณ์ที่แท้จริงแก่นักท่องเที่ยวที่มีความรับผิดชอบ
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      ประวัติศาสตร์กว่า 2,000 ปี
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 กลุ่มชาติพันธุ์
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      ชายฝั่งมากกว่า 1,000 ไมล์
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/th/about-myanmar" className={styles.cmnBtn}>
  เรียนรู้เพิ่มเติม
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

