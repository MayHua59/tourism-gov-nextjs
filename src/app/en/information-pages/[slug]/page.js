import { fetchInformationPageDetail } from "@/lib/api/information-page";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from './InformationPages.module.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";

export async function generateMetadata({ params }) {
    const { slug } = params;
    try {
        const data = await fetchInformationPageDetail(slug);
        return {
            title: data.name,
           
        };
    } catch (error) {
        console.error("Metadata fetch error:", error);
        return {
            title: "Information Page",
            
        };
    }
}

export default async function InformationPage({ params }) {
    const { slug } = params;
    let data;
    try {
        data = await fetchInformationPageDetail(slug);
    } catch (error) {
        return <div className="container py-5 text-danger">Failed to load page.</div>;
    }

    return (

        <div className={styles.pageContainer}>
            {data.cover_photo && <BannerSection
                imageUrl={data.cover_photo || "/assets/images/cover-images/9.jpg"}
                altText={data.name}
            />}
            <Breadcrumb
                items={[
                    { label: "Home", href: "/", icon: faHome },
                    { label: data.name, active: true }
                ]}
            />
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>{data.name}</h1>
                <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
                {data.gallery && data.gallery.length > 0 && (
  <div className={styles.galleryGrid}>
    {data.gallery.map((img, idx) => (
      <div className={styles.galleryItem} key={idx}>
        <Image
          src={`https://admin.tourism.gov.mm/storage/${img}`}
          alt={`Gallery ${idx + 1}`}
          width={400}
          height={250}
          className={styles.galleryImg}
        />
      </div>
    ))}
  </div>
)}
            </div>





        </div>
    )
}