import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/tourism-police-offices/TourismPoliceOffices.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "관광 경찰 사무소",
  description: "미얀마 관광 부처의 관광 경찰 사무소 정보입니다."
};

export default function TourismPoliceOffices() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/58.jpg" altText="tourism police offices cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "관광 경찰 사무소", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>관광 경찰 사무소 및 부서별 연락처 (Tourism Police Offices and Departmental Contact Information)</h1>
        <p>미얀마 관광 부처의 관광 경찰 사무소 정보입니다.</p>

        <section id="police-units">
          <div className={styles.tableResponsive}>
            <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>사무소/부서 명칭
                  </th>
                  <th>주소</th>
                  <th>연락처 (전화번호)
                  </th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>본부 (Head Quarter)</td>
    <td>네피도, 쟈부티리 구역, 호텔 존-1, No.2 경찰서 및 운영 기능.</td>
    <td>067-414303, 067-414364</td>
  </tr>
  <tr>
    <td>네피도 부서</td>
    <td>본부 건물 내부</td>
    <td>067-414226, 09-448539518</td>
  </tr>
  <tr>
    <td>양곤 부서</td>
    <td>No.110, 판소단 로드 (중앙 구역), 짜욱따다 구역.</td>
    <td>01-379991, 09-448539519</td>
  </tr>
  <tr>
    <td>만달레이 부서</td>
    <td>아웅 먀이 타잔 구, 민 테 에이 킨 구역, 짜욱타베익 경찰서.</td>
    <td>02-67382, 09-791107831</td>
  </tr>
  <tr>
    <td>삔우르윈 소규모 부서</td>
    <td>삔우르윈 구역 경찰서 내부</td>
    <td>09-422527811</td>
  </tr>
  <tr>
    <td>바간 부서</td>
    <td>신 바간, 바간 지역 경찰서.</td>
    <td>061-65474, 09-448539508</td>
  </tr>
  <tr>
    <td>포파 소규모 부서</td>
    <td>포파 산 기슭 정상, 루비 계단, 이사회 건물.</td>
    <td>09-256261413</td>
  </tr>
  <tr>
    <td>샨 주 부서</td>
    <td>냐웅쉐, (인레) 구역 경찰서 내부.</td>
    <td>081-209911, 09-448539509</td>
  </tr>
  <tr>
    <td>깔로 소규모 부서</td>
    <td>깔로 구역 경찰서 내부.</td>
    <td>09-428313074</td>
  </tr>
  <tr>
    <td>삔따야 소규모 부서</td>
    <td>삔따야 구역 경찰서 내부.</td>
    <td>09-49355319</td>
  </tr>
  <tr>
    <td>에야와디 부서</td>
    <td>에야와디 부서 (응웨 사웅 및 챠웅 타)는 해당 지역 경찰서에 위치합니다.</td>
    <td>09-250236373, 09-250188328</td>
  </tr>
  <tr>
    <td>스리 키따야 부서 (퓨 고대 도시)</td>
    <td>바고 지역 (서부), 삐 구역, 쉐 산 도 파고다 북쪽 사원.</td>
    <td>09-250236373, 09-250188328</td>
  </tr>
  <tr>
    <td>바고 소규모 부서</td>
    <td>바고 구역, 쉐모도 파고다 서쪽 사원, 전력 공급 건물.</td>
    <td>09-250471372</td>
  </tr>
  <tr>
    <td>베익타노 부서 (퓨 고대 도시)</td>
    <td>마궤 지역, 따웅 드윈지 구역, 지역 경찰서.</td>
    <td>063-51148, 09-256016729</td>
  </tr>
  <tr>
    <td>한린 부서 (퓨 고대 도시)</td>
    <td>사가잉 지역, 쉐보 지구, 웻렛 구역, 지역 경찰서.</td>
    <td>09-400536332</td>
  </tr>
  <tr>
    <td>사가잉-밍군 소규모 부서</td>
    <td>밍군 경찰서 내부.</td>
    <td>09-797399188</td>
  </tr>
  <tr>
    <td>모울메인 부서</td>
    <td>몬 주, 모울메인 구역, 마웅 응안 구역, 마웅 응안 경찰 초소.</td>
    <td>09-977044493, 09-254299912</td>
  </tr>
  <tr>
    <td>쨔익띠요 소규모 부서</td>
    <td>몬 주, 쨔익또 구역, 끼몬챠웅 경찰서.</td>
    <td>09-428206641</td>
  </tr>
  <tr>
    <td>먀와디 부서</td>
    <td>까인 주, 먀와디 구역, 지역 경찰서.</td>
    <td>09-43200250</td>
  </tr>
  <tr>
    <td>따칠렉 부서</td>
    <td>샨 주, 따칠렉 구역, 빠삭 구역, No.218 보죠 아웅 산 로드.</td>
    <td>09-428003877</td>
  </tr>
  <tr>
    <td>응아빨리 부서</td>
    <td>라카인 주, 탄드웨 구역, 쩨익따우 경찰서.</td>
    <td>09-403714839</td>
  </tr>
  <tr>
    <td>므라우-우 소규모 부서</td>
    <td>라카인 주, 므라우-우 구역, 싯따웅 파고다 근처, 고고학 건물.</td>
    <td>09-787191051, 09-253448499</td>
  </tr>
  <tr>
    <td>깐빳랏 소규모 부서</td>
    <td>친 주, 깐빳랏 구역 경찰서.</td>
    <td>09-73056986</td>
  </tr>
  <tr>
    <td>다웨이 소규모 부서</td>
    <td>따닌따리 지역, 다웨이 구역, 빠-래 경찰 관할 구역 내부.</td>
    <td>09-250477105, 09-47053133</td>
  </tr>
