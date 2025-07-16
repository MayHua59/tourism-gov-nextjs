import { notFound } from "next/navigation";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./UpcomingEventDetail.module.css";
import { faHome, faCalendarAlt, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchUpcomingEventDetail } from "../../../../lib/api/upcoming-event";

export async function generateMetadata({ params }) {
  params = await params;
  try {
    const event = await fetchUpcomingEventDetail(params.slug);
    if (!event) return {};
    return {
      title: event.name,
      description: event.description
    };
  } catch {
    return {};
  }
}

export default async function UpcomingEventDetail({ params }) {
  params = await params;
  let event = null;
  let error = null;

  try {
    event = await fetchUpcomingEventDetail(params.slug);
  } catch (e) {
    error = "Sorry, we couldn't load this event. Please try again later.";
  }

  if (!event && !error) return notFound();

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
          { label: "Upcoming Events", href: "/en/upcoming-events", icon: faCalendarCheck },
          { label: event && event.name, active: true }
        ]}
      />
      <div className={styles.container}>
        {error ? (
          <div className={styles.errorMessage}>{error}</div>
        ) : (
          <div className={styles.govtCard}>
            <h1 className={styles.govtTitle}>{event.name}</h1>
            
            <div className={styles.govtMeta}>
                    <span className={styles.eventTimestamp}>
                      <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
                      {formatDate(event.event_start_date)} - {formatDate(event.event_end_date)}
                    </span>
                  </div>
            <div className={styles.govtImageWrapper}>
              <img
                src="https://www.thehiplife.asia/wp-content/uploads/2024/10/34e481a910e3d47cbe66535490158a80-1.jpg"
                alt={event.name}
                className={styles.govtImage}
              />
            </div>
            <div className={styles.govtDesc}>
              {event.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}