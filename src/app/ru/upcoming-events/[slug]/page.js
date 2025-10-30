import { notFound } from "next/navigation";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./UpcomingEventDetail.module.css";
import { faHome, faCalendarAlt, faCalendarCheck,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchUpcomingEventDetail } from "../../../../lib/api/upcoming-event";
import AttachmentTable from "@/components/AttachmentTable";

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
        imageUrl="/assets/images/cover-images/60.jpg"
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
                    <span className={styles.eventLocation}>
    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
    {event.event_location}
  </span>
                  </div>
            <div className={styles.govtImageWrapper}>
              <img
                src={event.cover_photo}
                alt={event.name}
                className={styles.govtImage}
              />
            </div>
            <div className={styles.govtDesc}>
             <p
className={styles.newsDesc}
dangerouslySetInnerHTML={{ __html: event.description }}
></p>
            </div>
          </div>
        )}

{event && event.attachments && event.attachments.length > 0 && (
                          <AttachmentTable attachments={event.attachments} />
                        )}
      </div>
    </div>
  );
}