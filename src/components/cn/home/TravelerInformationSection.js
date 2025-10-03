"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "签证要求",
    answer:
      "大多数游客需要签证才能进入缅甸。旅游签证可以通过电子签证系统在线申请或在缅甸大使馆获得。电子签证允许出于旅游目的停留最多28天。",
  },
  {
    question: "最佳旅游时间",
    answer:
      "11月至2月的凉爽干燥季节通常是访问缅甸大部分地区的最佳时间。海滩目的地在11月至4月最佳, 而北部地区的徒步旅行在10月至3月最为理想。",
  },
  {
    question: "文化礼仪",
    answer:
      "参观寺庙时，请穿着得体（遮住肩膀和膝盖），脱掉鞋袜，避免触摸佛像。在拍摄人物照片前务必征得许可。给予或接收物品时请使用右手。",
  },
  {
    question: "健康与安全",
    answer:
      "旅行前请咨询医生关于推荐疫苗接种的建议。只饮用瓶装或净化水。缅甸对旅行者来说总体上是安全的，但请对贵重物品采取正常预防措施。",
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
              <h2 className={styles.faqTitle}>旅行者信息</h2>
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