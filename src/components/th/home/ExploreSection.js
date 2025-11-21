import React from "react";
import Image from "next/image";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Bagan Temple Plains",
    desc:
      "ที่ราบบากานมีวัดโบราณกว่า 2,000 แห่งกระจายอยู่ทั่ว เป็นสถานที่ที่มีประวัติศาสตร์ย้อนหลังไปถึงศตวรรษที่ 9 และได้รับการขึ้นทะเบียนเป็นมรดกโลกโดยยูเนสโก",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Inle Lake",
    desc:
      "สัมผัสวัฒนธรรมที่โดดเด่นที่ทะเลสาบอินเล ซึ่งเป็นทะเลสาบที่ใหญ่เป็นอันดับสองของเมียนมาร์ ชมหมู่บ้านลอยน้ำและวัฒนธรรมของชาวประมงที่ล้อมรอบด้วยเทือกเขา",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "Ngapali Beach",
    desc:
      "พักผ่อนบนชายหาดทรายขาวบริสุทธิ์ริมชายฝั่งบาโก เป็นสวรรค์ในอุดมคติที่มีต้นปาล์มและน้ำใส",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Mandalay Region",
    desc:
      "ค้นพบศูนย์กลางทางวัฒนธรรมของเมียนมาร์ สัมผัสเมืองหลวงโบราณ หัตถกรรมแบบดั้งเดิม และสะพานอูเบ็งอันโด่งดัง",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Yangon",
    desc:
      "ค้นพบย่างกุ้ง เมืองหลวงเก่าที่งดงาม สัมผัสสถาปัตยกรรมแบบอาณานิคมและพระพุทธรูปชเวดากองที่งดงาม",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Golden Rock",
    desc:
      "ค้นพบหินทองคำที่ท้าทายแรงโน้มถ่วงที่เจดีย์ไจก์ทิโย ซึ่งเป็นที่รู้จักกันว่าเป็นสถานที่ศักดิ์สิทธิ์ที่สุดของเมียนมาร์",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>ค้นพบสมบัติของเมียนมาร์</h2>
              <span className={styles.titleBorder}></span>
              <p>
                จากวัดโบราณไปจนถึงชายหาดที่บริสุทธิ์ เมียนมาร์มอบประสบการณ์ที่หลากหลายให้กับนักเดินทางทุกคน ค้นพบจุดหมายปลายทางที่โดดเด่นของเรา
              </p>
            </div>
          </div>
        </div>
        <div className={`row ${styles.cardGrid}`}>
          {places.map((place) => (
            <div className="col-lg-4 col-md-6 col-sm-8 " key={place.title}>
              <div className={styles.exploreItem}>
                <div className={styles.exploreThumb}>
                  <Image src={place.img} alt={place.alt} width={600} height={250} />
                  <div className={styles.exploreOverlay}>
                    <div className={styles.exploreOverlayThumb}>
                      <Image src={place.img} alt={place.alt} width={800} height={600} />
                    </div>
                  </div>
                </div>
                <div className={styles.exploreContent}>
                  <h3 className={styles.title}>{place.title}</h3>
                  <p>{place.desc}</p>
                </div>
                <div className={styles.exploreOverlay}>
                  <div className={styles.exploreOverlayThumb}>
                    <Image src={place.img} alt={place.alt} width={800} height={600} />
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

