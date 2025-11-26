
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
              <h2 className={styles.title}>Chào mừng đến với Du lịch Myanmar</h2>
              <p>
                Myanmar, đất vàng, được ban tặng với nhiều văn hóa, kỳ quan và vẻ đẹp tự nhiên được khám phá ít.
              </p>
              <p>
                Bộ Khách sạn và Du lịch cam kết phát triển du lịch bền vững mang lại lợi ích cho cộng đồng địa phương trong khi bảo tồn tài sản văn hóa và tự nhiên của chúng tôi. Tầm nhìn của chúng tôi là đặt Myanmar trở thành điểm đến không thể bỏ qua mang đến trải nghiệm thực sự cho các du khách có trách nhiệm.
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000+ năm lịch sử
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 nhóm dân tộc
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Hơn 1,000 dặm bờ biển
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