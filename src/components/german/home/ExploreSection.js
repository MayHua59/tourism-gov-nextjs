import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Bagan Tempelplätze",
    desc:
      "Staunen Sie über mehr als 2.000 antike Tempel, die sich über die Flächen von Bagan, ein UNESCO-Weltkulturerbe aus dem 9. Jahrhundert, erstrecken.",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Inle-See",
    desc:
      "Erleben Sie die einzigartige Kultur der Intha-Fischer und der schwimmenden Dörfer auf Myanmar's zweitgrößten See, der von Bergen umgeben ist.",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "Ngapali-Strand",
    desc:
      "Entspannen Sie sich auf sauberen weißen Sandstränden entlang der Bay of Bengal, mit schwankenden Palmen und klarem Wasser. Es ist das perfekte Paradies für das Schwimmen. ",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Mandalay-Region",
    desc:
      "Entdecken Sie Myanmar's kulturelles Herz mit antiken Hauptstädten, traditionellen Kunstwerken und dem ikonischen U Bein Bridge.",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Yangon-Stadt",
    desc:
      "Entdecken Sie die lebendige ehemalige Hauptstadt mit ihrer kolonialen Architektur und der prächtigen Shwedagon Pagoda.",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Goldener Fels",
    desc:
      "Zittern Sie über den Goldener Fels in Kyaiktiyo, eines der myanmarischen heiligsten buddhistischen Pilgerorte.",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Entdecken Sie Myanmar&apos;s Schätze</h2>
              <span className={styles.titleBorder}></span>
              <p>
                Von antiken Tempeln bis zu sauberen Stränden, bietet Myanmar vielfältige Erlebnisse für jeden Reisenden. Entdecken Sie unsere ikonischen Ziele.
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