import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/objectives/Objectives.module.css";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Objectives",
  description: "Objectives of Myanmar tourism sector."
};

export default function Objectives() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/53.jpg"
        altText="objectives cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/it", icon: faHome },
          { label: "Obiettivi", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Objectives</h1>
        <section id="objectives">
          <ol className={styles.objectivesList}>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To support Myanmar as an international tourist destination by creating domestic and international markets effectively.
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To protect the rights of tour operators and tourists, and to understand and comply with their obligations.
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To ensure the quality and safety of tourism services.
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To enhance the coordination and cooperation for the development and management of the tourism sector.
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To create employment opportunities and develop human resources through the tourism education development.
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To develop responsible tourism activities that will contribute to the country&apos;s sustainable development, eco-tourism and conservation of the natural environment.
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To develop local businesses, small and medium enterprises based on tourism and economic opportunities for local communities, as well as Community-Based Tourism (CBT).
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To coordinate and cooperate with local and international institutions and tourism experts in conducting research for tourism development.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}