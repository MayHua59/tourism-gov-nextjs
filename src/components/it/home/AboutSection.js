
"use client"
import React, { useState, useEffect } from 'react';

import styles from "./AboutSection.module.css";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function AboutSection() {
    const [offsetX, setOffsetX] = useState(0);
     const handleScroll = () => {
    // Adjust the multiplier (e.g., 0.25) to change the parallax speed
    setOffsetX(window.scrollY * -0.25);
  };
    useEffect(() => {
    // Set up the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component is removed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
     <section className={styles.aboutSection}>
       <div className={styles.aboutElementOne}>
        <img src="/assets/images/shape.png" alt="element shape" />
      </div>
       {/* The aeroplane - Parallax effect applied via inline style */}
      <div
        className={styles.aboutElementTwo}
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        <img src="/assets/images/shape-2.png" alt="element shape 2" />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg6}>
            <div className={styles.aboutLeftContent}>
              <h2 className={styles.title}>Benvenuti nel Turismo del Myanmar</h2>
              <p>
                Il Myanmar, la Terra d&apos;Oro, è benedetto da culture diverse,
                patrimonio antico e bellezza naturale che rimane in gran parte
                sconosciuta.
              </p>
              <p>
              Il Ministero degli Hotel e del Turismo è impegnato nello sviluppo di un turismo sostenibile che avvantaggia le comunità locali preservando il nostro patrimonio culturale e naturale. La nostra visione è posizionare il Myanmar come una destinazione imperdibile che offre esperienze autentiche ai viaggiatori responsabili.
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      2000+ anni di storia
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      135 gruppi etnici
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Oltre 1.000 miglia di costa
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/it/about-myanmar" className={styles.cmnBtn}>
  Scopri di più
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}