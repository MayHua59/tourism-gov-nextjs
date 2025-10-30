import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./VisaExemption.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Visa Exemption",
  description: "Information about visa exemption for Russian Federation tourists visiting Myanmar."
};

export default function VisaExemption() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/43.jpg" altText="visa exemption cover photo" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Visa Exemption", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Visa Exemption</h1>
        <section id="visa-exemption-content" className={styles.mt5}>
          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>Visa Exemption for Russian Federation Tourists</h2>
            <p className={styles.paragraph}>
              Visa exemption for tourists from the Russian Federation holding ordinary passports will be granted from 1-7-2022.
            </p>
          </div>
          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>Notice</h2>
            <ol className={styles.noticeList}>
              <li>
                Visa exemption for tourists from the Russian Federation holding ordinary passports entering Myanmar by air will be granted from 1-7-2022 for a trial period of (1) year and in accordance with the COVID-19 prevention, control and treatment regulations issued by the Ministry of Health.
              </li>
              <li>
                For tourists from the Russian Federation holding ordinary passports entering international airports, visa exemption will be granted as follows:
                <ul className={styles.subList}>
                  <li>
                    (a) The passport must be valid for at least (6) months. If it is less than (6) months, the passenger will be denied entry and will be deported by the airline they were travelling on.
                  </li>
                  <li>
                    (b) A stay of thirty (30) days will be granted and no application for extension will be accepted.
                  </li>
                  <li>
                    (c) Overstaying beyond the specified period of stay will result in a fine.
                  </li>
                </ul>
              </li>
              <li>
                Ordinary passport holders of the Russian Federation who enter Myanmar under visa exemption must abide by the following rules:
                <ul className={styles.subList}>
                  <li>(a) They must respect the existing laws and regulations of Myanmar.</li>
                  <li>(b) They can freely travel to areas where foreigners are allowed to travel, except for areas restricted for security reasons.</li>
                  <li>(c) If a person who enters Myanmar under visa exemption is denied permission by the relevant security departments/organizations, or is on the blacklist of the Immigration Department, they will be denied entry and will be deported by the airline they were traveling with.</li>
                  <li>(d) Those who enter the country through an international airport with a visa exemption will be able to exit from any international airport.</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>Learn More</h2>
            <p className={styles.paragraph}>
              <a href="http://www.mip.gov.mm/" target="_blank" rel="noopener">http://www.mip.gov.mm/</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}