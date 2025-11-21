import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/visa-on-arrival/VisaOnArrival.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "비자 온 도착",
  description: "미얀마 비자 온 도착에 대한 정보입니다."
};

export default function VisaOnArrival() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/70.jpg" altText="visa on arrival cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "비자 온 도착", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>비자 온 도착</h1>
        <section id="visa-on-arrival-content" className={styles.mt5}>
          <div className={styles.visaInfoSection}>
            <h2 className={styles.sectionTitle}>Visa on Arrival for Japan, Republic of Korea, Macau (SAR of China) Nationals (Effective 21-10-2024)</h2>
            <p className={styles.paragraph}>
              일본, 대한민국, 마카오 (중화인민공화국 특별행정구) 국민이 2024년 10월 21일부터 1년 동안 시험 기간을 거쳐 비자 온 도착이 부여됩니다.
            </p>
            <ol className={styles.infoList}>
              <li>
                When arriving at International Airports, the following conditions apply:
                <ul className={styles.subList}>
                  <li>(A) Acquire the Visa on Arrival form free of charge and fill it in with 2 color photos (1.2 x 1.5 inches).</li>
                  <li>(B) Visa on Arrival fee: 50 USD, Stay duration: 30 days.</li>
                  <li>(C) Only Tourist Visas will be granted.</li>
                  <li>(D) Passport must have at least 6 months validity. If less, entry will be denied and the passenger will be deported.</li>
                  <li>(E) Extension of stay is not permitted.</li>
                  <li>(F) Overstay fine applies for overstaying.</li>
                </ul>
              </li>
              <li>
                Citizens entering with Tourist Visa on Arrival must comply with the following rules:
                <ul className={styles.subList}>
                  <li>(A) Respect and comply with Myanmar’s existing Laws and Procedures.</li>
                  <li>(B) Freely travel to places which allow access to foreigners, except restricted areas.</li>
                  <li>(C) If entry is not permitted by Security Forces/Authorities, or if included in the Immigration Department’s Blacklist, entry will be denied and the passenger will be deported.</li>
                  <li>(D) May exit at any international airport.</li>
                </ul>
              </li>
            </ol>
            <p className={styles.paragraph}>
              Learn More: <a href="http://www.mip.gov.mm/" target="_blank" rel="noopener">http://www.mip.gov.mm/</a>
            </p>
          </div>

          <div className={styles.visaInfoSection}>
            <h2 className={styles.sectionTitle}>Visa on Arrival for Hong Kong (SAR of China) Nationals (Effective 11-3-2024)</h2>
            <p className={styles.paragraph}>
              Tourist Visa on Arrival are granted to Hong Kong (Special Administrative Region of the People’s Republic of China) Nationals starting from 11-3-2024 for a test period of 1 year in accordance with the Standards for COVID-19 Prevent, Control & Treatment published by the Ministry of Health.
            </p>
            <ol className={styles.infoList}>
              <li>
                When arriving at International Airports, the following conditions apply:
                <ul className={styles.subList}>
                  <li>(A) Acquire the Visa on Arrival form free of charge and fill it in with 2 color photos (1.2 x 1.5 inches).</li>
                  <li>(B) Visa on Arrival fee: 50 USD, Stay duration: 30 days.</li>
                  <li>(C) Only Tourist Visas will be granted.</li>
                  <li>(D) Passport must have at least 6 months validity. If less, entry will be denied and the passenger will be deported.</li>
                  <li>(E) Extension of stay is not permitted.</li>
                  <li>(F) Overstay fine applies for overstaying.</li>
                </ul>
              </li>
              <li>
                Citizens entering with Tourist Visa on Arrival must comply with the following rules:
                <ul className={styles.subList}>
                  <li>(A) Respect and comply with Myanmar’s existing Laws and Procedures.</li>
                  <li>(B) Freely travel to places which allow access to foreigners, except restricted areas.</li>
                  <li>(C) If entry is not permitted by Security Forces/Authorities, or if included in the Immigration Department’s Blacklist, entry will be denied and the passenger will be deported.</li>
                  <li>(D) May exit at any international airport.</li>
                </ul>
              </li>
            </ol>
            <p className={styles.paragraph}>
              Learn More: <a href="http://www.mip.gov.mm/" target="_blank" rel="noopener">http://www.mip.gov.mm/</a>
            </p>
          </div>

          <div className={styles.visaInfoSection}>
            <h2 className={styles.sectionTitle}>Visa on Arrival for China &amp; India Nationals (Effective 30-08-2023)</h2>
            <p className={styles.paragraph}>
              Tourist Visa on Arrival for Chinese and Indian citizens have been granted starting from 30-08-2023 as a one-year pilot project in accordance with COVID-19 rules and regulations of the Ministry of Health.
            </p>
            <ol className={styles.infoList}>
              <li>
                When arriving at International Airports, the following conditions apply:
                <ul className={styles.subList}>
                  <li>Acquire the Visa on Arrival form free of charge and fill it in with 2 color photos (1.2 x 1.5 inches).</li>
                  <li>For applying Visa on Arrival, it shall be collected USD 50 for each person and can stay up to 30 days.</li>
                  <li>This is only for entering for visiting and hence, only Tourist Visa shall be granted.</li>
                  <li>The Passport must have at least 6 months of validity remaining and if it is less than 6 months, entry will not be permitted, and the passenger will be deported via the airline they arrived in.</li>
                  <li>Extension of the stay will not be permitted.</li>
                  <li>Overstay persons must pay overstay fine.</li>
                </ul>
              </li>
              <li>
                China citizen &amp; India citizen tourists granted Tourist Visa on Arrival must comply with the following rules during their stay:
                <ul className={styles.subList}>
                  <li>Must respect &amp; comply with Myanmar’s existing Laws and Procedures.</li>
                  <li>Apart from the areas within Myanmar that are restricted due to security reasons, the tourists may freely travel to places which allows access to foreigners.</li>
                  <li>If the passenger arriving with Tourist Visa on Arrival is not permitted entry by relevant Security forces/authorities or is included in the Immigration Department’s Blacklist, entry will be denied, and they will be deported via their arriving airline.</li>
                  <li>Those entering the country with Tourist Visa on Arrival may enter/exit the International Airports via the International entry/exit gates.</li>
                </ul>
              </li>
            </ol>
            <p className={styles.paragraph}>
              Learn More: <a href="http://www.mip.gov.mm/" target="_blank" rel="noopener">http://www.mip.gov.mm/</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}