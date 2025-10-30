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
          { label: "Home", href: "/", icon: faHome },
          { label: "Branch Offices", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Branch Offices</h1>
        <p className={styles.paragraph}>Find contact information for our branch offices across Myanmar.</p>
        <div className={styles.tableResponsive}>
          <table className={styles.branchTable}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Office</th>
                <th>Address</th>
                <th>Contact No.</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Naypyidaw</td>
                <td>State government office</td>
                <td>9251008624</td>
                <td><a href="mailto:naypyidaw@tourism.gov.mm">naypyidaw@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Yangon</td>
                <td>No (58/60), KannarStreet, Bo Aung Kyaw Street, Yangon</td>
                <td>01- 256739, 25682801-256748, 256561,291306</td>
                <td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mandalay</td>
                <td>Bet 68 Street and 27 Street, Mandalay No.(211), (29) Street, (84×85)Path, Mandalay</td>
                <td>02-2848041,2848042, 4066624</td>
                <td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Dawei</td>
                <td>No.(135), Southern Market.Street, Zayit Qt, Dawei</td>
                <td>059-2021098, 2021231</td>
                <td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Taunggyi</td>
                <td>No. 142, Bogyoke Street, Myoma Qt, Taunggyi</td>
                <td>081-2124275, 2121115, 2121302</td>
                <td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Sittwe</td>
                <td>Thattahtarna Street, Phoethar village, Pyitawthar Qt, Sittwe</td>
                <td>043-22048, 22049, 21557</td>
                <td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bagan</td>
                <td>No. (4/d), Infort of Bagan – Nyang Oo and Chauk Highway Road KyansittharQt, Bagan</td>
                <td>061-2465040</td>
                <td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Magway</td>
                <td>Bogyoke St, Beside of Bogyoke Park, Magway</td>
                <td>063-2025057</td>
                <td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Monywa</td>
                <td>Kyaukkar St, Yan Kin Qt, Monywa</td>
                <td>071-21152</td>
                <td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td>Bago</td>
                <td>No. 5/B, (3×4)Path, northern Zaiganaing, Bago</td>
                <td>052-2221113,2201768</td>
                <td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td>Pathein</td>
                <td>No. (24). Park Road, (4) Qt,Pathein</td>
                <td>042-21146</td>
                <td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td>Kyaing Tong</td>
                <td>Private No. (21/22) Lawebawe St, Naung Kong, Kyaing Tong</td>
                <td>084-21617</td>
                <td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td>Lashio</td>
                <td>No.(1) Qt, Byuhar Street, Lashio</td>
                <td>082-2203015</td>
                <td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td>Loikaw</td>
                <td>In front of Ottarar Monastery,Kyaungkon Qt, Loikaw</td>
                <td>083-2221078</td>
                <td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td>Myitkyina</td>
                <td>Eden Street, Tat Kon Qt, Myitkyina</td>
                <td>074-22622</td>
                <td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td>Thandwe</td>
                <td>Park Rd, No. 2 Qt, Thandwe</td>
                <td>043-2065311</td>
                <td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td>Mawlamyine</td>
                <td>No.106, Upper Main Road Bokon Qt, Mawlamyine</td>
                <td>057-27056, 24650</td>
                <td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td>Hpa-an</td>
                <td>Zayetan Street. Myinethazin Street Corner,No.(2)Qt Hpa-an</td>
                <td>058-21075</td>
                <td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td>Hakha</td>
                <td>Bogyoke Street, Haka.</td>
                <td>424812864</td>
                <td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td>Myeik</td>
                <td>SonekhaungtaungQt Kanphyar Road, PhayarKoesu, Myeik</td>
                <td>059-41037</td>
                <td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td>Kawthaung</td>
                <td>Bogyoke Street Corner, Bayintnaung Qt, Kawthaung</td>
                <td>059-51578</td>
                <td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td>Muse</td>
                <td>No.(56), Taungmulwe, Near Nantaw Gate, Muse</td>
                <td>082-51534</td>
                <td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td>Tachileik</td>
                <td>No.1, Friendship Bridge, Tachileik</td>
                <td>084-52197</td>
                <td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td>Bhamo</td>
                <td>Tayoketann Qt,Kannar.Street, Bhamo</td>
                <td>074-50281</td>
                <td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>25</td>
                <td>MyaukOo</td>
                <td>Kyar Kansu, QtMyaukOo</td>
                <td>043-50327</td>
                <td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>26</td>
                <td>Myawady</td>
                <td>No, (102), (7) Layer. Bayintnaung Street , (4) Qt, Myawady</td>
                <td>058-51391</td>
                <td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>27</td>
                <td>Mindat</td>
                <td>Far east , Mindat</td>
                <td>070-70389</td>
                <td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>28</td>
                <td>PyinOoLwin</td>
                <td>Kwatpyin (5)Qt(3), Kalatan Qt, Pyin Oo Lwin</td>
                <td>085-21935</td>
                <td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>29</td>
                <td>Shwe Bo</td>
                <td>Myoshung Street, Nothern Nan OoMyothit Sagaing, No(3)Qt, ThakalttanQt,Lanmadaw Street, Shwe Bo</td>
                <td>075-21057</td>
                <td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>30</td>
                <td>KaLay</td>
                <td>ChanmyaeaungsiQt, No.11, Kalaywa Street, KaLay</td>
                <td>073-21011</td>
                <td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>31</td>
                <td>Pyay</td>
                <td>Yangon -Pyay Road, Sin Su Qt, Pyay</td>
                <td>053-24227</td>
                <td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>32</td>
                <td>Ngwe Saung</td>
                <td>No .10 Myaenu Street, No.4 Qt, Pathein</td>
                <td>042-21942</td>
                <td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>33</td>
                <td>Chaung Thar</td>
                <td>No.2 ,Qt KyantKhaingYae Street, Chaung Thar</td>
                <td>042-42360</td>
                <td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>34</td>
                <td>KyaukPhyu</td>
                <td>Bongamouk St ,Asoeya Qt, KyaukPhyu</td>
                <td>043-46023</td>
                <td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>35</td>
                <td>Pakokku</td>
                <td>No. 5 QtShwethar Street, Pakokku</td>
                <td>062-21052</td>
                <td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>36</td>
                <td>Taungoo</td>
                <td>Taungoo</td>
                <td>09253676700</td>
                <td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td>
              </tr>
              <tr>
                <td>37</td>
                <td>Mogok</td>
                <td>Mogok</td>
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