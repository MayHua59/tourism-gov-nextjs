"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "Requisitos de Visa",
    answer:
      "La mayoría de los visitantes requieren una visa para ingresar a Myanmar. Las visas de turismo se pueden obtener en línea a través del sistema e-Visa o en las embajadas de Myanmar. El e-Visa permite estancias de hasta 28 días para fines turísticos.",
  },
  {
    question: "Mejor Tiempo para Visitar",
    answer:
      "La temporada fresca y seca de noviembre a febrero es generalmente el mejor tiempo para visitar la mayor parte de Myanmar. Las playas son mejores de noviembre a abril, mientras que el trekking en regiones septentrionales es ideal de octubre a marzo.",
  },
  {
    question: "Etiqueta Cultural",
    answer:
      "Cuando visites templos, viste modestamente (cubrir los hombros y las rodillas), quitá tus zapatos y calcetines, y evita tocar imágenes de Buddha. Siempre pide permiso antes de tomar fotos de personas. Usa tu mano derecha cuando entregues o recibas objetos.",
  },
  {
    question: "Salud y Seguridad",
    answer:
      "Consulta a tu doctor sobre las vacunas recomendadas antes de viajar. Bebe solo agua embotellada o purificada. Myanmar es generalmente seguro para viajeros, pero toma precauciones normales con valiosos objetos.",
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
                <h2 className={styles.faqTitle}>Información para Viajeros</h2>
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