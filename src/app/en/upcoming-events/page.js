import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./UpcomingEvents.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fetchUpcomingEventsList } from "../../../lib/api/upcoming-event";

export const metadata = {
  title: "Upcoming Events",
  description: "Discover upcoming events and festivals in Myanmar."
};

export default async function UpcomingEvents() {
  let events_list = [];
  let error = null;
  try {
    events_list = await fetchUpcomingEventsList();
    if (!events_list || events_list.length === 0) {
      error = "There are no upcoming events at this time.";
    }
  } catch (err) {
    error = "There was a problem loading upcoming events. Please try again later.";
  }

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
        {error ? (
          <div className={styles.errorMessage}>{error}</div>
        ) : (
          <div className={styles.eventsList}>
            {events_list.map((event) => (
              <div className={styles.eventCard} key={event.slug}>
                <a href={`/en/upcoming-events/${event.slug}`} className={styles.eventLink}>
                  <div className={styles.coverWrapper}>
                    <img
                      src={event.cover_photo}
                      alt={event.name}
                      className={styles.eventCover}
                    />
                  </div>
                  <div className={styles.eventContent}>
                    <h2 className={styles.eventTitle}>{event.name}</h2>
                    <div className={styles.eventMeta}>
                      <span className={styles.eventTimestamp}>
                        {new Date(event.timestamp).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className={styles.eventDesc}>{event.description}</p>
                    <div className={styles.readMoreWrapper}>
                      <span className={styles.readMoreBtn}>Read More</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}