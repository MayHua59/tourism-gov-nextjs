import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./WhyInvest.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Why Invest in Myanmar",
  description: "Learn about the advantages, opportunities, and conditions for investing in Myanmar."
};

export default function WhyInvestInMyanmar() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/17.jpg"
        altText="why invest in Myanmar cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ဘာကြောင့် ရင်းနှီးမြှုပ်နှံသင့်သလဲ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ဘာကြောင့် မြန်မာနိုင်ငံတွင် ရင်းနှီးမြှုပ်နှံသင့်သလဲ</h1>

        <section id="why-invest-content" className={styles.mt5}>
          <div className={styles.investSection}>
            <h2>Experience Growth in a Growing Economy</h2>
            <p>
              Investors are welcomed by the Directorate of Investments and Company Administration (DICA) to participate in seizing business opportunities that would aid in the growth of a New Myanmar while realising the goals of national development.
            </p>
            <ul className={styles.investList}>
              <li className={styles.investListItem}>Myanmar’s economy has continuously grown at approximately 8% since 2012. Over FY 2014-15, a gross domestic product (GDP) increase of 8.7% has been mainly driven by developments and investments in the telecommunication sector (57.5%*), extractive industries (50.5%*), oil and gas (36.1%*), construction (15.9%*), manufacturing (9.7%*), as well as growth in key service industries (e.g. tourism). (*=percentage increase of the absolute GDP contribution of the sector).</li>
              <li className={styles.investListItem}>Myanmar’s growth strategy is built using a combination of policies to simultaneously allow modernisation in the industry, agriculture and infrastructure, a diversification of the export basis and the expansion of value-added production for domestic and international markets.</li>
              <li className={styles.investListItem}>Three coastal Special Economic Zones in Thilawa, Kyaukphyu and Dawei with investment incentives, along with simplified processes for investors and industrial facilities at international standards will become “growth engines” of the New Myanmar. Growth along economic corridors with old (Yangon and Mandalay) and new development nodes (e.g. Bago, Hpa An, Sittwe, Myitkyina and border towns) is also</li>
              <li className={styles.investListItem}>The economic growth has caused the emergence of a growing middle class and per-capita consumption of 10.9% (during FY 2013-14), opening opportunities for the Fast-Moving Consumer Goods (FMCG) industry and service industries (e.g. private education institutions, entertainment).</li>
            </ul>
          </div>

          <div className={styles.investSection}>
            <h2>Location &amp; Connectivity: Moving Towards New Crossroads of Asia</h2>
            <p>
              Myanmar is the ideal platform to access regional markets, global factor markets, and product markets. The improving infrastructure, particularly in power infrastructure, road, rail, air and ports is highly prioritised by the Government in order to establish efficient supply chains for future economic growth.
            </p>
            <ul className={styles.investList}>
              <li className={styles.investListItem}>Going beyond domestic markets, Myanmar has gained access to China, India, ASEAN and other international markets through the ports along the Bay of Bengal and Andaman Sea.</li>
              <li className={styles.investListItem}>
                After the international isolation that has prevented the modernisation and expansion of Myanmar’s infrastructural networks, the Government is now preparing to become Asia’s “crossroads” through investments into:
                <ul className={styles.investList}>
                  <li className={styles.investListItem}>Major domestic highways and transnational road links to Thailand (i.e. from Hpa An and Dawei Special Economic Zone (SEZ)), China (i.e. from Mandalay) and India (i.e. from Mandalay and the Kaladan Multi-Modal Transit Transport Project).</li>
                  <li className={styles.investListItem}>A modernised rail network and dry port facilities in Ywarthargyi (near Yangon) and Myitnge (near Mandalay).</li>
                  <li className={styles.investListItem}>Power infrastructure to expand installed capacity (4,422 MW in 2014) and annual production (12,247 GWh) as well as transmission systems according to the National Electrification Plan that foresees a full electrification including remote areas by 2030.</li>
                </ul>
              </li>
              <li className={styles.investListItem}>Myanmar is continuously integrated into regional production networks through its ASEAN Economic Community membership as well as the ASEAN-China Free Trade Area (ACFTA) while internationally enjoying preferential tariff schemes as a least developed country (LDC).</li>
            </ul>
          </div>

          <div className={styles.investSection}>
            <h2>Supporting Reforms of New Myanmar</h2>
            <p>
              As Myanmar undergoes political and economic transformation to become a democratic, federal and peaceful national state, responsible investments are fundamental for sustainable and inclusive economic development.
            </p>
            <ul className={styles.investList}>
              <li className={styles.investListItem}>A National Comprehensive Development Plan (NCDP) is formulated following international practices to identify policy directions for sustainable economic development and to alleviate poverty in Myanmar.</li>
              <li className={styles.investListItem}>A sector-specific National Export Strategy (NES) is being implemented to strengthen trade and investment in potential industries with strong global demand (e.g. rice, textiles and garments, tourism). Myanmar as a least developed country (LDC) has preferential tariff arranged to facilitate access into major international markets.</li>
              <li className={styles.investListItem}>The Government is committed to encourage investments that bring a positive impact on the country’s society and environment. Investments in some sectors are prohibited, restricted or may require specific approvals, processes, joint venturing or Environmental and Social Impact Assessments (EIA/SIA) as protective measures over the communities, environment and the progress of peace and national reconciliation.</li>
              <li className={styles.investListItem}>DICA highly encourages foreign companies to seize investment opportunities in less-developed parts of the country and to consider business opportunities that facilitate the economic inclusion of Myanmar’s citizens in remote parts of the country, like Chin State.</li>
            </ul>
          </div>

          <div className={styles.investSection}>
            <h2>Investing Into Myanmar’s Society</h2>
            <p>
              Myanmar has all the right potentials for sustainable growth. The country is rich in natural resources and lands as well as young members of the population equipped with a great set of skills and motivation to bring positive change to the country.
            </p>
            <ul className={styles.investList}>
              <li className={styles.investListItem}>In the past, Myanmar’s society has proved to be highly capable of bringing considerable changes. The citizens are adaptable and flexible in terms of understanding new technology, gaining new skills and being competent in a fast-learning society.</li>
              <li className={styles.investListItem}>In Yangon and other urban centres of Myanmar, the society is open and welcoming towards the influence of foreign cultures, creating a harmonious mix of traditional life and modernity.</li>
              <li className={styles.investListItem}>According to the Myanmar Population and Housing Census (2014), Myanmar is home to 51.4 million people consisting of a young population with a share of 65.6% within working age (15-64 years).</li>
              <li className={styles.investListItem}>The population has a high literacy rate of 93% and wide basic English competency. Vocational training programmes offered by private sectors may close gaps in skill training with ease.</li>
              <li className={styles.investListItem}>Myanmar has taken great lengths to solidify the education sector in the country. Compared to 2012, public spending in education in 2014 has increased by 49%. The Government is also leading a Comprehensive Education Sector Review (CESR) to better comprehend the current status of education as well as developing a National Education Sector Plan (NESP) which will guide the implementation of policies and programmes.</li>
            </ul>
          </div>

          <div className={styles.investSection}>
            <h2>Profiting From Business-Enabling Environment</h2>
            <p>
              The Government of Myanmar attracts investors by creating business-enabling environments that encourage investment promotion and protection.
            </p>
            <ul className={styles.investList}>
              <li className={styles.investListItem}>Several Bilateral Investment Treaties (BITs) and other International Investment Agreements (IIAs) have been concluded to date. Please find an updated list</li>
              <li className={styles.investListItem}>Eight countries have come to an agreement regarding the avoidance of double taxation (India, Laos, Malaysia, Korea, Singapore, Thailand, United Kingdom and Vietnam).</li>
              <li className={styles.investListItem}>To allow easier business operations in Myanmar, various laws have been revised to facilitate investment, such as the Foreign Investment Law (granting taxation benefits, land use rights etc.), the Myanmar Citizen Investment Law and the Arbitration Law. Further legal changes to a better business-enabling environment are currently in the making (e.g. Banks and Financial Institutions Law of Myanmar and a combined Myanmar Investment Law).</li>
              <li className={styles.investListItem}>Preparations for a “National Framework for Public-Private Partnerships” (PPP) are being made to aid in the growth and improvement of private sectors in the infrastructure development. Transparent procedures in public tenders will be included to allow cost-efficient public service provision and modernis.</li>
              <li className={styles.investListItem}>The Government aims to build an open and transparent business environment by transforming the telecommunications industry into an open market as well as the first competitive tender processes (for instance, for a gas-fired power plant in Myingyan, Mandalay Region).</li>
            </ul>
          </div>

          <div className={styles.investSection}>
            <h2>Myanmar population</h2>
            <div className={styles.tableResponsive}>
              <table className={styles.investTable}>
                <thead>
                  <tr>
                    <th>State / Region</th>
                    <th>Total Population</th>
                    <th>Average Population (%)</th>
                    <th>State/Region urban population</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Yangon Region</td>
                    <td>7,360,703</td>
                    <td>14.6</td>
                    <td>70.1</td>
                  </tr>
                  <tr>
                    <td>Ayeyarwady Region</td>
                    <td>6,184,829</td>
                    <td>123</td>
                    <td>14.1</td>
                  </tr>
                  <tr>
                    <td>Mandalay Region</td>
                    <td>6,165,723</td>
                    <td>12.3</td>
                    <td>34.8</td>
                  </tr>
                  <tr>
                    <td>Shan State</td>
                    <td>5,824,432</td>
                    <td>11.6</td>
                    <td>24.0</td>
                  </tr>
                  <tr>
                    <td>Sagaing Region</td>
                    <td>5,325,347</td>
                    <td>10.6</td>
                    <td>17.1</td>
                  </tr>
                  <tr>
                    <td>Bago Region</td>
                    <td>4,867,373</td>
                    <td>9.7</td>
                    <td>22.0</td>
                  </tr>
                  <tr>
                    <td>Magway Region</td>
                    <td>3,917,055</td>
                    <td>7.8</td>
                    <td>15.0</td>
                  </tr>
                  <tr>
                    <td>Rakhine State</td>
                    <td>2,098,807</td>
                    <td>4.2</td>
                    <td>16.9</td>
                  </tr>
                  <tr>
                    <td>Mon State</td>
                    <td>2,054,393</td>
                    <td>4.1</td>
                    <td>27.9</td>
                  </tr>
                  <tr>
                    <td>Kachin State</td>
                    <td>1,642,841</td>
                    <td>3.3</td>
                    <td>36.1</td>
                  </tr>
                  <tr>
                    <td>Kayin State</td>
                    <td>1,504,326</td>
                    <td>3.0</td>
                    <td>21.9</td>
                  </tr>
                  <tr>
                    <td>Tanintharyi Region</td>
                    <td>1,408,401</td>
                    <td>2.8</td>
                    <td>24.0</td>
                  </tr>
                  <tr>
                    <td>Nay Pyi Taw</td>
                    <td>1,160,242</td>
                    <td>2.3</td>
                    <td>32.3</td>
                  </tr>
                  <tr>
                    <td>Chin State</td>
                    <td>478,801</td>
                    <td>1.0</td>
                    <td>20.8</td>
                  </tr>
                  <tr>
                    <td>Kayar State</td>
                    <td>286,627</td>
                    <td>0.6</td>
                    <td>25.3</td>
                  </tr>
                  <tr>
                    <td><strong>TOTAL</strong></td>
                    <td><strong>50,279,900</strong></td>
                    <td><strong>100.0%</strong></td>
                    <td><strong>29.6%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}