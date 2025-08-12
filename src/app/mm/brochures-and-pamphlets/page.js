import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Brochures.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "လက်ကမ်းစာစောင်များ",
  description: "Downloadable brochures and pamphlets for Myanmar tourism."
};

export default function BrochuresAndPamphlets() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/17.jpg"
        altText="brochures and pamphlets cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "လက်ကမ်းစာစောင်များ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>လက်ကမ်းစာစောင်များ</h1>
        <section id="tourism-publications-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="/assets/images/pdf-images/Ecotourism.JPG"
  alt="Ecotourism"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>နေပြည်တော်ရှိသွားရောက်လည်ပတ်နိုင်သောနေရာများ(Nay Pyi Taw Flyer (Myanmar))</h4>
                <a
                  href="/assets/pdf/Ecotourism.pdf"
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
  src="/assets/images/pdf-images/Nay Pyi Taw Flyer (Eng QR).JPG"
  alt="Nay Pyi Taw Flyer (Eng QR)"
  className={styles.publicationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>မကွေးတိုင်းဒေသကြီးတွင်းရှိ ထင်ရှားသောခရီးစဉ်ဒေသများ(Magway Pamphlet (Myanmar Version))</h4>
                <a
                  href="/assets/pdf/Nay Pyi Taw Flyer (Eng QR).pdf"
                  target="_blank"
                  rel="noopener"
                  className={styles.downloadLink}
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>
           
          </div>
        </section>
      </div>
    </div>
  );
}