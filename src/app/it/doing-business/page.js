import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/doing-business/DoingBusiness.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Doing Business in Myanmar",
  description: "Guide for investing, registering a company, and conducting business in Myanmar."
};

export default function DoingBusinessInMyanmar() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/28.jpg"
        altText="doing business in Myanmar cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/it", icon: faHome },
          { label: "Fare Affari in Myanmar", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Doing Business in Myanmar</h1>

        <section id="doing-business-content" className={styles.mt5}>
          <div className={styles.businessSection}>
            <h4>How to apply for a MIC Permit</h4>
            <p>
              While most projects no longer require Myanmar Investment Commission (MIC) approval, those meeting certain criteria will continue to need to do so.
            </p>
            <p>
              Project proposals continuing to require a MIC permit include businesses which are: strategic to the Union, have large capital investments, have a large potential impact on the environment and local community, involve state-owned land, or are designated by the government as needing a permit.
            </p>
            <p>
              <a href="https://www.dica.gov.mm/en/apply-mic-permit" target="_blank" rel="noopener">Read More Here</a>
            </p>
          </div>

          <div className={styles.businessSection}>
            <h4>How to apply for an Endorsement</h4>
            <p>
              In addition to Myanmar Investment Commission (MIC) Permits, the Union Government has introduced &apos;Endorsements&apos; as a fast-track way to doing business in Myanmar. Investors can apply to the MIC or the State and Regional Investment Committee for an Endorsement of an investment proposal.
            </p>
            <p>
              <a href="https://www.dica.gov.mm/en/apply-endorsement" target="_blank" rel="noopener">Read More Here</a>
            </p>
          </div>

          <div className={styles.businessSection}>
            <h4>Post-permit activities (only applicable for MIC Permit holders)</h4>
            <p>
              The following are post-permit activities, which are only applicable to companies holding a MIC Permit:
            </p>
            <ul className={styles.businessList}>
              <li className={styles.businessListItem}>Investment/Capital</li>
              <li className={styles.businessListItem}>Business Operation</li>
              <li className={styles.businessListItem}>MIC Permit Amendments</li>
              <li className={styles.businessListItem}>Reporting</li>
            </ul>
            <p>
              <a href="https://www.dica.gov.mm/en/post-permit-activities" target="_blank" rel="noopener">Read More Here</a>
            </p>
          </div>

          <div className={styles.businessSection}>
            <h4>How to register your company</h4>
            <p>
              Company incorporation is carried out by DICA in accordance with the provisions of the Myanmar Companies Law (2017); and investment proposal applications come under the Myanmar Investment Commission (DICA is the secretariat of the MIC).
            </p>
            <p>
              <a href="https://www.dica.gov.mm/en/register-your-company" target="_blank" rel="noopener">Read More Here</a>
            </p>
          </div>

          <div className={styles.businessSection}>
            <h4>Application Forms</h4>
            <p>
              <a href="http://dica.gov.mm/en/application-forms" target="_blank" rel="noopener">[Link to Application Forms]</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}