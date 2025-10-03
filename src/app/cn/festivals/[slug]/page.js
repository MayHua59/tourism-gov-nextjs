import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "./FestivalDetail.module.css";
import { faHome, faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchFestivalDetail } from "@/lib/api/festival";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  // await params before using its properties
  const { slug } = await params;
  const festival = await fetchFestivalDetail(slug);
  if (!festival) return {};
  return {
    title: festival.name,
    description: festival.description,
  };
}

export default async function FestivalDetailPage({ params }) {
  const { slug } = await params; // await params here as well
  const festival = await fetchFestivalDetail(slug);

  if (!festival) {
    // optional: show 404 page
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/34.jpg"
        altText={festival.name}
      />
      <Breadcrumb
        items={[
          { label: "首页", href: "/cn", icon: faHome },
          { label: "Festivals", href: "/cn/festivals" },
          { label: festival.name, active: true },
        ]}
      />
      <div className={styles.container}>
        <div className={styles.festivalDetailCard}>
          <h1 className={styles.festivalTitle}>{festival.name}</h1>
          <div className={styles.festivalMeta}>
            <span className={styles.festivalDate}>
              <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
              <strong>月份:</strong> {festival.month || "N/A"}
              {festival.start_date && festival.end_date
                ? ` | ${new Date(festival.start_date).toLocaleDateString()} - ${new Date(festival.end_date).toLocaleDateString()}`
                : ""}
            </span>
            {festival.region && (
              <span>
                {" | "}
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 4 }} />
                {festival.region.name}
              </span>
            )}
          </div>
          <div className={styles.festivalImageWrapper} style={{ marginBottom: 18 }}>
            <img
              src={festival.cover_photo}
              alt={festival.name}
              className={styles.festivalImg}
            />
          </div>
          <div className={styles.festivalDesc}>
            <span dangerouslySetInnerHTML={{ __html: festival.description || "" }} />
          </div>
          {festival.gallery && festival.gallery.length > 0 && (
            <div className={styles.festivalGallery} style={{ marginTop: 18 }}>
              {festival.gallery.map((imgUrl, idx) => (
                <img
                  key={imgUrl}
                  src={imgUrl}
                  alt={`Gallery image ${idx + 1}`}
                  className={styles.festivalGalleryImg}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}