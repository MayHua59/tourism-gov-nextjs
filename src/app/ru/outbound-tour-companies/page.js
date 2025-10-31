import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "./Outbound.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {OutboundCompanies} from "@/data/outboundCompanies"

export const metadata = {
  title: "Выходящие туристские компании",
  description: "Список входящих туристских компаний, лицензированных Министерством туризма и отелей, Мьянма."
};

export default function InboundTourCompanies() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/57.jpg" altText="outbound tour companies cover photo" />
      <Breadcrumb
        items={[
          { label: "Главная", href: "/ru", icon: faHome },
          { label: "Выходящие туристские компании", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Выходящие туристские компании</h1>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>№</th>
                <th>Название</th>
                <th>Адрес</th>
                <th>номер телефона</th>
                <th>Email (электронная почта)</th>
                <th>Веб-сайт (или) Социальные сети</th>
              </tr>
            </thead>
            <tbody>
              {OutboundCompanies.map((company, idx) => (
                <tr key={idx}>
                  <td>{company.no}</td>
                  <td>{company.name}</td>
                  <td>{company.address}</td>
                  <td>{company.phone}</td>
                  <td>
                    {company.email.split(",").map((email, i) => (
                      <div key={i}>
                        {email.trim().includes("@") ? (
                          <a href={`mailto:${email.trim()}`}>{email.trim()}</a>
                        ) : (
                          email.trim()
                        )}
                      </div>
                    ))}
                  </td>
                  <td>{company.website} {company.socialMedia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}