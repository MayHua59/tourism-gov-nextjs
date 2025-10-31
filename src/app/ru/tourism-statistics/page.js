import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
// import styles from "./TourismStatistics.module.css";
import styles from "@/app/en/tourism-statistics/TourismStatistics.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "Статистика туризма",
  description: "Ежегодные публикации статистики туризма в Мьянме."
};

export default function TourismStatistics() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/50.jpg"
        altText="tourism statistics cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Главная", href: "/ru", icon: faHome },
          { label: "Статистика туризма", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Статистика туризма</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
                  src="/assets/images/pdf-images/Tourism Statistics 2024.JPG"
                  alt="Tourism Statistics 2024"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                  unoptimized
                />
                <h4>Tourism Statistics 2024</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JN1S9A1XZRKVM1Z22Q2TND.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Скачать PDF
                </a>
              </div>
            </div>
             <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
                  src="/assets/images/pdf-images/Tourism Statistics 2023.JPG"
                  alt="Tourism Statistics 2023"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                  unoptimized
                />
                <h4>Tourism Statistics 2023</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JN11RKJF8HZHDBDKVGVM4Q.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Скачать PDF
                </a>
              </div>
            </div>
             <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
                  src="/assets/images/pdf-images/Tourism Statistcs 2022.JPG"
                  alt="Tourism Statistics 2022"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                  unoptimized
                />
                <h4>Tourism Statistics 2022</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MSEAG2EHE0AMQM5C54YFV5.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Скачать PDF
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
                  src="/assets/images/pdf-images/Tourism Statistics 2021.JPG"
                  alt="Tourism Statistics 2021"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                  unoptimized
                />
                <h4>Tourism Statistics 2021</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JMZBKE1BX0SS5HJ1GJ5J0T.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Скачать PDF
                </a>
              </div>
            </div>
           
           
            
            
          </div>
        </section>
      </div>
    </div>
  );
}