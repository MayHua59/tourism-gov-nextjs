import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismLegislation.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Tourism Legislation",
  description: "Key legislation and rules for Myanmar tourism sector."
};

export default function TourismLegislation() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/28.jpg"
        altText="tourism legislation cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Tourism Legislation", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Tourism Legislation</h1>

        <section id="tourism-legislation-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
                <img
                  src="/assets/images/pdf-images/law.png"
                  alt="Myanmar Tourism Law"
                  className={styles.legislationImage}
                />
                <h2 className={styles.legislationTitle}>Myanmar Tourism Law</h2>
                <a
                  href="#"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
                <img
                  src="/assets/images/pdf-images/rules.png"
                  alt="Myanmar Tourism Rules (2020)"
                  className={styles.legislationImage}
                />
                <h2 className={styles.legislationTitle}>Myanmar Tourism Rules (2020)</h2>
                <a
                  href="#"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}