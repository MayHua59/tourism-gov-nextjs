import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/investment-law/InvestmentLaw.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Myanmar Investment Law",
  description: "Key points and provisions of the Myanmar Investment Law."
};

export default function MyanmarInvestmentLaw() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/67.jpg"
        altText="myanmar investment law cover photo"
      />
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/vn", icon: faHome },
          { label: "Myanmar Investment Law", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Myanmar Investment Law</h1>
        <section id="investment-law-content" className={styles.mt5}>
          <div className={styles.investSection}>
            <h2>Submission of Proposal</h2>
            <p>36. The investor shall submit a proposal to the Commission and invest after receiving the Permit for the following businesses stipulated in the rules:</p>
            <ol className={styles.investList}>
              <li>a. investment activities that are essential to the national strategy;</li>
              <li>b. large capital intensive investment projects;</li>
              <li>c. projects which are likely to cause a large impact on the environment and the local community;</li>
              <li>d. investment activities which use state-owned land and building;</li>
              <li>e. investment activities which are designated by the government to require the submission of a proposal to the Commission.</li>
            </ol>
          </div>

          <div className={styles.investSection}>
            <h2>Submission of Endorsement</h2>
            <p>37. No investor is required to submit a proposal to the Commission for other investment businesses except investment businesses stipulated under section</p>
            <p>38. However, in order to enjoy the rights to use land under Chapter XII, and all or more than or any exemptions and reliefs under sections 75, 77 and 78, an endorsement application must be submitted in the stipulated form to the Commission office.</p>
            <p>39. When submitting the endorsement application, all approvals or licenses or permits or similar documents issued by the relevant organizations according to the type of business have to be attached.</p>
          </div>

          <div className={styles.investSection}>
            <h2>Stipulation of the Types of Investment</h2>
            <p>40. In investment, the following are also included:</p>
            <ol className={styles.investList}>
              <li>a. enterprise;</li>
              <li>b. moveable property, immovable property and rights related to property, cash, pledges, mortgages and liens, machinery, equipment, spareparts, and related tools;</li>
              <li>c. shares, stocks, and debentures (a) promissory note of a company;</li>
              <li>d. intellectual property rights under any laws, including technical knowhow, patent, industrial designs, and trademarks;</li>
              <li>e. claims to money and to any performance under contracts having a financial value;</li>
              <li>f. revenue-sharing contract, or production, management, construction, rights under contracts, including turnkey;</li>
              <li>g. assignable rights granted by relevant laws or contract, including the rights of exploration, prospecting and extraction of natural resources;</li>
            </ol>
          </div>

          <div className={styles.investSection}>
            <p>41. The following investments businesses shall be stipulated as the prohibited investment:</p>
            <ol className={styles.investList}>
              <li>a. investment activities which may bring or cause the hazardous or poisonous wastes into the Union;</li>
              <li>b. investment activities which may bring technologies, medicines, flora and fauna and instruments which are still being tested abroad or which have not been obtained approvals to use, plant and cultivate, except the investments which made for the purpose of research and development;</li>
              <li>c. investment activities which may affect the traditional culture and customs of the ethnic groups within the Union;</li>
              <li>d. investment activities which may affect the public;</li>
              <li>e. investment activities which may cause an enormous impact to the natural environment and ecosystem;</li>
              <li>f. investment activities which manufacture goods or provide services that are prohibited under the applicable law.</li>
            </ol>
          </div>

          <div className={styles.investSection}>
            <p>42. The following types of investment activities shall be stipulated as restricted investment:</p>
            <ol className={styles.investList}>
              <li>a. investment activities allowed to carry out only by the Union;</li>
              <li>b. investment activities that are not allowed to carry out by foreign investors;</li>
              <li>c. investment activities allowed only in the form of joint venture with any citizen owned entity or any Myanmar citizen; and</li>
              <li>d. investment activities to be carry out with the approval of the relevant Ministries.</li>
            </ol>
          </div>

          <div className={styles.investSection}>
            <h2>Rights to Use Land</h2>
            <p>50.</p>
            <ol className={styles.investList}>
              <li>a. An Investor who obtains permit or endorsement under this Law has the right to obtain a long-term lease of land or building from the owner if it is private land or building, or from the relevant government departments or government organization if it is land managed by the government, or land or building owned by the Union in accordance with the stipulations in order to do investment. Citizen investors may invest in their own land or building in accordance with relevant laws.</li>
              <li>b. Foreign investor may lease land or building either from the government or government organizations or from owners of private land or building from commencing on the date of receipt of the permit or endorsement of the Commission up to an initial period of (50) years in accordance with the stipulation.</li>
              <li>c. After the expiry of the term of the right to use land or building or the period of right to lease of land or building permitted under subsection b, a consecutive period of (10) years and a further consecutive period of (10) years extension to such period of lease of land or building may be obtained with the approval of the Commission.</li>
              <li>d. The investor shall register the land lease contract at the Office of Registry of Deeds in accordance with the Registration Act.</li>
              <li>e. The Government may grant more favorable terms and conditions for the lease of land and the use of land by Myanmar citizen investors.</li>
              <li>f. The Commission shall for the purpose of the development of the entire Union with the approval of the Pyidaungsu Hluttaw submitted through the Government, grant a longer period for the rights to lease land or building and the rights to use land or building and the right to use under in this Law, to investors who invest in less developed and remote region.</li>
            </ol>
          </div>

          <div className={styles.investSection}>
            <h2>Responsibilities of Investors</h2>
            <p>65. The Investor:</p>
            <ol className={styles.investList}>
              <li>a. shall respect and comply with the customs, traditions and traditional culture of the ethnic groups in the Union;</li>
              <li>b. shall establish and register a company or sole proprietorship or legal entities or branches of such entities under the Laws in order to invest;</li>
              <li>c. shall abide by the terms and conditions, stipulations of special licenses, permits, and business operation certificates issued to them, including the rules, notifications, orders, and directives and procedures issued by this Law and the applicable laws, terms and conditions of contract and tax obligations;</li>
              <li>d. shall carry out in accordance with the stipulations of the relevant department if it is, by the nature of business or by other need, required to obtain any license or permit from the relevant Union Ministries, government departments and government organizations, or to carry out registration;</li>
              <li>e. shall immediately inform to the Commission if it is found that natural mineral resources or antique objects and treasure trove are not related to the investment permitted above and under the land on which the investor is entitled to lease or use and not included in the original contracts. If the Commission allows, the investor shall continue to carry out the investment in such land, and if not allowed, the investor shall transfer and carry out, by obtaining the permission, at the substituted place which is selected and submitted by him;</li>
              <li>f. shall not make any significant alteration of topography or elevation of the land on which he is entitled to lease or to use, without the approval of the Commission;</li>
              <li>g. shall abide by applicable laws, rules, procedures and best standards practiced internationally for this investment so as not to cause damage, pollution, and loss to the natural and social environment and not to cause damage to cultural heritage;</li>
              <li>h. shall list and keep proper records of books of account and annual financial statement, and necessary financial matters relating to the investments performed by permit or endorsement in accordance with internationally and locally recognized accounting standards;</li>
              <li>i. shall close and discontinue the investment only after payment of compensation to employees in accordance with applicable laws for any breach of employment contracts, closure of investment, sale and transfer of investment, discontinuation of investment, or reduction of workforce;</li>
              <li>j. shall pay wages and salaries to employees in accordance with applicable laws, rules, procedures, directives and so forth during the period of suspension of investment for a credible reason;</li>
              <li>k. shall pay compensation and indemnification in accordance with applicable laws to the relevant employee or his successor for injury, disability, disease and death due to the work;</li>
              <li>l. shall supervise foreign experts, supervisors and their families, who employ in their investment, to abide by the applicable laws, rules, orders and directives, and the culture and traditions of Myanmar;</li>
              <li>m. shall respect and comply with the labor laws;</li>
              <li>n. shall have the right to sue and to be sued in accordance with the laws;</li>
              <li>o. shall pay effective compensation for loss incurred to the victim, if there are damage to the natural environment and socioeconomic losses caused by logging or extraction of natural resources which are not related to the scope of the permissible investment, except from carrying out the activities required to conduct investment in a permit or an endorsement.</li>
              <li>p. shall allow the Commission to inspect in any places, when the Commission informs the prior notice to inspect the investment;</li>
              <li>q. shall take in advance permit or endorsement of the Commission for the investments which need to obtain prior approval under the Environmental Conservation Law and the procedures of environmental impact assessment, before undertaking the assessment, and shall submit the situation of environmental and social impact assessment to the Commission along the period of activities of the investments which obtained permit or endorsement of the Commission.</li>
            </ol>
          </div>

          <div className={styles.investSection}>
            <h2>Exemptions and Reliefs</h2>
            <p>74. The Commission shall, for the purpose of supporting the development of the Union by allowing investment in sectors which need to be developed, and for the proportionate development of Regions and States, scrutinize and may grant one or more tax exemptions or reliefs if the investor applies for such exemptions or reliefs.</p>
            <p>75.</p>
            <ol className={styles.investList}>
              <li>a. With respect to the income tax exemption, designated the less developed regions as Zone (1), the moderate developed regions as Zone(2),and the adequate developed regions as Zone (3), the Commission shall, with the approval of the Government, issue a notification and may grant income tax exemptions to investment businesses in Zone(1) for a period of 7 consecutive years including the year of commencement of commercial operation, investment businesses in Zone (2) for a period of 5 consecutive years including the year of commencement of commercial operation, and investment businesses in Zone(3) for a period of 3 consecutive years including the year of commencement of commercial operation.</li>
              <li>b. With the approval of the Government, the Commission may change the designation of the zones from time to time depending on the development of the respective regions.</li>
              <li>c. Income tax exemptions shall be granted only for the sectors specified by the Commission in the notification as the sectors to promote the investments.</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}