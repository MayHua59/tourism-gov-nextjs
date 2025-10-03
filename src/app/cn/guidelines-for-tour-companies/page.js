import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Guidelines.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Guidelines for Tour Companies",
  description: "缅甸旅行社合规和许可指南。"
};

export default function GuidelinesForTourCompanies() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/69.jpg" altText="guidelines for tour companies cover photo" />
      <Breadcrumb
        items={[
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "Guidelines for Tour Companies", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>旅行社经营指南</h1>
        <section id="guidelines-content" className={styles.mt5}>
          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>各旅行社须遵守以下规定：</h2>
            <ul className={styles.guidelinesList}>
              <li>
                旅游活动不得涉及无许可进入限制区域。如游客提出进入限制区域的要求，旅行社须提交情况说明。
              </li>
              <li>
                旅行社应对经批准的旅游项目负责，履行监督职责，对工作人员和导游进行管理，并承担相应责任。
              </li>
              <li>
                旅游从业人员应接受规范培训，准确理解酒店与旅游部旅游局及地方政府部门制定的规章制度和行政指令。
              </li>
              <li>
                旅行社须持续关注各地区行政管理部门发布的规定和指示，以便为游客提供全面准确的说明。
              </li>
              <li>
                遇突发事件应立即向酒店与旅游部分支机构、旅游警察或当地警局报告，以便获得及时处置。
              </li>
            </ul>
          </div>

          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>需申请许可的旅游项目</h2>
            <ol className={styles.permissionList}>
              <li>
                自驾游：仅限持个人车辆/摩托车/自行车从妙瓦底、提基、高当、大其力、德穆和里考达等国际边境口岸入境的游客
              </li>
              <li>游艇旅游</li>
              <li>内河航运旅游（伊洛瓦底江及亲敦江流域）</li>
              <li>邮轮旅游</li>
              <li>包机旅游</li>
              <li>热气球旅游及特殊套餐旅游</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
