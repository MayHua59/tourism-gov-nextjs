import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./BranchOffices.module.css";
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
          { label: "Главная", href: "/ru", icon: faHome },
          { label: "Филиалы", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Филиалы</h1>
        <p className={styles.paragraph}>Найдите контактную информацию для наших филиалов по всей Мьянме.</p>
        <div className={styles.tableResponsive}>
          <table className={styles.branchTable}>
            <thead>
              <tr>
                  <th>№</th>
                  <th>Отделение</th>
                  <th>Адрес</th>
                  <th>Контактный №</th>
                  <th>Электронный адрес</th>
              </tr>
            </thead>
            <tbody>
  <tr>
    <td>1</td>
    <td>Нейпьидо</td>
    <td>Здание правительства штата</td>
    <td>9251008624</td>
    <td><a href="mailto:naypyidaw@tourism.gov.mm">naypyidaw@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Янгон</td>
    <td>No (58/60), улица Каннар, улица Бо Аунг Кьяу, Янгон</td>
    <td>01- 256739, 25682801-256748, 256561,291306</td>
    <td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Мандалай</td>
    <td>Между улицами 68 и 27, Мандалай, № (211), 29-я улица, путь (84×85), Мандалай</td>
    <td>02-2848041,2848042, 4066624</td>
    <td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Давей</td>
    <td>№ (135), улица Южный рынок, квартал Зайит, Давей</td>
    <td>059-2021098, 2021231</td>
    <td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>5</td>
    <td>Таунджи</td>
    <td>№ 142, улица Боджоке, квартал Мьома, Таунджи</td>
    <td>081-2124275, 2121115, 2121302</td>
    <td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>6</td>
    <td>Ситтве</td>
    <td>Улица Таттатхарна, деревня Пхотхар, квартал Пьитовтхар, Ситтве</td>
    <td>043-22048, 22049, 21557</td>
    <td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>7</td>
    <td>Баган</td>
    <td>№ (4/д), напротив шоссе Баган – Ньяунг-У и Чаук, квартал Кьянситхар, Баган</td>
    <td>061-2465040</td>
    <td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>8</td>
    <td>Магуэ</td>
    <td>Улица Боджоке, рядом с парком Боджоке, Магуэ</td>
    <td>063-2025057</td>
    <td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>9</td>
    <td>Моньва</td>
    <td>Улица Кьяуккар, квартал Ян Кин, Моньва</td>
    <td>071-21152</td>
    <td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>10</td>
    <td>Баго</td>
    <td>№ 5/В, квартал (3×4), северный Зайганайнг, Баго</td>
    <td>052-2221113,2201768</td>
    <td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>11</td>
    <td>Патхейн</td>
    <td>№ (24). Парковая дорога, квартал (4), Патхейн</td>
    <td>042-21146</td>
    <td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>12</td>
    <td>Кьяин Тонг</td>
    <td>Частный дом № (21/22), улица Лавебаве, Наун Конг, Кьяин Тонг</td>
    <td>084-21617</td>
    <td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>13</td>
    <td>Лашио</td>
    <td>Квартал № (1), улица Бьюхар, Лашио</td>
    <td>082-2203015</td>
    <td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>14</td>
    <td>Лойкау</td>
    <td>Напротив монастыря Оттара, квартал Кьяунгкон, Лойкау</td>
    <td>083-2221078</td>
    <td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>15</td>
    <td>Мьичина</td>
    <td>Улица Иден, квартал Тат Кон, Мьичина</td>
    <td>074-22622</td>
    <td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>16</td>
    <td>Тандве</td>
    <td>Парковая дорога, квартал № 2, Тандве</td>
    <td>043-2065311</td>
    <td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>17</td>
    <td>Моламьяйн</td>
    <td>№ 106, Верхняя Главная дорога, квартал Бокон, Моламьяйн</td>
    <td>057-27056, 24650</td>
    <td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>18</td>
    <td>Хпа-ан</td>
    <td>Улица Зайетан. Угол улицы Мьинетазин, квартал № (2), Хпа-ан</td>
    <td>058-21075</td>
    <td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>19</td>
    <td>Хакха</td>
    <td>Улица Боджоке, Хакха.</td>
    <td>424812864</td>
    <td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>20</td>
    <td>Мьей</td>
    <td>Квартал Сонхаунгтаунг, дорога Канпьяр, Пхаякоэсу, Мьей</td>
    <td>059-41037</td>
    <td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>21</td>
    <td>Каутхаунг</td>
    <td>Угол улицы Боджоке, квартал Байиннаунг, Каутхаунг</td>
    <td>059-51578</td>
    <td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>22</td>
    <td>Мусе</td>
    <td>№ (56), Таунгмулве, рядом с воротами Нантау, Мусе</td>
    <td>082-51534</td>
    <td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>23</td>
    <td>Тачилейк</td>
    <td>№ 1, Мост Дружбы, Тачилейк</td>
    <td>084-52197</td>
    <td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>24</td>
    <td>Бхамо</td>
    <td>Квартал Тайокетян, улица Каннар, Бхамо</td>
    <td>074-50281</td>
    <td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>25</td>
    <td>Мьяук-У</td>
    <td>Кьяр Кансу, квартал Мьяук-У</td>
    <td>043-50327</td>
    <td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>26</td>
    <td>Мьявади</td>
    <td>№ (102), 7-й уровень. Улица Байиннаунг, квартал (4), Мьявади</td>
    <td>058-51391</td>
    <td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>27</td>
    <td>Миндат</td>
    <td>Дальний Восток, Миндат</td>
    <td>070-70389</td>
    <td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>28</td>
    <td>Пьин-У-Лвин</td>
    <td>Квартпин (5) кв. (3), квартал Калатан, Пьин-У-Лвин</td>
    <td>085-21935</td>
    <td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>29</td>
    <td>Швебо</td>
    <td>Улица Мьошунг, Северный Нан У Мьотхит Сагайн, № (3) квартал Тхакалттан, улица Ланмадо, Швебо</td>
    <td>075-21057</td>
    <td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>30</td>
    <td>Калай</td>
    <td>Квартал Чанмьяунгси, № 11, улица Калайва, Калай</td>
    <td>073-21011</td>
    <td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>31</td>
    <td>Пьяй</td>
    <td>Дорога Янгон-Пьяй, квартал Син Су, Пьяй</td>
    <td>053-24227</td>
    <td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>32</td>
    <td>Нгвесаунг</td>
    <td>№ 10 Улица Мьяену, квартал № 4, Патхейн</td>
    <td>042-21942</td>
    <td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>33</td>
    <td>Чаунгтхар</td>
    <td>№ 2, квартал Кьянтхаинг Йае Улица, Чаунгтхар</td>
    <td>042-42360</td>
    <td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>34</td>
    <td>Кьяукпью</td>
    <td>Улица Бонгамьяук, квартал Асоейя, Кьяукпью</td>
    <td>043-46023</td>
    <td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>35</td>
    <td>Пакокку</td>
    <td>Квартал № 5, улица Шветар, Пакокку</td>
    <td>062-21052</td>
    <td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>36</td>
    <td>Таунгу</td>
    <td>Таунгу</td>
    <td>09253676700</td>
    <td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td>
  </tr>
  <tr>
    <td>37</td>
    <td>Могок</td>
    <td>Могок</td>
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