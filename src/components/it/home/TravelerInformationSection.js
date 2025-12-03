"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "Requisiti per il Visto",
    answer:
      "La maggior parte dei visitatori necessita di un visto per entrare in Myanmar. Il visto turistico può essere ottenuto online tramite il sistema e-Visa o presso le ambasciate del Myanmar. L'e-Visa consente soggiorni fino a 28 giorni per scopi turistici.",
  },
  {
    question: "Miglior Periodo per Visitare",
    answer:
      "La stagione fredda e secca da novembre a febbraio è generalmente il momento migliore per visitare la maggior parte del Myanmar. Le destinazioni balneari sono migliori da novembre ad aprile, mentre il trekking nelle regioni settentrionali è ideale da ottobre a marzo.",
  },
  {
    question: "Galateo Culturale",
    answer:
      "Quando visitate i templi, vestitevi in modo appropriato (coprite spalle e ginocchia), rimuovete scarpe e calzini ed evitate di toccare le immagini del Buddha. Chiedete sempre il permesso prima di fotografare le persone. Usate la mano destra quando date o ricevete oggetti.",
  },
  {
    question: "Salute e Sicurezza",
    answer:
      "Consultate il vostro medico sui vaccini raccomandati prima del viaggio. Bevete solo acqua in bottiglia o purificata. Il Myanmar è generalmente sicuro per i viaggiatori, ma prendete le normali precauzioni con oggetti di valore.",
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
              <h2 className={styles.faqTitle}>Informazioni per i Viaggiatori</h2>
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