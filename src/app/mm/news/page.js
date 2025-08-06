"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./News.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fetchNewsList } from "../../../lib/api/news";

// Dummy data for news list
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

// export const metadata = {
//   title: "News",
//   description: "Latest news and updates on Myanmar tourism, investment, and travel."
// };

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [meta, setMeta] = useState({ current_page: 1, per_page: 20, total: 0 });
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

     const fetchPage = async (page) => {
    setLoading(true);
    setError("");
    try {
      const result = await fetchNewsList(page, meta.per_page);
      setNewsList(result.data);
     
      setMeta(prevMeta => ({
        ...prevMeta,
        ...result.meta, 
        current_page: page 
      }));

    } catch (err) {
      console.error("Error fetching news:", err); 
      setError("Failed to load news. Please try again later.");
    }
    setLoading(false);
  };

    useEffect(() => {
   
    fetchPage(1); 
  }, []); 
    const handlePageChange = (page) => {
    
    if (page !== meta.current_page) {
      fetchPage(page);
    }
  };
  const totalPages = Math.ceil(meta.total / meta.per_page);
    const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...'; 
  }
  return description;
};
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-mm-title/1.jpg"
        altText="news cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "သတင်းများ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>သတင်းများ</h1>
        <div className={styles.newsList}>
          {news_list.map((news) => (
            <div className={styles.newsCard} key={news.slug}>
              <a href={`/en/news/${news.slug}`} className={styles.newsLink}>
                <div className={styles.coverWrapper}>
                  <img
                    src={"/assets/images/cover-images/bagan.jpg"}
                    alt={news.name}
                    className={styles.newsCover}
                  />
                </div>
                <div className={styles.newsContent}>
                  <h2 className={styles.newsTitle}>{news.name}</h2>
                  <div className={styles.newsMeta}>
                    <span className={styles.newsTimestamp}>
                      {new Date(news.timestamp).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
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