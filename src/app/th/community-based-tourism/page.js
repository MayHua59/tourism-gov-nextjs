import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/community-based-tourism/Community.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Community-Based Tourism",
  description: "Community-Based Tourism (CBT) programmes across Myanmar."
};
const CBT_DATA = [
  {
    region: "NORTHERN REGION",
    sites: [
      {
        title: "Inndawgyi Lake",
        subtitle: "Kachin State",
        description:
          "The Inndawgyi Wildlife Sanctuary was Myanmar's first eco-tourism site. Opened in 2013, this sanctuary is the result of the ministries of hotels and tourism's efforts in environmental conservation. As of 2016, four villages were appointed as CBT sites: Lone Tone, Haipu, Nant Mee Laung He and Nyaung Pyinat. Local residents provide bed-and-breakfast accommodation as part of the CBT programmes. Package tours organised by organisations and travel companies are also available. Tourists can enjoy kayaking, cycling, explore villages and discover the history of religious sites."
      },
      {
        title: "Irrawaddy Dolphins",
        subtitle: "Sagaing Region",
        description:
          "This Community-Based Tourism (CBT) programme involves six Ayeyarwady villages between Sagaing and Mandalay. It showcases a special interaction between local fishermen and the famous Irrawaddy Dolphins. Visitors gain hands-on experience in fishing and casting nets under the guidance of local fishermen/women. Boat trips along the Ayeyarwady River offer splendid views of nature and wildlife. Tourists can also observe village life and learn about architecture, religion, tradition, and handicraft skills."
      },
      {
        title: "Nwe Nyein Village (Shwebo)",
        subtitle: "Sagaing Region",
        description:
          "In Sagaing Region's CBT, tourists experience pottery-making and learn local agricultural practices. The programme allows visitors to explore the region's natural beauty and nearby heritage sites, including a rare Pyu city listed as a UNESCO World Heritage."
      },
      {
        title: "Zalon Taung (Banmauk, Katha)",
        subtitle: "Sagaing Region",
        description:
          "CBT in Zalon Taung was initiated in 2017. Foreign tourists are not allowed entry because the area remains a restricted zone, but the programme attracted 76,854 domestic visitors between December 2017 and September 2018 who participated in CBT activities."
      }
    ]
  },

  {
    region: "EASTERN REGION",
    sites: [
      {
        title: "Loikaw",
        subtitle: "Kayah State",
        description:
          "In 2016 Loikaw received the CBT initiative in four villages: Pan Pet, Hta Nee La Leh, Daw Ta Ma Gyi and Htay Kho. The state is rich with distinctive tribes and diverse culture — tours offer insight into tribal lifestyles, handicrafts and silversmithing. Locals invite tourists to join cooking (e.g. Kayah sausages) and share Kayah rice wine during feast occasions."
      },
      {
        title: "Pa-O CBT",
        subtitle: "Shan State (Lwe Kaw, Inne, Hteenae, Kakku)",
        description:
          "Four Pa-O villages (Lwe Kaw, Inne, Hteenae and Kakku) were chosen as CBT sites. Visitors can discover Pa-O culture, crafts, cultivation and cooking skills, join dance and folk-song events, and taste traditional delicacies while engaging with villagers to help keep their culture alive."
      },
      {
        title: "Sikyaa Inn & Pin Sein Pin Villages",
        subtitle: "Pindaya, Shan State",
        description:
          "The Danu CBT focuses on the Danu people in Pin Sein Pin and Sikyaa Inn villages (Pindaya Township). One lodge in each village offers close interaction with locals. Villagers bring visitors trekking, introduce traditional agriculture, and invite them to participate in cultural dances and events."
      },
      {
        title: "Lwenwe Phaya Taung Yay Seit Village",
        subtitle: "Nyaung Shwe, Shan State",
        description:
          "This CBT initiative built six bungalows (each accommodating up to 12 visitors). With locals nearby, tourists can observe and participate in daily routines — a unique hands-on experience to immerse in traditional village life."
      },
      {
        title: "Samkar Village (Samkar Lake CBT)",
        subtitle: "Nyaung Shwe, Shan State",
        description:
          "Samkar Lake CBT (started 2017; 1-day packages launched in 2019) brings travelers to Shan, Pa'O and Intha communities. Activities include home-cooked traditional lunches at local homes, bamboo raft or handmade canoe rides, workshop and handicraft visits, and stays at the eco-friendly Samkar Kham Lodge built from bamboo with solar panels. Community guides lead village tours and local delicacies are available in the annexed restaurant."
      },
      {
        title: "Lwal Pann Sone Community Based Tourism",
        subtitle: "Pekon Township, Shan State",
        description:
          "Lwal Pann Sone provides four CBT lodges and activities such as kayaking, traditional agriculture experiences, sightseeing and cultural learning led by locals throughout Pekon Township."
      },
      {
        title: "Ywar Ngan (Implementing CBT Site)",
        subtitle: "Shan State",
        description:
          "This pending initiative requires villagers to attend training in local guiding, hotel services, history and destination knowledge to ensure the community can provide helpful services to tourists when the CBT site launches."
      }
    ]
  },

  {
    region: "CENTRAL & WESTERN REGION",
    sites: [
      {
        title: "Sor Long Village",
        subtitle: "Kanpetlet, Chin State",
        description:
          "Sor Long Village (chosen as a CBT site in 2017) offers visitors a chance to observe Chin people's culture and traditions. Locals guide tourists to climb Khaw Nau Sone Mountain, visit Kawlong Waterfall, spend a night in an almost untouched village, and join local celebrations involving dance and traditional Chin wine."
      },
      {
        title: "Ta Suan Village",
        subtitle: "Falam, Chin State",
        description:
          "Ta Suan village — selected as a CBT site in 2018 — is known for its historical value as the former residence of Chin leader Bo John Bi and as a WWII-era communication hub. Visitors appreciate the village architecture, formation and historical landmarks."
      },
      {
        title: "Myaing (4 villages CBT)",
        subtitle: "Magway Region",
        description:
          "CBT in Magway was implemented across four villages: East Kangyi Taw, West Kangyi Taw, Inn Yaung and Suli Pan. Visitors can cycle around villages, observe local routines, visit a 170-year-old monastery, and enjoy traditional bullock-cart rides. CBT members receive skill training to qualify as guides, handicraft/weaving experts and more."
      },
      {
        title: "Magyikan Village (Tamarind Lake Village Homes)",
        subtitle: "Chauk, Magway Region",
        description:
          "Magyikan Village showcases local culture and traditions through trekking with locals, tasting traditional cuisines and snacks, riding bullock carts, and visiting tamarind juice production sites."
      },
      {
        title: "Htan Pin Gone Village",
        subtitle: "Magway Region",
        description:
          "Tourists can enjoy sightseeing, exploring natural forests and witnessing village agriculture. An old monastery (around 100 years old) attracts visitors; activities include weaving, fishing, swimming and bamboo raft riding under local guidance."
      },
      {
        title: "Hsiithe & Myitkangyi Villages",
        subtitle: "Singu, Mandalay Region",
        description:
          "Selected as CBT sites in October 2016, Sithe and MyitKanGyi villages let tourists experience authentic village life through architecture, activities, handicraft-making, pottery and traditional fishing techniques (casting nets guided by local fishermen)."
      },
      {
        title: "Mingun–Kyauk Myaung (multiple villages)",
        subtitle: "Mandalay Region",
        description:
          "Daung, YwarThit, Myay Sun, Sein Pan Gone, Aye Kyun and HsinKyun villages are noted for cultural and natural diversity. With up to six participating villages, tourists witness distinctive clans, diverse traditions and Irrawaddy Dolphins interacting with fishermen while learning traditional fishing."
      },
      {
        title: "Sin Taung (Implementing CBT Site)",
        subtitle: "Tharsi, Mandalay Region",
        description:
          "Negotiations to launch CBT in Sin Taung Village are ongoing. Plans include building a village lounge with comfortable rooms to accommodate tourists, allowing visitors to experience authentic local lifestyles if the CBT is launched."
      }
    ]
  },

  {
    region: "SOUTHERN REGION",
    sites: [
      {
        title: "Kyaikthalae Village And Bio Garden",
        subtitle: "Twantay, Yangon Region",
        description:
          "CBT in Kyaikthalae village (Twante Township) lets tourists witness bio-garden planting, basket weaving, visits to monastic schools, and interactions with students. Visitors can learn natural fertilizer creation, crop cultivation and small-scale poultry farming."
      },
      {
        title: "San Hlan Village",
        subtitle: "Dawei, Thanintharyi Region",
        description:
          "Initially piloted in Launglon Township, San Hlan CBT has three lodges (up to 20 visitors). Close to the beach, visitors can relax or join water activities like snorkeling and swimming, enjoy panoramic views, and learn traditional fishing from local fishermen."
      },
      {
        title: "Donnyaungmhine Village (Implementing CBT Site)",
        subtitle: "Myeik, Thanintharyi Region",
        description:
          "A proposed CBT in Makyonegalet Village, Kaw Thaung, is on hold due to land ownership issues; Donnyaungmhine is a pending site rich with cultural and natural diversity awaiting implementation."
      },
      {
        title: "Makyonegalet Village (Implementing CBT Site)",
        subtitle: "Kaw Thaung, Thanintharyi Region",
        description:
          "Proposals for CBT in Makyonegalet Village were paused because of land ownership disputes. The site remains a candidate with cultural and natural attractions for future CBT development."
      },
      {
        title: "Than Taung Gyi",
        subtitle: "Kayin State",
        description:
          "Villagers offer bed-and-breakfast services and local guiding. Trained locals provide quality visitor experiences — tourists can explore forests with local guides and join community festivals for an authentic cultural encounter."
      }
    ]
  }
];

