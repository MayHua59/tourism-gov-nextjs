import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "bagan",
    title: "蒲甘塔林",
    desc:
      "惊叹于遍布蒲甘平原的2000多座古老佛塔, 这座被列入联合国教科文组织世界遗产的圣地, 其历史可追溯至公元9世纪。",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "茵莱湖",
    desc:
      "在缅甸第二大湖体验独特的茵达族渔夫文化和漂浮村落，湖光山色环绕其间。",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "额布里海滩",
    desc:
      "在孟加拉湾沿岸的原始白沙海滩上放松身心，摇曳的棕榈树与清澈见底的海水共同构成绝佳的游泳天堂。",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "曼德勒省",
    desc:
      "探索缅甸文化腹地，这里拥有古代皇城遗址、传统手工艺品和标志性的乌本桥。",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "仰光",
    desc:
      "探索这座充满活力的故都，领略殖民时期建筑风情，瞻仰宏伟壮观的仰光大金塔。",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "吉谛瑜佛石",
    desc:
      "亲睹违背重力法则的吉谛瑜佛石——缅甸最神圣的佛教朝圣地之一，这块巍巍金岩悬立于千仞绝壁，承载着千年信仰奇观。",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>探索缅甸珍宝</h2>
              <span className={styles.titleBorder}></span>
              <p>
              从千年古寺到纯净海滩，缅甸为每位旅行者呈现多彩纷呈的体验。邀您探寻我们最具代表性的目的地：
              </p>
            </div>
          </div>
        </div>
        <div className={`row ${styles.cardGrid}`}>
          {places.map((place) => (
            <div className="col-lg-4 col-md-6 col-sm-8 " key={place.title}>
              <div className={styles.exploreItem}>
                <div className={styles.exploreThumb}>
                  <img src={place.img} alt={place.alt} />
                  <div className={styles.exploreOverlay}>
                    <div className={styles.exploreOverlayThumb}>
                      <img src={place.img} alt={place.alt} />
                    </div>
                  </div>
                </div>
                <div className={styles.exploreContent}>
                  <h3 className={styles.title}>{place.title}</h3>
                  <p>{place.desc}</p>
                </div>
                <div className={styles.exploreOverlay}>
                  <div className={styles.exploreOverlayThumb}>
                    <img src={place.img} alt={place.alt} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}