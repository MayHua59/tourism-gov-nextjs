import { notFound } from "next/navigation";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./NewsDetail.module.css";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const news_list = [
  {
    name: "Myanmar Welcomes Record Number of Tourists in 2025",
    slug: "myanmar-welcomes-record-number-of-tourists-2025",
    description: "Myanmar's tourism industry sees an unprecedented surge in international visitors during the first half of 2025.",
    cover_photo: "/assets/images/news/news1.jpg",
    news_category_id: 1,
    active: true,
    timestamp: "2025-07-01T10:30:00Z"
  },
  {
    name: "Eco-Tourism Projects Launched in Inle Lake",
    slug: "eco-tourism-projects-inle-lake",
    description: "New eco-friendly initiatives aim to preserve Inle Lake's natural beauty while boosting local economies.",
    cover_photo: "/assets/images/news/news2.jpg",
    news_category_id: 2,
    active: true,
    timestamp: "2025-06-25T09:00:00Z"
  },
  {
    name: "Yangon Hosts ASEAN Tourism Forum",
    slug: "yangon-hosts-asean-tourism-forum",
    description: "Leaders from ASEAN countries gather in Yangon to discuss regional tourism strategies.",
    cover_photo: "/assets/images/news/news3.jpg",
    news_category_id: 3,
    active: true,
    timestamp: "2025-06-10T15:15:00Z"
  },
  {
    name: "New Hospitality Training Centers Announced",
    slug: "new-hospitality-training-centers-announced",
    description: "The Ministry of Hotels and Tourism announces new training centers to enhance skills in hospitality across the country.",
    cover_photo: "/assets/images/news/news4.jpg",
    news_category_id: 4,
    active: true,
    timestamp: "2025-06-05T08:45:00Z"
  }
];

export async function generateMetadata({ params }) {
  const news = news_list.find(n => n.slug === params.slug);
  if (!news) return {};
  return {
    title: news.name,
    description: news.description
  };
}

export default function NewsDetail({ params }) {
  const news = news_list.find(n => n.slug === params.slug);

  if (!news) return notFound();

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/14.jpg"
        altText="news cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "News", href: "/en/news" },
          { label: news.name, active: true }
        ]}
      />
      <div className={styles.container}>
        <div className={styles.govtCard}>
          <h1 className={styles.govtTitle}>{news.name}</h1>
          <div className={styles.govtMeta}>
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
            <span>
              <strong>Published on:</strong>{" "}
              {new Date(news.timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className={styles.govtImageWrapper}>
            <img
              src={news.cover_photo}
              alt={news.name}
              className={styles.govtImage}
            />
          </div>
          <div className={styles.govtDesc}>
            {news.description}
          </div>
        </div>
      </div>
    </div>
  );
}