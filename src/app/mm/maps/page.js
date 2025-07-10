import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Maps.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Maps",
  description: "Download regional and thematic maps of Myanmar for tourism."
};

export default function Maps() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-mm-title/19.jpg"
        altText="maps cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Maps", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Maps</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <img
                  src="/assets/images/pdf-images/Chin_Map.JPG"
                  alt="Chin Map"
                  className={styles.publicationImage}
                />
                <h4 className={styles.pdfTitle}>Chin Map</h4>
                <a
                  href="/assets/pdf/Chin Map.pdf"
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
                  src="/assets/images/pdf-images/Kayah_Map.JPG"
                  alt="Kayah Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Kayah Map</h4>
                <a
                  href="/assets/pdf/Kayah Map.pdf"
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
                  src="/assets/images/pdf-images/Kayin_Map.JPG"
                  alt="Kayin Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Kayin Map</h4>
                <a
                  href="/assets/pdf/Kayin Map.pdf"
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
                  src="/assets/images/pdf-images/Kyaing Tong_Map.JPG"
                  alt="Kyaing Tong Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Kyaing Tong Map</h4>
                <a
                  href="/assets/pdf/Kyaing Tong Map.pdf"
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
                  src="/assets/images/pdf-images/Mon_Map.JPG"
                  alt="Mon Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Mon Map</h4>
                <a
                  href="/assets/pdf/Mon Map.pdf"
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
                  src="/assets/images/pdf-images/Myanma Map Russia Ver_Map.JPG"
                  alt="Myanmar Map (Russia version)"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Myanmar Map (Russia version)</h4>
                <a
                  href="/assets/pdf/Myanma Map Russia Version.pdf"
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
                  src="/assets/images/pdf-images/Myanmar_Map.JPG"
                  alt="Myanmar Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Myanmar Map</h4>
                <a
                  href="/assets/pdf/Myanmar Map.pdf"
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
                  src="/assets/images/pdf-images/Nay Pyi Taw_Map.JPG"
                  alt="Nay Pyi Taw Map"
                  className={styles.publicationImage}
                />
                < h4  className={styles.pdfTitle}>Nay Pyi Taw Map</h4>
                <a
                  href="/assets/pdf/Nay Pyi Taw Map.pdf"
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
                  src="/assets/images/pdf-images/Rakhine_Map.JPG"
                  alt="Rakhine Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Rakhine Map</h4>
                <a
                  href="/assets/pdf/Rakhine Map.pdf"
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
                  src="/assets/images/pdf-images/Shan_Map.JPG"
                  alt="Shan Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Shan Map</h4>
                <a
                  href="/assets/pdf/Shan Map.pdf"
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
                  src="/assets/images/pdf-images/Bagan_Map.JPG"
                  alt="Bagan Map"
                  className={styles.publicationImage}
                />
                <h4  className={styles.pdfTitle}>Bagan Map</h4>
                <a
                  href="/assets/pdf/Bagan Map 2025.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  Download PDF
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