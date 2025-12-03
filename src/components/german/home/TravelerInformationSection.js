"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "Visumanforderungen",
    answer:
      "Die meisten Besucher benötigen ein Visum, um Myanmar zu betreten. Touristenvisum kann online über das e-Visum-System oder an Myanmar-Botschaften erhalten werden. Das e-Visum ermöglicht Aufenthalte von bis zu 28 Tagen für Tourismuszwecke.",
  },
  {
    question: "Beste Zeit zum Besuch",
    answer:
      "Die kalte, trockene Jahreszeit von November bis Februar ist im Allgemeinen die beste Zeit, um die meisten Teile von Myanmar zu besuchen. Strandschätze sind am besten von November bis April, während Trekking in den nördlichen Regionen ideal von Oktober bis März ist.",
  },
  {
    question: "Kulturelle Etiquette",
    answer:
      "Beim Besuch von Tempeln, tragen Sie modisch (decken Sie Schultern und Knie), entfernen Sie Schuhe und Socken und vermeiden Sie das Berühren von Buddha-Bildern. Fragen Sie immer vor dem Fotografieren von Menschen um Erlaubnis. Verwenden Sie Ihre rechte Hand beim Geben oder Empfangen von Gegenständen.",
  },
  {
    question: "Gesundheit & Sicherheit",
    answer:
      "Beraten Sie Ihren Arzt über empfohlene Impfungen vor der Reise. Trinken Sie nur Flaschenwasser oder gereinigtes Wasser. Myanmar ist im Allgemeinen sicher für Reisende, nehmen Sie jedoch normalerweise Vorsicht mit wertvollen Gegenständen.",
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
              <h2 className={styles.faqTitle}>Reisende Informationen</h2>
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