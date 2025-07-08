import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismPublication.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Tourism Publications",
  description: "Official tourism research publications and surveys for Myanmar."
};

export default function TourismPublication() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/27.jpg"
        altText="tourism publications cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Tourism Publications", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Tourism Publications</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <img
                  src="/assets/images/pdf-images/domestic-tourism-survey.png"
                  alt="Domestic Tourism Survey Image"
                  className={styles.publicationImage}
                />
                <h4 className={styles.pdfTitle}>DOMESTIC TOURISM SURVEY OF MYANMAR 2024</h4>
                <a
                  href="/assets/pdf/Domestic-Tourism-Survey-2024.pdf"
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
                  src="/assets/images/pdf-images/inbound-tourism-survey.png"
                  alt="Inbound Tourism Survey Image"
                  className={styles.publicationImage}
                />
                <h4 className={styles.pdfTitle}>INBOUND TOURISM SURVEY OF MYANMAR, 2024</h4>
                <a
                  href="/assets/pdf/Inbound-Tourism-Survey-2024.pdf"
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