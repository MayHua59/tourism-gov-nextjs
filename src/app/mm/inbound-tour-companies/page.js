import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "./Inbound.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {inboundCompanies} from "@/data/inboundCompanies"

export const metadata = {
  title: "Inbound Tour Companies",
  description: "List of inbound tour companies licensed by the Ministry of Hotels and Tourism, Myanmar."
};

export default function InboundTourCompanies() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/56.jpg" altText="inbound tour companies cover photo" />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ရန်ကုန်တိုင်းဒေသကြီးရှိ ခရီးလှည့်လည်ရေးလုပ်ငန်းလိုင်စင် (ပြည်ဝင်/ပြည်တွင်း) စာရင်း", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ရန်ကုန်တိုင်းဒေသကြီးရှိ ခရီးလှည့်လည်ရေးလုပ်ငန်းလိုင်စင် &#40;ပြည်ဝင်/ပြည်တွင်း&#41; စာရင်း</h1>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Website (or) Social Media</th>
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