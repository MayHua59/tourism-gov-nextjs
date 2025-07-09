import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./News.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

// Dummy data for news list
const news_list = [
  {
    name: "Myanmar participates in Russia's 5th “Let's Travel!” International Travel Forum opening event",
    slug: "myanmar-participates-international-travel-forum-opening-event",
    description: "MYANMAR delegation led by Union Minister for Hotels andTourism U Kyaw Soe Win attended...",
    cover_photo: "/assets/images/news-images/russia.jpg",
    news_category_id: 1,
    active: true,
    timestamp: "2025-06-11T10:30:00Z"
  },
  {
    name: "Homes for flood victims handed over",
    slug: "homes-for-flood-victims-handed-over",
    description: "UNION Minister for Hotels and Tourism U Kyaw Soe Win, accompanied by relevant officials, attended the handover...",
    cover_photo: "/assets/images/news-images/moht.jpg",
    news_category_id: 2,
    active: true,
    timestamp: "2025-05-04T09:00:00Z"
  }
];

export const metadata = {
  title: "News",
  description: "Latest news and updates on Myanmar tourism, investment, and travel."
};

export default function News() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/14.jpg"
        altText="news cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "News", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>News</h1>
        <div className={styles.newsList}>
          {news_list.map((news) => (
            <div className={styles.newsCard} key={news.slug}>
              <a href={`/en/news/${news.slug}`} className={styles.newsLink}>
                <div className={styles.coverWrapper}>
                  <img
                    src={news.cover_photo}
                    alt={news.name}
                    className={styles.newsCover}
                  />
                </div>
                <div className={styles.newsContent}>
                  <div className={styles.newsMeta}>
                   <span className={styles.newsPublished}>
                      <FontAwesomeIcon icon={faCalendar} className={styles.calendarIcon} />
                      {new Date(news.timestamp).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className={styles.newsTitle}>{news.name}</h2>
                  
                  <p className={styles.newsDesc}>{news.description}</p>
                  <div className={styles.readMoreWrapper}>
                    <span className={styles.readMoreBtn}>Read More</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}