import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./InvestmentOpportunity.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Tourism Investment Opportunity",
  description: "Explore tourism and hospitality investment opportunities in Myanmar."
};

export default function TourismInvestmentOpportunity() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/66.jpg"
        altText="tourism investment opportunity cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/cn/", icon: faHome },
          { label: "Tourism Investment Opportunities", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Tourism Investment Opportunities</h1>

        <section id="tourism-investment-content" className={styles.mt5}>
          <div className={styles.investSection}>
            <h2>Seize Investment Opportunities in Myanmar in TOURISM AND HOSPITALITY</h2>
            <p>
              The Government of the Republic of the Union of Myanmar warmly invites responsible investors to seek and seize business opportunities in Myanmar to accelerate sustainable economic growth. At the moment, foreign tourists (on their first short-term visit to Myanmar) mostly visit Yangon, Bagan, Inle Lake / Nyaung Shwe as well as Mandalay. However, Myanmar has unexplored treasures of natural beauty in the whole of the country from Kawthaung in the tropical South-east to Putao in the Himalayas.
            </p>
            <p>
              The table displays the current distribution of hotels, motels and inns/guesthouses in Myanmar and reflects the considerable under capacity of available accommodation in numerous locations outside the urban centers of Yangon and Mandalay. There is a need for both, affordable as well as high-class accommodation depending on the current demand.
            </p>

            <h3>Distribution of available capacity of hotels, motels, inns/guesthouses (in FY 2016-2017)</h3>
            <div className={styles.tableResponsive}>
              <table className={styles.investTable}>
                <thead>
                  <tr>
                    <th>State / Region</th>
                    <th>No. of hotels, motels and inns</th>
                    <th>No. of rooms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Yangon Region</td>
                    <td>363</td>
                    <td>18200</td>
                  </tr>
                  <tr>
                    <td>Mandalay Region</td>
                    <td>426</td>
                    <td>17784</td>
                  </tr>
                  <tr>
                    <td>Bago Region</td>
                    <td>58</td>
                    <td>1420</td>
                  </tr>
                  <tr>
                    <td>Sagaing Region</td>
                    <td>27</td>
                    <td>1098</td>
                  </tr>
                  <tr>
                    <td>Tanintharyi Region</td>
                    <td>36</td>
                    <td>1451</td>
                  </tr>
                  <tr>
                    <td>Ayeyarwaddy Region</td>
                    <td>69</td>
                    <td>2770</td>
                  </tr>
                  <tr>
                    <td>Magway Region</td>
                    <td>30</td>
                    <td>739</td>
                  </tr>
                  <tr>
                    <td>Kachin State</td>
                    <td>27</td>
                    <td>751</td>
                  </tr>
                  <tr>
                    <td>Kayah State</td>
                    <td>15</td>
                    <td>313</td>
                  </tr>
                  <tr>
                    <td>Kayin State</td>
                    <td>20</td>
                    <td>720</td>
                  </tr>
                  <tr>
                    <td>Chin State</td>
                    <td>5</td>
                    <td>127</td>
                  </tr>
                  <tr>
                    <td>Mon State</td>
                    <td>49</td>
                    <td>1577</td>
                  </tr>
                  <tr>
                    <td>Rakhine State</td>
                    <td>49</td>
                    <td>1538</td>
                  </tr>
                  <tr>
                    <td>Shan State</td>
                    <td>305</td>
                    <td>9761</td>
                  </tr>
                  <tr>
                    <td><strong>TOTAL</strong></td>
                    <td><strong>1479</strong></td>
                    <td><strong>58249</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Foreign investors may engage independently in hotel developments of 3-stars or higher standard, whereby local investors are encouraged also to consider opportunities in offering budget accommodation through guesthouses of international standards. For foreign entities, investments in tour companies, travel agencies, budget hotels, amusement parks and tourism-related public infrastructure projects are permitted on a joint-venture basis.
            </p>

            <h3>Key opportunities:</h3>
            <ul className={styles.opportunityList}>
              <li className={styles.opportunityListItem}>Exploring new high-potential investment locations in hospitality and tourism.</li>
              <li className={styles.opportunityListItem}>Developing eco-tourism (e.g. development of eco-tourism oriented hotels and lodges along with respective activities such as trekking routes or tours).</li>
              <li className={styles.opportunityListItem}>Building cultural and community-based tourism (e.g. development of shops for the sale of locally produced cultural artifacts).</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
