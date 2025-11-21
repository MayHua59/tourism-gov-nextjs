import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "@/app/en/inbound-tour-companies/Inbound.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {inboundCompanies} from "@/data/inboundCompanies"

export const metadata = {
  title: "수입 관광 회사",
  description: "미얀마 관광부에서 인가한 수입 관광 회사 목록입니다."
};

export default function InboundTourCompanies() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/56.jpg" altText="inbound tour companies cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "수입 관광 회사", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>수입 관광 회사</h1>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>주소</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>웹사이트 (또는) 소셜 미디어</th>
              </tr>
            </thead>
            <tbody>
              {inboundCompanies.map((company, idx) => (
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