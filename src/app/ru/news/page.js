"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./News.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { fetchNewsList } from "../../../lib/api/news";
import Loading from "../../../components/Loading";

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
        imageUrl="/assets/images/cover-images/35.jpg"
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
        {loading && <Loading message="Fetching the latest news..." size="large" />}
        {error && <div className="errorMessage">{error}</div>} 
        {!loading && newsList.length === 0 && !error && (
            <div className={styles.noNewsMessage}></div>
        )}
        <div className={styles.newsList}>
          {newsList.map((news) => (
            <div className={styles.newsCard} key={news.slug}>
              <Link href={`/en/news/${news.slug}`} className={styles.newsLink}>
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
                      {new Date(news.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className={styles.newsTitle}>{news.name}</h2>
                  
                   <p
  className={styles.newsDesc}
  dangerouslySetInnerHTML={{ __html: truncateDescription(news.description, 150) }} 
></p>
                  <div className={styles.readMoreWrapper}>
                    <span className={styles.readMoreBtn}>Read More</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {totalPages > 1 && ( 
          <div className={styles.pagination}>
           <button
  onClick={() => handlePageChange(meta.current_page - 1)}
  disabled={meta.current_page === 1} 
  className={styles.prevNextBtn}
>
  Prev
</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={meta.current_page === i + 1 ? styles.activePage : ""}
                onClick={() => handlePageChange(i + 1)}
                
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(meta.current_page + 1)}
              disabled={meta.current_page === totalPages}
              className={styles.prevNextBtn}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}