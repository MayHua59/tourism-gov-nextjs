import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./TourismPoliceOffices.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "旅游警察办事处",
  description: "缅甸各地旅游警察部门的联系信息。"
};

export default function TourismPoliceOffices() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/58.jpg" altText="tourism police offices cover photo" />
      <Breadcrumb
        items={[
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "旅游警察办事处", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>旅游警察办事处</h1>
        <p>缅甸各地旅游警察部门的联系信息。</p>

        <section id="police-units">
          <div className={styles.tableResponsive}>
            <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>旅游警察办事处</th>
                  <th>地址</th>
                  <th>电话号码</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>总部</td>
                  <td>内比都 Zabuthiri 镇酒店1区 第2警察局内及办公点</td>
                  <td>067-414303, 067-414364</td>
                </tr>
                <tr>
                  <td>内比都分部</td>
                  <td>总部大楼内</td>
                  <td>067-414226, 09-448539518</td>
                </tr>
                <tr>
                  <td>仰光分部</td>
                  <td>皎达大镇班索丹路110号(中段)</td>
                  <td>01-379991, 09-448539519</td>
                </tr>
                <tr>
                  <td>曼德勒分部</td>
                  <td>昂密亚达散镇民德埃金区90街与达帕街之间 警察宿舍区</td>
                  <td>02-67382, 09-791107831</td>
                </tr>
                <tr>
                  <td>彬乌伦分队</td>
                  <td>彬乌伦镇地方警察局內</td>
                  <td>09-422527811</td>
                </tr>
                <tr>
                  <td>蒲甘分部</td>
                  <td>新蒲甘 蒲甘地方警察局内</td>
                  <td>061-65474, 09-448539508</td>
                </tr>
                <tr>
                  <td>波巴山分队</td>
                  <td>波巴山山顶红宝石阶梯理事会大楼内</td>
                  <td>09-256261413</td>
                </tr>
                <tr>
                  <td>掸邦分部</td>
                  <td>良瑞(茵莱)镇地方警察局内</td>
                  <td>081-209911, 09-448539509</td>
                </tr>
                <tr>
                  <td>格劳分队</td>
                  <td>格劳镇地方警察局內</td>
                  <td>09-428313074</td>
                </tr>
                <tr>
                  <td>宾达亚分队</td>
                  <td>宾达亚地方警察局內</td>
                  <td>09-49355319</td>
                </tr>
                <tr>
                  <td>伊洛瓦底分部</td>
                  <td>伊洛瓦底分部(威桑和羌达)设于各自的地方警察局內</td>
                  <td>09-250236373, 09-250188328</td>
                </tr>
                <tr>
                  <td>室利差吧罗(骠国古城)分部</td>
                  <td>勃固省卑谬镇瑞山陀塔北殿</td>
                  <td>09-250236373, 09-250188328</td>
                </tr>
                <tr>
                  <td>勃固分队</td>
                  <td>勃固镇瑞摩陀塔西殿供电局大楼内</td>
                  <td>09-250471372</td>
                </tr>
                <tr>
                  <td>毗湿奴(骠国古城)分部</td>
                  <td>马圭省东敦枝镇地方警察局内</td>
                  <td>063-51148, 09-256016729</td>
                </tr>
                <tr>
                  <td>汉林(骠国古城)分部</td>
                  <td>实皆省瑞波地区韦莱镇地方警察局内</td>
                  <td>09-400536332</td>
                </tr>
                <tr>
                  <td>实皆-敏贡分队</td>
                  <td>敏贡警察局內</td>
                  <td>09-797399188</td>
                </tr>
                <tr>
                  <td>毛淡棉分部</td>
                  <td>孟邦毛淡棉镇芒岸区芒岸警察哨所</td>
                  <td>09-977044493, 09-254299912</td>
                </tr>
                <tr>
                  <td>吉谛瑜分队</td>
                  <td>孟邦吉桃镇基孟羌警察局</td>
                  <td>09-428206641</td>
                </tr>
                <tr>
                  <td>妙瓦底分部</td>
                  <td>克伦邦妙瓦底镇地方警察局内</td>
                  <td>09-43200250</td>
                </tr>
                <tr>
                  <td>大其力分部</td>
                  <td>掸邦大其力镇巴萨区昂山将军路218号</td>
                  <td>09-428003877</td>
                </tr>
                <tr>
                  <td>额布里分部</td>
                  <td>若开邦丹兑镇杰道警察局</td>
                  <td>09-403714839</td>
                </tr>
                <tr>
                  <td>谬乌分队</td>
                  <td>若开邦谬乌镇欣特康佛塔附近考古局大楼</td>
                  <td>09-787191051, 09-253448499</td>
                </tr>
                <tr>
                  <td>甘帕莱分队</td>
                  <td>钦邦甘帕莱镇警察局</td>
                  <td>09-73056986</td>
                </tr>
                <tr>
                  <td>土瓦分队</td>
                  <td>德林达依省土瓦镇巴莱警察大院</td>
                  <td>09-250477105, 09-47053133</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="police-hotlines">
          <h3>旅游警察热线及地点</h3>
          <div className={styles.tableResponsive}>
            <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>编号</th>
                  <th>地点</th>
                  <th>电话号码</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>总部</td>
                  <td>067-414303, 067-414364</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>内比都</td>
                  <td>067-414226</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>仰光</td>
                  <td>01-379991</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>曼德勒</td>
                  <td>02-67382</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>彬乌伦</td>
                  <td>09-422527811</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>蒲甘</td>
                  <td>061-65474</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>波巴山</td>
                  <td>09-256261413</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>掸邦</td>
                  <td>081-209911</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>宾达亚</td>
                  <td>09-49355319</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>格劳</td>
                  <td>09-428313074</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>大其力</td>
                  <td>09-428003877</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>伊洛瓦底</td>
                  <td>09-250236373</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>室利差吗罗</td>
                  <td>09-250188328</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>勃固</td>
                  <td>09-250343438</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>毗湿奴</td>
                  <td>09-250471372</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>毗湿奴</td>
                  <td>063-51148</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>汉林</td>
                  <td>09-2560167729, 09-47061503</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>敏贡</td>
                  <td>09-797399188</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>毛淡棉</td>
                  <td>09-8548090</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>吉谛瑜</td>
                  <td>09-428206641</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>额布里</td>
                  <td>09-403714839, 043-42191</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>谬乌</td>
                  <td>09-253448499, 09-78719105</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>妙瓦底</td>
                  <td>09-43200250</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>甘帕莱</td>
                  <td>09-73056986</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>土瓦</td>
                  <td>09-250477105, 09-47053133</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>垒固</td>
                  <td>09-420153119</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
