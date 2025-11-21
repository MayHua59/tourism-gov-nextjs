import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/contact-us/ContactUs.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Contact Us",
  description: "Contact information for departments and branch offices of the Ministry of Hotels and Tourism."
};

export default function ContactUs() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/19.jpg"
        altText="contact us cover photo"
      />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "연락처", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>호텔관광부 중앙 부서 연락처 (Contact Us)</h1>

        <section id="contact-info">
          <p>
            미얀마 관광부의 각 부서와 인원에 대한 연락처 정보를 찾으세요.
          </p>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>담당자/부서 명칭
                  </th>
                  <th>이메일 주소 (Email Address)
                  </th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>1</td>
    <td>연방 장관</td>
    <td><a href="mailto:minister@tourism.gov.mm">minister@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>2</td>
    <td>차관</td>
    <td><a href="mailto:dm.moht@tourism.gov.mm">dm.moht@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>3</td>
    <td>상임 비서</td>
    <td><a href="mailto:dg.mo@tourism.gov.mm">dg.mo@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>4</td>
    <td>총괄 이사</td>
    <td><a href="mailto:dgoffice1.dhtd@gmail.com">dgoffice1.dhtd@gmail.com</a></td>
  </tr>
  <tr>
    <td>5</td>
    <td>차관보 (Deputy Permanent Secretary)</td>
    <td><a href="mailto:myowinnyunt@tourism.gov.mm">myowinnyunt@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>6</td>
    <td>부총괄 이사</td>
    <td><a href="mailto:ddg.moht@tourism.gov.mm">ddg.moht@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>7</td>
    <td>부총괄 이사</td>
    <td><a href="mailto:myinthtwe@tourism.gov.mm">myinthtwe@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>8</td>
    <td>부총괄 이사</td>
    <td><a href="mailto:ddg.tourism@gmail.com">ddg.tourism@gmail.com</a></td>
  </tr>
  <tr>
    <td>9</td>
    <td>부총괄 이사</td>
    <td><a href="mailto:ddg3.dht.moht@tourism.gov.mm">ddg3.dht.moht@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>10</td>
    <td>행정 및 인적</td>
    <td><a href="mailto:moadmin@tourism.gov.mm">moadmin@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>11</td>
    <td>정책부</td>
    <td><a href="mailto:dpolicy@tourism.gov.mm">dpolicy@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>12</td>
    <td>기획 및 통계</td>
    <td><a href="mailto:planandstat@tourism.gov.mm">planandstat@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>13</td>
    <td>내부 감사 및</td>
    <td><a href="mailto:budget@tourism.gov.mm">budget@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>14</td>
    <td>홍보 및 정보</td>
    <td><a href="mailto:prid@tourism.gov.mm">prid@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>15</td>
    <td>전자 정부</td>
    <td><a href="mailto:egov.moht@gmail.com">egov.moht@gmail.com</a></td>
  </tr>
  <tr>
    <td>16</td>
    <td>행정 및 예산</td>
    <td><a href="mailto:dhtadmin@tourism.gov.mm">dhtadmin@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>17</td>
    <td>호텔 및 관광</td>
    <td><a href="mailto:htsd@tourism.gov.mm">htsd@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>18</td>
    <td>훈련 및 교육</td>
    <td><a href="mailto:training@tourism.gov.mm">training@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>19</td>
    <td>기획부</td>
    <td><a href="mailto:project.dht@tourism.gov.mm">project.dht@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>20</td>
    <td>국제 및 지역</td>
    <td><a href="mailto:irc@tourism.gov.mm">irc@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>21</td>
    <td>관광 진흥부</td>
    <td><a href="mailto:promotion@tourism.gov.mm">promotion@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>22</td>
    <td>관광 진흥부</td>
    <td><a href="mailto:info@tourism.gov.mm">info@tourism.gov.mm</a></td>
  </tr>
</tbody>
            </table>
          </div>
        </section>

        <section id="branch-offices">
          <h2>호텔관광부 지부 사무소 이메일 연락처 (Branch Offices Email)</h2>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>번호
                  </th>
                  <th>사무소 위치 (Office)
                  </th>
                  <th>도시 (City)
                  </th>
                  <th>이메일 주소 (Email)
                  </th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>21</td>
    <td>하부 미얀마 양곤</td>
    <td>양곤</td>
    <td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>22</td>
    <td></td>
    <td>시트웨</td>
    <td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>23</td>
    <td></td>
    <td>다웨이</td>
    <td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>24</td>
    <td></td>
    <td>파안</td>
    <td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>25</td>
    <td></td>
    <td>모울메인</td>
    <td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>26</td>
    <td></td>
    <td>탄드웨</td>
    <td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>27</td>
    <td></td>
    <td>바고</td>
    <td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>28</td>
    <td></td>
    <td>파테인</td>
    <td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>29</td>
    <td></td>
    <td>먀와디</td>
    <td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>30</td>
    <td></td>
    <td>므라우-우</td>
    <td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>31</td>
    <td></td>
    <td>꼬따웅</td>
    <td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>32</td>
    <td></td>
    <td>머익</td>
    <td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>33</td>
    <td></td>
    <td>쨔욱퓨</td>
    <td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>34</td>
    <td></td>
    <td>삐</td>
    <td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>35</td>
    <td></td>
    <td>따웅우</td>
    <td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>36</td>
    <td></td>
    <td>응웨 사웅</td>
    <td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>37</td>
    <td></td>
    <td>차웅 타</td>
    <td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>38</td>
    <td></td>
    <td>쨔익또</td>
    <td><a href="mailto:kyaikhto@tourism.gov.mm">kyaikhto@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>39</td>
    <td>상부 미얀마 만달레이</td>
    <td>만달레이</td>
    <td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>40</td>
    <td></td>
    <td>따웅지</td>
    <td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>41</td>
    <td></td>
    <td>미찌나</td>
    <td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>42</td>
    <td></td>
    <td>로이꺼</td>
    <td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>43</td>
    <td></td>
    <td>하카</td>
    <td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>44</td>
    <td></td>
    <td>라시오</td>
    <td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>45</td>
    <td></td>
    <td>쨔잉똥</td>
    <td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>46</td>
    <td></td>
    <td>몬유와</td>
    <td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>47</td>
    <td></td>
    <td>바간</td>
    <td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>48</td>
    <td></td>
    <td>마궤</td>
    <td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>49</td>
    <td></td>
    <td>바모</td>
    <td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>50</td>
    <td></td>
    <td>민닷</td>
    <td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>51</td>
    <td></td>
    <td>따칠렉</td>
    <td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>52</td>
    <td></td>
    <td>무세</td>
    <td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>53</td>
    <td></td>
    <td>깔레</td>
    <td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>54</td>
    <td></td>
    <td>쉐보</td>
    <td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>55</td>
    <td></td>
    <td>삔우르윈</td>
    <td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>56</td>
    <td></td>
    <td>파꼬꾸</td>
    <td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>57</td>
    <td></td>
    <td>모곡</td>
    <td><a href="mailto:mogok@tourism.gov.mm">mogok@tourism.gov.mm</a></td>
  </tr>
</tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}