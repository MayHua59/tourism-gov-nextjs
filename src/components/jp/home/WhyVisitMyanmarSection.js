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
              <h2 className={styles.title}>ミャンマーを訪れる理由</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>実際の体験</h3>
                    <p>ミャンマーは、大規模な観光の影響を受けずに、本物の文化体験を提供します。</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>豊かな文化遺産</h3>
                    <p>2000年の歴史を持つミャンマーは、考古学的な宝物が数多くあります。</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>自然の美</h3>
                    <p>ヒマラヤ山脈から熱帯島まで、ミャンマーの景色は驚きを与えます。</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>ホテルと観光</h3>
                    <p>ミャンマー人は熱心で友好的で知られています。</p>
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
              <h2 className={styles.title}>ミャンマーの観光成績</h2>
              <p>
                ホテルと観光部は、持続可能な観光のための基盤施設を開発すると同時に、文化遺産と自然環境を保護し、将来の世代に伝えることに成功しました。
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>2011年から50%のホテル部屋が増加しました</li>
                <li>15点のUNESCOの試験リストに登録されました</li>
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