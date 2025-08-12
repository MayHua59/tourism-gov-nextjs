import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismPublication.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "စာအုပ်၊စာစောင်များ",
  description: "Official tourism research publications and surveys for Myanmar."
};

export default function TourismPublication() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/59.jpg"
        altText="tourism publications cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "စာအုပ်၊စာစောင်များ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>စာအုပ်၊စာစောင်များ</h1>
       <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="/assets/images/pdf-images/domestic-tourism-survey.png"
  alt="Domestic Tourism Survey Image"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>မြန်မာနိုင်ငံပြည်တွင်းခရီးသွားစစ်တမ်း ၂၀၂၄</h4>
                <a
                  href="/assets/pdf/မြန်မာနိုင်ငံပြည်တွင်းခရီးသွားစစ်တမ်း-၂၀၂၄.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
              <Image
  src="/assets/images/pdf-images/inbound-tourism-survey.png"
  alt="Inbound Tourism Survey Image"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>မြန်မာနိုင်ငံပြည်ဝင်ခရီးသွားစစ်တမ်း ၂၀၂၄</h4>
                <a
                  href="/assets/pdf/မြန်မာနိုင်ငံပြည်ဝင်ခရီးသွားစစ်တမ်း-၂၀၂၄.pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  ဒေါင်းလုဒ်ရယူရန်
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