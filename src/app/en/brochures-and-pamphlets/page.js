import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Brochures.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
        <h1 className={styles.pageTitle}>Brochures</h1>
        <section id="tourism-brochures-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                 <Image
                  src="/assets/images/brochures-images/Ayeyarwady_Brochure.JPG"
                  alt="Ayeyarwady_Brochure"
                  className={styles.publicationImage}
                  width={400}
                  height={565}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>Ayeyarwady_Brochure</h4>
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
               <Image
  src="/assets/images/brochures-images/Bagan_Brochure.JPG"
  alt="Bagan_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Bagan_Brochure</h4>
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
                <Image
  src="/assets/images/brochures-images/HpaAn_Brochure.JPG"
  alt="HpaAn_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>HpaAn_Brochure</h4>
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
                <Image
  src="/assets/images/brochures-images/Hispaw_Brochure.JPG"
  alt="Hsipaw_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Hsipaw_Brochure</h4>
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
             <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="/assets/images/brochures-images/Indawgyi_Brochure.JPG"
  alt="Indawgyi_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Indawgyi_Brochure</h4>
                <a
                  href="/assets/pdf/Indawgyi_Brochure.pdf"
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
  src="/assets/images/brochures-images/Inle_Brochure.JPG"
  alt="Inlay_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Inlay_Brochure</h4>
                <a
                  href="/assets/pdf/Inlay_Brochure.pdf"
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
  src="/assets/images/brochures-images/Kalaw_Brochure.JPG"
  alt="Kalaw_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Kalaw_Brochure</h4>
                <a
                  href="/assets/pdf/Kalaw_Brochure.pdf"
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
  src="/assets/images/brochures-images/KyaingTong_Brochure.JPG"
  alt="KyaingTong_BrochureKyaingTong_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>KyaingTong_Brochure</h4>
                <a
                  href="/assets/pdf/KyaingTong_BrochureKyaingTong_Brochure.pdf"
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
  src="/assets/images/brochures-images/Loikaw_Brochure.JPG"
  alt="Loikaw_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Loikaw_Brochure</h4>
                <a
                  href="/assets/pdf/Loikaw_Brochure.pdf"
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
  src="/assets/images/brochures-images/Mandalay_Brochure.JPG"
  alt="Mandalay_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Mandalay_Brochure</h4>
                <a
                  href="/assets/pdf/Mandalay_Brochure.pdf"
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
  src="/assets/images/brochures-images/Mogok_Brochure.JPG"
  alt="Mogok_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Mogok_Brochure</h4>
                <a
                  href="/assets/pdf/Mogok_Brochure.pdf"
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
  src="/assets/images/brochures-images/MountVictoria_Brochure.JPG"
  alt="MountVictoria_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>MountVictoria_Brochure</h4>
                <a
                  href="/assets/pdf/MountVictoria_Brochure.pdf"
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
  src="/assets/images/brochures-images/Myeik_Brochure.JPG"
  alt="Myeik_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Myeik_Brochure</h4>
                <a
                  href="/assets/pdf/Myeik_Brochure.pdf"
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
  src="/assets/images/brochures-images/NayPyiTaw_Brochure.JPG"
  alt="NayPyiTaw_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>NayPyiTaw_Brochure</h4>
                <a
                  href="/assets/pdf/NayPyiTaw_Brochure.pdf"
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
  src="/assets/images/brochures-images/Ngapali_Brochure.JPG"
  alt="Ngapali_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Ngapali_Brochure</h4>
                <a
                  href="/assets/pdf/Ngapali_Brochure.pdf"
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
  src="/assets/images/brochures-images/Putao_Brochure.JPG"
  alt="Putao_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Putao_Brochure</h4>
                <a
                  href="/assets/pdf/Putao_Brochure.pdf"
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
  src="/assets/images/brochures-images/Putao_Brochure.JPG"
  alt="Yangon_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Yangon_Brochure</h4>
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
            
          </div>
        </section>
        <h1 className={styles.pageTitle}>Pamphlets</h1>
        <section id="tourism-pamphlets-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="/assets/images/pdf-images/Ecotourism.JPG"
  alt="Ecotourism"
  className={styles.publicationImage}
  width={220}
  height={320}
  style={{ height: "auto" }}
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
               <Image
  src="/assets/images/pdf-images/Nay Pyi Taw Flyer (Eng QR).JPG"
  alt="Nay Pyi Taw Flyer (Eng QR)"
  className={styles.publicationImage}
  width={220}
  height={320}
  style={{ height: "auto" }}
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
               <Image
  src="/assets/images/pdf-images/Welcome to the Golden Land (English Version).JPG"
  alt="Welcome to the Golden Land (English Version)"
  className={styles.publicationImage}
  width={220}
  height={320}
  style={{ height: "auto" }}
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
                <Image
  src="/assets/images/pdf-images/Welcome to the Golden Land (China Version).JPG"
  alt="Welcome to the Golden Land (China Version)"
  className={styles.publicationImage}
  width={220}
  height={320}
  style={{ height: "auto" }}
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