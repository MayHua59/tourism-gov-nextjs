import React from "react";
import styles from "./AboutSection.module.css";
import { FaCheck } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      className={styles.aboutSection}
      style={{ backgroundImage: `url(/assets/images/map.png)` }}
    >
      <div className={styles.aboutElementOne}>
        <img src="/assets/images/shape.png" alt="element shape" />
      </div>
      <div className={styles.aboutElementTwo}>
        <img src="/assets/images/shape-2.png" alt="element shape 2" />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg6}>
            <div className={styles.aboutLeftContent}>
              <h2 className={styles.title}>Welcome to Myanmar Tourism</h2>
              <p>
                Myanmar, the Golden Land, is blessed with diverse cultures,
                ancient heritage, and natural beauty that remains largely
                undiscovered.
              </p>
              <p>
                The Ministry of Hotels and Tourism is committed to developing
                sustainable tourism that benefits local communities while
                preserving our cultural and natural assets. Our vision is to
                position Myanmar as a must-visit destination that offers
                authentic experiences to responsible travelers.
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000+ years of history
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 ethnic groups
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Over 1,000 miles of coastline
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#" className={styles.cmnBtn}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}