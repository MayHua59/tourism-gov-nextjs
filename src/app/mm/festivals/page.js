import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Festivals.module.css";
import Link from "next/link";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchFestivalsList } from "@/lib/api/mm-site/festival";

export const metadata = {
  title: "ဆယ့်နှစ်လရာသီပွဲတော်များ",
  description: "Discover Myanmar&apos;s festivals and cultural celebrations.",
};

export default async function FestivalsPage() {
  const { data: festivals } = await fetchFestivalsList();

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/34.jpg"
        altText="festivals cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ဆယ့်နှစ်လရာသီပွဲတော်များ", href: "/mm/festivals", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.festivalTitle}>ဆယ့်နှစ်လရာသီပွဲတော်များ</h1>
        {festivals.length === 0 ? (
          <div className={styles.errorMessage}>
            Sorry, we couldn&apos;t load festival data. Please try again later.
          </div>
        ) : (
          <div className={styles.festivalList}>
            {festivals.map(festival => (
              <Link
                key={festival.slug || festival.id}
                href={`/mm/festivals/${festival.slug || festival.id}`}
                className={styles.festivalCard}
              >
                <div className={styles.festivalImageWrapper}>
                  <img
                    src={festival.cover_photo_url}
                    alt={festival.name}
                    className={styles.festivalImg}
                  />
                </div>
                <div className={styles.festivalInfo}>
                  <h2 className={styles.festivalSubtitle}>{festival.name}</h2>
                  <div className={styles.festivalMeta}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
                    <span>
                      <strong>ကျင်းပသောလ:</strong> {festival.month || "N/A"}
                      {festival.start_date && festival.end_date
                        ? ` | ${new Date(festival.start_date).toLocaleDateString()} - ${new Date(festival.end_date).toLocaleDateString()}`
                        : ""}
                    </span>
                  </div>
                  {/* <div className={styles.festivalDesc}>
                    <span
                      dangerouslySetInnerHTML={{ __html: (festival.description || "").substring(0, 120) + "..." }}
                    />
                  </div> */}
                  {/* {festival.gallery && festival.gallery.length > 0 && (
                    <div className={styles.festivalGallery}>
                      {festival.gallery.slice(0, 2).map((imgUrl, idx) => (
                        <img
                          key={imgUrl}
                          src={imgUrl}
                          alt={`Gallery image ${idx + 1}`}
                          className={styles.festivalGalleryImg}
                        />
                      ))}
                    </div>
                  )} */}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}