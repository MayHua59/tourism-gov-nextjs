import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Duties.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Duties and Responsibilites",
  description: "Duties and responsibilities of departments and offices under the Ministry of Hotels and Tourism."
};

export default function DutiesAndResponsibilities() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/44.jpg"
        altText="duties and responsibilities cover photo"
      />
      <Breadcrumb
        items={[
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "Duties and Responsibilites", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Duties and Responsibilites</h1>

        <h2 className={styles.sectionTitle}>Union Minister&apos;s Office</h2>

        <section id="administration">
          <h2 className={styles.sectionTitle}>Administration and Human Resources Management Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Manage the administrative affairs of the offices of the Minister and Permanent Secretary.</li>
            <li className={styles.dutiesListItem}>Manage staff and general administration of the Ministry&apos;s office.</li>
            <li className={styles.dutiesListItem}>Coordinate the selecting of participants to attend training in Myanmar</li>
            <li className={styles.dutiesListItem}>Supervising the activities of the Ministry&apos;s delegates attending conferences, exhibitions and seminars held in Myanmar and abroad.</li>
            <li className={styles.dutiesListItem}>Coordinating the administration of business registration, licensing and tax as managed by the Ministry.</li>
          </ul>
        </section>

        <section id="policy">
          <h2 className={styles.sectionTitle}>Policy Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Promulgating, amending and supplementing on policy, laws, rules, procedures and orders.</li>
            <li className={styles.dutiesListItem}>Scrutinizing the matters submitted by respective departments under the ministry, to be in line with policy and procedures.</li>
            <li className={styles.dutiesListItem}>Supervising, cooperating and issuing on policies and procedures agreed with regional and international organizations.</li>
            <li className={styles.dutiesListItem}>Performing and clarifying on agreements and questions asked by Hluttaw and other government organizations.</li>
            <li className={styles.dutiesListItem}>Submitting the memorandum to the Union Government&apos;s meeting and committees of the Union Government.</li>
            <li className={styles.dutiesListItem}>Scrutinizing the Ministry&apos;s policy as well as the related activities being implemented by the Ministry.</li>
          </ul>
        </section>

        <section id="planning">
          <h2 className={styles.sectionTitle}>Planning and Statistics Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Reporting on the progress and planning of short term, long term and yearly plans.</li>
            <li className={styles.dutiesListItem}>Negotiating and implementing projects of the Ministry, States &amp; Regions.</li>
            <li className={styles.dutiesListItem}>Coordinating the collection of statistical data from MOHT for distribution to other Ministries.</li>
            <li className={styles.dutiesListItem}>Manage the collection of current or relevant statistical data.</li>
            <li className={styles.dutiesListItem}>Collecting and storing documents and data by computerized technology.</li>
            <li className={styles.dutiesListItem}>Continuously monitoring the collection and distribution of the data to the States &amp; the Regions.</li>
            <li className={styles.dutiesListItem}>Implementing the e-government and information technology system.</li>
            <li className={styles.dutiesListItem}>Assessing and analysing research.</li>
            <li className={styles.dutiesListItem}>Maintaining performance records of organisations which are supervised by MOHT in conjunction with ICT.</li>
          </ul>
        </section>

        <section id="audit">
          <h2 className={styles.sectionTitle}>Internal Audit and Finance Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Managing budgets in accordance with the procedures.</li>
            <li className={styles.dutiesListItem}>Collecting budget data from departments on a monthly basis.</li>
            <li className={styles.dutiesListItem}>Monitoring the budget allocations and expanding the department in line with the Government&apos;s functions.</li>
            <li className={styles.dutiesListItem}>Managing the budget process to be in line with procedures.</li>
            <li className={styles.dutiesListItem}>Performing internal audits within the Ministry.</li>
            <li className={styles.dutiesListItem}>Coordinating with the Union Auditor General Office in the auditing process and managing issues arising from the audit process.</li>
          </ul>
        </section>

        <section id="relations">
          <h2 className={styles.sectionTitle}>Public Relations &amp; Information Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Providing support to domestic and international media.</li>
            <li className={styles.dutiesListItem}>Marketing the activities of the Ministry of Hotels and Tourism by sharing tourism related information on the Website and Social Media.</li>
            <li className={styles.dutiesListItem}>Providing technical assistance for video conferences and meetings with ministries, Regions &amp; State Governments as a part of the e-Governance activities.</li>
            <li className={styles.dutiesListItem}>Producing videos for tourism related meetings including international organizations, ceremonies and activities of the Ministry of Hotels &amp; Tourism.</li>
            <li className={styles.dutiesListItem}>Managing the permission process for special interest tours entering Myanmar such as caravan tours, motorcycle tours, cycling tours, yacht tours, cruise tours, river-cruise tours and charter flight tours.</li>
            <li className={styles.dutiesListItem}>Providing travel news to MRTV and uploading news on the Ministry website and Facebook.</li>
          </ul>
        </section>

        <section id="union">
          <h2 className={styles.sectionTitle}>e-Government Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Coordinate with government organizations, Union ministries, and Region/State governments to successfully implement e-Government Common Application tasks.</li>
            <li className={styles.dutiesListItem}>Take responsibility and implement the ministry&apos;s ICT-related projects.</li>
            <li className={styles.dutiesListItem}>In accordance with the ministry&apos;s policies and objectives, implement ICT-related projects to enhance and improve public service delivery.</li>
            <li className={styles.dutiesListItem}>Continuously research and explore new and modern technologies to propose their integration into the ministry&apos;s processes.</li>
            <li className={styles.dutiesListItem}>Organize and deliver training programs to increase the number and capacity of ICT-skilled staff within the ministry.</li>
            <li className={styles.dutiesListItem}>Prepare and submit short-term and long-term e-Government plans, and propose the required budgeting for implementation.</li>
          </ul>
        </section>

        <section id="executive">
          <h2 className={styles.sectionTitle}>Executive Office</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Manage the administrative affairs of the offices of the Minister and Permanent Secretary.</li>
            <li className={styles.dutiesListItem}>Manage staff and general administration of the Ministry's office.</li>
            <li className={styles.dutiesListItem}>Coordinate the selecting of participants to attend training in Myanmar</li>
            <li className={styles.dutiesListItem}>Supervising the activities of the Ministry's delegates attending conferences, exhibitions and seminars held in Myanmar and abroad.</li>
            <li className={styles.dutiesListItem}>Coordinating the administration of business registration, licensing and tax as managed by the Ministry.</li>
          </ul>
        </section>

        <h2 className={styles.sectionTitle}>Directorate Of Hotels And Tourism</h2>

        <section id="budget">
          <h2 className={styles.sectionTitle}>Administration and Budget Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Manage the internal accounting and legal operations of the Department including salaries, pensions, employee information, building and vehicle maintenance.</li>
            <li className={styles.dutiesListItem}>Manage the budget planning and funds allocation process.</li>
            <li className={styles.dutiesListItem}>Collecting rental fees from leased private hotels and JV hotels.</li>
            <li className={styles.dutiesListItem}>Managing Foreign currency dealings.</li>
            <li className={styles.dutiesListItem}>Compiling monthly report.</li>
            <li className={styles.dutiesListItem}>Drafting annual statistical report.</li>
            <li className={styles.dutiesListItem}>Replying and submitting audit reports to the Union Auditor General.</li>
            <li className={styles.dutiesListItem}>Performing administrative matters in conjunction with offices.</li>
          </ul>
        </section>

        <section id="hotels">
          <h2 className={styles.sectionTitle}>Hotels and Tourism Supervising Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Issuing and supervising Hotels, Motels and Lodging-house business licences.</li>
            <li className={styles.dutiesListItem}>Issuing and supervising tour operation enterprise licences.</li>
            <li className={styles.dutiesListItem}>Issuing and supervising tourist transport business licences.</li>
            <li className={styles.dutiesListItem}>Issuing and supervising tour guide business licences.</li>
            <li className={styles.dutiesListItem}>Reviewing and supervising hotels and tourism law, rules, orders and directives.</li>
            <li className={styles.dutiesListItem}>Inspecting and supervising Business Licenses that have been issued by the Ministry of Hotels &amp; Tourism.</li>
            <li className={styles.dutiesListItem}>Collecting hotel and tourism's statistical data.</li>
            <li className={styles.dutiesListItem}>Managing and supervising the duties and responsibilities of the Directorate of Hotels &amp; Tourism's branch offices which issue all four business licences.</li>
            <li className={styles.dutiesListItem}>Supporting and cooperating with the Human Resources Department in the development of training programmes for the Hotels &amp; Tourism industry and promoting the Hotels &amp; Tourism sector.</li>
          </ul>
        </section>

        <section id="training">
          <h2 className={styles.sectionTitle}>Training and Education Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Selecting candidates to attend meetings, workshops, seminars and other events held by the Ministry and related organisations.</li>
            <li className={styles.dutiesListItem}>Supervising and conducting hotel and training schools for the private sector.</li>
            <li className={styles.dutiesListItem}>Collaborating with organisations from overseas to conduct capacity building training in Myanmar.</li>
            <li className={styles.dutiesListItem}>Registering and keeping records of the training and participants.</li>
            <li className={styles.dutiesListItem}>Organising regional training courses for hotel and tourism industry.</li>
            <li className={styles.dutiesListItem}>Managing the library of the Ministry of Hotels &amp; Tourism.</li>
            <li className={styles.dutiesListItem}>Managing the administration of Tourism Training and Education Department.</li>
            <li className={styles.dutiesListItem}>Performing extra duties as required.</li>
          </ul>
        </section>

        <section id="planning2">
          <h2 className={styles.sectionTitle}>Planning Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Disseminating information regarding procedures relating to proposals for hotel projects to Local and Foreign Entrepreneurs.</li>
            <li className={styles.dutiesListItem}>Scrutinising proposals for hotel projects submitted by Local and Foreign Entrepreneurs.</li>
            <li className={styles.dutiesListItem}>Developing hotel zones, coordinating with other departments of the Ministry of Hotels &amp; Tourism and relevant Regional Authorities.</li>
            <li className={styles.dutiesListItem}>Developing new hotel projects, conducting studies and planning for the implementation process.</li>
            <li className={styles.dutiesListItem}>Managing local and foreign hotel projects in accordance with the legal laws, procedures and directives.</li>
            <li className={styles.dutiesListItem}>Managing the implementation of local and foreign projects.</li>
            <li className={styles.dutiesListItem}>Monitoring continuously the implementation of hotel projects in order to conform with the terms and conditions contained in the contracts.</li>
            <li className={styles.dutiesListItem}>Reporting on matters relating to breach of contract so as to take legal action.</li>
            <li className={styles.dutiesListItem}>Coordinating with relevant departments on matters related to importing hotel equipment, materials, taxation and other matters.</li>
            <li className={styles.dutiesListItem}>Scrutinising the construction designs of the projects.</li>
            <li className={styles.dutiesListItem}>Drafting Agreements.</li>
          </ul>
        </section>

        <section id="international">
          <h2 className={styles.sectionTitle}>International &amp; Regional Cooperation Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Overviewing Tourism Cooperation agreements under the frameworks of ASEAN, Greater Mekong Sub-region (GMS), Cambodia-Laos-Myanmar-Vietnam (CLMV), Ayeyarwady-Chao Phraya-Mekong Economic Cooperation Strategy (ACMECS), Bay of Bengal Initiative for Multi-sectoral Technical and Economic Cooperation (BIMSTEC).</li>
            <li className={styles.dutiesListItem}>Collecting budget data from departments on a monthly basis.</li>
            <li className={styles.dutiesListItem}>Bilateral cooperation with International and Regional Countries.</li>
          </ul>
        </section>

        <section id="promotion">
          <h2 className={styles.sectionTitle}>Tourism Promotion Department</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>Creating greater awareness of tourism destinations, tourist destinations and events through long term promotional activities.</li>
            <li className={styles.dutiesListItem}>The development promotional materials such as brochures, pamphlets, CD, and DVD for international travel shows and tourism destinations activities through Myanmar embassies abroad.</li>
            <li className={styles.dutiesListItem}>Producing pamphlets and brochures promoting potential tourist destinations in Myanmar.</li>
            <li className={styles.dutiesListItem}>Making necessary arrangements for participants to attend international travel shows, workshops, forums and seminars relating to tourism.</li>
            <li className={styles.dutiesListItem}>Socialising with neighbouring countries but also other potential partners to develop marketing and promotional opportunities.</li>
            <li className={styles.dutiesListItem}>Implementing activities and events related to tourism promotion and marketing in accordance with the guidance of Union Minister.</li>
            <li className={styles.dutiesListItem}>Coordinating and cooperating in tourism promotional events and festivals for the domestic market.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
