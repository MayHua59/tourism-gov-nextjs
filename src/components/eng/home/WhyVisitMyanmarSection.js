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
              <h2 className={styles.title}>Why Visit Myanmar</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Authentic Experiences</h3>
                    <p>Myanmar offers genuine cultural encounters largely untouched by mass tourism.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Rich Heritage</h3>
                    <p>With over 2,000 years of history, Myanmar boasts countless archaeological treasures.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Natural Beauty</h3>
                    <p>From Himalayan peaks to tropical islands, Myanmar&apos;s landscapes are breathtaking.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Warm Hospitality</h3>
                    <p>Myanmar people are renowned for their genuine warmth and friendliness.</p>
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
              <h2 className={styles.title}>Our Tourism Achievements</h2>
              <p>
                The Ministry of Hotels and Tourism has made significant progress in developing sustainable tourism
                infrastructure while preserving Myanmar&apos;s cultural heritage and natural environment for future generations.
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>50% increase in hotel rooms since 2011</li>
                <li>15 sites on UNESCO&apos;s Tentative List</li>
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