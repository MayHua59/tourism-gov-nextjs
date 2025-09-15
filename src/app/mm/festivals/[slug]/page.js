import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "./FestivalDetail.module.css";
import { faHome, faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchFestivalDetail } from "@/lib/api/mm-site/festival";

export async function generateMetadata({ params }) {
  const festival = await fetchFestivalDetail(params.slug);
  if (!festival) return {};
  return {
    title: festival.name,
    description: festival.description
  };
}

export default async function FestivalDetailPage({ params }) {
  const festival = await fetchFestivalDetail(params.slug);

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl= "/assets/images/cover-images/34.jpg"
        altText={festival.name}
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ဆယ့်နှစ်လရာသီပွဲတော်များ", href: "/mm/festivals" },
          { label: festival.name, active: true },
        ]}
      />
      <div className={styles.container}>
        <div className={styles.festivalDetailCard}>
          <h1 className={styles.festivalTitle}>{festival.name}</h1>
          <div className={styles.festivalMeta}>
           
            <span className={styles.festivalDate}>
                 <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
              <strong>ကျင်းပသောလ:</strong> {festival.month || "N/A"}
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
            <span
              dangerouslySetInnerHTML={{ __html: festival.description || "" }}
            />
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