</tbody>
            </table>
          </div>
        </section>

        <section id="police-hotlines">
          <h3>관광 경찰 긴급 전화번호 목록 (핫라인) (Tourism Police Hotlines and Locations)		
          </h3>
          <div className={styles.tableResponsive}>
            <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>위치</th>
                  <th>연락처 (전화번호)</th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>1</td>
    <td>본부</td>
    <td>067-414303, 067-414364</td>
  </tr>
  <tr>
    <td>2</td>
    <td>네피도</td>
    <td>067-414226</td>
  </tr>
  <tr>
    <td>3</td>
    <td>양곤</td>
    <td>01-379991</td>
  </tr>
  <tr>
    <td>4</td>
    <td>만달레이</td>
    <td>02-67382</td>
  </tr>
  <tr>
    <td>5</td>
    <td>삔우르윈</td>
    <td>09-422527811</td>
  </tr>
  <tr>
    <td>6</td>
    <td>바간</td>
    <td>061-65474</td>
  </tr>
  <tr>
    <td>7</td>
    <td>포파</td>
    <td>09-256261413</td>
  </tr>
  <tr>
    <td>8</td>
    <td>샨</td>
    <td>081-209911</td>
  </tr>
  <tr>
    <td>9</td>
    <td>삔따야</td>
    <td>09-49355319</td>
  </tr>
  <tr>
    <td>10</td>
    <td>깔로</td>
    <td>09-428313074</td>
  </tr>
  <tr>
    <td>11</td>
    <td>따칠렉</td>
    <td>09-428003877</td>
  </tr>
  <tr>
    <td>12</td>
    <td>에야와디</td>
    <td>09-250236373</td>
  </tr>
  <tr>
    <td>13</td>
    <td>스리 키따야</td>
    <td>09-250188328</td>
  </tr>
  <tr>
    <td>14</td>
    <td>바고</td>
    <td>09-250343438</td>
  </tr>
  <tr>
    <td>15</td>
    <td>베익따노</td>
    <td>09-250471372</td>
  </tr>
  <tr>
    <td>16</td>
    <td>베익따노</td>
    <td>063-51148</td>
  </tr>
  <tr>
    <td>17</td>
    <td>한린</td>
    <td>09-2560167729, 09-47061503</td>
  </tr>
  <tr>
    <td>18</td>
    <td>밍군</td>
    <td>09-797399188</td>
  </tr>
  <tr>
    <td>19</td>
    <td>모울메인</td>
    <td>09-8548090</td>
  </tr>
  <tr>
    <td>20</td>
    <td>쨔익띠요</td>
    <td>09-428206641</td>
  </tr>
  <tr>
    <td>21</td>
    <td>응아빨리</td>
    <td>09-403714839, 043-42191</td>
  </tr>
  <tr>
    <td>22</td>
    <td>므라우-우</td>
    <td>09-253448499, 09-78719105</td>
  </tr>
  <tr>
    <td>23</td>
    <td>먀와디</td>
    <td>09-43200250</td>
  </tr>
  <tr>
    <td>24</td>
    <td>깐빳랏</td>
    <td>09-73056986</td>
  </tr>
  <tr>
    <td>25</td>
    <td>다웨이</td>
    <td>09-250477105, 09-47053133</td>
  </tr>
  <tr>
    <td>26</td>
    <td>로이꺼</td>
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