"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./News.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { fetchNewsList } from "../../../lib/api/news";

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
      // Ensure the meta object is always updated, even if current_page is the same.
      // This is crucial for React to acknowledge a state change and re-render if necessary.
      setMeta(prevMeta => ({
        ...prevMeta,
        ...result.meta, // Use the meta returned from the API
        current_page: page // Explicitly set the current_page to the page that was fetched
      }));

    } catch (err) {
      console.error("Error fetching news:", err); // Log the actual error for debugging
      setError("Failed to load news. Please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    // On initial mount, fetch the first page.
    // The dependency array is empty, so this runs only once.
    fetchPage(1); // Explicitly fetch page 1
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageChange = (page) => {
    // Only fetch if the page is different to avoid unnecessary API calls
    if (page !== meta.current_page) {
      fetchPage(page);
    }
  };

  const totalPages = Math.ceil(meta.total / meta.per_page);

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
        {loading && <div className={styles.loadingMessage}>Loading news...</div>}
        {error && <div className={styles.errorMessage}>{error}</div>} {/* Use styles for error message */}
        {!loading && newsList.length === 0 && !error && (
            <div className={styles.noNewsMessage}>No news found.</div>
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
                      {new Date(news.created_at).toLocaleDateString("en-US", {
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
              </Link>
            </div>
          ))}
        </div>
        {totalPages > 1 && ( // Only show pagination if there's more than 1 page
          <div className={styles.pagination}>
           <button
  onClick={() => handlePageChange(meta.current_page - 1)}
  disabled={meta.current_page === 1} // This is the line that handles disabling
  className={styles.prevNextBtn}
>
  Prev
</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={meta.current_page === i + 1 ? styles.activePage : ""}
                onClick={() => handlePageChange(i + 1)}
                // Disabled attribute should only be used if current page, otherwise clickable.
                // The activePage class already indicates it's the current page.
                // disabled={meta.current_page === i + 1} // Remove this line
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