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
              <h2 className={styles.title}>Perché Visitare il Myanmar?</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Esperienze Autentiche</h3>
                    <p>Il Myanmar offre incontri culturali genuini che sono rimasti in gran parte non toccati dal turismo di massa.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Ricco Patrimonio</h3>
                    <p>Con oltre 2.000 anni di storia, il Myanmar offre numerosi tesori archeologici.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Bellezza Naturale</h3>
                    <p>Dalle vette dell&apos;Himalaya alle isole tropicali, i paesaggi del Myanmar sono impressionanti.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Ospitalità Accogliente</h3>
                    <p>Il popolo del Myanmar è noto per la sua genuina calore e gentilezza.</p>
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
              <h2 className={styles.title}>I Nostri Successi nel Turismo</h2>
              <p>
                  Il Ministero degli Hotel e del Turismo ha lavorato nello sviluppo di infrastrutture turistiche sostenibili preservando il patrimonio culturale e l&apos;ambiente naturale del Myanmar per le generazioni future.
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>50% di aumento delle camere d&apos;hotel dal 2011</li>
                <li>15 siti nella Lista Provvisoria dell&apos;UNESCO</li>
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