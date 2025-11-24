import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/hot-air-balloons/HotAirBalloons.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const HotAirBalloonCompanies = [
  {
    no: 1,
    company: "Shwe Lay Ta Gun Travels & Tours Co., Ltd",
    brand: "Shwe Lay Ta Gun / Balloon Over Bagan",
    address: "No(1), Kabaraye Bagoda St, Yankin Township, Yangon",
    license: "PA-1767 / 23.12.2007",
    rooms: "14",
    phone: "09-43042142",
    fax: "01-371280"
  },
  {
    no: 2,
    company: "Golden Express Tours Co., Ltd",
    brand: "Golden Eagle",
    address: "No.97/B, Wahtan, Lanmadaw Township, Yangon",
    license: "PA-2540 / 26.02.2015",
    rooms: "3",
    phone: "09-43042142",
    fax: "01-371280"
  }
];


export const metadata = {
  title: "Hot-Air Balloon Operators",
  description: "Licensed hot-air balloon operators and contact details in Myanmar."
};

export default function HotAirBalloonsPage() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/59.jpg" altText="hot air balloons cover" />
      <Breadcrumb
        items={[
          { label: "หน้าแรก", href: "/th", icon: faHome },
          { label: "การท่องเที่ยวระบบคันธรรมสิทธิ์", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>การท่องเที่ยวระบบคันธรรมสิทธิ์</h1>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Company</th>
                <th>Brand</th>
                <th>Address</th>
                <th>License No. / Issue Date</th>
                <th>Rooms</th>
                <th>Contact Phone</th>
              </tr>
            </thead>
            <tbody>
              {HotAirBalloonCompanies.map((op, idx) => (
                <tr key={idx}>
                  <td style={{ textAlign: "center" }}>{op.no ?? idx + 1}</td>
                  <td>{op.company}</td>
                  <td>{op.brand}</td>
                  <td>{op.address}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{op.license}</td>
                  <td style={{ textAlign: "center" }}>{op.rooms}</td>
                  <td>
                    {op.phone}
                    {op.fax ? (
                      <span>
                        {", Fax "}{op.fax}
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}