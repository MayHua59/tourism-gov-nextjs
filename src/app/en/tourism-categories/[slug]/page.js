import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
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

export default async function TourismCategoryPage({ params }) {
  const { slug } = params;
  const data = await fetchTourismDetail(slug);

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
          <div className={styles.tourismList}>
            {data.tourisms && data.tourisms.length > 0 ? (
              data.tourisms.map((item, idx) => (
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
                  <div className={styles.tourismCardContent}>
                    <h4 className={styles.tourismTitle}>{item.name}</h4>
                    <div
                      className={styles.tourismDesc}
                      dangerouslySetInnerHTML={{ __html: item.description || "" }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noTourism}>No tourism sites found.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}