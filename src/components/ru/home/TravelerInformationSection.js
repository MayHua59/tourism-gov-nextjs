"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "Требования к визе",
    answer:
      "Большинство посетителей нуждаются в визе для входа в Мьянму. Туристические визы можно получить онлайн через систему электронных виз или в миссиях Мьянмы. Электронная виза позволяет пребывать до 28 дней для туризма.",
  },
  {
    question: "Лучшее время для посещения",
    answer:
      "Холодный, сухой сезон с ноября по февраль является лучшим временем для посещения большинства частей Мьянмы. Пляжные места лучше всего с ноября по апрель, в то время как пешеходные маршруты в северных регионах идеальны с октября по март.",
  },
  {
    question: "Культурные этикеты",
    answer:
      "При посещении храмов одевайтесь скромно (закрывайте плечи и колени), снимайте обувь и носки, и избегайте касания изображений Будды. Всегда просите разрешения перед фотографированием людей. Используйте правую руку при дарении или получении предметов.",
  },
  {
    question: "Здоровье и безопасность",
    answer:
      "Поговорите с врачом о рекомендуемых вакцинах перед поездкой. Пить только бутылки или очищенную воду. Мьянма в целом безопасна для путешественников, но принимайте обычные меры предосторожности с ценными вещами.",
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
              <h2 className={styles.faqTitle}>Информация для путешественников</h2>
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