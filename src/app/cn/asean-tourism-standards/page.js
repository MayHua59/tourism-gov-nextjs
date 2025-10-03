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
          { label: "首页", href: "/cn/", icon: faHome },
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
                  src="/assets/images/pdf-images/AMVS.JPG"
                  alt="AMVS-Category-Event-Venue"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>AMVS-Category-Event-Venue</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSNHQDVV6Z0Q6TPT264QT4.pdf"
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
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSPHMZ3AJBF03KQ32Y93ET.pdf"
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
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSQ8XP1YTHRD6BXTKKRJKE.pdf"
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
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSRP26J2STYXM0W99HY2PG.pdf"
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
                  src="/assets/images/pdf-images/ASEAN-Ecotourism-Standard.JPG"
                  alt="ASEAN-Clean-Tourist-City-Standard-rev"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>ASEAN-Ecotourism-Standard</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSSFN21XYDJJNF6VBKSYC6.pdf"
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
                  src="/assets/images/pdf-images/ASEAN-Green-Hotel-Standard.JPG"
                  alt="ASEAN-Green-Hotel-Standard"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>ASEAN-Green-Hotel-Standard</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSTNKSP7HF1RH0T0GFW8DQ.pdf"
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
                  src="/assets/images/pdf-images/ASEAN-Homestay-Standard.JPG"
                  alt="ASEAN-Homestay-Standard"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>ASEAN-Homestay-Standard</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSVFJRG139YGZT616P818D.pdf"
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
                  src="/assets/images/pdf-images/ASEAN-MICE-Venue-Standards-Exhibition-Venue.JPG"
                  alt="ASEAN-MICE-Venue-Standards-Exhibition-Venue"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>ASEAN-MICE-Venue-Standards-Exhibition-Venue</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSW2DXAAWQDMZD8RJZ2T5B.pdf"
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
                  src="/assets/images/pdf-images/ASEAN-MICE-Venue-Standards-Meeting-Room.JPG"
                  alt="ASEAN-MICE-Venue-Standards-Meeting-Room"
                  className={styles.publicationImage}
                  width={180}
                  height={240}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>ASEAN-MICE-Venue-Standards-Meeting-Room</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSWSVNYN9FW5N2WP5NVTC3.pdf"
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
  src="/assets/images/pdf-images/ASEAN-Public-Toilet-Standard.JPG"
  alt="ASEAN-Public-Toilet-Standard"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>ASEAN-Public-Toilet-Standard</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSXEYN9DB4BY8VV9TWETP3.pdf"
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
  src="/assets/images/pdf-images/ASEAN-Spa-Services-Standard-1.JPG"
  alt="ASEAN-Spa-Services-Standard-1"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>ASEAN-Spa-Services-Standard-1</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSYPWQJQGX0ANTCGEGQ97N.pdf"
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
  src="/assets/images/pdf-images/GREEN-HOTEL-BOOKLET-FOR-ATF-2016.JPG"
  alt="GREEN-HOTEL-BOOKLET-FOR-ATF-2016"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>GREEN-HOTEL-BOOKLET-FOR-ATF-2016</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JSZEP66ZTK68ERQ9PCSJSE.pdf"
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
  src="/assets/images/pdf-images/Homestay-Awardees-2016.JPG"
  alt="Homestay-Awardees-2016"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Homestay-Awardees-2016</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JT06FX6TH7CM6S2H807WJK.pdf"
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
