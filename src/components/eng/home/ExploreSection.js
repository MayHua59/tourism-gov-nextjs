import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Bagan Temple Plains",
    desc:
      "Marvel at over 2,000 ancient temples spread across the plains of Bagan, a UNESCO World Heritage Site dating back to the 9th century.",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Inle Lake",
    desc:
      "Experience the unique culture of Intha fishermen and floating villages on Myanmar's second largest lake, surrounded by mountains.",
  },
  {
    img: "/assets/images/cover-images/sea.jpg",
    alt: "Ngapali Beach",
    title: "Ngapali Beach",
    desc:
      "Relax on pristine white sand beaches along the Bay of Bengal, with swaying palm trees and crystal clear waters. It's the perfect  paradise for swimming. ",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Mandalay Region",
    desc:
      "Discover Myanmar's cultural heartland with ancient capitals, traditional crafts, and the iconic U Bein Bridge.",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Yangon",
    desc:
      "Explore the vibrant former capital with its colonial architecture and the magnificent Shwedagon Pagoda.",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Golden Rock",
    desc:
      "Witness the gravity-defying Golden Rock at Kyaiktiyo, one of Myanmar's most sacred Buddhist pilgrimage sites.",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Explore Myanmar&apos;s Treasures</h2>
              <span className={styles.titleBorder}></span>
              <p>
                From ancient temples to pristine beaches, Myanmar offers diverse experiences for every traveler. Discover our most iconic destinations.
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