import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismLegislation.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "ခရီးသွားလုပ်ငန်းဆိုင်ရာဥပဒေများ",
  description: "Key legislation and rules for Myanmar tourism sector."
};

export default function TourismLegislation() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/57.jpg"
        altText="tourism legislation cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ခရီးသွားလုပ်ငန်းဆိုင်ရာဥပဒေများ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ခရီးသွားလုပ်ငန်းဆိုင်ရာဥပဒေများ</h1>

     <section id="tourism-legislation-content" className={styles.mt5}>
          <div className={styles.gridRow}>
            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
                <img
                  src="/assets/images/pdf-images/မြန်မာနိုင်ငံခရီးသွားလုပ်ငန်းဥပဒေ.png"
                  alt="Myanmar Tourism Law"
                  className={styles.legislationImage}
                />
                <h2 className={styles.legislationTitle}>မြန်မာနိုင်ငံခရီးသွားလုပ်ငန်းဥပဒေ</h2>
                <a
                  href="https://admin-mm.tourism.gov.mm/storage/attachments/01K3JME4YX58N8148FKM81CM07.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
               <Image
  src="/assets/images/pdf-images/မြန်မာနိုင်ငံခရီးသွားလုပ်ငန်းနည်းဥပဒေများ(၂၀၂၀).png"
  alt="Myanmar Tourism Rules (2020)"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>မြန်မာနိုင်ငံခရီးသွားလုပ်ငန်းနည်းဥပဒေများ(၂၀၂၀)</h2>
                <a
                  href="https://admin-mm.tourism.gov.mm/storage/attachments/01K3JNQ3Z3534CS7W098ZPQ5VQ.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
             <Image
  src="/assets/images/pdf-images/ဟိုတယ်လုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်.png"
  alt="Directives For Hotel Licence Holders"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>ဟိုတယ်လုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်</h2>
                <a
                  href="https://admin-mm.tourism.gov.mm/storage/attachments/01K3JNS1BYZ045DDQB8NEMP5ZE.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
              <Image
  src="/assets/images/pdf-images/တည်းခိုရိပ်သာလုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်.png"
  alt="Directives For Guest House Licence Holders"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>တည်းခိုရိပ်သာလုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်</h2>
                <a
                  href="https://admin-mm.tourism.gov.mm/storage/attachments/01K3JNV7GXA8MR2G57TRD7746M.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
               <Image
  src="/assets/images/pdf-images/ခရီးလှည့်လည်ရေးလုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်.png"
  alt="Directives For Tour Operation Business Licence"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>ခရီးလှည့်လည်ရေးလုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်</h2>
                <a
                  href="https://admin-mm.tourism.gov.mm/storage/attachments/01K3JNWBVX7E2MNAHNV9CF8D5J.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
                <Image
  src="/assets/images/pdf-images/ဧည့်လမ်းညွှန်လုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်.png"
  alt="Directives For Tour Guide Business Licence"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>ဧည့်လမ်းညွှန်လုပ်ငန်းလိုင်စင်ဆိုင်ရာအမိန့်</h2>
                <a
                  href="https://admin-mm.tourism.gov.mm/storage/attachments/01K3JNY5DX2SKRR3PSSBRAQ3VT.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
              <Image
  src="/assets/images/pdf-images/လိုင်စင်ကြေး၊ လိုင်စင်အသစ်လဲလှယ်ကြေး၊ လိုင်စင်ဒဏ်ကြေးနှင့် ဝန်ဆောင်ကြေးများ.png"
  alt="License Fees, Renewal Fees, Fines, and Service Fees"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>လိုင်စင်ကြေး၊ လိုင်စင်အသစ်လဲလှယ်ကြေး၊ လိုင်စင်ဒဏ်ကြေးနှင့် ဝန်ဆောင်ကြေးများ</h2>
                <a
                  href="https://admin.tourism.gov.mm/storage/attachments/01K3JKEHSE5540PS3RQMB76DXX.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
                >
                  ဒေါင်းလုဒ်ရယူရန်
                </a>
              </div>
            </div>

            <div className={styles.gridCol}>
              <div className={styles.legislationSection}>
               <Image
  src="/assets/images/pdf-images/ကြိုတင်ခွင့်ပြုချက်လျှောက်ထားခြင်းဆိုင်ရာအမိန့်.png"
  alt="Order regarding application for prior permission"
  className={styles.legislationImage}
  width={180}
  height={240}
  style={{ height: "auto" }}
/>
                <h2 className={styles.legislationTitle}>ကြိုတင်ခွင့်ပြုချက်လျှောက်ထားခြင်းဆိုင်ရာအမိန့်</h2>
                <a
                  href="https://admin-mm.tourism.gov.mm/storage/attachments/01K3JP20ER87JA26S874MR7EWY.pdf"
                  className={styles.downloadButton}
                  target="_blank"
                  rel="noopener"
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