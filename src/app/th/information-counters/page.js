import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/information-counters/InformationCounters.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "관광 안내소 (Information Counters)",
  description: "미얀마 관광부에서 관광 안내소 위치와 연락처를 찾으세요."
};

export default function InformationCounters() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/68.jpg" altText="information counters cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "관광 안내소", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>관광 안내소 (Information Counters)</h1>
          <p className={styles.paragraph}>미얀마 관광부에서 관광 안내소 위치와 연락처를 찾으세요.</p>
        <section id="information-counters">
          <div className={styles.tableResponsive}>
            <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>안내소 명칭
                  </th>
                  <th>주소</th>
                  <th>연락처 (전화번호)
                  </th>
                  <th>이메일 주소</th>
                  <th>지도에서 보기</th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>1</td>
    <td>양곤 역</td>
    <td>역 주변</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Myanmar+Travel+Information+Media/@16.8553743,96.0849736,10833m/data=!3m1!1e3!4m6!3m5!1s0x30c194eb82dd5eef:0xdc24d6f394ff7051!8m2!3d16.8497899!4d96.1286888!16s%2Fg%2F11g88803nh?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>2</td>
    <td>(양곤) 공항</td>
    <td>
      1. 도착 홀
      <br />
      2. 제1터미널(도착 홀)
    </td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Yangon+International+Airport/@16.9032974,96.1310917,16.22z/data=!4m5!3m4!1s0x30c194168bb31e03:0x26217574c0bf07bf!8m2!3d16.9027736!4d96.1352618?shorturl=1" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>3</td>
    <td>양곤 시내 카운터</td>
    <td>No (118), 마하반둘라 쨔욱 따다 타운십</td>
    <td>01- 256739, 256828<br />01-256748, 256561,<br />291306</td>
    <td>yangon@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/118+Maha+Bandula+Park+St,+Yangon/@16.771526,96.1600165,677m/data=!3m2!1e3!4b1!4m5!3m4!1s0x30c1ec7da48bd555:0xeb9e373a976b097e!8m2!3d16.771526!4d96.1600165?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>4</td>
    <td>만달레이 공항</td>
    <td>따다 우 주변</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Mandalay+International+Airport/@21.7056445,95.9684997,657m/data=!3m1!1e3!4m6!3m5!1s0x30cba6d622534339:0x85d810fad8b4df08!8m2!3d21.7055696!4d95.9696903!16zL20vMGc1cV8x?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>5</td>
    <td>만달레이 역</td>
    <td>만달레이 역 내부</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Mandalay+Railway+Station/@21.9771217,96.0861238,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30cb6d217dcea93d:0x3e2d113c94a9b221!8m2!3d21.9771217!4d96.0861238!16s%2Fm%2F058vv02?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>6</td>
    <td>만달레이</td>
    <td>만달레이 수암 No. (68) 도로 x No. (27) 코너</td>
    <td>02-2848041,<br />2848042, 66624<br />02-60356, 35726,<br />21094</td>
    <td>mdy@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Mandalay+Swan+Hotel/@21.9812751,96.1047168,656m/data=!3m2!1e3!4b1!4m9!3m8!1s0x30cb6d0204b12d6b:0xb8cf39fde9c4671c!5m2!4m1!1i2!8m2!3d21.9812751!4d96.1047168!16s%2Fg%2F1tf9kpxc?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>7</td>
    <td>삔우르윈</td>
    <td>No.(120), 째이 난 도로, 체리 르윈 영화관 근처</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Cherry+Lwin/@22.0248887,96.4615354,656m/data=!3m1!1e3!4m6!3m5!1s0x30cc9e9a5514613b:0xc53c8f6e7cef9315!8m2!3d22.0248887!4d96.4637241!16s%2Fg%2F12hl2kfpp?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>8</td>
    <td>따웅지</td>
    <td>No.(142), 보죠 도로, 묘마 거리, 따웅지</td>
    <td>081-2124275, 2121115,<br />2121302</td>
    <td>taunggyi@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Bogyoke+Aung+San+Rd/@20.7895036,97.0339115,661m/data=!3m1!1e3!4m6!3m5!1s0x30ce86422fc04627:0xa52dc4835fba5ad7!8m2!3d20.789508!4d97.0361031!16s%2Fg%2F11byl633s2?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>9</td>
    <td>헤호</td>
    <td>헤호 공항 주변</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Heho+Airport/@20.7435735,96.7913858,17z/data=!4m5!3m4!1s0x30ce97760a513d7d:0x435ac983508a5b9d!8m2!3d20.7435735!4d96.7935745?shorturl=1" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>10</td>
    <td>깔로</td>
    <td>1번 구역, 주립 도로 옆</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Kalaw+Town+Market/@20.6377982,96.565133,1324m/data=!3m1!1e3!4m6!3m5!1s0x30ceb777fb451ab9:0x4164264e3a2648f0!8m2!3d20.6355143!4d96.5670277!16s%2Fg%2F11csbmxj1b?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>지도에서 보기</a></td>
  </tr>
  <tr>
    <td>11</td>
    <td>빼꼬</td>
    <td>로즈 거리, 잣탄 구역, 빼꼬</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Bago/@17.29622,96.4730394,21615m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30c3d6b94708e943:0x65ab7af98d3e6f32!8m2!3d17.3220711!4d96.4663286!16zL20vMDZuY3Jo?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>12</td>
    <td>냐웅쉐</td>
    <td>윈 구역, 깐나 도로, 냐웅쉐</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Nyaungshwe/@20.6601411,96.9191441,5296m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30ce8def0632f979:0x39edf89aeb2c584b!8m2!3d20.6594185!4d96.934332!16zL20vMDY2eTd2?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>13</td>
    <td>따칠렉</td>
    <td>따칠렉 사무소</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Tachileik/@20.4721015,99.9139594,10604m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30d6f558f9e2e9fd:0xf7a608ad8ab0d581!8m2!3d20.4521225!4d99.898914!16s%2Fm%2F03hnfg6?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>14</td>
    <td>쨔잉똥</td>
    <td>공항 주변</td>
    <td>084-21617</td>
    <td>kyaington@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Kyaing+Tong+Airport/@21.302467,99.6336763,17z/data=!3m1!4b1!4m5!3m4!1s0x30d4440719f08ea3:0x7ef90a7de3350b4!8m2!3d21.302467!4d99.635865?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>15</td>
    <td>바간</td>
    <td>냐웅우 공항</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Nyaung+U+Airport/@21.1755241,94.926511,17z/data=!3m1!4b1!4m5!3m4!1s0x30b5faf73137c9a7:0x250de82300cac971!8m2!3d21.1755241!4d94.9286997?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>16</td>
    <td>바간</td>
    <td>바간 사무소</td>
    <td>061-2465040</td>
    <td>bgn@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Tourist+Information+Center/@21.1365258,94.8402285,5279m/data=!3m1!1e3!4m6!3m5!1s0x30b5e48eb0df7081:0x87932362d4f1c1b3!8m2!3d21.1365317!4d94.8578!16s%2Fg%2F11b6c9kgmv?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>17</td>
    <td>바간</td>
    <td>바간-냐웅 우 시장 카운터 (마니 시 투 앞)</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Mani+Sithu+Market/@21.2009331,94.906782,17z/data=!3m1!4b1!4m5!3m4!1s0x30b5fabb5727f203:0x60d481349b2f0745!8m2!3d21.2009331!4d94.9089707?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>18</td>
    <td>먀와디</td>
    <td>다리 위와 오른편, 먀와디</td>
    <td>058-51391</td>
    <td>mwd@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Myawady+Rd,+Nyaungshwe/@20.6617031,96.9326005,331m/data=!3m1!1e3!4m6!3m5!1s0x30ce8de4f9f8ce51:0xdef1836eb59578aa!8m2!3d20.6610427!4d96.9341428!16s%2Fg%2F11h10dxlf?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>19</td>
    <td>쨔익띠요</td>
    <td>쨔익띠요 입구 근처 (쨔익또 호텔 동쪽)</td>
    <td></td>
    <td></td>
    <td><a href="https://www.google.com/maps/place/Kyaiktiyo+Pagoda/@16.9776932,96.7546385,9z/data=!4m5!3m4!1s0x30c30a774afb2ae1:0xe3bbe018e15e96fa!8m2!3d17.4816206!4d97.0982157?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>20</td>
    <td>모울메인</td>
    <td>No (118), 로워 메인 로드, 파탄 구역</td>
    <td>057-27056, 24650</td>
    <td>mlm@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Strand+View/@16.4971861,97.6164624,17z/data=!4m5!3m4!1s0x30c2af511160b365:0x925cb1b5556e0a96!8m2!3d16.498644!4d97.6184385?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>21</td>
    <td>로이꺼</td>
    <td>공항 내부</td>
    <td>083-2221078</td>
    <td>loikaw@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Loikaw+Airport/@19.6895962,97.2116297,17z/data=!3m1!4b1!4m5!3m4!1s0x30cf9bc8e30c4027:0xffdcaaa63b6f480a!8m2!3d19.6895962!4d97.2138184?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>22</td>
    <td>꼬따웅</td>
    <td>꼬따웅 부두</td>
    <td>059-51578</td>
    <td>kawthaung@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Ministry+of+Hotels+%26+Tourism/@9.970806,98.5760939,14z/data=!4m5!3m4!1s0x30564df3a02efbd1:0x79aad183764172a2!8m2!3d9.977835!4d98.553016?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>23</td>
    <td>파테인</td>
    <td>No (24), 공원 거리, No (4) 구역</td>
    <td>042-21146</td>
    <td>pathein@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Pathein/@16.7768991,94.7380684,1355m/data=!3m1!1e3!4m6!3m5!1s0x30bfea063fe53f85:0xd07f864b399e7c13!8m2!3d16.7753609!4d94.7381013!16zL20vMDR4bm12?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>24</td>
    <td>차웅따</td>
    <td>아주라 호텔 내부</td>
    <td>042-42360</td>
    <td>chaungthar@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Azura+Beach+Resort+%26+Spa+@chaung+thar/@16.9594509,94.4385654,17z/data=!4m5!3m4!1s0x30bfb3806dca8bc7:0xaaea79e9d896475b!8m2!3d16.9594509!4d94.4407541?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>25</td>
    <td>응웨 사웅</td>
    <td>정션 호텔 존 도로, No.(3) 구역, B.E.H.S, 응웨 사웅</td>
    <td>042-21942</td>
    <td>ngwesaung@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Basic+Education+High+School/@16.8574681,94.3871756,677m/data=!3m1!1e3!4m6!3m5!1s0x30be3550e5154149:0xc596f741d7ef5294!8m2!3d16.8574681!4d94.3893643!16s%2Fg%2F11cs5pq9qk?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>26</td>
    <td>바고</td>
    <td>No. (3) 도로와 No.(4) 도로 사이, 북부 자이가 나잉</td>
    <td>052-2221113, 2201768</td>
    <td>bago@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Bago+University/@17.2699468,96.4617391,2702m/data=!3m1!1e3!4m6!3m5!1s0x30c3d41813384fab:0xfcf14a6841f404d6!8m2!3d17.2704203!4d96.4726196!16s%2Fg%2F1hm5_zlt4?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
  <tr>
    <td>27</td>
    <td>탄드웨</td>
    <td>탄드웨 공항</td>
    <td>043-2065311</td>
    <td>thandwe@tourism.gov.mm</td>
    <td><a href="https://www.google.com/maps/place/Thandwe+Airport/@18.4578955,94.2966427,17z/data=!3m1!4b1!4m5!3m4!1s0x30b91944a799414b:0x61142f6b89e3a563!8m2!3d18.4578955!4d94.2988314?shorturl=1" target="_blank" className="view-on-map">지도에서 보기</a></td>
  </tr>
</tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}