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
              <h2 className={styles.title}>Warum Myanmar besuchen?</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Authentische Erlebnisse</h3>
                    <p>Myanmar bietet echte kulturelle Begegnungen, die sich größtenteils nicht durch Massentourismus beeinträchtigt haben.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Reiches Erbe</h3>
                    <p>Mit über 2.000 Jahren Geschichte, bietet Myanmar zahlreiche archäologische Schätze.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Natürliche Schönheit</h3>
                    <p>Von Himalaya-Gipfeln bis zu tropischen Inseln, sind die Landschaften von Myanmar beeindruckend.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Wärmende Gastlichkeit</h3>
                    <p>Myanmarische Menschen sind für ihre echte Wärme und Freundlichkeit bekannt.</p>
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
              <h2 className={styles.title}>Unsere Tourismus-Erfolge</h2>
              <p>
                  Das Ministerium für Hotels und Tourismus hat in der Entwicklung nachhaltiger Tourismus
                  Infrastruktur während der Erhaltung von Myanmar&apos;s kulturelles Erbe und natürliche Umwelt für zukünftige Generationen.
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>50% Zunahme an Hotelzimmern seit 2011</li>
                <li>15 Standorte auf der Tentative Liste von UNESCO</li>
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