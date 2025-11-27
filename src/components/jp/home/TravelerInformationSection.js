"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "ビザの要件",
    answer:
      "ほとんどの観光客はミャンマーに入国するためにビザが必要です。ビザは直接ミャンマーで取得するか、e-ビザシステムを介して取得できます。e-ビザは最大28日間の滞在を許可します。",
  },
  {
    question: "最適な訪問時期",
    answer:
      "冬は寒く乾燥し、11月から2月がミャンマーのほとんどの地域で最適な訪問時期です。海の観光は11月から4月、山岳観光は10月から3月が最適です。",
  },
  {
    question: "文化と道徳",
    answer:
      "寺院に入るときは柔らかい服を着てください（頭と膝を覆う）。靴を脱ぎ、ブッダの写真に触れないでください。写真を撮る前に常に許可を得てください。物を受け取るまたは渡すときは右手を使ってください。",
  },
  {
      question: "健康と安全",
    answer:
      "行く前に医者に相談してください。瓶または浄水器の水を飲んでください。ミャンマーは一般的に旅行者にとって安全ですが、貴重品を持ち歩くときは通常の注意を取ってください。",
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
              <h2 className={styles.faqTitle}>観光客情報</h2>
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