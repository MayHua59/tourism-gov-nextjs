"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "ข้อกำหนดวีซ่า",
    answer:
      "ผู้เยี่ยมชมส่วนใหญ่ต้องมีวีซ่าเพื่อเข้าสู่เมียนมาร์ วีซ่าท่องเที่ยวสามารถได้รับผ่านระบบอี-วีซ่าออนไลน์หรือออกโดยสถานทูตเมียนมาร์ อี-วีซ่าอนุญาตให้อยู่ได้สูงสุด 28 วันสำหรับการท่องเที่ยว",
  },
  {
    question: "ช่วงเวลาที่ดีในการเยี่ยมชม",
    answer:
      "ฤดูหนาวที่เย็นและแห้งตั้งแต่เดือนพฤศจิกายนถึงกุมภาพันธ์เป็นช่วงเวลาที่ดีที่สุดในการเยี่ยมชมพื้นที่ส่วนใหญ่ของเมียนมาร์ จุดหมายปลายทางชายหาดดีที่สุดตั้งแต่เดือนพฤศจิกายนถึงเมษายน และการปีนเขาในพื้นที่ทางตอนเหนือเหมาะที่สุดตั้งแต่เดือนตุลาคมถึงมีนาคม",
  },
  {
    question: "มารยาททางวัฒนธรรม",
    answer:
      "เมื่อเยี่ยมชมวัด ควรแต่งกายให้เหมาะสม (ปกปิดไหล่และเข่า) ถอดรองเท้าและถุงเท้า และอย่าสัมผัสรูปปั้นพระพุทธเจ้า ขออนุญาตก่อนถ่ายภาพผู้คนเสมอ ใช้มือขวาเมื่อให้หรือรับสิ่งของ",
  },
  {
    question: "สุขภาพและความปลอดภัย",
    answer:
      "ปรึกษาแพทย์เกี่ยวกับวัคซีนที่แนะนำก่อนเดินทาง อย่าดื่มน้ำประปา เมียนมาร์โดยทั่วไปปลอดภัยสำหรับนักท่องเที่ยว แต่ควรใช้ความระมัดระวังทั่วไปเมื่อเก็บของมีค่า",
  },
];

const TravelerInformationSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.travelerInfoSection}>
      <div className="container">
        <div className={`row mb-30-none ${styles.rowStretch}`}>
          <div className={`col-lg-6 mb-30 ${styles.colFullHeight}`}>
            <div className={styles.faqContent}>
              <h2 className={styles.faqTitle}>ข้อมูลสำหรับนักท่องเที่ยว</h2>
              <div className={styles.faqWrapper}>
                {faqData.map((item, idx) => (
                  <div
                    key={item.question}
                    className={`${styles.faqItem} ${openIndex === idx ? styles.open : ""}`}
                  >
                    <h3
                      className={styles.faqQuestion}
                      onClick={() => handleToggle(idx)}
                    >
                      <span className={styles.faqQuestionText}>{item.question}</span>
                      <span className={styles.faqIcon}>
                        {openIndex === idx ? (
                          <span className={styles.iconMinus}>−</span>
                        ) : (
                          <span className={styles.iconPlus}>+</span>
                        )}
                      </span>
                    </h3>
                    <div
                      className={`${styles.faqAnswerWrapper} ${
                        openIndex === idx ? styles.expanded : ""
                      }`}
                    >
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`col-lg-6 mb-30 ${styles.colFullHeight}`}>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5SBjWjO3ilc?si=GbnrG-i0wG_v9vqL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ display: "block" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TravelerInformationSection;

