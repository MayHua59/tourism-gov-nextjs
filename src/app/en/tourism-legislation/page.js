import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismLegislation.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
                <Image
                  src="/assets/images/pdf-images/law.png"
                  alt="Myanmar Tourism Law"
                  className={styles.legislationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
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
                 <Image
                  src="/assets/images/pdf-images/rules.png"
                  alt="Myanmar Tourism Rules (2020)"
                  className={styles.legislationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
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
            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
               <Image
  src="/assets/images/pdf-images/rules.png"
  alt="Myanmar Tourism Rules (2020)"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>Directives For Guest House Licence Holders</h2>
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
                <Image
  src="/assets/images/pdf-images/rules.png"
  alt="Myanmar Tourism Rules (2020)"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>Directives For Hotel Licence Holders</h2>
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
                <Image
  src="/assets/images/pdf-images/rules.png"
  alt="Myanmar Tourism Rules (2020)"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>Directives For Tour Company Licence Holders</h2>
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
                <Image
  src="/assets/images/pdf-images/rules.png"
  alt="Myanmar Tourism Rules (2020)"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>Directives For Tour Guide Licence Holders</h2>
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
                <Image
  src="/assets/images/pdf-images/rules.png"
  alt="Myanmar Tourism Rules (2020)"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>Prior Permission For Hotel Construction</h2>
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
                <Image
  src="/assets/images/pdf-images/rules.png"
  alt="Myanmar Tourism Rules (2020)"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>License Service Fees</h2>
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