export default function CommityBasedTourismPage() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/55.jpg" altText="community based tourism cover" />
      <Breadcrumb
        items={[
          { label: "หน้าแรก", href: "/th", icon: faHome },
          { label: "การท่องเที่ยวระบบคันธรรมสิทธิ์", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>การท่องเที่ยวระบบคันธรรมสิทธิ์ (CBT)</h1>

        <div className={styles.intro}>
          <p>
            The Ministry of Hotels and Tourism promotes Community-Based Tourism (CBT) so locals and tourists can engage in cultural exchange,
            learn local traditions, and support community development. Participate in CBT programmes to interact with Myanmar&apos;s diverse peoples,
            gain cultural knowledge, and contribute to local skills and livelihoods.
          </p>
        </div>

        {CBT_DATA.map((regionBlock) => (
          <section key={regionBlock.region} className={styles.regionSection}>
            <h3 className={styles.regionTitle}>{regionBlock.region}</h3>

            {regionBlock.sites.map((site, idx) => (
              <div key={idx} className={styles.siteCard}>
                <h4 className={styles.siteTitle}>{site.title}</h4>

                {site.subtitle && <h5 className={styles.siteSubtitle}>{site.subtitle}</h5>}

                {site.description ? (
                  <p className={styles.siteSummary}>{site.description}</p>
                ) : (
                  <p className={styles.placeholder}>Description not available.</p>
                )}
              </div>
            ))}
          </section>
        ))}

      </div>
    </div>
  );
}