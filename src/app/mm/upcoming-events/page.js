"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./UpcomingEvents.module.css";
import { faHome, faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { fetchUpcomingEventsList } from "../../../lib/api/mm-site/upcoming-event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../../components/Loading";
import Marquee from '@/components/eng/Marquee';
import Countdown from '@/components/eng/Countdown';

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
   const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...'; 
  }
  return description;
};
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/61.jpg"
        altText="upcoming events cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ကျင်းပမည့်ပွဲနှင့်အခမ်းအနားများ", active: true }
        ]}
      />
           <Marquee speed={10} direction="left">
      ၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့

(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့) &nbsp;&nbsp;&nbsp;&nbsp;၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့

(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့) &nbsp;&nbsp;&nbsp;&nbsp;၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့

(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့)
    </Marquee>
     <Countdown
      end="2025-09-27T09:30:00"
      message="၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့"
slogan="(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့)"
dateText="၂၇-၉-၂၀၂၅"
      logo="/assets/images/logo-images/world-tourism-day.png"
      finishedMessage="The event has started!"
    />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ကျင်းပမည့်ပွဲနှင့်အခမ်းအနားများ</h1>
        {loading && <Loading  size="large" />}
        {error && <div className={styles.errorMessage}>{error}</div>}
        {!loading && eventsList.length === 0 && !error && (
          <div className={styles.noEventsMessage}>No upcoming events found.</div>
        )}
        <div className={styles.eventsList}>
          {eventsList.map((event) => (
            <div className={styles.eventCard} key={event.slug}>
              <Link href={`/mm/upcoming-events/${event.slug}`} className={styles.eventLink}>
                {event.cover_photo ? (
  <div className={styles.coverWrapper}>
    <img
      src={event.cover_photo}
      alt={event.name}
      className={styles.eventCover}
    />
  </div>
) : null}
                <div
  className={
    event.cover_photo
      ? styles.eventContent
      : `${styles.eventContent} ${styles.fullWidthContent}`
  }
>
  <h2 className={styles.eventTitle}>{event.name}</h2>
  <div className={styles.eventMeta}>
    <span className={styles.eventTimestamp}>
      <FontAwesomeIcon icon={faCalendar} className={styles.calendarIcon} />
      {formatDate(event.event_start_date)} - {formatDate(event.event_end_date)}
    </span>
      {event.event_location && <span className={styles.eventLocation}>
    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
    {event.event_location}
  </span>}
  </div>
  <p
    className={styles.eventDesc}
    dangerouslySetInnerHTML={{ __html: truncateDescription(event.description, 150) }}
  ></p>
  <div className={styles.readMoreWrapper}>
    <span className={styles.readMoreBtn}>ဆက်လက်ဖတ်ရှုရန်</span>
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