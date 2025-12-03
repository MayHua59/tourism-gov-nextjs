import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Bagan Temple Plains",
    desc:
      "Maravíllate con más de 2,000 templos antiguos dispersos por las planicies de Bagan, un sitio World Heritage de la UNESCO que data del siglo IX.",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Inle Lake",
    desc:
      "Experimenta la cultura única de los pescadores Intha y los pueblos flotantes en el segundo lago más grande de Myanmar, rodeado de montañas.",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "Ngapali Beach",
    desc:
      "Relájate en las playas de arena blanca pura a lo largo de la Bahía del Golfo, con palmeras que balancean y aguas cristalinas. Es el paraíso perfecto para nadar. ",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Mandalay Region",
    desc:
      "Descubre el corazón cultural de Myanmar con capitales antiguas, artesanías tradicionales y el icónico Puente U Bein.",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Yangon",
    desc:
      "Explora la capital anterior vibrante con su arquitectura colonial y la magnífica Pagoda Shwedagon.",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Golden Rock",
    desc:
      "Testigo del Rock Dorado que desafía la gravedad en Kyaiktiyo, uno de los sitios de peregrinación budista más sagrados de Myanmar.",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Explora los Tesoros de Myanmar</h2>
              <span className={styles.titleBorder}></span>
              <p>
                De templos antiguos a playas puras, Myanmar ofrece experiencias diversas para cada viajero. Descubre nuestros destinos icónicos.
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