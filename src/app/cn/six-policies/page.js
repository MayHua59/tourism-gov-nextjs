import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./SixPolicies.module.css";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Six Policies of Ministry of Hotels and Tourism",
  description: "Six core policies of the Ministry of Hotels and Tourism, Myanmar."
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
          { label: "Home", href: "/cn/", icon: faHome },
          { label: "Six Policies of Ministry of Hotels and Tourism", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>酒店与旅游部六大政策</h1>
        <section id="policies">
          <ol className={styles.policiesList}>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> 成为国家经济发展的重要贡献者
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> 保护自然环境和当地传统民俗，促进缅甸旅游业可持续发展
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> 通过旅游业发展提升社会民生和私营经济活力
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> 履行区域及国际协定，维护国家利益
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> 通过旅游产业开发助力和平进程
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> 发展具有包容性的可持续旅游模式
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
