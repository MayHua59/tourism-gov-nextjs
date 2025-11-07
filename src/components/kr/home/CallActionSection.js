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
              <h3 className={styles.callActionTitle}>최신 정보 받기</h3>
              <span className={styles.callActionSubtitle}>
                미얀마 관광 뉴스 구독
              </span>
            </div>
          </div>
          <div className={styles.callActionColRight}>
            <form className={styles.callActionForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="text"
                  placeholder="이메일 주소"
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

