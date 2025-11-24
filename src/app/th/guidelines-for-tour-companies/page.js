import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/guidelines-for-tour-companies/Guidelines.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Guidelines for Tour Companies",
  description: "Tour companies' compliance and permission guidelines for Myanmar."
};

export default function GuidelinesForTourCompanies() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/69.jpg" altText="guidelines for tour companies cover photo" />
      <Breadcrumb
        items={[
          { label: "หน้าแรก", href: "/th", icon: faHome },
          { label: "คำแนะนำสำหรับบริษัทการท่องเที่ยว", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>คำแนะนำสำหรับบริษัทการท่องเที่ยว</h1>
        <section id="guidelines-content" className={styles.mt5}>
          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>Tour companies are required to comply with the conditions below:</h2>
            <ul className={styles.guidelinesList}>
              <li>
                Tours should not involve entry into restricted areas without a permit, and tour companies are required to submit an explanation if visitors request entry into a restricted area.
              </li>
              <li>
                Tours should comply with, be responsible for, and held accountable for permitted tour programs, including supervising staff and tour guides.
              </li>
              <li>
                Tour staff should receive proper briefing in order to comprehend conditions, directions, and orders from the Directorate of Hotels and Tourism, Ministry of Hotels and Tourism, and regional government organizations.
              </li>
              <li>
                Tours are required to constantly be updated about the conditions and directions given out by regional administration departments in order to present comprehensive explanations to visitors.
              </li>
              <li>
                Unusual incidents are to be immediately reported to Branch Offices of the Ministry of Hotels and Tourism, Tourist Police Forces, or Police Stations for quick assistance.
              </li>
            </ul>
          </div>

          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>Tours That Require Permission Application</h2>
            <ol className={styles.permissionList}>
              <li>
                Caravan Tour: Only applicable to tourists entering with personal vehicles/motorcycles/bicycles from International border checkpoints that include Myawaddy, Hteekee, Kawthoung, Tachileik, Tamu, and Rikhawdar
              </li>
              <li>Yacht Tour</li>
              <li>Riverine Tour (Ayeyarwaddy River and Chindwin River)</li>
              <li>Cruise Tour</li>
              <li>Chartered Flight Tour</li>
              <li>Hot Air Balloon Tour and Special Package Tour</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}