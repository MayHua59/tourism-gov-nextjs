"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "Yêu cầu visa",
    answer:
      "Hầu hết khách du lịch cần visa để vào Myanmar. Visa du lịch có thể được nhận trực tiếp tại Myanmar hoặc thông qua hệ thống e-Visa. Visa e-Visa cho phép thời gian lưu trú tối đa 28 ngày cho mục đích du lịch.",
  },
  {
    question: "Thời gian tốt nhất để đến",
    answer:
      "Mùa đông lạnh, khô từ tháng 11 đến tháng 2 là thời gian tốt nhất để đến hầu hết các vùng của Myanmar. Các điểm đến biển tốt nhất từ tháng 11 đến tháng 4, trong khi đi cỗ từ tháng 10 đến tháng 3.",
  },
  {
    question: "Văn hóa và Đạo đức",
    answer:
      "Khi đến những ngôi đền, mặc đồ mềm mại (mũi tên và đầu gối được che), bỏ đi giày và dép, và tránh chạm vào ảnh Buddha. Luôn hỏi phép trước khi chụp ảnh người. Sử dụng tay phải khi cho hoặc nhận vật phẩm.",
  },
  {
    question: "Sức khỏe và An toàn",
    answer:
      "Tư vấn với bác sĩ về các vaccine được khuyến nghị trước khi đi. Uống nước chỉ từ chai hoặc nước sạch. Myanmar tổng thể an toàn cho du khách, nhưng hãy lấy các biện pháp bảo vệ thông thường với vật trị giá.",
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
              <h2 className={styles.faqTitle}>Thông tin du khách</h2>
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