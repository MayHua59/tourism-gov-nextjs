import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismStatistics.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "ခရီးစဉ်လျှောက်ထားရာတွင်လိုအပ်ချက်များ",
  description: "Annual tourism statistics publications for Myanmar."
};

export default function TourismStatistics() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/17.jpg"
        altText="tourism statistics cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ခရီးစဉ်လျှောက်ထားရာတွင် လိုအပ်ချက်များ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ခရီးစဉ်လျှောက်ထားရာတွင် လိုအပ်ချက်များ</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="https://i.ibb.co/S74GL2cK/viber-image-2025-08-06-16-03-01-010.jpg"
  alt="Tourism Statistics 2021"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
  unoptimized
/>
                <h4>Tourism Statistics 2021</h4>
                <a
                  href="https://drive.google.com/file/d/1mWJRwiGlZQ7SPi3S6eS-8Pv6XvS_E68e/view"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="https://i.ibb.co/FkZtwkxR/viber-image-2025-08-06-16-03-04-085.jpg"
  alt="Tourism Statistics 2022"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
  unoptimized
/>
                <h4>Tourism Statistics 2022</h4>
                <a
                  href="https://drive.google.com/file/d/11zFwo47STn7QhyDIWSJ24W6rt-gxiNis/view"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
               <Image
  src="https://i.ibb.co/rG92rmR5/viber-image-2025-08-06-16-03-02-563.jpg"
  alt="Tourism Statistics 2023"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
  unoptimized
/>
                <h4>Tourism Statistics 2023</h4>
                <a
                  href="https://drive.google.com/file/d/1_hfJkKqAnN0iNUVfs45ElPlcEzKr4z2T/view"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
               <Image
  src="https://i.ibb.co/d0jw5CBM/viber-image-2025-08-06-16-03-03-382.jpg"
  alt="Tourism Statistics 2024"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
  unoptimized
/>
                <h4>Tourism Statistics 2024</h4>
                <a
                  href="https://drive.google.com/file/d/1zgVUkUb3d7MChMYxPbh4P40BhTL8wX6P/view"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Download PDF
                </a>
              </div>
            </div>
            {/* Add more publication cards here as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}