import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismStatistics.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
          { label: "မူလစာမျက်နှာ", href: "/", icon: faHome },
          { label: "ခရီးစဉ်လျှောက်ထားရာတွင် လိုအပ်ချက်များ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ခရီးစဉ်လျှောက်ထားရာတွင် လိုအပ်ချက်များ</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <img
                  src="/assets/images/pdf-images/2021.jpg"
                  alt="Tourism Statistics 2021"
                  className={styles.publicationImage}
                />
                <h4>Tourism Statistics 2021</h4>
                <a
                  href="/assets/pdf/Tourism Statistics 2021.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <img
                  src="/assets/images/pdf-images/2022.jpg"
                  alt="Tourism Statistics 2022"
                  className={styles.publicationImage}
                />
                <h4>Tourism Statistics 2022</h4>
                <a
                  href="/assets/pdf/Tourism Statistcs 2022.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <img
                  src="/assets/images/pdf-images/2023.jpg"
                  alt="Tourism Statistics 2023"
                  className={styles.publicationImage}
                />
                <h4>Tourism Statistics 2023</h4>
                <a
                  href="/assets/pdf/Tourism Statistics 2023.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <img
                  src="/assets/images/pdf-images/2024.jpg"
                  alt="Tourism Statistics 2024"
                  className={styles.publicationImage}
                />
                <h4>Tourism Statistics 2024</h4>
                <a
                  href="/assets/pdf/Tourism Statistics 2024.pdf"
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