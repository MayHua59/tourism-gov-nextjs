"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./UpcomingEvents.module.css";
import { faHome, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { fetchUpcomingEventsList } from "../../../lib/api/upcoming-event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const metadata = {
//   title: "Upcoming Events",
//   description: "Discover upcoming events and festivals in Myanmar."
// };

export default function UpcomingEvents() {
  const [eventsList, setEventsList] = useState([]);
  const [meta, setMeta] = useState({ current_page: 1, per_page: 20, total: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPage = async (page) => {
      setLoading(true);
      setError("");
      try {
        const result = await fetchUpcomingEventsList(page, meta.per_page);
        setEventsList(result.data);
        // Ensure the meta object is always updated, even if current_page is the same.
        // This is crucial for React to acknowledge a state change and re-render if necessary.
        setMeta(prevMeta => ({
          ...prevMeta,
          ...result.meta, // Use the meta returned from the API
          current_page: page // Explicitly set the current_page to the page that was fetched
        }));
  
      } catch (err) {
        console.error("Error fetching upcoming events:", err); // Log the actual error for debugging
        setError("Failed to load upcoming events. Please try again later.");
      }
      setLoading(false);
    };

   useEffect(() => {
    // On initial mount, fetch the first page.
    // The dependency array is empty, so this runs only once.
    fetchPage(1); // Explicitly fetch page 1
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageChange = (page) => {
    fetchPage(page);
  };

  const totalPages = Math.ceil(meta.total / meta.per_page);
 const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/12.jpg"
        altText="upcoming events cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/en/", icon: faHome },
          { label: "Upcoming Events", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Upcoming Events</h1>
        {loading && <div className={styles.loadingMessage}>Loading upcoming events...</div>}
        {error && <div className={styles.errorMessage}>{error}</div>}
        {!loading && eventsList.length === 0 && !error && (
          <div className={styles.noEventsMessage}>No upcoming events found.</div>
        )}
        <div className={styles.eventsList}>
          {eventsList.map((event) => (
            <div className={styles.eventCard} key={event.slug}>
              <Link href={`/en/upcoming-events/${event.slug}`} className={styles.eventLink}>
                <div className={styles.coverWrapper}>
                  <img
                    src="https://cdn.digitalagencybangkok.com/file/client-cdn/gnlm/wp-content/uploads/2024/11/photo_2024-11-07_17-57-15.jpg"
                    alt={event.name}
                    className={styles.eventCover}
                  />
                </div>
                <div className={styles.eventContent}>
                  <h2 className={styles.eventTitle}>{event.name}</h2>
                  <div className={styles.eventMeta}>
                    <span className={styles.eventTimestamp}>
                      <FontAwesomeIcon icon={faCalendar} className={styles.calendarIcon} />
                      {formatDate(event.event_start_date)} - {formatDate(event.event_end_date)}
                    </span>
                  </div>
                  <p className={styles.eventDesc}>{event.description}</p>
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