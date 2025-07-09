import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Brochures.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Brochures and Pamphlets",
  description: "Downloadable brochures and pamphlets for Myanmar tourism."
};

export default function BrochuresAndPamphlets() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/25.jpg"
        altText="brochures and pamphlets cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Brochures and Pamphlets", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Brochures and Pamphlets</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <img
                  src="/assets/images/pdf-images/Ecotourism.JPG"
                  alt="Ecotourism"
                  className={styles.publicationImage}
                />
                <h4 className={styles.pdfTitle}>Ecotourism</h4>
                <a
                  href="/assets/pdf/Ecotourism.pdf"
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
                  src="/assets/images/pdf-images/Nay Pyi Taw Flyer (Eng QR).JPG"
                  alt="Nay Pyi Taw Flyer (Eng QR)"
                  className={styles.publicationImage}
                />
                <h4 className={styles.pdfTitle}>Nay Pyi Taw Flyer (Eng QR)</h4>
                <a
                  href="/assets/pdf/Nay Pyi Taw Flyer (Eng QR).pdf"
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
                  src="/assets/images/pdf-images/Welcome to the Golden Land (English Version).JPG"
                  alt="Welcome to the Golden Land (English Version)"
                  className={styles.publicationImage}
                />
                <h4 className={styles.pdfTitle}>Welcome to the Golden Land (English Version)</h4>
                <a
                  href="/assets/pdf/Welcome to the Golden Land (English Version).pdf"
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
                  src="/assets/images/pdf-images/Welcome to the Golden Land (China Version).JPG"
                  alt="Welcome to the Golden Land (China Version)"
                  className={styles.publicationImage}
                />
                <h4 className={styles.pdfTitle}>Welcome to the Golden Land (China Version)</h4>
                <a
                  href="/assets/pdf/Welcome to the Golden Land (China Version).pdf"
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