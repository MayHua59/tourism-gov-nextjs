import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/cruises-and-others/Cruises.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export const metadata = {
  title: "Cruises & Others",
  description: "Licensed cruise and riverboat operators licensed by the Ministry of Hotels and Tourism, Myanmar."
};

const CruiseCompanies = [
  {
    no: 1,
    name: "Myanmar Hotels & Cruises Limited (Road to Mandalay)",
    address: "No.39©, Taw Win Road, Dagon Township, Yangon",
    license: "PA-1101 / 15.12.1995",
    rooms: "43",
    contact: "01-228260, 01-229860"
  },
  {
    no: 2,
    name: "Myanmar Cruises Limited (R.V ORCAELLA)",
    address: "No.39©, Taw Win Road, Dagon Township, Yangon",
    license: "PA-2321 / 25.09.2013",
    rooms: "25",
    contact: "01-228260, 01-229860"
  },
  {
    no: 3,
    name: "Interconnection Travels Co., Ltd (U Than Oo - Paukhan-8559)",
    address: "No.24-26, 37th Street, Kyauktada Township, Yangon",
    license: "PA-2182 / 07.05.2009",
    rooms: "23",
    contact: "01-371691, 01-371692, 01-376109"
  },
  {
    no: 4,
    name: "Sanctuary Retreats Myanmar Ltd (Sanctuary Ananda)",
    address:
      "No.(S-3,4), Second Floor, Aung San Stadium, Northern Wing, Joe Phyu Street, Mingalar Taung Nyunt Tsp, Yangon",
    license: "PA-2480 / 11.12.2014",
    rooms: "21",
    contact: "01-255954, 01-655228"
  },
  {
    no: 5,
    name: "Tint Tint Travels & Tours Co., Ltd",
    address:
      "Room No.202 (B6), Shwe Ka Bar Housing, Mindama Street (3 Ward), Mayangone Township, Yangon",
    license: "PA-2480 / 11.09.2012",
    rooms: "20",
    contact: "01-655228, 01-652490"
  },
  {
    no: 6,
    name: "U Kyaw Htun (Pautkan 2014)",
    address: "No.60/B2, Pyay Road, 11 Qtr, Hlaing Township, Yangon",
    license: "PA-2734 / 30.03.2016",
    rooms: "28",
    contact: "09-5001088, 09-42039929"
  },
  {
    no: 7,
    name: "Daw Aye Thuzar Thant (Pautkan 2015)",
    address: "No.4/B, Pyay Road, 10 Qtr, Hlaing Township, Yangon",
    license: "PA-2735 / 30.03.2016",
    rooms: "28",
    contact: "09-5001088, 09-42039929"
  },
  {
    no: 8,
    name: "Upland Travels & Tours Co., Ltd (Thurgau Exotic-2)",
    address:
      "Room No.1209(A), 12th Floor, Yuzana Condo Tower, West Shwe Gon Daing Road, Bahan Township, Yangon",
    license: "PA-2272 / 08.11.2012",
    rooms: "16",
    contact: "01-559218, 01-558411"
  },
  {
    no: 9,
    name: "Interconnection Travels Co., Ltd (Pandaw-1)",
    address: "No.24-26, 37th Street, Kyauktada Township, Yangon",
    license: "PA-1958 / 27.01.2004",
    rooms: "16",
    contact: "01-371691, 01-371692, 01-376109"
  },
  {
    no: 10,
    name: "Upland Travels & Tours Co., Ltd (Thurgau Exotic-1)",
    address:
      "Room No.1209(A), 12th Floor, Yuzana Condo Tower, West Shwe Gon Daing Road, Bahan Township, Yangon",
    license: "PA-2189 / 23.12.2009",
    rooms: "12",
    contact: "01-559218, 01-558411"
  }
];

export default function CruisesPage() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/65.jpg" altText="cruises cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "크루즈와 기타", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>크루즈와 기타</h1>
        {/* <p className={styles.lead}>
          Licensed cruise and riverboat operators. Contact details and basic operator information are listed below.
        </p> */}

        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>번호</th>
                <th>Company 회사</th>
                
                <th> 주소</th>
                <th> 라이선스 번호 / 발행 날짜</th>
                <th> 방</th>
                <th> 전화 / 팩스</th>
              </tr>
            </thead>
            <tbody>
              {CruiseCompanies.map((c, idx) => (
                <tr key={idx}>
                  <td style={{ textAlign: "center" }}>{c.no ?? idx + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.address}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{c.license}</td>
                  <td style={{ textAlign: "center" }}>{c.rooms}</td>
                  <td>{c.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}