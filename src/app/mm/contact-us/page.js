import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./ContactUs.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Contact Us",
  description: "Contact information for departments and branch offices of the Ministry of Hotels and Tourism."
};

export default function ContactUs() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-mm-title/13.jpg"
        altText="contact us cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ဆက်သွယ်ရန်", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ဆက်သွယ်ရန်</h1>

        <section id="contact-info">
          <p>
            ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန email Address များ
          </p>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>စဉ်</th>
     <th>သုံးစွဲသူအမည်/ဌာန</th>
     <th>Email လိပ်စာ</th>
                </tr>
              </thead>
              <tbody>
    <tr>
     <td>1</td>
     <td>ပြည်ထောင်စုဝန်ကြီး</td>
     <td><a href="mailto:minister@tourism.gov.mm">minister@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>2</td>
     <td>ဒုတိယဝန်ကြီး</td>
     <td><a href="mailto:dm.moht@tourism.gov.mm">dm.moht@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>3</td>
     <td>အမြဲတမ်းအတွင်းဝန်</td>
     <td><a href="mailto:dg.mo@tourism.gov.mm">dg.mo@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>4</td>
     <td>ညွှန်ကြားရေးမှူးချုပ်</td>
     <td><a href="mailto:dgoffice1.dhtd@gmail.com">dgoffice1.dhtd@gmail.com</a></td>
    </tr>
    <tr>
     <td>5</td>
     <td>ဒုတိယအမြဲတမ်းအတွင်းဝန်</td>
     <td><a href="mailto:myowinnyunt@tourism.gov.mm">myowinnyunt@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>6</td>
     <td>ဒုတိယညွှန်ကြားရေးမှူးချုပ်</td>
     <td><a href="mailto:ddg.moht@tourism.gov.mm">ddg.moht@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>7</td>
     <td>ဒုတိယညွှန်ကြားရေးမှူးချုပ်</td>
     <td><a href="mailto:myinthtwe@tourism.gov.mm">myinthtwe@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>8</td>
     <td>ဒုတိယညွှန်ကြားရေးမှူးချုပ်</td>
     <td><a href="mailto:ddg.tourism@gmail.com">ddg.tourism@gmail.com</a></td>
    </tr>
    <tr>
     <td>9</td>
     <td>ဒုတိယညွှန်ကြားရေးမှူးချုပ်</td>
     <td><a href="mailto:ddg3.dht.moht@tourism.gov.mm">ddg3.dht.moht@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>10</td>
     <td>အုပ်ချုပ်ရေးနှင့်လူ့စွမ်းအားအရင်းအမြစ်စီမံခန့်ခွဲမှုဌာနခွဲ</td>
     <td><a href="mailto:moadmin@tourism.gov.mm">moadmin@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>11</td>
     <td>မူဝါဒနှင့်ဥပဒေလုပ်ထုံးလုပ်နည်းစိစစ်ရေးနှင့်လုပ်ငန်းစစ်ဆေးရေးဌာနခွဲ</td>
     <td><a href="mailto:dpolicy@tourism.gov.mm">dpolicy@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>12</td>
     <td>စီမံကိန်းနှင့်စာရင်းအင်းဌာနခွဲ</td>
     <td><a href="mailto:planandstat@tourism.gov.mm">planandstat@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>13</td>
     <td>ဝန်ကြီးဌာနတွင်းစာရင်းစစ်နှင့် ဘဏ္ဍာရေးဌာနခွဲ</td>
     <td><a href="mailto:budget@tourism.gov.mm">budget@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>14</td>
     <td>ပြည်တွင်းပြည်ပဆက်ဆံရေးနှင့် သတင်းပြန်ကြားရေးဌာနခွဲ</td>
     <td><a href="mailto:prid@tourism.gov.mm">prid@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>15</td>
     <td>e-Government Office</td>
     <td><a href="mailto:egov.moht@gmail.com">egov.moht@gmail.com</a></td>
    </tr>
    <tr>
     <td>16</td>
     <td>အုပ်ချုပ်ရေးနှင့်ဘဏ္ဍာရေးဌာနခွဲ</td>
     <td><a href="mailto:dhtadmin@tourism.gov.mm">dhtadmin@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>17</td>
     <td>ဟိုတယ်လုပ်ငန်းနှင့်ခရီးသွားလုပ်ငန်းဆိုင်ရာ ကြီးကြပ်မှုဌာနခွဲ</td>
     <td><a href="mailto:htsd@tourism.gov.mm">htsd@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>18</td>
     <td>လေ့ကျင့်ရေးနှင့်ပညာပေးရေးဌာနခွဲ</td>
     <td><a href="mailto:training@tourism.gov.mm">training@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>19</td>
     <td>စီမံကိန်းဌာနခွဲ</td>
     <td><a href="mailto:project.dht@tourism.gov.mm">project.dht@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>20</td>
     <td>နိုင်ငံတကာနှင့်ဒေသတွင်းပူးပေါင်းဆောင်ရွက်ရေးဌာနခွဲ</td>
     <td><a href="mailto:irc@tourism.gov.mm">irc@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>21</td>
     <td>ခရီးသွားမြှင့်တင်ရေးဌာနခွဲ</td>
     <td><a href="mailto:promotion@tourism.gov.mm">promotion@tourism.gov.mm</a></td>
    </tr>
    <tr>
     <td>22</td>
     <td>ခရီးသွားမြှင့်တင်ရေးဌာနခွဲ (Digital Marketing)</td>
     <td><a href="mailto:info@tourism.gov.mm">info@tourism.gov.mm</a></td>
    </tr>
   </tbody>
            </table>
          </div>
        </section>

        {/* <section id="branch-offices">
          <h2>Branch Offices</h2>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Office</th>
                  <th>City</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>21</td><td>Lower Myanmar</td><td>Yangon</td><td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td></tr>
                <tr><td>22</td><td></td><td>Sittwe</td><td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td></tr>
                <tr><td>23</td><td></td><td>Dawei</td><td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td></tr>
                <tr><td>24</td><td></td><td>Hpa-an</td><td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td></tr>
                <tr><td>25</td><td></td><td>Mawlamyaing</td><td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td></tr>
                <tr><td>26</td><td></td><td>Thandwe</td><td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td></tr>
                <tr><td>27</td><td></td><td>Bago</td><td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td></tr>
                <tr><td>28</td><td></td><td>Pathein</td><td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td></tr>
                <tr><td>30</td><td></td><td>Myawaddy</td><td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td></tr>
                <tr><td>30</td><td></td><td>Myauk-Oo</td><td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td></tr>
                <tr><td>31</td><td></td><td>Kawthaung</td><td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td></tr>
                <tr><td>32</td><td></td><td>Myeik</td><td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td></tr>
                <tr><td>33</td><td></td><td>Kyauk Phyu</td><td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td></tr>
                <tr><td>34</td><td></td><td>Pyay</td><td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td></tr>
                <tr><td>35</td><td></td><td>Taungoo</td><td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td></tr>
                <tr><td>36</td><td></td><td>Ngwe Saung</td><td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td></tr>
                <tr><td>37</td><td></td><td>Chaung Tha</td><td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td></tr>
                <tr><td>38</td><td></td><td>Kyaikhto</td><td><a href="mailto:kyaikhto@tourism.gov.mm">kyaikhto@tourism.gov.mm</a></td></tr>
                <tr><td>39</td><td>Upper Myanmar</td><td>Mandalay</td><td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td></tr>
                <tr><td>40</td><td></td><td>Taunggyi</td><td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td></tr>
                <tr><td>41</td><td></td><td>Myit Kyi Na</td><td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td></tr>
                <tr><td>42</td><td></td><td>Loikaw</td><td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td></tr>
                <tr><td>43</td><td></td><td>Hakha</td><td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td></tr>
                <tr><td>44</td><td></td><td>Lashio</td><td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td></tr>
                <tr><td>45</td><td></td><td>Kyaingtone</td><td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td></tr>
                <tr><td>46</td><td></td><td>Monwya</td><td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td></tr>
                <tr><td>47</td><td></td><td>Bagan</td><td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td></tr>
                <tr><td>48</td><td></td><td>Magway</td><td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td></tr>
                <tr><td>49</td><td></td><td>Banmaw</td><td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td></tr>
                <tr><td>50</td><td></td><td>Mindat</td><td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td></tr>
                <tr><td>51</td><td></td><td>Tachileik</td><td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td></tr>
                <tr><td>52</td><td></td><td>Muse</td><td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td></tr>
                <tr><td>53</td><td></td><td>Kalay</td><td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td></tr>
                <tr><td>54</td><td></td><td>Shwebo</td><td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td></tr>
                <tr><td>55</td><td></td><td>Pyin Oo Lwin</td><td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td></tr>
                <tr><td>56</td><td></td><td>Pakokku</td><td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td></tr>
                <tr><td>57</td><td></td><td>Mogok</td><td><a href="mailto:mogok@tourism.gov.mm">mogok@tourism.gov.mm</a></td></tr>
              </tbody>
            </table>
          </div>
        </section> */}
      </div>
    </div>
  );
}