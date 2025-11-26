import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "Bagan Temple Plains",
    desc:
      "Ngắm nhìn hơn 2,000 ngôi đền cổ xưa phân bố trên đồng cỏ Bagan, một Di sản thế giới của UNESCO được khai thác từ thế kỷ thứ 9.",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "Inle Lake",
    desc:
      "Trải nghiệm văn hóa độc đáo của ngư dân Intha và các làng nổi trên hồ Inle, hồ thứ hai lớn nhất của Myanmar, bao quanh bởi núi.",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "Ngapali Beach",
    title: "Ngapali Beach",
    desc:
      "Thư giãn trên bãi cát trắng tinh khiết dọc bờ biển của Ấn Độ Dương, với cây cối mọc hàng xóm và nước trong xanh trong trẻo. Đây là khu vực lý tưởng cho bơi lội. ",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "Mandalay Region",
    desc:
      "Khám phá trung tâm văn hóa của Myanmar với thủ đô cổ xưa, nghệ thuật truyền thống và cây cầu U Bein đặc biệt.",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "Yangon",
    desc:
      "Khám phá thủ đô quốc gia cũ có kiến trúc cổ điển và đền Tháp Shwedagon vĩ đại.",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "Golden Rock",
    desc:
      "Chứng kiến đá vàng vượt lực hút của Trụi đá tại Kyaiktiyo, một trong những điểm tham quan tôn giáo Buddha lớn nhất của Myanmar.",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Khám phá các di sản Myanmar</h2>
              <span className={styles.titleBorder}></span>
              <p>
                Từ đền cổ xưa đến bãi biển tinh khiết, Myanmar cung cấp nhiều trải nghiệm cho mọi du khách. Khám phá các điểm đặc biệt nổi tiếng của chúng tôi.
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