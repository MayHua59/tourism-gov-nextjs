import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Равнины храмов Багана",
    desc:
      "Восторгайтесь более чем 2,000 древними храмами, расположенными на равнине Багана, Всемирным наследием ЮНЕСКО, датируемым 9-м веком.",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Озеро Инле",
    desc:
      "Опытайтесь уникальную культуру интхских рыбаков и плавающих деревень на втором по величине озере Мьянмы, окруженном горами.",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "Пляж Нагапали",
    desc:
      "Отдыхайте на чистом белом песке на берегах залива Бенгала, с качающимися пальмами и кристально чистой водой. Это идеальное место для плавания. ",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Регион Мandalay",
    desc:
      "Откройте культурное сердце Мьянмы с древними столицами, традиционными ремеслами и знаменитым мостом У Бьен.",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Янгон",
    desc:
      "Исследуйте живописное бывшее столичное городок с его колониальной архитектурой и величественным храмом Шведзон.",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Золотая Гора",
    desc:
      "Наблюдайте за золотым камнем в Кяиктио, одним из самых святых буддийских мест паломничества в Мьянме.",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Исследуйте сокровища Мьянмы</h2>
              <span className={styles.titleBorder}></span>
              <p>
                От древних храмов до чистых пляжей, Мьянма предлагает разнообразные впечатления для каждого путешественника. Откройте наши самые знаковые места.
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