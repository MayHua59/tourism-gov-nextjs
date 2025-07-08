import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./AboutMyanmar.module.css";
import BannerSection from "../../../components/BannerSection";
import { faHome } from "@fortawesome/free-solid-svg-icons"; 

export const metadata = {
  title: "About Myanmar",
  description: "Learn about Myanmar's history, people, geography and more."
};

export default function AboutMyanmar() {
  return (
    <div className={styles.pageContainer}>
    <BannerSection imageUrl="/assets/images/cover-images-title/6.jpg" altText="about myanmar cover photo"/>
<Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "About Myanmar", active: true }
        ]}
      />
    <div className={styles.container}>
     

      

       <h1 className={styles.pageTitle}>About Myanmar</h1>



        <section id="introduction">
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p>Myanmar is one of the last countries of Asia to be revealed to the travelling world. Located between India, China and Thailand, the people of this enchanted land have developed a culture which has endured invasion and change by absorbing and taking the best from those around them and creating their own style and flair. Visitors to Myanmar will find there is much to discover and experience – from pristine natural regions to golden pagodas to relics from an ancient past.</p>
        </section>

        <section id="history">
             <h2 className={styles.sectionTitle}>History</h2>
            <p>Myanmar has a rich and intense history stretching back to times of Pyu dynasty which prospered for a 1000 years from 200 BC to 900 AD. The first Myanmar Empire which was established in Bagan by King Anawrahta in the 11th century. This civilisation lasted of over 200years and was replaced by the second Empire of King Bayinnaung in the 16th century. In 1824 began a number of wars between the Kingdom of Myanmar and the British Empire. These wars culminated in 1885 with the overthrow, by the British, of the last King and the beginning of colonialisation for the next 60 years. During WW2 Myanmar was occupied by the Japanese from 1942 -1945 and in 1948 Myanmar was freed from British rule and became an independent country.</p>
        </section>

        <section id="people">
             <h2 className={styles.sectionTitle}>The People</h2>
            <p>In 2017 the population of Myanmar was 53.37 million and consisted of many different ethnic groups including the Bamar, the largest group, Kachin, Kayin, Kayah, Chin, Mon Rakhine and Shan. Over 80% of the population is Buddhist and the most common language is Burmese, with many ethnic dialects spoken. English is widely spoken, along with Mandarin, Cantonese and Hindu.</p>
            <p>The country is recognised for having many colourful and exciting festivals nearly each month – among them are, Thingyan Water Festival, Naga New Year and the Hot Air Balloon Festival.</p>
            <p>What is for sure is the people of Myanmar are well known for being a warm and friendly towards visitors.</p>
        </section>

        <section id="geography">
             <h2 className={styles.sectionTitle}>Geography</h2>
            <p>Myanmar is officially known as the Republic of the Union of Myanmar and borders Bangladesh, India in the west, China in the north, Laos and Thailand in the east and the Andaman Sea and the Bay of Bengal in the south. The country covers a size of 676,578sq Kms.</p>
            <p>The country is divided into two large regions- Lower Myanmar – Coastal region and Upper Myanmar – Interior Region. There is a mountainous region in the north and whilst the rest of the country is dominated by a number of large and minor rivers spreading across the land.</p>
            <p>Mountains are more common in the north with the highest reaching 5881meters. The interior plains and the delta of the Ayeyarwaddy River are extremely fertile providing rich soil for the paddy fields, which play a huge role in the country’s economy.</p>
            <p>The north west and south west coasts are dotted with islands and beautiful beaches.</p>
            <p>At higher elevations the weather is cooler, whilst the central region has lesser rainfall and the rainy season lasts from mid May to mid October, but overall you can visit all year round.</p>
        </section>

        <section id="transportation">
             <h2 className={styles.sectionTitle}>Transportation</h2>
            <p>The three international airports of Yangon, Mandalay and Nay Pyi Taw are the main arrival points for most international visitors. Internal flights are also available with many domestic centers easily reached by air. Roads connecting the major centres are good, however as you leave these areas the quality varies.</p>
            <p>The rail system, services a large area of the country with the main routes being between Yangon and Mandalay, Kalaw, Pyin Oo Lwin and Hispaw.</p>
        </section>

        <section id="currency">
             <h2 className={styles.sectionTitle}>Currency</h2>
            <p>Myanmar currency is called the Kyat. There are no coins only notes ranging from 1 to 10,000 Kyats. Cash is still widely used however, credit cards are becoming popular in larger centers. It is recommended to carry a small amount of US Dollars. Euros and Singapore dollars can also be changed at banks and official money changers. No other foreign currencies are accepted.</p>
        </section>
    </div>
    </div>
    
  );
}