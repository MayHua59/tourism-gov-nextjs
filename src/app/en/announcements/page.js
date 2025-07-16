"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Announcements.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fetchAnnouncementList } from "../../../lib/api/announcement";

// export const metadata = {
//   title: "Announcements",
//   description: "Official announcements from Myanmar tourism and government authorities."
// };

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [meta, setMeta] = useState({ current_page: 1, per_page: 20, total: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPage = async (page) => {
    setLoading(true);
    setError("");
    try {
      const result = await fetchAnnouncementList(page, meta.per_page);
      setAnnouncements(result.data);
      setMeta(result.meta);
    } catch (err) {
      setError("Failed to load announcements");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPage(meta.current_page);
    // eslint-disable-next-line
  }, []);

  const handlePageChange = (page) => {
    fetchPage(page);
  };

  const totalPages = Math.ceil(meta.total / meta.per_page);

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/1.jpg"
        altText="announcements cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Announcements", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Announcements</h1>
        {loading && <div>Loading...</div>}
        {error && <div className="errorMessage">{error}</div>}
        <div className={styles.announcementsList}>
          {announcements.map((a) => (
            <div className={styles.announcementCard} key={a.slug}>
              <Link href={`/en/announcements/${a.slug}`} className={styles.announcementLink}>
                <div className={styles.coverWrapper}>
                  <img
                    src="https://www.anywhere.com/img-a/attraction/shwedagon-pagoda-buddhist-site-myanmar/Shwedagon-WebRes10-jpg"
                    //{a.cover_photo}
                    alt={a.name}
                    className={styles.announcementCover}
                  />
                </div>
                <div className={styles.announcementContent}>
                  <h2 className={styles.announcementTitle}>{a.name}</h2>
                  <div className={styles.announcementMeta}>
                    <span className={styles.announcementTimestamp}>
                      {new Date(a.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <p
                    className={styles.announcementDesc}
                    dangerouslySetInnerHTML={{ __html: a.description }}
                  ></p>
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