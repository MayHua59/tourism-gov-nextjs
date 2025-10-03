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
              <h2 className={styles.title}>探访缅甸的理由</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>纯正文化体验</h3>
                    <p>缅甸提供未被大众旅游侵蚀的原真文化邂逅，让您沉浸于保存完好的传统生活之中。</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>深厚历史底蕴</h3>
                    <p>承载两千年文明积淀，缅甸拥有无数考古瑰宝，从蒲甘王朝佛塔群到古骠国遗址，每处都见证着东南亚文明发展脉络。</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>自然风光瑰丽</h3>
                    <p>从喜马拉雅山麓到热带海岛，缅甸的壮丽景致令人屏息——白雪覆顶的极高山、密布柚木的原始森林、宝石般的海洋泻湖，共同绘就东南亚最后一片生态净土。</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>淳朴热情民风</h3>
                    <p>缅甸人民以真挚温暖和友善好客闻名，无论是市集里绽放的笑颜，还是村寨中无私的帮助，都能让旅人感受到超越文化隔阂的心灵触动。</p>
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
              <h2 className={styles.title}>缅甸旅游业发展成就</h2>
              <p>
                酒店与旅游部在推动可持续旅游基础设施建设方面取得重大进展，同时为子孙后代妥善保护缅甸的文化遗产与自然环境：
              </p>
              <ul className={styles.chooseItemStyle}>
                {/* <li>Over 4.3 million international arrivals in 2019</li> */}
                <li>自2011年以来酒店客房数量增长50%</li>
                <li>15处景点列入联合国教科文组织预备名录</li>
                <li>&quot;魅力缅甸&quot;旅游品牌持续推广</li>
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