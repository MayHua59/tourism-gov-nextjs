import { notFound } from "next/navigation";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./NewsDetail.module.css";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const news_list = [
  {
    name: "Myanmar participates in Russia's 5th “Let's Travel!” International Travel Forum opening event",
    slug: "myanmar-participates-international-travel-forum-opening-event",
    description: "MYANMAR delegation led by Union Minister for Hotels and Tourism U Kyaw Soe Win attended the Fifth International Travel Forum “Let's travel!” at VDNH in Moscow from 10 to 15 June 2025.The opening event started with a discussion on the topic:“Discovering Russia: How Travel Is Changing the Country”. Dmitry Chernyshenko, Deputy Prime Minister of the Russian Federation, read out the message sent by Russian President Vladimir Putin, and a video message from Russian Prime Minister Mikhail Mishustin was played.The event continued with the discussion of different perspectives regarding the economy of the country by the governmental officials, entrepreneurs, hoteliers and other experts in tourism and restaurants.On 10 June, the Myanmar delegates met with Russian Economic Development Minister Maxim Reshetnikov.During the meeting, the two parties discussed comprehensive cooperation between governments, privates and people of two countries, Familiarization Trip-FAM Trip, visa-free travel to each other's citizens, bilateral travel expo, high arrival of Russian travellers to Myanmar, further cooperation for Russian government employees to visit Myanmar during long holidays and promising investments in hotels and tourism in Myanmar.The Union minister observed the forum and received the Russian investors of Cosmos Hotel Group and BN Group to discuss Myanmar's beautiful beaches and tourist attractions, potential investment opportunities, and programmes that would provide support for those interested in implementing the pilot projects.The Union minister and party attended the “The Russian Manor: A Celebration of Customs” dinner event at Dom Vishnevsky Centre in Moscow on the same evening. — MNA/ KTZH",
    cover_photo: "/assets/images/news-images/russia.jpg",
    news_category_id: 1,
    active: true,
    timestamp: "2025-06-11T10:30:00Z"
  },
  {
    name: "Homes for flood victims handed over",
    slug: "homes-for-flood-victims-handed-over",
    description: "Union Minister for Hotels and Tourism U Kyaw Soe Win delivers speech at the handover ceremony of housing for flood victims in Nyaungpintha Village, Tatkon Township, Nay Pyi Taw on 3 May.UNION Minister for Hotels and Tourism U Kyaw Soe Win, accompanied by relevant officials, attended the handover ceremony of housing for flood victims in Nyaungpintha village of Magyibin village-tract of Nay Pyi Taw yesterday.The housing was constructed with the help of hotels and tourism-related organizations under the leadership of the Myanmar Tourism Federation and supervision of the Ministry of Hotels and Tourism. Speaking at the event, the Union minister highlighted the buildings for flood victims in Nyaungpintha village-after the 2024 flood, and the construction that included 22 houses, including a Community Centre. He also talked about the training courses for the villagers to create job opportunities. Afterwards, the Nay Pyi Taw Council chairman and relevant officials talked about the education, small-scale manufacturing sectors and rehabilitation processes.",
    cover_photo: "/assets/images/news-images/moht.jpg",
    news_category_id: 2,
    active: true,
    timestamp: "2025-05-04T09:00:00Z"
  },
 
];

export async function generateMetadata({ params }) {
  const news = news_list.find(n => n.slug === params.slug);
  if (!news) return {};
  return {
    title: news.name,
    description: news.description
  };
}

export default function NewsDetail({ params }) {
  const news = news_list.find(n => n.slug === params.slug);

  if (!news) return notFound();

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/14.jpg"
        altText="news cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "News", href: "/en/news" },
          { label: news.name, active: true }
        ]}
      />
      <div className={styles.container}>
        <div className={styles.govtCard}>
          <h1 className={styles.govtTitle}>{news.name}</h1>
          <div className={styles.govtMeta}>
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
            <span>
              <strong>Published on:</strong>{" "}
              {new Date(news.timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className={styles.govtImageWrapper}>
            <img
              src={news.cover_photo}
              alt={news.name}
              className={styles.govtImage}
            />
          </div>
          <div className={styles.govtDesc}>
            {news.description}
          </div>
        </div>
      </div>
    </div>
  );
}