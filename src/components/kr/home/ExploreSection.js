import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Bagan Temple Plains",
    desc:
      "바간 평원에 2,000 개 이상의 고대 사원이 퍼져 있습니다. 이는 유네스코 세계 유산으로 지정된 9세기 이래의 역사를 가진 곳입니다.",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Inle Lake",
    desc:
      "미얀마의 두 번째로 큰 호수인 인레 호수에서 독특한 문화를 경험하세요. 산맥으로 둘러싸인 떠다니는 마을과 어부들의 문화를 경험하세요.",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "Ngapali Beach",
    desc:
      "바고 해안에 있는 청정한 하얀 모래 해변에서 휴식을 취하세요. 팔순 나무와 맑은 물이 있는 이상적인 낙원입니다.",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Mandalay Region",
    desc:
      "미얀마의 문화 중심지를 발견하세요. 고대 수도와 전통 손작물, 그리고 대표적인 우비인 다리를 경험하세요.",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Yangon",
    desc:
      "화려한 과거 수도인 양곤을 발견하세요. 콜로니얼 건축과 화려한 쉐도간 부처를 경험하세요.",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Golden Rock",
    desc:
      "키아이크티오에 있는 중력을 무시하는 황금 바위를 발견하세요. 이는 미얀마의 가장 聖地로 알려져 있습니다.",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>미얀마의 보물 발견하기</h2>
              <span className={styles.titleBorder}></span>
              <p>
                고대 사원부터 청정한 해변까지, 미얀마는 모든 여행자에게 다양한 경험을 제공합니다. 우리의 대표적인 목적지를 발견하세요.
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

