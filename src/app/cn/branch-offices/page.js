import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./BranchOffices.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "分支机构",
  description: "缅甸酒店与旅游部各地分支机构的联系信息。"
};

export default function BranchOffices() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/16.jpg" altText="branch offices cover photo" />
      <Breadcrumb
        items={[
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "分支机构", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>分支机构</h1>
        <p className={styles.paragraph}>以下是我们在缅甸各地分支机构的联系信息。</p>
        <div className={styles.tableResponsive}>
          <table className={styles.branchTable}>
            <thead>
              <tr>
                <th>编号</th>
                <th>分支机构</th>
                <th>地址</th>
                <th>联系电话</th>
                <th>电子邮箱</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>内比都</td>
                <td>邦政府办公楼</td>
                <td></td>
                <td><a href="mailto:naypyidaw@tourism.gov.mm">naypyidaw@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>仰光</td>
                <td>仰光市 波昂觉街甘纳路58/60号</td>
                <td>01-256739, 256828, 01-256748, 256561, 2</td>
                <td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>曼德勒</td>
                <td>曼德勒市 84×85巷29街211号(介于68街与27街之间)</td>
                <td>02-2848041, 2848042, 4066624</td>
                <td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>土瓦</td>
                <td>土瓦市 南方市场街 宰耶区135号</td>
                <td>059-2021098, 2021231</td>
                <td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>东枝</td>
                <td>东枝市 昂山将军街 妙马区142号</td>
                <td>081-2124275, 2121115, 2121302</td>
                <td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>实兑</td>
                <td>实兑市 塔塔塔纳街 菲塔村 比塔塔区</td>
                <td>043-22048, 22049, 21557</td>
                <td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td>蒲甘</td>
                <td>蒲甘市 蒲甘-良乌和乔克高速公路路口 建西塔区4号</td>
                <td>061-2465040</td>
                <td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td>马圭</td>
                <td>马圭市 昂山将军街 昂山将军公园旁</td>
                <td>063-2025057</td>
                <td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td>蒙育瓦</td>
                <td>蒙育瓦市 皎嘎街 延金区</td>
                <td>071-21152</td>
                <td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td>勃固</td>
                <td>勃固市 北部宰甘宁区 3×4巷5号</td>
                <td>052-2221113, 2201768</td>
                <td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td>勃生</td>
                <td>勃生市 公园路 4区24号</td>
                <td>042-21146</td>
                <td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td>景栋</td>
                <td>景栋市 瑙贡区 拉韦巴韦街21/22号</td>
                <td>084-21617</td>
                <td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td>腊戌</td>
                <td>腊戌市 1区 布哈尔街</td>
                <td>082-2203015</td>
                <td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td>垒固</td>
                <td>垒固市 皎贡区 奥特拉拉寺院前</td>
                <td>083-2221078</td>
                <td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td>密支那</td>
                <td>密支那市 塔贡区 伊甸街</td>
                <td>074-22622</td>
                <td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td>丹兑</td>
                <td>丹兑市 2区 公园路</td>
                <td>043-2065311</td>
                <td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td>毛淡棉</td>
                <td>毛淡棉市 博贡区 上主路106号</td>
                <td>057-27056, 24650</td>
                <td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td>帕安</td>
                <td>帕安市 2区 宰坦街 妙内塔辛街角</td>
                <td>058-21075</td>
                <td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td>哈卡</td>
                <td>哈卡市 昂山将军街</td>
                <td>424812864</td>
                <td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td>墨吉</td>
                <td>墨吉市 索内康当区 甘皮亚路 帕雅科苏</td>
                <td>059-41037</td>
                <td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td>高当</td>
                <td>高当市 巴因瑙区 昂山将军街角</td>
                <td>059-51578</td>
                <td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td>木姐</td>
                <td>木姐市 南塔门附近 东木韦区56号</td>
                <td>082-51534</td>
                <td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td>大其力</td>
                <td>大其力市 友谊桥1号</td>
                <td>084-52197</td>
                <td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td>班茂</td>
                <td>班茂市 塔约克丹区 甘纳街</td>
                <td>074-50281</td>
                <td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>25</td>
                <td>谬乌</td>
                <td>谬乌市 基亚坎苏区</td>
                <td>043-50327</td>
                <td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>26</td>
                <td>妙瓦底</td>
                <td>妙瓦底市 4区 巴因瑙街 7层102号</td>
                <td>058-51391</td>
                <td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>27</td>
                <td>敏达</td>
                <td>敏达市 远东</td>
                <td>070-70389</td>
                <td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>28</td>
                <td>彬乌伦</td>
                <td>彬乌伦市 卡拉丹区 阔彬5区3号</td>
                <td>085-21935</td>
                <td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>29</td>
                <td>瑞波</td>
                <td>瑞波市 实皆省北部南乌妙迪 3区 塔卡丹区 兰马道街 妙松街</td>
                <td>075-21057</td>
                <td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>30</td>
                <td>吉灵庙</td>
                <td>吉灵庙市 甘米亚昂西区 吉灵庙街11号</td>
                <td>073-21011</td>
                <td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>31</td>
                <td>卑谬</td>
                <td>卑谬市 新苏区 仰光-卑谬路</td>
                <td>053-24227</td>
                <td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>32</td>
                <td>威桑</td>
                <td>勃生市 4区 妙恩街10号</td>
                <td>042-21942</td>
                <td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>33</td>
                <td>羌达</td>
                <td>羌达市 2区 建康雅街</td>
                <td>042-42360</td>
                <td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>34</td>
                <td>皎漂</td>
                <td>皎漂市 阿索耶区 邦嘎木街</td>
                <td>043-46023</td>
                <td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>35</td>
                <td>木各具</td>
                <td>木各具市 瑞塔街 5区</td>
                <td>062-21052</td>
                <td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>36</td>
                <td>东吁</td>
                <td>东吁市</td>
                <td>09253676700</td>
                <td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>37</td>
                <td>抹谷</td>
                <td>抹谷市</td>
                <td>08620166</td>
                <td><a href="mailto:mogok@tourism.gov.mm">mogok@tourism.gov.mm</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
