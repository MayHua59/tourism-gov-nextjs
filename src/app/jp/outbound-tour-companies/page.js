import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "@/app/en/outbound-tour-companies/Outbound.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {OutboundCompanies} from "@/data/outboundCompanies"

export const metadata = {
  title: "Outbound Tour Companies",
  description: "List of inbound tour companies licensed by the Ministry of Hotels and Tourism, Myanmar."
};

export default function InboundTourCompanies() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/57.jpg" altText="outbound tour companies cover photo" />
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/jp", icon: faHome },
          { label: "アウトバウンド観光会社", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>アウトバウンド観光会社</h1>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>No</th>
                <th>名前</th>
                <th>住所</th>
                <th>電話番号</th>
                <th>メール</th>
                <th>ウェブサイト (または) ソーシャルメディア</th>
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
                  <td>{company.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}