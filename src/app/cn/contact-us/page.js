import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./ContactUs.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "联系我们",
  description: "酒店与旅游部各部门及相关负责人员的联系信息。"
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
          { label: "Home", href: "/cn/", icon: faHome },
          { label: "联系我们", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>联系我们</h1>

        <section id="contact-info">
          <p>
            以下是酒店与旅游部各部门及相关负责人员的联系信息。
          </p>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>编号</th>
                  <th>部门/人员</th>
                  <th>电子邮箱</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>联邦部长</td><td><a href="mailto:minister@tourism.gov.mm">minister@tourism.gov.mm</a></td></tr>
                <tr><td>2</td><td>副部长</td><td><a href="mailto:dm.moht@tourism.gov.mm">dm.moht@tourism.gov.mm</a></td></tr>
                <tr><td>3</td><td>常务秘书</td><td><a href="mailto:dg.mo@tourism.gov.mm">dg.mo@tourism.gov.mm</a></td></tr>
                <tr><td>4</td><td>局长</td><td><a href="mailto:dgoffice1.dhtd@gmail.com">dgoffice1.dhtd@gmail.com</a></td></tr>
                <tr><td>5</td><td>副常务秘书</td><td><a href="mailto:myowinnyunt@tourism.gov.mm">myowinnyunt@tourism.gov.mm</a></td></tr>
                <tr><td>6</td><td>副局长</td><td><a href="mailto:ddg.moht@tourism.gov.mm">ddg.moht@tourism.gov.mm</a></td></tr>
                <tr><td>7</td><td>副局长</td><td><a href="mailto:myinthtwe@tourism.gov.mm">myinthtwe@tourism.gov.mm</a></td></tr>
                <tr><td>8</td><td>副局长</td><td><a href="mailto:ddg.tourism@gmail.com">ddg.tourism@gmail.com</a></td></tr>
                <tr><td>9</td><td>副局长</td><td><a href="mailto:ddg3.dht.moht@tourism.gov.mm">ddg3.dht.moht@tourism.gov.mm</a></td></tr>
                <tr><td>10</td><td>行政与人力资源</td><td><a href="mailto:moadmin@tourism.gov.mm">moadmin@tourism.gov.mm</a></td></tr>
                <tr><td>11</td><td>政策局</td><td><a href="mailto:dpolicy@tourism.gov.mm">dpolicy@tourism.gov.mm</a></td></tr>
                <tr><td>12</td><td>规划与统计局</td><td><a href="mailto:planandstat@tourism.gov.mm">planandstat@tourism.gov.mm</a></td></tr>
                <tr><td>13</td><td>内部审计与财务</td><td><a href="mailto:budget@tourism.gov.mm">budget@tourism.gov.mm</a></td></tr>
                <tr><td>14</td><td>公共关系与信息</td><td><a href="mailto:prid@tourism.gov.mm">prid@tourism.gov.mm</a></td></tr>
                <tr><td>15</td><td>电子政务办公室</td><td><a href="mailto:egov.moht@gmail.com">egov.moht@gmail.com</a></td></tr>
                <tr><td>16</td><td>行政与预算处</td><td><a href="mailto:dhtadmin@tourism.gov.mm">dhtadmin@tourism.gov.mm</a></td></tr>
                <tr><td>17</td><td>酒店与旅游监</td><td><a href="mailto:htsd@tourism.gov.mm">htsd@tourism.gov.mm</a></td></tr>
                <tr><td>18</td><td>培训与教育处</td><td><a href="mailto:training@tourism.gov.mm">training@tourism.gov.mm</a></td></tr>
                <tr><td>19</td><td>规划处</td><td><a href="mailto:project.dht@tourism.gov.mm">project.dht@tourism.gov.mm</a></td></tr>
                <tr><td>20</td><td>国际与区域合作</td><td><a href="mailto:irc@tourism.gov.mm">irc@tourism.gov.mm</a></td></tr>
                <tr><td>21</td><td>旅游推广处</td><td><a href="mailto:promotion@tourism.gov.mm">promotion@tourism.gov.mm</a></td></tr>
                <tr><td>22</td><td>旅游推广处</td><td><a href="mailto:info@tourism.gov.mm">info@tourism.gov.mm</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="branch-offices">
          <h2>城市/地区办事处</h2>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>编号</th>
                  <th>城市</th>
                  <th>电子邮箱</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>21</td><td>仰光</td><td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td></tr>
                <tr><td>22</td><td>实兑</td><td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td></tr>
                <tr><td>23</td><td>土瓦</td><td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td></tr>
                <tr><td>24</td><td>帕安</td><td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td></tr>
                <tr><td>25</td><td>毛淡棉</td><td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td></tr>
                <tr><td>26</td><td>丹兑</td><td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td></tr>
                <tr><td>27</td><td>勃固</td><td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td></tr>
                <tr><td>28</td><td>勃生</td><td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td></tr>
                <tr><td>30</td><td>妙瓦底</td><td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td></tr>
                <tr><td>31</td><td>谬洪</td><td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td></tr>
                <tr><td>32</td><td>高当</td><td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td></tr>
                <tr><td>33</td><td>墨吉</td><td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td></tr>
                <tr><td>34</td><td>皎漂</td><td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td></tr>
                <tr><td>35</td><td>卑谬</td><td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td></tr>
                <tr><td>36</td><td>东吁</td><td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td></tr>
                <tr><td>37</td><td>威桑</td><td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td></tr>
                <tr><td>38</td><td>羌达</td><td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td></tr>
                <tr><td>39</td><td>吉谛瑜</td><td><a href="mailto:kyaikhto@tourism.gov.mm">kyaikhto@tourism.gov.mm</a></td></tr>
                <tr><td>40</td><td>曼德勒</td><td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td></tr>
                <tr><td>41</td><td>东枝</td><td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td></tr>
                <tr><td>42</td><td>密支那</td><td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td></tr>
                <tr><td>43</td><td>垒固</td><td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td></tr>
                <tr><td>44</td><td>哈卡</td><td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td></tr>
                <tr><td>45</td><td>腊戌</td><td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td></tr>
                <tr><td>46</td><td>景栋</td><td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td></tr>
                <tr><td>47</td><td>蒙育瓦</td><td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td></tr>
                <tr><td>48</td><td>蒲甘</td><td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td></tr>
                <tr><td>49</td><td>马圭</td><td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td></tr>
                <tr><td>50</td><td>班茂</td><td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td></tr>
                <tr><td>51</td><td>敏达</td><td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td></tr>
                <tr><td>52</td><td>大其力</td><td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td></tr>
                <tr><td>53</td><td>木姐</td><td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td></tr>
                <tr><td>54</td><td>吉灵庙</td><td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td></tr>
                <tr><td>55</td><td>瑞波</td><td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td></tr>
                <tr><td>56</td><td>彬乌伦</td><td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td></tr>
                <tr><td>57</td><td>木各具</td><td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td></tr>
                <tr><td>58</td><td>抹谷</td><td><a href="mailto:mogok@tourism.gov.mm">mogok@tourism.gov.mm</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
