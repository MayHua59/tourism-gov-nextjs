import { notFound } from "next/navigation";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./AnnouncementDetail.module.css";
import { faHome, faBullhorn, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchAnnouncementDetail } from "../../../../lib/api/announcement";

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

export async function generateMetadata({ params }) {
  params = await params;
  try {
    const news = await fetchNewsDetail(params.slug);
    if (!news) return {};
    return {
      title: news.name,
      description: news.description
    };
  } catch {
    return {};
  }
}

export default async function AnnouncementDetail({ params }) {
  params = await params;
  let announcement = null;
  let error = null;
  // const announcement = announcements_list.find(a => a.slug === params.slug);

  try {
      news = await fetchAnnouncementDetail(params.slug);
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
          { label: "Home", href: "/", icon: faHome },
          { label: "Announcements", href: "/en/announcements", icon: faBullhorn },
          { label: announcement && announcement.name, active: true }
        ]}
      />
      <div className={styles.container}>
        {
          error ? (
             <div className="errorMessage">{error}</div>
          ) : (
            <div className={styles.govtCard}>
          <h1 className={styles.govtTitle}>{announcement.name}</h1>
          <div className={styles.govtMeta}>
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
            <span>
              <strong>Published on:</strong>{" "}
              {new Date(announcement.timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className={styles.govtImageWrapper}>
            <img
              src={announcement.cover_photo}
              alt={announcement.name}
              className={styles.govtImage}
            />
          </div>
          <div className={styles.govtDesc}>
            {announcement.description}
          </div>
        </div>
          )
        }
      </div>
    </div>
  );
}