import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import ImageCarousel from "@/components/ImageCarousel"; 
import styles from "./TourismCategory.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fetchTourismDetail } from "@/lib/api/tourism";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await fetchTourismDetail(slug);
  return {
    title: data.name || "Tourism Category",
    description: `${data.name || "Tourism Category"} detail page`
  };
}

// Helper function to group by division_name
function groupByDivision(tourisms) {
  return tourisms.reduce((acc, item) => {
    const division = item.division_name || "Other";
    if (!acc[division]) acc[division] = [];
    acc[division].push(item);
    return acc;
  }, {});
}

export default async function TourismCategoryPage({ params }) {
  const { slug } = params;
  const data = await fetchTourismDetail(slug);

  // Group tourisms by division_name
  const groupedTourisms = data.tourisms ? groupByDivision(data.tourisms) : {};

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl={data.cover_photo || "/assets/images/cover-images/17.jpg"}
        altText={data.name}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: data.name, active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{data.name}</h1>
        <section className={styles.mt5}>
          {Object.keys(groupedTourisms).length > 0 ? (
            Object.entries(groupedTourisms).map(([division, items]) => (
              <div key={division} className={styles.divisionSection}>
                <h2 className={styles.divisionTitle}>{division}</h2>
                <div className={styles.tourismList}>
                  {items.map(item => (
                    <div className={styles.tourismCard} key={item.slug}>
                      <div className={styles.tourismCardHeader}>
                        {item.cover_photo && (
                          <img
                            src={item.cover_photo}
                            alt={item.name}
                            className={styles.tourismImg}
                            width={320}
                            height={200}
                            style={{ objectFit: "cover" }}
                          />
                        )}
                      </div>
                      {item.images && item.images.length > 0 ? (
                        <section className={styles.gallerySection}>
                        
                          <div className={styles.galleryGrid}>
                            <div className={styles.galleryCard}>
                              <div className={styles.cardHeader}>
                                <h3 className={styles.galleryItemTitle}>{item.name}</h3>
                              </div>
                              <div className={styles.cardBody}>
                                <div className={styles.carouselWrapper}>
                                  <ImageCarousel images={item.images} />
                                </div>
                                <div
                                  className={styles.galleryDescription}
                                  dangerouslySetInnerHTML={{ __html: item.description || "" }}
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                      ) : (
                        <div className={styles.tourismCardContent}>
                          <h4 className={styles.tourismTitle}>{item.name}</h4>
                          <div
                            className={styles.tourismDesc}
                            dangerouslySetInnerHTML={{ __html: item.description || "" }}
                          />
                          
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
              </div>
            ))
          ) : (
            <div className={styles.noTourism}></div>
          )}
        </section>
      </div>
    </div>
  );
}