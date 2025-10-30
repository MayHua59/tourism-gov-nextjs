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
              <h2 className={styles.title}>Почему посетить Мьянму</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Подлинные впечатления</h3>
                    <p>Мьянма предлагает подлинные культурные встречи, в основном нетронутые массовым туризмом.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Богатый Наследие</h3>
                    <p>С более чем 2,000 лет истории, Мьянма обладает множеством археологических сокровищ.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Природная Красота</h3>
                    <p>От Гималайских пиков до тропических островов, ландшафты Мьянмы просто потрясающие.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>Теплое Гостеприимство</h3>
                    <p>Мьянмане известны своей искренней теплотой и дружелюбием.</p>
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
              <h2 className={styles.title}>Наши достижения в туризме</h2>
              <p>
                Министерство по делам отелей и туризма сделало значительный прогресс в развитии устойчивого туризма
                инфраструктуры, сохраняя культурное наследие и природное окружение Мьянмы для будущих поколений.
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>50% увеличение количества гостиничных номеров с 2011 года</li>
                <li>15 сайтов на Списке предварительного отбора ЮНЕСКО</li>
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