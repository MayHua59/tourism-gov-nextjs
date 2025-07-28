import { notFound } from "next/navigation";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./AnnouncementDetail.module.css";
import { faHome, faBullhorn, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchAnnouncementDetail } from "../../../../lib/api/announcement";

export async function generateMetadata({ params }) {
  try {
    const announcement = await fetchAnnouncementDetail(params.slug);
    if (!announcement) return {};
    return {
      title: announcement.name,
      description: announcement.description
    };
  } catch {
    return {};
  }
}

export default async function AnnouncementDetail({ params }) {
  let announcement = null;
  let error = null;

  try {
    announcement = await fetchAnnouncementDetail(params.slug);
  } catch (e) {
    error = "Sorry, we couldn't load this announcement item. Please try again later.";
  }

  if (!announcement && !error) return notFound();

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/1.jpg"
        altText="announcements cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ကြေငြာချက်များ", href: "/mm/announcements", icon: faBullhorn },
          { label: announcement && announcement.name, active: true }
        ]}
      />
      <div className={styles.container}>
        {error ? (
          <div className="errorMessage">{error}</div>
        ) : (
          <div className={styles.govtCard}>
            <h1 className={styles.govtTitle}>{announcement.name}</h1>
            <div className={styles.govtMeta}>
              <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
              <span>
                <strong>Published on:</strong>{" "}
                {new Date(announcement.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {announcement.category?.name && (
                <span className={styles.govtCategory}>
                  {" | "}Category: {announcement.category.name}
                </span>
              )}
            </div>
            <div className={styles.govtImageWrapper}>
              <img
                src={announcement.cover_photo}
                
                alt={announcement.name}
                className={styles.govtImage}
              />
            </div>
            <div
              className={styles.govtDesc}
              dangerouslySetInnerHTML={{ __html: announcement.description }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}