import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
// import styles from "./MyanmarMissions.module.css";
import styles from "@/app/en/myanmar-missions/MyanmarMissions.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Миссии Мьянмы",
  description: "Контактная информация дипломатических миссий Мьянмы по всему миру."
};

export default function MyanmarMissions() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/52.jpg" altText="myanmar missions cover photo" />
      <Breadcrumb
        items={[
          { label: "Главная", href: "/ru", icon: faHome },
          { label: "Миссии Мьянмы", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Миссии Мьянмы (Myanmar Missions)</h1>

        <section id="myanmar-missions" className={styles.mt5}>
  <h3 className={styles.missionsRegion}>Myanmar Missions (Asia &amp; Pacific)</h3>
  <div className={styles.missionCard}>
    <h4>Commonwealth of Australia, Canberra</h4>
    <p><strong>Address:</strong> 22 ARKANA STREET, YARRALUMLA, ACT 2600, CANBERRA, AUSTRALIA</p>
    <p><strong>Tel:</strong> (61-2) 6273 3811, 6273 3751, 6273 9883</p>
    <p><strong>Fax:</strong> (61-2) 6273 3181</p>
    <p><strong>Email:</strong> <a href="mailto:mecanberra@bigpond.com">mecanberra@bigpond.com</a></p>
    <p><strong>Website:</strong> <a href="http://mecanberra.com.au/" target="_blank" rel="noopener">mecanberra.com.au</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>People&#8217;s Republic of China, Beijing</h4>
    <p><strong>Address:</strong> No. 6 DONGZHI MEN WAI STREET, CHAO YANG DISTRICT, 100600</p>
    <p><strong>Tel:</strong> (0086) (10) 6532 0351 (2 Lines)</p>
    <p><strong>Fax:</strong> (0086) (10) 6532 0408</p>
    <p><strong>Website:</strong> <a href="http://www.myanmarembassy.com" target="_blank" rel="noopener">www.myanmarembassy.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>People&#8217;s Republic of China, Hong Kong</h4>
    <p><strong>Address:</strong> RM 2401-2405 &amp; 2436-2440, 24/F, SUN HUNG KAI CENTRE, 30 HARBOUR ROAD, WANCHAI</p>
    <p><strong>Tel:</strong> (852) 2845 0810, 2845 0811</p>
    <p><strong>Fax:</strong> (852) 2845 0820</p>
    <p><strong>Email:</strong> <a href="mailto:myancghk@biznetvigator.com">myancghk@biznetvigator.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmar.e-consulate.org" target="_blank" rel="noopener">www.myanmar.e-consulate.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>People&#8217;s Republic of China, Kunming</h4>
    <p><strong>Address:</strong> No. 99 YINGBINLU, GUAN DU QU, KUNMING 650214</p>
    <p><strong>Tel:</strong> (86) (871) 68162804, 68162814, 68162818</p>
    <p><strong>Fax:</strong> (86) (871) 68162808</p>
    <p><strong>Email:</strong> <a href="mailto:mcgkunming.cn@gmail.com">mcgkunming.cn@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.mcgkunming.org/" target="_blank" rel="noopener">www.mcgkunming.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>People&#8217;s Republic of China, Nanning</h4>
    <p><strong>Address:</strong> NO 16-7, GUIHUA ROAD, CONSULAR DISTRICT, NANNING, 530028, P.R China</p>
    <p><strong>Tel:</strong> (86) (771) 5672 845, 5672 391</p>
    <p><strong>Fax:</strong> (86) (771) 5672 192</p>
    <p><strong>Email:</strong> <a href="mailto:MyanmarCGNN@gmail.com">MyanmarCGNN@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.mcgnanning.org/" target="_blank" rel="noopener">www.mcgnanning.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Japan, Tokyo</h4>
    <p><strong>Address:</strong> 4-8-26, KITA-SHINAGAWA, SHINAGAWA-KU, TOKYO 140-0001</p>
    <p><strong>Tel:</strong> (81) (3) 3441-9291, 3441-9293,3441-9294, 3441-9029, 3441-9044</p>
    <p><strong>Fax:</strong> (81) (3) 3447-7394</p>
    <p><strong>Email:</strong> <a href="mailto:contact@Myanmar-embassy-tokyo.net">contact@Myanmar-embassy-tokyo.net</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmar-embassy-Tokyo.net" target="_blank" rel="noopener">www.myanmar-embassy-Tokyo.net</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Republic of Korea, Seoul</h4>
    <p><strong>Address:</strong> HANNAM-DAERO 28-GIL 12, YONGSAN-GU, SEOUL, P.O. BOX 140-210</p>
    <p><strong>Tel:</strong> (82-2) 790 3814, 790 3815, 790 3816</p>
    <p><strong>Fax:</strong> (82-2) 790 3817</p>
    <p><strong>Email:</strong> <a href="mailto:Myanmar@kotis.net">Myanmar@kotis.net</a></p>
    <p><strong>Website:</strong> <a href="http://www.meseoul.org/" target="_blank" rel="noopener">www.meseoul.org</a></p>
  </div>

  <h3 className={styles.missionsRegion}>Myanmar Missions (Southeast Asia)</h3>
  <div className={styles.missionCard}>
    <h4>Republic of Indonesia, Jakarta</h4>
    <p><strong>Address:</strong> JL. SRIWIFAYA 3, N0.28 (A), KEBAYORAN BARU JAKARTA SELATAN, INDONESIA</p>
    <p><strong>Tel:</strong> (62 21) 29306018</p>
    <p><strong>Fax:</strong> (62 21) 29306019</p>
    <p><strong>Email:</strong> <a href="mailto:myanmarmissionjakarta@gmail.com">myanmarmissionjakarta@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="mailto:myanmarprmission2014@gmail.com">myanmarprmission2014@gmail.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Negara Brunei Darussalam, Bandar Seri Begawan</h4>
    <p><strong>Address:</strong> NO.14, LOT 2185/46292 SIMPANG 212 JALAN KAMPONG RIMBA, GADONG BE-3119 P.O. BOX 1309 POST OFFICE GADONG 3978</p>
    <p><strong>Tel:</strong> (673) 2451960, (673) 2451961</p>
    <p><strong>Fax:</strong> (673) 2451963</p>
    <p><strong>Email:</strong> <a href="mailto:embassymyanmar.brunet@gmail.com">embassymyanmar.brunet@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.mebandarseribegawan.org/" target="_blank" rel="noopener">www.mebandarseribegawan.org/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Kingdom of Cambodia, Phnom Penh</h4>
    <p><strong>Address:</strong> 181, PREAH NORODOM BOULEVARD, SANGKAT BOEUNG KENG KANG 1, KHAN CHAMCARMON, PHNOM PENH</p>
    <p><strong>Tel:</strong> (855-23) 223 761, 223 762</p>
    <p><strong>Fax:</strong> (855-23) 223 763</p>
    <p><strong>Email:</strong> <a href="mailto:mephnompenh@yahoo.com">mephnompenh@yahoo.com</a></p>
  </div>
 
  <div className={styles.missionCard}>
    <h4>Republic of Indonesia, Jakarta</h4>
    <p><strong>Address:</strong> 109, JL HAJI AGUS SALIM, MENTENG, JAKARTA PUSAT, INDONESIA</p>
    <p><strong>Tel:</strong> (62 21) 315 8908, 315 9095</p>
    <p><strong>Fax:</strong> (62 21) 316 0079</p>
    <p><strong>Email:</strong> <a href="mailto:www.mejakarta109@gmail.com">www.mejakarta109@gmail.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Lao People&#8217;s Democratic Republic, Vientiane</h4>
    <p><strong>Address:</strong> LAO-THAI ROAD, WATNAK VILLAGE, SISATTANAK DISTRICT, P.O.BOX NO.11, VIENTIANE, LAO P.D.R.</p>
    <p><strong>Tel:</strong> (856) (21) 314910, 314911, 353491</p>
    <p><strong>Fax:</strong> (856) (21) 314913</p>
    <p><strong>Email:</strong> <a href="mailto:mmevte@laotel.com">mmevte@laotel.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.mevientiane.org/" target="_blank" rel="noopener">www.mevientiane.org/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Persekutuan Malaysia, Kuala Lumpur</h4>
    <p><strong>Address:</strong> 8(C), JALAN AMPANG HILIR, 55000, KUALA LUMPUR</p>
    <p><strong>Tel:</strong> (603) 4251 4455, 4251 5595, 4251 6355</p>
    <p><strong>Fax:</strong> (603) 4251 3855</p>
    <p><strong>Email:</strong> <a href="mailto:myanmarembassykl@gmail.com">myanmarembassykl@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://myanmarembassy-kl.org" target="_blank" rel="noopener">myanmarembassy-kl.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Republic of the Philippines, Manila</h4>
    <p><strong>Address:</strong> 8th FLOOR, GERVASIA CORPORATE CENTRE, 152 AMORSOLO STREET, LEGASPI VILLAGE, MAKATI CITY, METRO MANILA</p>
    <p><strong>Tel:</strong> 0063(2) 893 1944</p>
    <p><strong>Fax:</strong> 0063(2) 892 8866</p>
    <p><strong>Email:</strong> <a href="mailto:me.manila@gmail.com">me.manila@gmail.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Republic of Singapore, Singapore</h4>
    <p><strong>Address:</strong> 15, ST. MARTIN&#8217;S DRIVE, SINGAPORE 257996</p>
    <p><strong>Tel:</strong> (0065) 6735 0209 (6) Lines</p>
    <p><strong>Fax:</strong> (0065) 6735 6236</p>
    <p><strong>Email:</strong> <a href="mailto:ambassador@myanmarembassy.sg">ambassador@myanmarembassy.sg</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmarembassy.sg" target="_blank" rel="noopener">www.myanmarembassy.sg</a></p>
  </div>
  
  <div className={styles.missionCard}>
    <h4>Kingdom of Thailand, Bangkok</h4>
    <p><strong>Address:</strong> 132, SATHORN NUA ROAD, BANGKOK 10500</p>
    <p><strong>Tel:</strong> (662) 233-2237, 234-4698, 233-7250, 234 4789, 237 7744</p>
    <p><strong>Fax:</strong> (233) 236-6898, 233-7250</p>
    <p><strong>Email:</strong> <a href="mailto:myanmarembassybkk@gmail.com">myanmarembassybkk@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmarembassybkk.com" target="_blank" rel="noopener">www.myanmarembassybkk.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Kingdom of Thailand, Chiang Mai</h4>
    <p><strong>Address:</strong> 9/4 MANEENOPPARAT SOI 3, SRIPHUM,A. MUEANG CHIANG MAI, CHIANG MAI 50200</p>
    <p><strong>Tel:</strong> (66) (52) 004 211</p>
    <p><strong>Fax:</strong> (66) (52) 004 216</p>
    <p><strong>Email:</strong> <a href="mailto:mogchiangmai@gmail.com">mogchiangmai@gmail.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Socialist Republic of Vietnam, Hanoi</h4>
    <p><strong>Address:</strong> 298 A, KIM MA STREET, HANOI</p>
    <p><strong>Tel:</strong> (0084) (4) 3845 3369, 3823 2056</p>
    <p><strong>Fax:</strong> (0084) (4) 3845 2404</p>
    <p>
      <strong>Email:</strong> <a href="mailto:consular@mehanoi.org">consular@mehanoi.org</a>,{" "}
      <a href="mailto:poleco@mehanoi.org">poleco@mehanoi.org</a>,{" "}
      <a href="mailto:office@mehanoi.org">office@mehanoi.org</a>
    </p>
    <p><strong>Website:</strong> <a href="http://www.mehanoi.org" target="_blank" rel="noopener">www.mehanoi.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Socialist Republic of Vietnam, Hanoi</h4>
    <p><strong>Address:</strong> 298 A, KIM MA STREET, HANOI</p>
    <p><strong>Tel:</strong> (0084) (4) 3845 3369, 3823 2056</p>
    <p><strong>Fax:</strong> (0084) (4) 3845 2404</p>
    <p>
      <strong>Email:</strong> <a href="mailto:consular@mehanoi.org">consular@mehanoi.org</a>,{" "}
      <a href="mailto:poleco@mehanoi.org">poleco@mehanoi.org</a>,{" "}
      <a href="mailto:office@mehanoi.org">office@mehanoi.org</a>
    </p>
    <p><strong>Website:</strong> <a href="http://www.mehanoi.org" target="_blank" rel="noopener">www.mehanoi.org</a></p>
  </div>
</section>
<section id="myanmar-missions-south-west-asia" className={styles.mt5}>
  <h3 className={styles.missionsRegion}>Myanmar Missions (South &amp; West Asia)</h3>

  <div className={styles.missionCard}>
    <h4>People&#8217;s Republic of Bangladesh, Dhaka</h4>
    <p><strong>Address:</strong> HOUSE NO.2, ROAD NO. 11, BARIDHARA- MODEL TOWN, DHAKA 1212</p>
    <p><strong>Tel:</strong> (88-02) 988 8903, 989 6331, 989 6298, 989 6373, 988 9215</p>
    <p><strong>Fax:</strong> (88-02) 882 3740</p>
    <p><strong>Email:</strong> <a href="mailto:mynembdk@dhaka.net">mynembdk@dhaka.net</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmarembassydhaka.com/" target="_blank" rel="noopener">www.myanmarembassydhaka.com/</a></p>
  </div>

  <div className={styles.missionCard}>
    <h4>Republic of India, New Delhi</h4>
    <p><strong>Address:</strong> 3/50 F, NYAYAMARG, CHANAKYAPURI NEW DELHI 110021</p>
    <p><strong>Tel:</strong> ++91 11 2467 8822, ++91 11 2467 8823</p>
    <p><strong>Fax:</strong> ++91 11 2467 8824</p>
    <p><strong>Email:</strong> <a href="mailto:myandelhi@gmail.com">myandelhi@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmedelhi.com/" target="_blank" rel="noopener">www.myanmedelhi.com/</a></p>
  </div>

  <div className={styles.missionCard}>
    <h4>Republic of India, Kolkata</h4>
    <p><strong>Address:</strong> No. 57K, BALLYGUNGE CIRCULA ROAD, (PARMATESH BRUE SARANI ROAD) KOLKATA-700019, REPUBLIC OF INDIA</p>
    <p><strong>Tel:</strong> (0091) (33) 24851658</p>
    <p><strong>Fax:</strong> (0091) (33) 24851655</p>
    <p><strong>Email:</strong> <a href="mailto:mcgkolcg@gmail.com">mcgkolcg@gmail.com</a></p>
  </div>

  <div className={styles.missionCard}>
    <h4>Federal Democratic Republic of Nepal, Kathmandu</h4>
    <p><strong>Address:</strong> NAKHKHU HEIGHT, LALITPUR, KATHMANDU, G.P.O.BOX 2437</p>
    <p><strong>Tel:</strong> (00977) (1) 559 2774, 559 2841</p>
    <p><strong>Fax:</strong> (00977) (1) 559 2776</p>
    <p><strong>Email:</strong> <a href="mailto:myanmaremb@wlink.com.np">myanmaremb@wlink.com.np</a></p>
  </div>

  
  <div className={styles.missionCard}>
    <h4>Democratic Socialist Republic of Sri Lanka, Colombo</h4>
    <p><strong>Address:</strong> 4(A), ROSMEAD AVENUE, ROSMEAD PLACE, COLOMBO 7</p>
    <p><strong>Tel:</strong> (0094-11) 2681 007</p>
    <p><strong>Fax:</strong> (0094-11) 2682 052</p>
    <p><strong>Email:</strong> <a href="mailto:myanlanka@gmail.com">myanlanka@gmail.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Islamic Republic of Pakistan, Islamabad</h4>
    <p><strong>Address:</strong> PLOT NO.99 TO 101, STREET NO.5, SECTOR G-5, DIPLOMATIC ENCLAVE, ISLAMABAD</p>
    <p><strong>Tel:</strong> (0092) (51) 283 22 32</p>
    <p><strong>Fax:</strong> (0092) (51) 283 22 33</p>
    <p><strong>Email:</strong> <a href="mailto:embassy_myanmarisb@yahoo.com">embassy_myanmarisb@yahoo.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.me-islamabad.org" target="_blank" rel="noopener">www.me-islamabad.org</a></p>
  </div>
  </section>
  <section id="myanmar-missions-middle-east-africa" className={styles.mt5}>
  <h3 className={styles.missionsRegion}>Myanmar Missions (Middle East &amp; Africa)</h3>
    <div className={styles.missionCard}>
    <h4>The Arab Republic of Egypt, Cairo</h4>
    <p><strong>Address:</strong> No. 24, MOHAMED MAZHAR St. ZAMALEK, CAIRO.</p>
    <p><strong>Tel:</strong> (00) (202) 2736 2644, 2736 3123</p>
    <p><strong>Fax:</strong> (00) (202) 2735 7712</p>
    <p><strong>Email:</strong> <a href="mailto:me.cairo@gmail.com">me.cairo@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.mecairo.org/" target="_blank" rel="noopener">www.mecairo.org/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>The State of Israel, Tel Aviv</h4>
    <p><strong>Address:</strong> 12th FLOOR,TEXTILE CENTER BUILDING NO.2, KAUFMAN STREET, TEL AVIV, 6801294</p>
    <p><strong>Tel:</strong> (972) (3) 5170760, 5163364</p>
    <p><strong>Fax:</strong> (972) (3) 5163512</p>
    <p><strong>Email:</strong> <a href="mailto:myanmar@zahav.net.il">myanmar@zahav.net.il</a></p>
    <p><strong>Website:</strong> <a href="http://www.metelaviv.org" target="_blank" rel="noopener">www.metelaviv.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>State of Kuwait, Kuwait City</h4>
    <p><strong>Address:</strong> VILLA#35, ST.203, BLOCK 2, AL-SALAAM AREA, SOUTH SURRA, STATE OF KUWAIT</p>
    <p><strong>Tel:</strong> (965) 2524 0736, 2521 6869</p>
    <p><strong>Fax:</strong> (965) 2524 0749</p>
    <p><strong>Email:</strong> <a href="mailto:myankuwait11@gmail.com">myankuwait11@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.mekuwait.org" target="_blank" rel="noopener">www.mekuwait.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Kingdom of Saudi Arabia, Riyadh</h4>
    <p><strong>Address:</strong> No.5, AL-KADI STREET, KING FAHADAREA, RIYADH</p>
    <p><strong>Tel:</strong> (966) (11) 229 3525, 229 3523</p>
    <p><strong>Fax:</strong> (966) (11) 229 3306</p>
    <p><strong>Email:</strong> <a href="mailto:meriyadh@gmail.com">meriyadh@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.meriyadh.org/" target="_blank" rel="noopener">www.meriyadh.org/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>The Republic of South Africa, Pretoria</h4>
    <p><strong>Address:</strong> No.201, LEYDS STREET, ARCADIA, PRETORIA P.O. BOX 12121 QUEENSWOOD 0121</p>
    <p><strong>Tel:</strong> 27-12 341 2556, 341 2557</p>
    <p><strong>Fax:</strong> 27-12 341 2553</p>
    <p><strong>Email:</strong> <a href="mailto:embmya@gmail.com">embmya@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmarembassysa.com/" target="_blank" rel="noopener">www.myanmarembassysa.com/</a></p>
  </div>
  </section>
  <section id="myanmar-missions-europe-americas" className={styles.mt5}>
  <h3 className={styles.missionsRegion}>Myanmar Missions (Europe)</h3>
  <div className={styles.missionCard}>
    <h4>Republic of France, Paris</h4>
    <p><strong>Address:</strong> No. 60, RUE DE COURCELLES, 75008, PARIS</p>
    <p><strong>Tel:</strong> (33) (0)1 56 88 15 90, (0) 1 56 88 15 91</p>
    <p><strong>Fax:</strong> (33) (0) 1 45 62 13 30</p>
    <p><strong>Email:</strong> <a href="mailto:me-paris@wanadoo.fr">me-paris@wanadoo.fr</a></p>
    <p><strong>Website:</strong> <a href="http://myanmarembassy-france.org/" target="_blank" rel="noopener">myanmarembassy-france.org/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Swiss Confederation, Geneva</h4>
    <p><strong>Address:</strong> 47, AVENUE BLANC, 1202 GENEVA</p>
    <p><strong>Tel:</strong> (0041) (22) 906 98 70, 906 98 71</p>
    <p><strong>Fax:</strong> (0041) (22) 732 89 19</p>
    <p><strong>Email:</strong> <a href="mailto:mission@myanmargeneva.org">mission@myanmargeneva.org</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmargeneva.org/index.htm" target="_blank" rel="noopener">www.myanmargeneva.org/index.htm</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Federal Republic of Germany, Berlin</h4>
    <p><strong>Address:</strong> THIELALLEE 19, 14195 BERLIN</p>
    <p><strong>Tel:</strong> (0049 30) 206 1570</p>
    <p><strong>Fax:</strong> (0049 30) 206 15720, 844 18390</p>
    <p><strong>Email:</strong> <a href="mailto:info@botschaft-myanmar.de">info@botschaft-myanmar.de</a></p>
    <p><strong>Website:</strong> <a href="http://www.botschaft-myanmar.de/" target="_blank" rel="noopener">www.botschaft-myanmar.de/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Republic of Italy, Rome</h4>
    <p><strong>Address:</strong> VIA Cortina D’Ampezzo 50, 00135, ROME</p>
    <p><strong>Tel:</strong> 0039-06-36303753, 36304056</p>
    <p><strong>Fax:</strong> 0039-06-36298566</p>
    <p><strong>Email:</strong> <a href="mailto:merome2010@gmail.com">merome2010@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.meroma-it.com/" target="_blank" rel="noopener">www.meroma-it.com/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Russian Federation, Moscow</h4>
    <p><strong>Address:</strong> 41-B. NIKITSKAYA, MOSCOW</p>
    <p><strong>Tel:</strong> (007- 495) 691 56 84, 691 56 14</p>
    <p><strong>Fax:</strong> (007-495) 956 18 78</p>
    <p><strong>Email:</strong> <a href="mailto:email@myanmarembassy.ru/">email@myanmarembassy.ru/</a>, <a
      href="mailto:admin@myanmarembassy.ru/">admin@myanmarembassy.ru/</a>,<a
      href="mailto:myanmarembassy@gmail.com">myanmarembassy@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmarembassy.info" target="_blank" rel="noopener">www.myanmarembassy.info</a>,{" "}
      <a href="http://www.facebook.com/memoscow" target="_blank" rel="noopener">www.facebook.com/memoscow</a></p>
  </div>


  <div className={styles.missionCard}>
    <h4>Republic of Serbia, Belgrade</h4>
    <p><strong>Address:</strong> KNEZA MILOSA 72, 11000 BELGRADE, REPUBLIC OF SERBIA</p>
    <p><strong>Tel:</strong> (381) (11) 361 7 165, 361 9114</p>
    <p><strong>Fax:</strong> (381) (11) 361 4968</p>
    <p><strong>Email:</strong> <a href="mailto:myanbel@sezampro.rs">myanbel@sezampro.rs</a></p>
    <p><strong>Website:</strong> <a href="http://www.mebelgrade.org/" target="_blank" rel="noopener">www.mebelgrade.org/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Kingdom of Belgium, Brussels</h4>
    <p><strong>Address:</strong> No. 9, BOULEVARD GENERAL WAHIS, SCHAERBEEK, 1030 BRUSSELS</p>
    <p><strong>Tel:</strong> (00-32) (2) 701-9380; (2) 701-9381</p>
    <p><strong>Fax:</strong> (00-32) (2) 705-5048</p>
    <p><strong>Email:</strong> <a href="mailto:mebrussels@skynet.be">mebrussels@skynet.be</a></p>
    <p><strong>Website:</strong> <a href="http://www.embassyofmyanmar.be/" target="_blank" rel="noopener">www.embassyofmyanmar.be/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>United Kingdom of Great Britain and Northern Ireland, London</h4>
    <p><strong>Address:</strong> 19A, CHARLES STREET, LONDON W1J 5DX</p>
    <p><strong>Tel:</strong> +44 207 148 0740, 207 499 4340</p>
    <p><strong>Fax:</strong> +44 207 409 7043</p>
    <p><strong>Email:</strong> <a href="mailto:general@myanmarembassylondon.com">general@myanmarembassylondon.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmarembassylondon.com/#Homepage" target="_blank" rel="noopener">www.myanmarembassylondon.com/#Homepage</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Kingdom of Norway, Oslo</h4>
    <p><strong>Address:</strong> 4TH FLOOR, CORT ADELERS GATE 16, OSLO 0254, NORWAY</p>
    <p><strong>Tel:</strong> (+47) 215 15 767</p>
    <p><strong>Fax:</strong> (+47) 215 15 769</p>
    <p><strong>Email:</strong> <a href="mailto:myanmarembassyoslo@gmail.com">myanmarembassyoslo@gmail.com</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Republic of Austria, Vienna</h4>
    <p><strong>Address:</strong> ANDROMEDA TOWER 9TH FLOOR, DONAU-CITY-STRASSE 6,1220 VIENNA, AUSTRIA</p>
    <p><strong>Tel:</strong> (43) 1 2669105</p>
    <p><strong>Fax:</strong> (43) 1 266910520</p>
    <p><strong>Email:</strong> <a href="mailto:myanmarembassy.vienna@gmail.com">myanmarembassy.vienna@gmail.com</a></p>
  </div>
  
   <section id="myanmar-missions-americas" className={styles.mt5}>
  <h3 className={styles.missionsRegion}>Myanmar Missions (Americas)</h3>
    <div className={styles.missionCard}>
    <h4>Federative Republic of Brazil, Brasília</h4>
    <p><strong>Address:</strong> SHIS-QI 25, CEP 71660-250, BRASILIA-DF</p>
    <p><strong>Tel:</strong> 00-55-61 3248 3747, 32482374</p>
    <p><strong>Fax:</strong> 00-55-61 3364 2747</p>
    <p><strong>Email:</strong> <a href="mailto:mebrasilia@gmail.com">mebrasilia@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.myanmarbsb.org/" target="_blank" rel="noopener">www.myanmarbsb.org/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>Canada, Ottawa</h4>
    <p><strong>Address:</strong> No.336. ISLAND PARK DRIVE, OTTAWA, ONTARIO K1Y 0A7, CANADA</p>
    <p><strong>Tel:</strong> (1) (613) 232 9990</p>
    <p><strong>Fax:</strong> (1) (613) 232 6999</p>
    <p><strong>Email:</strong> <a href="mailto:meottawa@rogers.com">meottawa@rogers.com</a>, <a href="mailto:visasection@rogers.com">visasection@rogers.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.meottawa.org/" target="_blank" rel="noopener">www.meottawa.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>United States of America, New York</h4>
    <p><strong>Address:</strong> 10 EAST 77th STREET, NEW YORK, N.Y.10075</p>
    <p><strong>Tel:</strong> (1) (212) 744-1271, 744-1275, 744-1279</p>
    <p><strong>Fax:</strong> (1) (212) 744-1290</p>
    <p><strong>Email:</strong> <a href="mailto:myanmarmission@verizon.net">myanmarmission@verizon.net</a></p>
    <p><strong>Website:</strong> <a href="http://www.mmnewyork.org/" target="_blank" rel="noopener">www.mmnewyork.org</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>United States of America, Washington D.C.</h4>
    <p><strong>Address:</strong> 2300 S STREET, N.W, WASHINGTON, D.C-20008</p>
    <p><strong>Tel:</strong> (1) (202) 332-3344, 332-4350, 332-4352, 238-9332</p>
    <p><strong>Fax:</strong> (1) (202) 332-4351</p>
    <p><strong>Email:</strong> <a href="mailto:pyi.thayar@verizon.net">pyi.thayar@verizon.net</a></p>
    <p><strong>Website:</strong> <a href="http://www.mewashingtondc.com/" target="_blank" rel="noopener">www.mewashingtondc.com/</a></p>
  </div>
  <div className={styles.missionCard}>
    <h4>United States of America, Los Angeles</h4>
    <p><strong>Address:</strong> 3435 WILSHIRE BLVD, SUITE 1590, LOS ANGELES, CALIFORNIA, 90010</p>
    <p><strong>Tel:</strong> (1)(213)387 0040, 387 0041, 387 0043</p>
    <p><strong>Fax:</strong> (1) (213) 387 0042</p>
    <p><strong>Email:</strong> <a href="mailto:myancgla@gmail.com">myancgla@gmail.com</a></p>
  </div>
  </section>
</section>
      </div>
    </div>
  );
}