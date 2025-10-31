import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./ContactUs.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Контактная Информация",
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
          { label: "Главная", href: "/ru/", icon: faHome },
          { label: "Контактная Информация", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Контактная Информация (Contact Us)</h1>

        <section id="contact-info">
          <p>

            Контакты Центральных Отделов и Персонала Министерства
          </p>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>№
                  </th>
                  <th>Пользователь/Департамент
                  </th>
                  <th>Адрес Электронной Почты
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Союзный Министр</td><td><a href="mailto:minister@tourism.gov.mm">minister@tourism.gov.mm</a></td></tr>
                <tr><td>2</td><td>Заместитель Министра</td><td><a href="mailto:dm.moht@tourism.gov.mm">dm.moht@tourism.gov.mm</a></td></tr>
                <tr><td>3</td><td>Постоянный Секретарь</td><td><a href="mailto:dg.mo@tourism.gov.mm">dg.mo@tourism.gov.mm</a></td></tr>
                <tr><td>4</td><td>Главный Директор</td><td><a href="mailto:dgoffice1.dhtd@gmail.com">dgoffice1.dhtd@gmail.com</a></td></tr>
                <tr><td>5</td><td>Заместитель Постоянного Секретаря</td><td><a href="mailto:myowinnyunt@tourism.gov.mm">myowinnyunt@tourism.gov.mm</a></td></tr>
                <tr><td>6</td><td>Заместитель Главного Директора</td><td><a href="mailto:ddg.moht@tourism.gov.mm">ddg.moht@tourism.gov.mm</a></td></tr>
                <tr><td>7</td><td>Заместитель Главного Директора</td><td><a href="mailto:myinthtwe@tourism.gov.mm">myinthtwe@tourism.gov.mm</a></td></tr>
                <tr><td>8</td><td>Заместитель Главного Директора</td><td><a href="mailto:ddg.tourism@gmail.com">ddg.tourism@gmail.com</a></td></tr>
                <tr><td>9</td><td>Заместитель Главного Директора</td><td><a href="mailto:ddg3.dht.moht@tourism.gov.mm">ddg3.dht.moht@tourism.gov.mm</a></td></tr>
                <tr><td>10</td><td>Администрация и Управление Человеческими Ресурсами</td><td><a href="mailto:moadmin@tourism.gov.mm">moadmin@tourism.gov.mm</a></td></tr>
                <tr><td>11</td><td>Департамент Политики</td><td><a href="mailto:dpolicy@tourism.gov.mm">dpolicy@tourism.gov.mm</a></td></tr>
                <tr><td>12</td><td>Департамент Планирования и Статистики</td><td><a href="mailto:planandstat@tourism.gov.mm">planandstat@tourism.gov.mm</a></td></tr>
                <tr><td>13</td><td>Департамент Внутреннего Аудита и Финансов</td><td><a href="mailto:budget@tourism.gov.mm">budget@tourism.gov.mm</a></td></tr>
                <tr><td>14</td><td>Департамент по Связям с Общественностью и Информации</td><td><a href="mailto:prid@tourism.gov.mm">prid@tourism.gov.mm</a></td></tr>
                <tr><td>15</td><td>Офис Электронного Правительства</td><td><a href="mailto:egov.moht@gmail.com">egov.moht@gmail.com</a></td></tr>
                <tr><td>16</td><td>Департамент Администрации и Бюджета</td><td><a href="mailto:dhtadmin@tourism.gov.mm">dhtadmin@tourism.gov.mm</a></td></tr>
                <tr><td>17</td><td>Департамент Надзора за Отелями и Туризмом</td><td><a href="mailto:htsd@tourism.gov.mm">htsd@tourism.gov.mm</a></td></tr>
                <tr><td>18</td><td>Департамент Обучения и Образования</td><td><a href="mailto:training@tourism.gov.mm">training@tourism.gov.mm</a></td></tr>
                <tr><td>19</td><td>Департамент Планирования</td><td><a href="mailto:project.dht@tourism.gov.mm">project.dht@tourism.gov.mm</a></td></tr>
                <tr><td>20</td><td>Департамент Международного и Регионального Сотрудничества</td><td><a href="mailto:irc@tourism.gov.mm">irc@tourism.gov.mm</a></td></tr>
                <tr><td>21</td><td>Департамент Продвижения Туризма</td><td><a href="mailto:promotion@tourism.gov.mm">promotion@tourism.gov.mm</a></td></tr>
                <tr><td>22</td><td>Департамент Продвижения Туризма (Цифровой Маркетинг)</td><td><a href="mailto:info@tourism.gov.mm">info@tourism.gov.mm</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="branch-offices">
          <h2>Отделы и Офисы</h2>
          <div className={styles.tableResponsive}>
            <table className={styles.contactTable}>
              <thead>
                <tr>
                  <th>№
                  </th>
                  <th>Офис
                  </th>
                  <th>Город
                  </th>
                  <th>Адрес Электронной Почты
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr><td>21</td><td>Нижняя Мьянма</td><td>Янгон
                </td><td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td></tr>
                <tr><td>22</td><td></td><td>Ситуэ
                </td><td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td></tr>
                <tr><td>23</td><td></td><td>Давей
                </td><td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td></tr>
                <tr><td>24</td><td></td><td>Хпа-ан
                </td><td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td></tr>
                <tr><td>25</td><td></td><td>Моламьяйн
                </td><td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td></tr>
                <tr><td>26</td><td></td><td>Тхандве
                </td><td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td></tr>
                <tr><td>27</td><td></td><td>Баго</td><td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td></tr>
                <tr><td>28</td><td></td><td>Патейн
                </td><td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td></tr>
                <tr><td>29</td><td></td><td>Мьявади
                </td><td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td></tr>
                <tr><td>30</td><td></td><td>Мраук-У</td><td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td></tr>
                <tr><td>31</td><td></td><td>Каутхаунг</td><td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td></tr>
                <tr><td>32</td><td></td><td> Мьейк</td><td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td></tr>
                <tr><td>33</td><td></td><td>Кьяукпхью</td><td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td></tr>
                <tr><td>34</td><td></td><td>Пьяй</td><td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td></tr>
                <tr><td>35</td><td></td><td>Таунгу</td><td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td></tr>
                <tr><td>36</td><td></td><td>Нгвесаунг</td><td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td></tr>
                <tr><td>37</td><td></td><td>Чаунгтха</td><td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td></tr>
                <tr><td>38</td><td></td><td>Кьяйкто</td><td><a href="mailto:kyaikhto@tourism.gov.mm">kyaikhto@tourism.gov.mm</a></td></tr>
                <tr><td>39</td><td>Верхняя Мьянма</td><td>Мандалай</td><td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td></tr>
                <tr><td>40</td><td></td><td>Таунджи</td><td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td></tr>
                <tr><td>41</td><td></td><td>Мьичина</td><td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td></tr>
                <tr><td>42</td><td></td><td>Лойкау</td><td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td></tr>
                <tr><td>43</td><td></td><td>Хакха</td><td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td></tr>
                <tr><td>44</td><td></td><td>Лашо</td><td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td></tr>
                <tr><td>45</td><td></td><td>Кьяингтон</td><td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td></tr>
                <tr><td>46</td><td></td><td>Монива</td><td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td></tr>
                <tr><td>47</td><td></td><td>Баган</td><td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td></tr>
                <tr><td>48</td><td></td><td>Магуэй</td><td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td></tr>
                <tr><td>49</td><td></td><td>Банмо</td><td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td></tr>
                <tr><td>50</td><td></td><td>Миндат</td><td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td></tr>
                <tr><td>51</td><td></td><td>Тачилеик</td><td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td></tr>
                <tr><td>52</td><td></td><td>Мусе</td><td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td></tr>
                <tr><td>53</td><td></td><td>Калай</td><td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td></tr>
                <tr><td>54</td><td></td><td>Швебо</td><td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td></tr>
                <tr><td>55</td><td></td><td>Пьин У Лвин</td><td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td></tr>
                <tr><td>56</td><td></td><td>Пакокку</td><td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td></tr>
                <tr><td>57</td><td></td><td>Могок</td><td><a href="mailto:mogok@tourism.gov.mm">mogok@tourism.gov.mm</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}