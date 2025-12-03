import React from "react";
import styles from "./CallActionSection.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function CallActionSection() {
  return (
    <section className={styles.callActionSection}>
      <div className={styles.callActionContainer}>
        <div className={styles.callActionRow}>
          <div className={styles.callActionColLeft}>
            <div className={styles.callActionContent}>
              <h3 className={styles.callActionTitle}>Resta Aggiornato</h3>
              <span className={styles.callActionSubtitle}>
                Iscriviti alle Notizie sul Turismo del Myanmar
              </span>
            </div>
          </div>
          <div className={styles.callActionColRight}>
            <form className={styles.callActionForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="text"
                  placeholder="Il Tuo Indirizzo Email"
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.subscribeBtn}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}