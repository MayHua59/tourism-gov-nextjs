import React from "react";
import styles from "./WhyVisitMyanmarSection.module.css";

export default function WhyVisitMyanmarSection() {
  return (
    <section className={styles.chooseUsSection}>
      <div className="container-fluid">
        {/* Why Visit Myanmar Row */}
        <div className={`row ${styles.flexRow}`}>
          <div className={`col-lg-6 col-md-6 ${styles.noPaddingLeft}`}>
            <div className={styles.chooseUsThumb} aria-label="Why Visit Myanmar Background"></div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className={`${styles.chooseContent} ${styles.responsivePadding}`}>
              <h2 className={styles.title}>¿Por qué visitar Myanmar?</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Experiencias Auténticas</h3>
                    <p>Myanmar offers genuine cultural encounters largely untouched by mass tourism.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Herencia Rica</h3>
                    <p>Con más de 2,000 años de historia, Myanmar tiene innumerables tesoros arqueológicos.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Belleza Natural</h3>
                    <p>De picos himalayos a islas tropicales, los paisajes de Myanmar son asombrosos.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Hospitalidad Cálida</h3>
                    <p>Los people de Myanmar son conocidos por su genuina hospitalidad y amabilidad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Achievements Row */}
        <div className={`row ${styles.flexRow}`}>
          <div className="col-lg-6 col-md-6">
            <div className={`${styles.chooseContent} ${styles.chooseContentStyle} ${styles.responsivePadding}`}>
              <h2 className={styles.title}>Nuestros Logros en el Turismo</h2>
              <p>
                El Ministerio de Hoteles y Turismo ha hecho significativo progreso en el desarrollo de infraestructura turística sostenible
                infrastructure while preserving Myanmar&apos;s cultural heritage and natural environment for future generations.
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>50% de aumento en las habitaciones de hotel desde 2011</li>
                  <li>15 sitios en la Lista Tentativa de la UNESCO</li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-6 col-md-6 ${styles.noPaddingRight}`}>
            <div className={styles.chooseUsThumbStyle} aria-label="Achievements Background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}