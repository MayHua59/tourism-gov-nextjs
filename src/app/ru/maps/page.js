import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Maps.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "Карты",
  description: "Скачиваемые региональные и тематические карты для туризма в Мьянме."
};

export default function Maps() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/65.jpg"
        altText="maps cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Главная", href: "/ru", icon: faHome },
          { label: "Карты", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Карты</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                  <Image
                  src="/assets/images/pdf-images/Nay Pyi Taw_Map.JPG"
                  alt="Nay Pyi Taw Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                < h4  className={styles.pdfTitle}>Nay Pyi Taw Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MRA4M749KQNMWGF9X8QGVB.pdf"
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
                  src="/assets/images/pdf-images/Bagan_Map.JPG"
                  alt="Bagan Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Bagan Map </h4>
                <br/><br/>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR4CDER0E3YBFC7QK81MYZ.pdf"
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
                  src="/assets/images/pdf-images/Myanmar_Map.JPG"
                  alt="Myanmar Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Myanmar Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR9CFXCAP4F9Q8WTRYH95X.pdf"
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
                  src="/assets/images/pdf-images/Myanma Map Russia Ver_Map.JPG"
                  alt="Myanmar Map (Russia version)"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Myanmar Map (Russia version)</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR8M14ZFNH7MMGKBZK8W4R.pdf"
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
                  src="/assets/images/pdf-images/Kayah_Map.JPG"
                  alt="Kayah Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Kayah Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR5GT21ST0K4CEH2CKHGAW.pdf"
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
                  src="/assets/images/pdf-images/Kayin_Map.JPG"
                  alt="Kayin Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Kayin Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR6AKX3PJQ7V8TE7S6886H.pdf"
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
                  src="/assets/images/pdf-images/Kyaing Tong_Map.JPG"
                  alt="Kyaing Tong Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Kyaing Tong Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR71AN3FY9MJ5WCPA6D8YK.pdf"
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
                  src="/assets/images/pdf-images/Mon_Map.JPG"
                  alt="Mon Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Mon Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR7W52CPNQA6Q1W438TZ7F.pdf"
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
                  src="/assets/images/pdf-images/Shan_Map.JPG"
                  alt="Shan Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Shan Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MRBG4MF9WSZ0NPPB0BB91H.pdf"
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
                  src="/assets/images/pdf-images/Chin_Map.JPG"
                  alt="Chin Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>Chin Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MR4X1TAP74QDB6NT0GS109.pdf"
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
                  src="/assets/images/pdf-images/Rakhine_Map.JPG"
                  alt="Rakhine Map"
                  className={styles.publicationImage}
                  width={180}
                  height={250}
                  style={{ height: "auto" }}
                />
                <h4  className={styles.pdfTitle}>Rakhine Map</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MRAW21YCWKEDXVWMFK20JB.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Скачать PDF
                </a>
              </div>
            </div>
            
            
            {/* Add more publication cards here */}
          </div>
        </section>
      </div>
    </div>
  );
}