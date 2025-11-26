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
              <h2 className={styles.title}>Tại sao đến Myanmar</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Trải nghiệm thực sự</h3>
                    <p>Myanmar cung cấp trải nghiệm văn hóa thực sự lớn, chưa bị ảnh hưởng bởi du lịch lớn.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Di sản văn hóa phong phú</h3>
                    <p>Với hơn 2,000 năm lịch sử, Myanmar có rất nhiều di sản khảo cổ đáng ngại.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Vẻ đẹp tự nhiên</h3>
                    <p>Từ núi Himalaya đến đảo nhiệt đới, cảnh sắc Myanmar làm tức ngất.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Khách sạn và Du lịch</h3>
                    <p>Người dân Myanmar nổi tiếng với sự nhiệt tình và thân thiện.</p>
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
              <h2 className={styles.title}>Thành tựu của Du lịch Myanmar</h2>
              <p>
                Bộ Khách sạn và Du lịch đã có nhiều tiến bộ trong việc phát triển du lịch bền vững
                cơ sở hạ tầng du lịch trong khi bảo tồn di sản văn hóa và môi trường tự nhiên cho các thế hệ tương lai.
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>50% tăng trưởng số phòng khách sạn từ năm 2011</li>
                <li>15 điểm trên danh sách thử nghiệm của UNESCO</li>
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