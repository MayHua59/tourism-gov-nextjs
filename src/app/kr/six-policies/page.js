import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/six-policies/SixPolicies.module.css";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "미얀마 호텔 및 관광 부처의 6가지 정책",
  description: "미얀마 호텔 및 관광 부처의 6가지 정책입니다."
};

export default function SixPoliciesOfMoHT() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/54.jpg"
        altText="six policies of Ministry of Hotels and Tourism cover photo"
      />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "미얀마 호텔 및 관광 부처의 6가지 정책", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>미얀마 호텔 및 관광 부처의 6가지 정책</h1>
        <section id="policies">
          <ol className={styles.policiesList}>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To be the most important contributor to the national economy.
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To preserve and conserve natural environment, traditional heritage and custom of the local people in order to sustain the development of tourism industry in Myanmar.
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To develop socio-economy of the people and private sector by means of tourism development.
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To implement the regional and international contracts for the good of the national interest.
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To contribute to the peace process by developing tourism sector.
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> To develop sustainable and inclusive tourism.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}