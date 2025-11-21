"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
            <Image
              src="/assets/images/cover-images/bagan.jpg"
              alt="Tourism Myanmar"
              className={styles.tdImage}
              width={800}
              height={600}
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
              <Image src="/assets/images/overview-bg.png" alt="" width={300} height={300} />
            </div>
            <div className={styles.tdContent}>
              <h2 className={styles.tdTitle}>การพัฒนาการท่องเที่ยวของเมียนมาร์</h2>
              <p>
                กระทรวงโรงแรมและการท่องเที่ยวกำลังดำเนินแผนกลยุทธ์เพื่อพัฒนาสาธารณูปโภคการท่องเที่ยว ปรับปรุงมาตรฐานการบริการ และส่งเสริมโครงการท่องเที่ยวที่เน้นชุมชนทั่วทั้งเมียนมาร์ เป้าหมายของเราคือการเติบโตอย่างยั่งยืนที่ให้ประโยชน์แก่ชุมชนท้องถิ่น ในขณะที่รักษามรดกทางวัฒนธรรมและสิ่งแวดล้อมทางธรรมชาติ
              </p>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      ปรับปรุงนโยบายวีซ่า
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      เสริมสร้างการเชื่อมต่อทางอากาศ
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      การวางแผนพื้นที่ท่องเที่ยว
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      โครงการท่องเที่ยวชุมชน
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      การอนุรักษ์มรดกทางวัฒนธรรม
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      แพลตฟอร์มการท่องเที่ยวดิจิทัล
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

