import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Announcements.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fetchAnnouncementList } from "../../../lib/api/announcement";

// Dummy data for announcements list
// const announcements_list = [
//   {
//     name: "Visa Policy Update for International Visitors",
//     slug: "visa-policy-update-international-visitors",
//     description: "Myanmar announces updated visa policies effective August 2025 to enhance the travel experience for foreign visitors.",
//     cover_photo: "/assets/images/announcements/announce1.jpg",
//     news_category_id: 1,
//     active: true,
//     timestamp: "2025-07-05T11:00:00Z"
//   },
//   {
//     name: "Temporary Closure of Some Tourist Sites",
//     slug: "temporary-closure-of-tourist-sites",
//     description: "Certain tourist destinations will be temporarily closed for maintenance and preservation works during July and August 2025.",
//     cover_photo: "/assets/images/announcements/announce2.jpg",
//     news_category_id: 2,
//     active: true,
//     timestamp: "2025-07-02T17:15:00Z"
//   },
//   {
//     name: "Public Health Guidelines for Travelers",
//     slug: "public-health-guidelines-travelers",
//     description: "New health and safety guidelines have been introduced for all travelers arriving in Myanmar.",
//     cover_photo: "/assets/images/announcements/announce3.jpg",
//     news_category_id: 3,
//     active: true,
//     timestamp: "2025-06-28T09:30:00Z"
//   },
//   {
//     name: "Upcoming National Holidays Affecting Tourism Offices",
//     slug: "national-holidays-affecting-tourism-offices",
//     description: "Tourism offices and select services will be closed during upcoming public holidays. Please check schedules before planning your visit.",
//     cover_photo: "/assets/images/announcements/announce4.jpg",
//     news_category_id: 4,
//     active: true,
//     timestamp: "2025-06-20T15:00:00Z"
//   }
// ];

export const metadata = {
  title: "Announcements",
  description: "Official announcements from Myanmar tourism and government authorities."
};

export default async function Announcements() {
  let announcements_list = [];
  let error = null;
    try {
      news_list = await fetchAnnouncementList();
    } catch (err) {
      error = "There is no Announcement";
    }
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
        {error ? (
          <div className="errorMessage">{error}</div>
        ) : (
          <div className={styles.announcementsList}>
          {announcements_list.map((a) => (
            <div className={styles.announcementCard} key={a.slug}>
              <a href={`/en/announcements/${a.slug}`} className={styles.announcementLink}>
                <div className={styles.coverWrapper}>
                  <img
                    src={a.cover_photo}
                    alt={a.name}
                    className={styles.announcementCover}
                  />
                </div>
                <div className={styles.announcementContent}>
                  <h2 className={styles.announcementTitle}>{a.name}</h2>
                  <div className={styles.announcementMeta}>
                    <span className={styles.announcementTimestamp}>
                      {new Date(a.timestamp).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <p className={styles.announcementDesc}>{a.description}</p>
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