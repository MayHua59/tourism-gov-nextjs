import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/tourism-police-offices/TourismPoliceOffices.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Tourism Police Offices",
  description: "Myanmar Tourism Office has tourism police offices in Myanmar"
};

export default function TourismPoliceOffices() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/58.jpg" altText="tourism police offices cover photo" />
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/jp", icon: faHome },
          { label: "観光警察署", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>観光警察署</h1>
        <p>ミャンマーの観光警察署</p>

        <section id="police-units">
          <div className={styles.tableResponsive}>
          <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>観光警察署の単位</th>
                  <th>住所</th>
                  <th>電話番号</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Head Quarter</td>
                  <td>Naypyitaw, Zabuthiri Township, Hotel Zone-1, at No.2 Police Station and Operating Functions.</td>
                  <td>067-414303, 067-414364</td>
                </tr>
                <tr>
                  <td>Naypyitaw Unit</td>
                  <td>Inside the Head Quarter building.</td>
                  <td>067-414226, 09-448539518</td>
                </tr>
                <tr>
                  <td>Yangon Unit</td>
                  <td>No.110, Pansodan Road (middle block), Kyauktada Tsp.</td>
                  <td>01-379991, 09-448539519</td>
                </tr>
                <tr>
                  <td>Mandalay Unit</td>
                  <td>Aung Myay Tharzan Tsp, Min- Te- Ei- Kin Quarter, 19th Street (between 90th and Tar- Pat St) at Kyauk- Tha- Beik Police Quarter.</td>
                  <td>02-67382, 09-791107831</td>
                </tr>
                <tr>
                  <td>Pyin Oo Lwin Sub- unit</td>
                  <td>Inside Pyin Oo Lwin Tsp Local Police Station.</td>
                  <td>09-422527811</td>
                </tr>
                <tr>
                  <td>Bagan Unit</td>
                  <td>New Bagan, at Bagan Local Police Station.</td>
                  <td>061-65474, 09-448539508</td>
                </tr>
                <tr>
                  <td>Popa Sub-unit</td>
                  <td>Located at Summit of Popa Padestal hill, Ruby Stairway, Board of Trustee building.</td>
                  <td>09-256261413</td>
                </tr>
                <tr>
                  <td>Shan Unit</td>
                  <td>Inside Nyaung Shwe, (In Le) Tsp, Local Police Station.</td>
                  <td>081-209911, 09-448539509</td>
                </tr>
                <tr>
                  <td>Kalaw Sub-unit</td>
                  <td>Inside Kalaw Tsp, Local Police Station.</td>
                  <td>09-428313074</td>
                </tr>
                <tr>
                  <td>Pindaya Sub-unit</td>
                  <td>Inside Pindaya Local Police Station.</td>
                  <td>09-49355319</td>
                </tr>
                <tr>
                  <td>Ayarwaddy Unit</td>
                  <td>Ayarwaddy Units (Ngwe Saung and Chaung Thar) are placed in respective Local Police Stations.</td>
                  <td>09-250236373, 09-250188328</td>
                </tr>
                <tr>
                  <td>Srikhittayar Unit (Pyu Ancient City)</td>
                  <td>Bago Regional Division (west), Pyay Tsp, North Chapel of Shwe San Daw Pagoda.</td>
                  <td>09-250236373, 09-250188328</td>
                </tr>
                <tr>
                  <td>Bago Sub-unit</td>
                  <td>Bago Tsp, West Chapel of Shwemawdaw Pagoda, Power Supply building.</td>
                  <td>09-250471372</td>
                </tr>
                <tr>
                  <td>Beikthano Unit (Pyu Ancient City)</td>
                  <td>Magway Regional Division, Taungdwingyi tsp, Local Police Station.</td>
                  <td>063-51148, 09-256016729</td>
                </tr>
                <tr>
                  <td>Hanlin Unit (Pyu Ancient City)</td>
                  <td>Sagaing Regional Division, Shwebo district, Wetlet Tsp, Local Police Station.</td>
                  <td>09-400536332</td>
                </tr>
                <tr>
                  <td>Sagaing- Mingun Sub-unit</td>
                  <td>Inside Mingun Police Station.</td>
                  <td>09-797399188</td>
                </tr>
                <tr>
                  <td>Mawlamyaing Unit</td>
                  <td>Mon State, Mawlamyaing Tsp, Maung Ngan Quarter, Maung Ngan Police Outpost.</td>
                  <td>09-977044493, 09-254299912</td>
                </tr>
                <tr>
                  <td>Kyaikhtiyo Sub-unit</td>
                  <td>Mon State, Kyaikhto Tsp, Kimonchaung Police Station.</td>
                  <td>09-428206641</td>
                </tr>
                <tr>
                  <td>Myawaddy Unit</td>
                  <td>Kayin State, Myawaddy Tsp, Local Police Station.</td>
                  <td>09-43200250</td>
                </tr>
                <tr>
                  <td>Tachileik Unit</td>
                  <td>Shan State, Tachileik Tsp, Pasak Quarter, No.218, Bogyoke Aung San Road.</td>
                  <td>09-428003877</td>
                </tr>
                <tr>
                  <td>Ngapali Unit</td>
                  <td>Rakhine State, Thandwe Tsp, Jeiktaw Police Station.</td>
                  <td>09-403714839</td>
                </tr>
                <tr>
                  <td>Mrauk-U Sub-unit</td>
                  <td>Rakhine State, Mrauk-U Tsp, nearby Shitthaung Pagoda, Archaeology building.</td>
                  <td>09-787191051, 09-253448499</td>
                </tr>
                <tr>
                  <td>Kanpatlat Sub-unit</td>
                  <td>Chin State, Kanpatlat Tsp Police Station.</td>
                  <td>09-73056986</td>
                </tr>
                <tr>
                  <td>Dawei Sub-unit</td>
                  <td>Tanintharyi Regional Division, Dawei Tsp, Pa-lae Police Avenue Compound.</td>
                  <td>09-250477105, 09-47053133</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="police-hotlines">
          <h3>Tourism Police Hotlines and Locations </h3>
          <div className={styles.tableResponsive}>
          <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Location</th>
                  <th>Contact (Phone Number)</th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>1</td>
    <td>Head Quarter</td>
    <td>067-414303, 067-414364</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Naypyitaw</td>
    <td>067-414226</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Yangon</td>
    <td>01-379991</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Mandalay</td>
    <td>02-67382</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Pyin Oo Lwin</td>
    <td>09-422527811</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Bagan</td>
    <td>061-65474</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Popa</td>
    <td>09-256261413</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Shan</td>
    <td>081-209911</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Pindaya</td>
    <td>09-49355319</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Kalaw</td>
    <td>09-428313074</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Tachileik</td>
    <td>09-428003877</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Ayarwaddy</td>
    <td>09-250236373</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Srikhittayar</td>
    <td>09-250188328</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Bago</td>
    <td>09-250343438</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Beikthano</td>
    <td>09-250471372</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Beikthano</td>
    <td>063-51148</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Hanlin</td>
    <td>09-2560167729, 09-47061503</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Mingon</td>
    <td>09-797399188</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Mawlamyaing</td>
    <td>09-8548090</td>
  </tr>
  <tr>
    <td>20</td>
    <td>Kyaikhtiyoe</td>
    <td>09-428206641</td>
  </tr>
  <tr>
    <td>21</td>
    <td>Ngapali</td>
    <td>09-403714839, 043-42191</td>
  </tr>
  <tr>
    <td>22</td>
    <td>Mrauk-U</td>
    <td>09-253448499, 09-78719105</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Myawaddy</td>
    <td>09-43200250</td>
  </tr>
  <tr>
    <td>24</td>
    <td>Kanpatlat</td>
    <td>09-73056986</td>
  </tr>
  <tr>
    <td>25</td>
    <td>Dawei</td>
    <td>09-250477105, 09-47053133</td>
  </tr>
  <tr>
    <td>26</td>
    <td>Loikaw</td>
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