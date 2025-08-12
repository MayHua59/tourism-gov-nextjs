import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./ASEANTourismStandards.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "ASEAN Tourism Standards",
  description: "ASEAN Tourism Standards documents and publications."
};

export default function AseanTourismStandards() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/15.jpg"
        altText="asean tourism standards cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "ASEAN Tourism Standards", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ASEAN Tourism Standards</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="/assets/images/pdf-images/AMVS.jpg"
  alt="AMVS-Category-Event-Venue"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>AMVS-Category-Event-Venue</h4>
                <a
                  href="/assets/pdf/abc.pdf"
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
               <Image
  src="/assets/images/pdf-images/ASEAN Tourism Standards Book.JPG"
  alt="ASEAN Tourism Standards Book"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>ASEAN Tourism Standards Book</h4>
                <a
                  href="/assets/pdf/abc.pdf"
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
                <Image
  src="/assets/images/pdf-images/ASEAN-CBT-Tourism-Standard-Binded-Jan-2022.JPG"
  alt="ASEAN-CBT-Tourism-Standard-Binded-Jan-2022"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>ASEAN-CBT-Tourism-Standard-Binded-Jan-2022</h4>
                <a
                  href="/assets/pdf/abc.pdf"
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
                <Image
  src="/assets/images/pdf-images/ASEAN-Clean-Tourist-City-Standard-rev.JPG"
  alt="ASEAN-Clean-Tourist-City-Standard-rev"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>ASEAN-Clean-Tourist-City-Standard-rev</h4>
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
            
          </div>
        </section>
      </div>
    </div>
  );
}