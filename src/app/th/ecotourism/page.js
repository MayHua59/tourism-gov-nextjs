import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/ecotourism/Ecotourism.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Ecotourism",
  description: "Ecotourism sites and information across Myanmar."
};

/**
 * ECOTOURISM_DATA
 * - Replace the placeholder values with real content from your API or CMS.
 * - Keep the structure: an array of regions, each with a `region` name and `sites` array.
 * - Each site object can contain: title, summary (HTML or plain text), location, area, accessibility.
 *
 * Example:
 * {
 *   region: "NORTHERN REGION",
 *   sites: [
 *     {
 *       title: "Alaungdaw Kathapa National Park, Sagaing Region",
 *       summary: "Admire the scenic view of untouched forests ...",
 *       location: "Yin Mar Pin Township, Sagaing Region",
 *       area: "620.35 Square Miles",
 *       accessibility: "Yangon–Mandalay (1 hour by flight); Mandalay–Alaungdaw Kathapa (238 km by car)"
 *     },
 *     ...
 *   ]
 * }
 *
 * Currently this constant contains empty placeholders so the page renders by looping the structure.
 */
const ECOTOURISM_DATA = [
  {
    region: "NORTHERN REGION",
    sites: [
      {
        title: "Alaungdaw Kathapa National Park, Sagaing Region",
        summary:
          "Admire the scenic view of untouched forests packed with lush coniferous trees and observe bountiful inland bird species found in the area. In the largest National Park in Myanmar, tourists can also visit religious sites and follow the locals in paying respects to the shrines and pagodas in Alaungdawkathapa.",
        location: "Yin Mar Pin Township, Sagaing Region",
        area: "620.35 Square Miles",
        accessibility:
          "Yangon–Mandalay (1 hour by flight); Mandalay–Alaungdaw Kathapa (238 km by car)"
      },
      {
        title: "Chattin Wildlife Sanctuary, Sagaing Region",
        summary:
          "Spend some time in the quaint forest for a wonderful experience in Chattin Wildlife Sanctuary. This sanctuary applies modern technique on wildlife animals research, making this place an important wildlife research site. There is also a special natural history museum that contains interesting evidence of herbal plants and creepers.",
        location: "Kanbalu township, Sagaing Region",
        area: "103.55 square miles",
        accessibility:
          "Yangon–Mandalay–Chattin (517 miles by train); Yangon–Mandalay–Chattin (560 miles by car)"
      },
      {
        title: "Hukaung Valley Wildlife Conservation, Kachin State",
        summary:
          "Discover plenty of flora and fauna in this wildlife conservation. This place is known to be a tiger reserve area which is one of the largest protected forest areas in the world. Apart from that, enjoy a relaxing boat tour in the streams while observing animals in their natural habitat.",
        location: "Tanai Township, Kachin State",
        area: "2,494 sq miles",
        accessibility:
          "Yangon–Myitkyina (2 hours by flight); Myitkyina–Taning (193 km by car)"
      },
      {
        title: "Phon Kan Razi Wildlife Sanctuary, Kachin State",
        summary:
          "The breathtaking view featuring the snow-capped mountain and pine forests prompts visitors to visit this sanctuary. Spend a fruitful day trekking the chilly mountain or experience an exciting raft boat session while being surrounded by green forests. This sanctuary acts as the study and research centre for biodiversity found in Phon Kan Razi.",
        location: "Putao Township, Kachin State",
        area: "",
        accessibility:
          "Yangon–Myitkyina (1 hour by flight); Myitkyina–Putao (25 minutes by flight); Putao–Shangaung village (20 miles by car); Shangaung village–Phon Kan Razi mountain (three nights)"
      },
      {
        title: "Khakaborazhi National Park, Kachin State",
        summary:
          "You can find new species of plants and animals here. Experience trekking on hills and snow-capped mountains while enjoying the panoramic view of the sanctuary's landscape. Mt. Khakaborazhi is an extension of the Himalayas with an elevation of 5,881 metres. The forests in this sanctuary are captivating, making this area a must-visit place for tourists who love nature.",
        location: "Naung Mong Township, Kachin State",
        area: "1,472 sq miles",
        accessibility:
          "Yangon–Myitkyina (2 hours by flight); Myitkyina–Putao (25 minutes by flight); Putao–Naung Mong (35 minutes by car)"
      }
    ]
  },
  {
    region: "EASTERN REGION",
    sites: [
      {
        title: "Panlaung–Pyadalin Cave Wildlife Sanctuary, Shan State",
        summary:
          "Witness the brilliant biodiversity found in this exclusive cave wildlife sanctuary that also serves as a site that stores many histories of Shan and Myanmar. There are also several bat species found in this area. You can go trekking, hiking and camping along the Panlaung Creek. The natural formation of the limestone lining the cave walls also makes this sanctuary a must-visit place.",
        location: "Ywangan township, Shan State",
        area: "128.88 square miles (2002)",
        accessibility:
          "Yangon–Heho (1 hour by flight); Heho–Ywangan (60 miles by car); Yangon–Mandalay (1 hour by flight); Mandalay–Kintar Dam (60 miles by car); Kintar Dam–Pyaddlin Cave (3 miles by waterway)"
      },
      {
        title: "Inle Lake Wildlife Sanctuary, Shan State",
        summary:
          "This wetlands ecotourism site is well-known for its rich ecosystem flourished with natural vegetation, lush greenery, birds, freshwater aquatic animals and other flora and fauna. Tourists can observe rare aquatic species and birds at the lake as well as the unique floating farms handled by local farmers. The scenic beauty of this area coupled with the panoramic environment makes Inle Lake worth a visit.",
        location: "Nyaung Shwe Township, Shan State",
        area: "248 square miles",
        accessibility: "Heho–Nyaung Shwe (30 km by car); Yangon–Heho (1 hour by flight)"
      }
    ]
  },
  {
    region: "CENTRAL & WESTERN REGION",
    sites: [
      {
        title: "Natmataung National Park, Chin State",
        summary:
          "Plenty of activities are available in this national park. Relax and enjoy a laid-back observation of the park's mountainous environment, hike the hills and also experience an informational orchid tour that features Myanmar's rare orchid species found in the forests. This park was also appointed as an ASEAN Heritage Park.",
        location: "Kanpetlet City, Chin State",
        area: "279 Sq miles",
        accessibility: "Yangon–Nyaung Oo (1 hour by flight); Nyaung Oo–Kanpetlet (103 miles by car)"
      },
      {
        title: "Wetthikan Wildlife Sanctuary, Magway Region",
        summary:
          "Witness the migration of different water and winter birds at Wetthikan Wildlife Sanctuary. You will find plenty of bird species here as the sanctuary is one of the migration spots for these birds, including rare species. This sanctuary is also a great place for you to learn more about the ecosystem located at the shore.",
        location: "Salin Township, Magway Region",
        area: "1.7 square miles",
        accessibility:
          "Yangon–Pyay–Shwesettaw (317 miles by road); Yangon–Magway–Shwesettaw (364 miles by road); Shwesettaw–Salin (40 miles by road)"
      },
      {
        title: "Shwesettaw Wildlife Sanctuary, Magway Region",
        summary:
          "This wildlife sanctuary houses several types of research, most notably the country's famous golden deer. Wild birds and animals are common in this area but uncommon to foreign tourists, therefore making this sanctuary even more attractive than it already is. Experience the traditions of the locals and find the great footprints of the Lord Buddha here.",
        location: "Minbu Township, Magway Region",
        area: "179 square miles",
        accessibility:
          "Yangon–Pyay–ShweSettaw (317 miles by car); Yangon–Magway–ShweSettaw (364 miles by car)"
      },
      {
        title: "Lawkananda Sanctuary, Mandalay Region",
        summary:
          "Relax and take your time discovering and analysing a variety of plant species found in the tropical forests of Lawkananda Sanctuary. You will also find rare species of birds in this zone. Take the opportunity to search and admire unique animal species like the golden deer, peacock, flamingo and turtle.",
        location: "Nyaung Oo Township, Mandalay Region",
        area: "18 square miles",
        accessibility:
          "Yangon–Nyaung Oo (1 hour by flight); Yangon–Nyaung Oo (435 miles by car)"
      },
      {
        title: "Popa Mountain National Park, Mandalay Region",
        summary:
          "Enjoy the unique experience of witnessing the beautiful view of a natural oasis in the dry zone of the national park. You can observe rare species of birds and monkeys in the forests as well as discover herbal plants and sandalwood available in the area. There is also a volcano that was estimated to have erupted centuries ago.",
        location:
          "Kyaukpadaung Township, Nyaung Oo District, Mandalay Region",
        area: "67.97 square miles",
        accessibility:
          "Yangon–Kyaukpadaung (410 miles by car); Yangon–Nyaung Oo (1 hour by flight); Nyaung Oo–Popa (30 miles by car)"
      }
    ]
  },
  {
    region: "SOUTHERN REGION",
    sites: [
      {
        title: "Meinmahla Kyun Wildlife Sanctuary, Ayeyarwady Region",
        summary:
          "This wildlife sanctuary is home to the mangroves ecological system where efforts to conserve the forest is implemented by conducting occasional reproductions of mangrove trees. Witness how crocodiles and other aquatic species move around their natural habitats here.",
        location: "Bogalay Township, Ayeyarwaddy Region",
        area: "52.78 square miles",
        accessibility:
          "Yangon–Bogale–Meinmahla Kyun (87 miles by waterway); Yangon–Bogale (84 miles by car); Bogale–Meinmahla Kyun (12 miles by waterway)"
      },
      {
        title: "Thameehla Kyun Wildlife Sanctuary, Ayeyarwady Region",
        summary:
          "The ecosystem is rich with mangrove forests, different types of birds (water birds, inland birds and migratory birds), reptiles and mammals. You can also learn more about turtles in this place including their eggs and natural habitat.",
        location: "Ngaputaw Township, Ayeyarwady Division",
        area: "Total area of island 88 ha (0.9 km²)",
        accessibility:
          "Yangon–Pathein (120 miles by car); Pathein–Ngaputaw (21 miles by car); Ngaputaw–Haigyiikyun (40 miles by waterway); Haigyiikyun–Thameehla Kyun (7 miles by waterway)"
      },
      {
        title: "Phoe Kyar Elephant Camp, Bago Region",
        summary:
          "This elephant camp provides a relaxing getaway to tourists who wish to enjoy a peaceful retreat while observing the lifestyles and behaviours of elephants. Visitors can also enjoy riding tame elephants that are trained by skilled villagers.",
        location: "Yedashe Township, Bago Division",
        area: "20 acres",
        accessibility: "Yangon–Phoe Kyar (170 miles by car)"
      },
      {
        title: "Moeyungyi Wildlife Sanctuary, Bago Region",
        summary:
          "This wildlife sanctuary mainly serves as a habitat for residential and migratory birds. Tourists can observe various bird species and learn more about their behaviours here. The ecosystem and wetlands in this area flourish with lush greenery and multiple animal species, allowing tourists to immerse themselves in a unique adventure in nature.",
        location: "Waw Township, Bago Region",
        area: "40 Square miles",
        accessibility:
          "Yangon–Moeyungyi (69 miles by car); Yangon–Hlawga (30 km by car)"
      },
      {
        title: "Hlawga National Park, Yangon Region",
        summary:
          "Learn about Myanmar's efforts in conserving the nature in Hlawga Park. This national park is the ideal location for tourists who wish to observe several deer species like the barking deer and sambar deer. Visitors can also watch birds, row boats and ride elephants as part of the recreation activities available around the resorts.",
        location: "Mingalardon Township, Yangon Region",
        area: "540 Acres",
        accessibility: "Yangon–Hlawga (22 miles by car)"
      },
      {
        title: "Indawgyi Wetland Wildlife Sanctuary, Kachin State",
        summary:
          "In the first ecotourism site in Myanmar, visitors get to experience activities like rowing canoes, riding motor boats and cycling. The vast ecosystem allows tourists to hike the hills and watch birds and other animals in their natural habitat. The interaction between the locals and tourists provides tourists with great insights into the area.",
        location: "Moenyin Township, Kachin State",
        area: "299.32 square miles",
        accessibility:
          "Yangon–Myitkyina (2 hours by flight); Myitkyina–Hopin (45 miles by car); Hopin–Myitkyina (43 km by car)"
      },
      {
        title: "Kyaikhtiyoe Natural Reserve, Mon State",
        summary:
          "The highlight of this natural reserve is the unusual geographical feature of the Sandawshin Kyaik Hti Yoe Pagoda of the Golden Rock which is known to be a distinct natural rock formation. Trek the jungle and enjoy bird-watching, seeing beautiful orchids and relax in camps that overlook the hilly view of the reserve as well as admire the great waterfall.",
        location: "KyaikHto Township, Mon State",
        area: "60 square miles",
        accessibility: "Yangon–KyaiktiYoe (102 miles by car)"
      },
      {
        title: "Lampi Island Marine National Park, Tanintharyi Region",
        summary:
          "Enjoy water activities that are available at the national park like scuba-diving, swimming and sunbathing. The Salon people welcome visitors to witness and even join them in traditional routines and rituals. You will enjoy immersing yourself into the beauty of mangrove ecosystems while admiring coral reefs, birds and other animals found in the area.",
        location: "Boke-Pyin Township, Tanintharyi Region",
        area: "9 square miles",
        accessibility:
          "Yangon–Kawthaung (2 hours by flight); Kawthaung–Lampi (5 hours by boat)"
      }
    ]
  }
];

export default function EcotourismPage() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/32.jpg" altText="ecotourism cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "커뮤니티 기반 관광 (Ecotourism)", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>커뮤니티 기반 관광 (Ecotourism)</h1>

        {ECOTOURISM_DATA.map((regionBlock) => (
          <section key={regionBlock.region} className={styles.mt5}>
            <h3 className={styles.missionsRegion}>{regionBlock.region}</h3>

            {regionBlock.sites.map((site, idx) => (
              <div key={idx} className={styles.missionCard}>
                <h4>{site.title || "Title goes here"}</h4>

                {site.summary ? (
                  // If your summary contains HTML, store it in `summary` and it will be rendered.
                  // Otherwise store plain text and it will render the same.
                  <p dangerouslySetInnerHTML={{ __html: site.summary }} />
                ) : (
                  <p className={styles.placeholderText}>Summary not provided.</p>
                )}

                {site.location && <p><strong>Location 주소:</strong> {site.location}</p>}
                {site.area && <p><strong>Area Size 면적:</strong> {site.area}</p>}
                {site.accessibility && <p><strong>Accessibility 접근성:</strong> {site.accessibility}</p>}
              </div>
            ))}
          </section>
        ))}

      </div>
    </div>
  );
}