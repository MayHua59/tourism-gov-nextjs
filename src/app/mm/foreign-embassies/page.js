import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./ForeignEmbassies.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "မြန်မာနိုင်ငံရှိနိုင်ငံခြားသံရုံးများ",
  description: "Contact details of foreign embassies in Myanmar."
};

export default function ForeignEmbassiesInMyanmar() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/57.jpg" altText="foreign embassies in Myanmar cover photo" />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "မြန်မာနိုင်ငံရှိ နိုင်ငံခြားသံရုံးများ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>မြန်မာနိုင်ငံရှိ နိုင်ငံခြားသံရုံးများ</h1>

        <section id="foreign-embassies-asia-pacific" className={styles.mt5}>
          <h3 className={styles.missionsRegion}>Asia &amp; Pacific</h3>

          <div className={styles.missionCard}>
            <h4>Commonwealth of Australia</h4>
            <p>Vantage Tower, 623 Pyay Road, Yangon.</p>
            <p><strong>Ph:</strong> 951-2307410</p>
            <p><strong>Fax:</strong> 951-230 7425</p>
          </div>

          <div className={styles.missionCard}>
            <h4>People’s Republic of Bangladesh, Dhaka</h4>
            <p>11(B), Than Lwin Road, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-515275, 526144</p>
            <p><strong>Fax:</strong> 951-515273</p>
            <p><strong>Email:</strong> <a href="mailto:mission.yangon@mofa.gov.bd">mission.yangon@mofa.gov.bd</a></p>
            <p><strong>Website:</strong> <a href="http://bdembassyyangon.org/" target="_blank" rel="noopener">bdembassyyangon.org</a></p>
          </div>

          <div className={styles.missionCard}>
            <h4>Brunei Darussalam</h4>
            <p>No(17)Kanbawza Avenue Golden Valley(1) Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-526985, 524285</p>
            <p><strong>Fax:</strong> 951-512854</p>
            <p><strong>Email:</strong> <a href="mailto:bruneiemb@bruneiemb.com.mm">bruneiemb@bruneiemb.com.mm</a></p>
          </div>

          <div className={styles.missionCard}>
            <h4>Kingdom of Cambodia</h4>
            <p>25(3B/4B), New University Avenue Road, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-549609, 540964</p>
            <p><strong>Fax:</strong> 951-541462</p>
            <p><strong>Email:</strong> <a href="mailto:camemb.mmr@maf.gov.kh">camemb.mmr@maf.gov.kh</a></p>
          </div>

          <div className={styles.missionCard}>
            <h4>People’s Republic of China</h4>
            <p>1, Pyidaungsu Yeiktha Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-221280, 221281, 224025, 224097, 221926</p>
            <p><strong>Fax:</strong> 951-227019, 228319</p>
            <p>The corner of 22 and 63 street. Mandalay</p>
            <p><strong>Ph:</strong>(02) 34457/58</p>
            <p><strong>Fax:</strong>(02) 35944</p>
          </div>
          <div className={styles.missionCard}>
            <h4>The Arab Republic of Egypt</h4>
            <p>81, Pyidaungsu Yeiktha Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-222886, 222887</p>
            <p><strong>Fax:</strong> 951-222865</p>
            <p><strong>Email:</strong> <a href="mailto:egyptembassyyangon@gmail.com">egyptembassyyangon@gmail.com</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of France</h4>
            <p>102, Pyidaungsu Yeiktha Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-212178, 212520, 212523, 212528, 512532</p>
            <p><strong>Fax:</strong> 951-212527</p>
            <p><strong>Email:</strong> <a href="mailto:ambafrance.rangoun@diplomatie.fr">ambafrance.rangoun@diplomatie.fr</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Federal Republic of Germany</h4>
            <p>9, Bogyoke Aung San Museum Street, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-548951, 548952, 548953</p>
            <p><strong>Fax:</strong> 951-548899</p>
            <p><strong>Email:</strong> <a href="mailto:info@rangun.diplo.de">info@rangun.diplo.de</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of India</h4>
            <p>C 545-547, Merchant Street, Kyauktada Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-391219, 388412, 243972</p>
            <p><strong>Fax:</strong> 951-254086, 250164, 388414</p>
            <p><strong>Email:</strong> <a href="mailto:indiaembassy@mptmail.net.mm">indiaembassy@mptmail.net.mm</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of Indonesia</h4>
            <p>100, Pyidaungsu Yeiktha Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-254465, 254469, 229750</p>
            <p><strong>Fax:</strong> 951-254468</p>
            <p><strong>Email:</strong> <a href="mailto:info@kbriyangon.org">info@kbriyangon.org</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>The State of Israel</h4>
            <p>15, Khabaung Street, Hlaing Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-515115</p>
            <p><strong>Fax:</strong> 951-515116</p>
            <p><strong>Email:</strong> <a href="mailto:info@yangon.mfa.gov.il">info@yangon.mfa.gov.il</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of Italy</h4>
            <p>3, Inya Myaing Road, Golden Valley, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-527100, 527101</p>
            <p><strong>Fax:</strong> 951-514565</p>
            <p><strong>Email:</strong> <a href="mailto:ambyang.mail@esteri.it">ambyang.mail@esteri.it</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>State of Japan</h4>
            <p>100, Natmauk Road, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-549644-8, 540411, 540400, 540399, 545988</p>
            <p><strong>Fax:</strong> 951-549643</p>
          </div>
          <div className={styles.missionCard}>
            <h4>Democratic People’s Republic of Korea (North)</h4>
            <p>4/D U Kyaw Hla Street ,Mayangon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-651917</p>
            <p><strong>Fax:</strong> 951-651918</p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of Korea (South)</h4>
            <p>97, University Avenue, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-527142, 527143, 527144, 515190</p>
            <p><strong>Fax:</strong> 951-513286</p>
            <p><strong>Email:</strong> <a href="mailto:Myanmar@mofa.gov.kr">Myanmar@mofa.gov.kr</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of Korea (South)</h4>
            <p>97, University Avenue, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-527142, 527143, 527144, 515190</p>
            <p><strong>Fax:</strong> 951-513286</p>
            <p><strong>Email:</strong> <a href="mailto:Myanmar@mofa.gov.kr">Myanmar@mofa.gov.kr</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Lao People’s Democratic Republic</h4>
            <p>A-1, Diplomatic Quarters, Taw Win Street, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-222482</p>
            <p><strong>Fax:</strong> 951-227446</p>
            <p><strong>Email:</strong> <a href="mailto:laomyanmar@Yahoo.com">laomyanmar@Yahoo.com</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Federation of Malaysia</h4>
            <p>82, Pyidaungsu Yeiktha Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-220248, 220249, 220251, 220230</p>
            <p><strong>Fax:</strong> 951-221840</p>
            <p><strong>Email:</strong> <a href="mailto:mwyangon@kln.gov.my">mwyangon@kln.gov.my</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Federal Democratic Republic of Nepal</h4>
            <p>16, Natmauk Yeiktha Lane, Tamwe Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-545880, 557168</p>
            <p><strong>Fax:</strong> 951-549803</p>
            <p><strong>Email:</strong> <a href="mailto:nepemb@mptmail.net.mm">nepemb@mptmail.net.mm</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Islamic Republic of Pakistan</h4>
            <p>A-4, Diplomatic Quarters, Pyay Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-222881</p>
            <p><strong>Fax:</strong> 951-221147</p>
            <p><strong>Email:</strong> <a href="mailto:pakembyangon@gmail.com">pakembyangon@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="http://www.mofa.gov.pk/myanmar" target="_blank" rel="noopener">www.mofa.gov.pk/myanmar</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of the Philippines</h4>
            <p>50, Saya San Road, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-558149, 558150-53</p>
            <p><strong>Fax:</strong> 951-558154</p>
            <p><strong>Email:</strong> <a href="mailto:p.e.yangon@gmail.com">p.e.yangon@gmail.com</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of the Philippines</h4>
            <p>50, Saya San Road, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-558149, 558150-53</p>
            <p><strong>Fax:</strong> 951-558154</p>
            <p><strong>Email:</strong> <a href="mailto:p.e.yangon@gmail.com">p.e.yangon@gmail.com</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Russian Federation</h4>
            <p>38, Sagawa Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-241955, 254161</p>
            <p><strong>Fax:</strong> 951-241953</p>
            <p><strong>Email:</strong> <a href="mailto:rusinmyanmar@mptmail.net.mm">rusinmyanmar@mptmail.net.mm</a></p>
            <p><strong>Website:</strong> <a href="http://www.myanmar.mid.ru" target="_blank" rel="noopener">www.myanmar.mid.ru</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Kingdom of Saudi Arabia</h4>
            <p>287/289, U Wisara Road, Sanchaung Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-536153, 516952</p>
            <p><strong>Fax:</strong> 951-516951</p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of Serbia</h4>
            <p>114-A, Inya Road, Kamaryut Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-515282, 515283</p>
            <p><strong>Fax:</strong> 951-504274</p>
            <p><strong>Email:</strong> <a href="mailto:serbemb@yangon.net.mm">serbemb@yangon.net.mm</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Republic of Singapore</h4>
            <p>238, Dhamazedi Road, Bahan Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-559001</p>
            <p><strong>Fax:</strong> 951-559002, 559922</p>
            <p><strong>Email:</strong> <a href="mailto:singemb_ygn@sgmfa.gov.sg">singemb_ygn@sgmfa.gov.sg</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Democratic Socialist Republic of Sri Lanka</h4>
            <p>34, Taw Win Street, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-222812</p>
            <p><strong>Fax:</strong> 951-221509</p>
            <p><strong>Email:</strong> <a href="mailto:srilankaemb@mpt.net.mm">srilankaemb@mpt.net.mm</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Democratic Socialist Republic of Sri Lanka</h4>
            <p>34, Taw Win Street, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-222812</p>
            <p><strong>Fax:</strong> 951-221509</p>
            <p><strong>Email:</strong> <a href="mailto:srilankaemb@mpt.net.mm">srilankaemb@mpt.net.mm</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Kingdom of Thailand</h4>
            <p>94, Pyay Road, Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-226721, 226728, 226824</p>
            <p><strong>Fax:</strong> 951-221713</p>
            <p><strong>Email:</strong> <a href="mailto:thaiygn@mfa.gov.th">thaiygn@mfa.gov.th</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>United Kingdom of Great Britain and Northern Ireland</h4>
            <p>80, Kan-na Road, Kyauktada Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-370867, 380322, 371852, 371853, 256438, 370863</p>
            <p><strong>Fax:</strong> 951-370866</p>
            <p><strong>Email:</strong> <a href="mailto:Visa.Rangoon@fco.gov.uk">Visa.Rangoon@fco.gov.uk</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>United State of America</h4>
            <p>110, University Avenue, Kamayut Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-536509, 535756,508038</p>
            <p><strong>Fax:</strong> 951-511069</p>
            <p><strong>Email:</strong> <a href="mailto:consularrangoon@state.gov">consularrangoon@state.gov</a></p>
          </div>
          <div className={styles.missionCard}>
            <h4>Socialist Republic of Vietnam</h4>
            <p>No.256-268,Ahlone Road. Dagon Tsp, Yangon.</p>
            <p><strong>Ph:</strong> 951-230 3227</p>
            <p><strong>Fax:</strong> 951-230 3226</p>
            <p><strong>Email:</strong> <a href="mailto:vnembmyr2012@gmail.com">vnembmyr2012@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}