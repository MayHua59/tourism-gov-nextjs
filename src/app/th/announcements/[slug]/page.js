import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./AnnouncementDetail.module.css";
import { faHome, faBullhorn, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchAnnouncementDetail } from "../../../../lib/api/announcement";
import AttachmentTable from "@/components/AttachmentTable";

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
    redirect('/th/announcements');
  }

  if (!announcement && !error) return notFound();

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/14.jpg"
        altText="announcements cover photo"
      />
      <Breadcrumb
        items={[
          { label: "หน้าแรก", href: "/th", icon: faHome },
          { label: "ประกาศ", href: "/th/announcements", icon: faBullhorn },
          { label: "...", active: true }
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
                <strong>อัพเดทเมื่อ:</strong>{" "}
                {new Date(announcement.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {announcement.category?.name && (
                <span className={styles.govtCategory}>
                  {" | "}หมวดหมู่: {announcement.category.name}
                </span>
              )}
            </div>
            {announcement.cover_photo && (
  <div className={styles.govtImageWrapper}>
    <Image
      src={announcement.cover_photo}
      alt={announcement.name}
      className={styles.govtImage}
      width={1200}
      height={600}
    />
  </div>
)}
            {announcement.description && (
  <div
    className={styles.govtDesc}
    dangerouslySetInnerHTML={{ __html: announcement.description }}
  ></div>
)}
          </div>
        )}

            {announcement.attachments && announcement.attachments.length > 0 && (
                  <AttachmentTable attachments={announcement.attachments} />
                )}
      </div>
    </div>
  );
}

