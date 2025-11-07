"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "비자 요건",
    answer:
      "대부분의 방문자는 미얀마에 입국하기 위해 비자가 필요합니다. 관광 비자는 온라인 e-비자 시스템을 통해 얻을 수 있거나 미얀마 대사관에서 발급할 수 있습니다. e-비자는 관광 목적으로 최대 28일까지 허용됩니다.",
  },
  {
    question: "방문 좋은 시기",
    answer:
      "11월부터 2월까지의 시원하고 건조한 계절이 미얀마의 대부분 지역을 방문하기에 가장 좋은 시기입니다. 해변 목적지는 11월부터 4월까지가 가장 좋으며, 북부 지역의 등산은 10월부터 3월까지가 이상적입니다.",
  },
  {
    question: "문화 정치",
    answer:
      "사원을 방문할 때는 적절한 옷차림을 유지하세요 (어깨와 무릎을 가리고), 신발과 양말을 제거하고, 부처 이미지를 만지지 마세요. 사람들의 사진을 찍기 전에 항상 허락을 받으세요. 물건을 주거나 받을 때는 오른손을 사용하세요.",
  },
  {
    question: "건강 및 안전",
    answer:
      "여행 전에 권장되는 백신을 의사와 상담하세요. 휘발성 물을 마시지 마세요. 미얀마는 일반적으로 여행자에게 안전하지만, 명품을 보관할 때는 일반적인 주의사항을 취하세요.",
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
              <h2 className={styles.faqTitle}>여행자 정보</h2>
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

