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
          { label: "မူလစာမျက်မှာ", href: "/mm/", icon: faHome },
          { label: "လက်ကမ်းစာစောင်များ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>လက်ကမ်းစာစောင်များ</h1>
        <section id="tourism-brochures-content" className={styles.mt5}>
          <div className={styles.gridRow}>
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
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJNDBVQ4MFK6BSB02JZ7FF.pdf"
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
  src="/assets/images/brochures-images/Yangon_Brochure.JPG"
  alt="Yangon_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Yangon_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJR0NYSBY03FPBY8YHAE74.pdf"
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
  src="/assets/images/brochures-images/Mandalay_Brochure.JPG"
  alt="Mandalay_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Mandalay_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJH603GFYRS23HR9MJJYHB.pdf"
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
  src="/assets/images/brochures-images/Bagan_Brochure.JPG"
  alt="Bagan_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Bagan_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJ9CKRGHNABP7E4F4E2MQA.pdf"
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
                  src="/assets/images/brochures-images/Ayeyarwady_Brochure.JPG"
                  alt="Ayeyarwady_Brochure"
                  className={styles.publicationImage}
                  width={400}
                  height={565}
                  style={{ height: "auto" }}
                />
                <h4 className={styles.pdfTitle}>Ayeyarwady_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJ8QKCRZZER9W4ZBDPGVHB.pdf"
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
  src="/assets/images/brochures-images/HpaAn_Brochure.JPG"
  alt="HpaAn_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>HpaAn_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJA4EGYME4MR7GDM57DSYT.pdf"
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
  src="/assets/images/brochures-images/Hispaw_Brochure.JPG"
  alt="Hsipaw_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Hsipaw_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJB0HRYNH1Y7J1TRZKG9VM.pdf"
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
  src="/assets/images/brochures-images/Indawgyi_Brochure.JPG"
  alt="Indawgyi_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Indawgyi_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJC77N6Y9F16ZQ00SKTE2G.pdf"
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
  src="/assets/images/brochures-images/Inle_Brochure.JPG"
  alt="Inlay_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Inle_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJD211MEWCV84RZS6S8MWX.pdf"
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
  src="/assets/images/brochures-images/Kalaw_Brochure.JPG"
  alt="Kalaw_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Kalaw_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJDVFXSA50C1EJVBYM4473.pdf"
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
  src="/assets/images/brochures-images/KyaingTong_Brochure.JPG"
  alt="KyaingTong_BrochureKyaingTong_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>KyaingTong_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJET0W6TRCXZWS15E9YXVX.pdf"
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
  src="/assets/images/brochures-images/Loikaw_Brochure.JPG"
  alt="Loikaw_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Loikaw_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJFK8Y6HMS82WCJFRY597X.pdf"
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
  src="/assets/images/brochures-images/Mogok_Brochure.JPG"
  alt="Mogok_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Mogok_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJHV24QWXZYJ5PXC60764C.pdf"
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
  src="/assets/images/brochures-images/MountVictoria_Brochure.JPG"
  alt="MountVictoria_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>MountVictoria_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJMNBEB819Z6ZAZZS84T62.pdf"
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
  src="/assets/images/brochures-images/Myeik_Brochure.JPG"
  alt="Myeik_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Myeik_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MKPFF0J8QCPB0WJE50D4C0.pdf"
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
  src="/assets/images/brochures-images/Ngapali_Brochure.JPG"
  alt="Ngapali_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Ngapali_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJP3HHNE2WSC05PZ9N4NFM.pdf"
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
  src="/assets/images/brochures-images/Putao_Brochure.JPG"
  alt="Putao_Brochure"
  className={styles.publicationImage}
  width={400}
  height={565}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>Putao_Brochure</h4>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3MJPS9D71KBEGA6CZABRQ3F.pdf"
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
        <h1 className={styles.pageTitle}>Pamphlets</h1>
        <section id="tourism-pamphlets-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.publicationCard}>
                <Image
  src="/assets/images/pdf-images/နေပြည်တော်ရှိသွားရောက်လည်ပတ်နိုင်သောနေရာများ(Nay Pyi Taw Flyer (Myanmar)).JPG"
  alt="နေပြည်တော်ရှိသွားရောက်လည်ပတ်နိုင်သောနေရာများ(Nay Pyi Taw Flyer (Myanmar))"
  className={styles.publicationImage}
  width={220}
  height={320}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>နေပြည်တော်ရှိသွားရောက်လည်ပတ်နိုင်သောနေရာများ(Nay Pyi Taw Flyer (Myanmar))</h4>
                <a
                  href="https://drive.google.com/file/d/10O6RJ58ab8lEiEUJrBjATSFBpfJMHN4Z/view"
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
  src="/assets/images/pdf-images/မကွေးတိုင်းဒေသကြီးတွင်းရှိ ထင်ရှားသောခရီးစဉ်ဒေသများ(Magway Pamphlet (Myanmar Version)).JPG"
  alt="မကွေးတိုင်းဒေသကြီးတွင်းရှိ ထင်ရှားသောခရီးစဉ်ဒေသများ(Magway Pamphlet (Myanmar Version))"
  className={styles.publicationImage}
  width={220}
  height={320}
  style={{ height: "auto" }}
/>
                <h4 className={styles.pdfTitle}>မကွေးတိုင်းဒေသကြီးတွင်းရှိ ထင်ရှားသောခရီးစဉ်ဒေသများ(Magway Pamphlet (Myanmar Version))</h4>
                <a
                  href="https://drive.google.com/file/d/1M0S1m6LYMX2sQs-Hu6wH6Yik-4Sxbb_A/view"
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