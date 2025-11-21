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
              <h2 className={styles.title}>เหตุผลที่ควรเยี่ยมชมเมียนมาร์</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>ประสบการณ์ที่แท้จริง</h3>
                    <p>เมียนมาร์มอบประสบการณ์ทางวัฒนธรรมที่แท้จริงที่ยังคงอยู่ก่อนการท่องเที่ยวขนาดใหญ่</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>มรดกที่อุดมสมบูรณ์</h3>
                    <p>เมียนมาร์มีประวัติศาสตร์กว่า 2,000 ปีและมีโบราณวัตถุมากมาย</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>ความงามทางธรรมชาติ</h3>
                    <p>จากเทือกเขาหิมาลัยไปจนถึงเกาะเขตร้อน ภูมิประเทศของเมียนมาร์งดงามตระการตา</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>การต้อนรับที่อบอุ่น</h3>
                    <p>ชาวเมียนมาร์มีชื่อเสียงในด้านความอบอุ่นและความใจดีที่แท้จริง</p>
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
              <h2 className={styles.title}>ความสำเร็จด้านการท่องเที่ยว</h2>
              <p>
                กระทรวงโรงแรมและการท่องเที่ยวได้ก้าวหน้าไปอย่างมากในการพัฒนาการท่องเที่ยวอย่างยั่งยืน ในขณะที่รักษามรดกทางวัฒนธรรมและสิ่งแวดล้อมทางธรรมชาติของเมียนมาร์
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>เพิ่มห้องพักโรงแรม 50% ตั้งแต่ปี 2011</li>
                <li>รวม 15 แห่งในรายชื่อเบื้องต้นของยูเนสโก</li>
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

