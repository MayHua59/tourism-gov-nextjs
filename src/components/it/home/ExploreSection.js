import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Templi di Bagan",
    desc:
      "Ammirate oltre 2.000 antichi templi che si estendono sulle pianure di Bagan, un patrimonio mondiale dell'UNESCO del IX secolo.",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Lago Inle",
    desc:
      "Vivete la cultura unica dei pescatori Intha e dei villaggi galleggianti sul secondo lago più grande del Myanmar, circondato da montagne.",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "Spiaggia di Ngapali",
    desc:
      "Rilassatevi su spiagge di sabbia bianca pulita lungo la Baia del Bengala, con palme ondeggianti e acque cristalline. È il paradiso perfetto per nuotare.",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Regione di Mandalay",
    desc:
      "Scoprite il cuore culturale del Myanmar con antiche capitali, opere d'arte tradizionali e il ponte iconico U Bein.",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Città di Yangon",
    desc:
      "Esplorate la vivace ex capitale con la sua architettura coloniale e la magnifica Pagoda Shwedagon.",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Roccia d'Oro",
    desc:
      "Meravigliatevi della Roccia d'Oro a Kyaiktiyo, uno dei più sacri siti di pellegrinaggio buddista del Myanmar.",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Esplorate i Tesori del Myanmar</h2>
              <span className={styles.titleBorder}></span>
              <p>
                Dagli antichi templi alle spiagge incontaminate, il Myanmar offre esperienze diverse per ogni viaggiatore. Scoprite le nostre destinazioni iconiche.
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