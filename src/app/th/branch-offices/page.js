import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/branch-offices/BranchOffices.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Branch Offices",
  description: "Contact information for branch offices of the Ministry of Hotels and Tourism, Myanmar."
};

export default function BranchOffices() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/16.jpg" altText="branch offices cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "오피스 위치", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>미얀마 관광부 지부 사무소 연락처 정보 (Branch Offices Contact Information)</h1>
        <p className={styles.paragraph}>미얀마의 오피스 위치 정보를 찾으세요.</p>
        <div className={styles.tableResponsive}>
        <table className={styles.branchTable}>
  <thead>
    <tr>
      <th>번호</th>
      <th>주 사무소</th>
      <th>주소</th>
      <th>연락처</th>
      <th>이메일 주소</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>네피도 (Naypyidaw)</td>
      <td>주 정부 사무소</td>
      <td>9251008624</td>
      <td><a href="mailto:naypyidaw@tourism.gov.mm">naypyidaw@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>양곤 (Yangon)</td>
      <td>No (58/60) 간나 거리, 보 아웅 캬우 거리, 양곤</td>
      <td>256739, 256828, 01-256748, 256561, 291306</td>
      <td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>만달레이 (Mandalay)</td>
      <td>68번가와 27번가 사이, 만달레이 No.(211), (29)번가, (84×85)길</td>
      <td>02-2848041, 2848042, 4066624</td>
      <td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td>다웨이 (Dawei)</td>
      <td>No.(135) 남부 시장 거리, 자잇 지구, 다웨이</td>
      <td>059-2021098, 2021231</td>
      <td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>5</td>
      <td>따웅지 (Taunggyi)</td>
      <td>No. 142, 보죠 거 리, 묘마 지구, 따웅지</td>
      <td>081-2124275, 2121115, 2121302</td>
      <td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>6</td>
      <td>시트웨 (Sittwe)</td>
      <td>땃따따르나 거리, 포에따 마을, 삐따우 지구, 시트웨</td>
      <td>043-22048, 22049, 21557</td>
      <td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>7</td>
      <td>바간 (Bagan)</td>
      <td>No. (4/d), 바간-냥우 및 초욱 고속도로 앞. 쟌싯타 지구, 바간</td>
      <td>061-2465040</td>
      <td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>8</td>
      <td>마궤 (Magway)</td>
      <td>보죠 공원 옆 보죠 거리, 마궤</td>
      <td>063-2025057</td>
      <td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>9</td>
      <td>몬유아 (Monywa)</td>
      <td>캬우카 거리, 얀 킨 지구, 몬유아</td>
      <td>071-21152</td>
      <td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>10</td>
      <td>바고 (Bago)</td>
      <td>No. 5/B, (3×4)길, 북부 자이가나잉, 바고</td>
      <td>052-2221113, 2201768</td>
      <td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>11</td>
      <td>파테인 (Pathein)</td>
      <td>No. (24). 공원 도로, (4) 지구, 파테인</td>
      <td>042-21146</td>
      <td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>12</td>
      <td>꺄잉똥 (Kyaing Tong)</td>
      <td>개인 No. (21/22) 러웨바웨 거리, 나웅 콩, 꺄잉똥</td>
      <td>084-21617</td>
      <td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>13</td>
      <td>라시오 (Lashio)</td>
      <td>No.(1) 지구, 비우하 거리, 라시오</td>
      <td>082-2203015</td>
      <td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>14</td>
      <td>로이꺼 (Loikaw)</td>
      <td>옷따라 수도원 앞, 꺄웅꼰 지구, 로이꺼</td>
      <td>083-2221078</td>
      <td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>15</td>
      <td>미찌나 (Myitkyina)</td>
      <td>에덴 거리, 땃 꼰 지구, 미찌나</td>
      <td>074-22622</td>
      <td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>16</td>
      <td>탄드웨 (Thandwe)</td>
      <td>공원 도로, No. 2 지구, 탄드웨</td>
      <td>043-2065311</td>
      <td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>17</td>
      <td>모울메인 (Mawlamyine)</td>
      <td>No.106, 어퍼 메인 로드 보꼰 지구, 모울메인</td>
      <td>057-27056, 24650</td>
      <td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>18</td>
      <td>파안 (Hpa-an)</td>
      <td>자예딴 거리. 먀이네따진 거리 코너, No.(2) 지구 파안</td>
      <td>058-21075</td>
      <td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>19</td>
      <td>하카 (Hakha)</td>
      <td>보죠 거리, 하카</td>
      <td>424812864</td>
      <td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>20</td>
      <td>머익 (Myeik)</td>
      <td>쏜카웅따웅 지구, 칸피아 도로, 파야 코에쑤, 머익</td>
      <td>059-41037</td>
      <td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>21</td>
      <td>꼬따웅 (Kawthaung)</td>
      <td>보죠 거리 코너, 바인트나웅 지구, 꼬따웅</td>
      <td>059-51578</td>
      <td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>22</td>
      <td>무세 (Muse)</td>
      <td>No.(56), 따웅무웨, 난따우 게이트 근처, 무세</td>
      <td>082-51534</td>
      <td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>23</td>
      <td>따칠렉 (Tachileik)</td>
      <td>No.1, 우정의 다리, 따칠렉</td>
      <td>084-52197</td>
      <td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>24</td>
      <td>바모 (Bhamo)</td>
      <td>따요에딴 지구, 간나 거리, 바모</td>
      <td>074-50281</td>
      <td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>25</td>
      <td>먀욱우 (MyaukOo)</td>
      <td>꺄 깐수, 먀욱우 지구</td>
      <td>043-50327</td>
      <td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>26</td>
      <td>먀와디 (Myawady)</td>
      <td>No, (102), (7) 레이어. 바인트나웅 거리, (4) 지구, 먀와디</td>
      <td>058-51391</td>
      <td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>27</td>
      <td>민닷 (Mindat)</td>
      <td>극동, 민닷</td>
      <td>070-70389</td>
      <td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>28</td>
      <td>삔우르윈 (PyinOoLwin)</td>
      <td>꽛삔 (5)지구(3), 깔라딴 지구, 삔우르윈</td>
      <td>085-21935</td>
      <td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>29</td>
      <td>쉐보 (Shwe Bo)</td>
      <td>묘슝 거리, 북부 난 우 묘씻 사가잉, No(3)지구, 타깔딴 지구, 란마도 거리, 쉐보</td>
      <td>075-21057</td>
      <td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>30</td>
      <td>깔레 (KaLay)</td>
      <td>찬먀에아웅시 지구, No.11, 깔레와 거리, 깔레</td>
      <td>073-21011</td>
      <td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>31</td>
      <td>삐 (Pyay)</td>
      <td>양곤-삐 도로, 신 수 지구, 삐</td>
      <td>053-24227</td>
      <td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>32</td>
      <td>은싸웅 (Ngwe Saung)</td>
      <td>No .10 먀에누 거리, No.4 지구, 파테인</td>
      <td>042-21942</td>
      <td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>33</td>
      <td>차웅따 (Chaung Thar)</td>
      <td>No.2 지구, 쟌카잉예 거리, 차웅따</td>
      <td>042-42360</td>
      <td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>34</td>
      <td>쨔욱퓨 (KyaukPhyu)</td>
      <td>봉아모욱 거리, 아소에야 지구, 쨔욱퓨</td>
      <td>043-46023</td>
      <td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>35</td>
      <td>파꼬꾸 (Pakokku)</td>
      <td>No. 5 지구 쉐따 거리, 파꼬꾸</td>
      <td>062-21052</td>
      <td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>36</td>
      <td>따웅우 (Taungoo)</td>
      <td>따웅우</td>
      <td>09253676700</td>
      <td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td>
    </tr>
    <tr>
      <td>37</td>
      <td>모곡 (Mogok)</td>
      <td>모곡</td>
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