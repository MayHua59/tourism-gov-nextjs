import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./InformationCounters.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Information Counters",
  description: "Find locations and contact details for Myanmar tourism information counters."
};

export default function InformationCounters() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/68.jpg" altText="information counters cover photo" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Information Counters", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Information Counters</h1>
        <section id="information-counters">
          <div className={styles.tableResponsive}>
            <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Centre Name</th>
                  <th>Address</th>
                  <th>Phone Numbers</th>
                  <th>Email Address</th>
                  <th>View on Map</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Yangon Station</td>
                  <td>Around the station</td>
                  <td></td>
                  <td></td>
                  <td><a href="https://www.google.com/maps/place/Myanmar+Travel+Information+Media/@16.8553743,96.0849736,10833m/data=!3m1!1e3!4m6!3m5!1s0x30c194eb82dd5eef:0xdc24d6f394ff7051!8m2!3d16.8497899!4d96.1286888!16s%2Fg%2F11g88803nh?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Airport</td>
                  <td>
                    1. Arrival Hall
                    <br />
                    2. Terminal 1(Arrival Hall)
                  </td>
                  <td></td>
                  <td></td>
                  <td><a href="https://www.google.com/maps/place/Yangon+International+Airport/@16.9032974,96.1310917,16.22z/data=!4m5!3m4!1s0x30c194168bb31e03:0x26217574c0bf07bf!8m2!3d16.9027736!4d96.1352618?shorturl=1" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Down Town Yangon Counter</td>
                  <td>No (118), Maharbandoola Kyaut Tadar Township</td>
                  <td>01- 256739, 256828<br />01-256748, 256561,<br />291306</td>
                  <td>yangon@tourism.gov.mm</td>
                  <td><a href="https://www.google.com/maps/place/118+Maha+Bandula+Park+St,+Yangon/@16.771526,96.1600165,677m/data=!3m2!1e3!4b1!4m5!3m4!1s0x30c1ec7da48bd555:0xeb9e373a976b097e!8m2!3d16.771526!4d96.1600165?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Mandalay Airport</td>
                  <td>Around Tadar Oo</td>
                  <td></td>
                  <td></td>
                  <td><a href="https://www.google.com/maps/place/Mandalay+International+Airport/@21.7056445,95.9684997,657m/data=!3m1!1e3!4m6!3m5!1s0x30cba6d622534339:0x85d810fad8b4df08!8m2!3d21.7055696!4d95.9696903!16zL20vMGc1cV8x?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mandalay Station</td>
                  <td>In Mandalay Station</td>
                  <td></td>
                  <td></td>
                  <td><a href="https://www.google.com/maps/place/Mandalay+Railway+Station/@21.9771217,96.0861238,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30cb6d217dcea93d:0x3e2d113c94a9b221!8m2!3d21.9771217!4d96.0861238!16s%2Fm%2F058vv02?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Mandalay</td>
                  <td>Mandalay Swam No. (68) road x No. (27) Corner</td>
                  <td>02-2848041,<br />2848042, 66624<br />02-60356, 35726, 21094</td>
                  <td>mdy@tourism.gov.mm</td>
                  <td><a href="https://www.google.com/maps/place/Mandalay+Swan+Hotel/@21.9812751,96.1047168,656m/data=!3m2!1e3!4b1!4m9!3m8!1s0x30cb6d0204b12d6b:0xb8cf39fde9c4671c!5m2!4m1!1i2!8m2!3d21.9812751!4d96.1047168!16s%2Fg%2F1tf9kpxc?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Pyin Oo Lwin</td>
                  <td>No.(120), Kyay Nan road, near Cherry Lwin Cinema</td>
                  <td></td>
                  <td></td>
                  <td><a href="https://www.google.com/maps/place/Cherry+Lwin/@22.0248887,96.4615354,656m/data=!3m1!1e3!4m6!3m5!1s0x30cc9e9a5514613b:0xc53c8f6e7cef9315!8m2!3d22.0248887!4d96.4637241!16s%2Fg%2F12hl2kfpp?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Taunggyi</td>
                  <td>No.(142), Bogyoke road, Myoma street, Taunggyi</td>
                  <td>081-2124275, 2121115,<br />2121302</td>
                  <td>taunggyi@tourism.gov.mm</td>
                  <td><a href="https://www.google.com/maps/place/Bogyoke+Aung+San+Rd/@20.7895036,97.0339115,661m/data=!3m1!1e3!4m6!3m5!1s0x30ce86422fc04627:0xa52dc4835fba5ad7!8m2!3d20.789508!4d97.0361031!16s%2Fg%2F11byl633s2?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Heho</td>
                  <td>Around Heho Airport</td>
                  <td></td>
                  <td></td>
                  <td><a href="https://www.google.com/maps/place/Heho+Airport/@20.7435735,96.7913858,17z/data=!4m5!3m4!1s0x30ce97760a513d7d:0x435ac983508a5b9d!8m2!3d20.7435735!4d96.7935745?shorturl=1" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Kalaw</td>
                  <td>Word No. (1), beside State road</td>
                  <td></td>
                  <td></td>
                  <td><a href="https://www.google.com/maps/place/Kalaw+Town+Market/@20.6377982,96.565133,1324m/data=!3m1!1e3!4m6!3m5!1s0x30ceb777fb451ab9:0x4164264e3a2648f0!8m2!3d20.6355143!4d96.5670277!16s%2Fg%2F11csbmxj1b?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className={styles.viewOnMap}>View on Map</a></td>
                </tr>
                <tr>
                            <td>11</td>
                            <td>PaeKo</td>
                            <td>Rose street, Zatan word, Paeko</td>
                            <td></td>
                            <td></td>
                            <td><a href="https://www.google.com/maps/place/Bago/@17.29622,96.4730394,21615m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30c3d6b94708e943:0x65ab7af98d3e6f32!8m2!3d17.3220711!4d96.4663286!16zL20vMDZuY3Jo?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>12</td>
                            <td>Nyaun Shwe</td>
                            <td>Win word, Kannar road, Nyaun Shwe</td>
                            <td></td>
                            <td></td>
                            <td><a href="https://www.google.com/maps/place/Nyaungshwe/@20.6601411,96.9191441,5296m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30ce8def0632f979:0x39edf89aeb2c584b!8m2!3d20.6594185!4d96.934332!16zL20vMDY2eTd2?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>13</td>
                            <td>Tachileik</td>
                            <td>Tachilike Office</td>
                            <td></td>
                            <td></td>
                            <td><a href="https://www.google.com/maps/place/Tachileik/@20.4721015,99.9139594,10604m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30d6f558f9e2e9fd:0xf7a608ad8ab0d581!8m2!3d20.4521225!4d99.898914!16s%2Fm%2F03hnfg6?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>14</td>
                            <td>Kyaing Tone</td>
                            <td>Around Airport</td>
                            <td>084-21617</td>
                            <td>kyaington@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Kyaing+Tong+Airport/@21.302467,99.6336763,17z/data=!3m1!4b1!4m5!3m4!1s0x30d4440719f08ea3:0x7ef90a7de3350b4!8m2!3d21.302467!4d99.635865?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>15</td>
                            <td>Bagan</td>
                            <td>Nyaung Oo Ariport</td>
                            <td></td>
                            <td></td>
                            <td><a href="https://www.google.com/maps/place/Nyaung+U+Airport/@21.1755241,94.926511,17z/data=!3m1!4b1!4m5!3m4!1s0x30b5faf73137c9a7:0x250de82300cac971!8m2!3d21.1755241!4d94.9286997?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>16</td>
                            <td>Bagan</td>
                            <td>Bagan Office</td>
                            <td>061-2465040</td>
                            <td>bgn@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Tourist+Information+Center/@21.1365258,94.8402285,5279m/data=!3m1!1e3!4m6!3m5!1s0x30b5e48eb0df7081:0x87932362d4f1c1b3!8m2!3d21.1365317!4d94.8578!16s%2Fg%2F11b6c9kgmv?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>17</td>
                            <td>Bagan</td>
                            <td>Bagan- Nyaung Oo Market counter (In front of Mani Si Thu)</td>
                            <td></td>
                            <td></td>
                            <td><a href="https://www.google.com/maps/place/Mani+Sithu+Market/@21.2009331,94.906782,17z/data=!3m1!4b1!4m5!3m4!1s0x30b5fabb5727f203:0x60d481349b2f0745!8m2!3d21.2009331!4d94.9089707?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>18</td>
                            <td>Myawady</td>
                            <td>On the bridge and right hand side Myawady</td>
                            <td>058-51391</td>
                            <td>mwd@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Myawady+Rd,+Nyaungshwe/@20.6617031,96.9326005,331m/data=!3m1!1e3!4m6!3m5!1s0x30ce8de4f9f8ce51:0xdef1836eb59578aa!8m2!3d20.6610427!4d96.9341428!16s%2Fg%2F11h10dxlf?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>19</td>
                            <td>Kyaikhtiyo</td>
                            <td>Near Entrance Kyinteeyo (Eastern of Kyaiktto Hotel)</td>
                            <td></td>
                            <td></td>
                            <td><a href="https://www.google.com/maps/place/Kyaiktiyo+Pagoda/@16.9776932,96.7546385,9z/data=!4m5!3m4!1s0x30c30a774afb2ae1:0xe3bbe018e15e96fa!8m2!3d17.4816206!4d97.0982157?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>20</td>
                            <td>Mawlamyein</td>
                            <td>No (118), Lower Main Road, Phattan ward</td>
                            <td>057-27056, 24650</td>
                            <td>mlm@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Strand+View/@16.4971861,97.6164624,17z/data=!4m5!3m4!1s0x30c2af511160b365:0x925cb1b5556e0a96!8m2!3d16.498644!4d97.6184385?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>21</td>
                            <td>Loikaw</td>
                            <td>In the Airport</td>
                            <td>083-2221078</td>
                            <td>loikaw@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Loikaw+Airport/@19.6895962,97.2116297,17z/data=!3m1!4b1!4m5!3m4!1s0x30cf9bc8e30c4027:0xffdcaaa63b6f480a!8m2!3d19.6895962!4d97.2138184?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>22</td>
                            <td>Kawthaung</td>
                            <td>Kawthaung quay</td>
                            <td>059-51578</td>
                            <td>kawthaung@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Ministry+of+Hotels+%26+Tourism/@9.970806,98.5760939,14z/data=!4m5!3m4!1s0x30564df3a02efbd1:0x79aad183764172a2!8m2!3d9.977835!4d98.553016?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>23</td>
                            <td>Pathein</td>
                            <td>No (24), Park street, No (4) ward</td>
                            <td>042-21146</td>
                            <td>pathein@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Pathein/@16.7768991,94.7380684,1355m/data=!3m1!1e3!4m6!3m5!1s0x30bfea063fe53f85:0xd07f864b399e7c13!8m2!3d16.7753609!4d94.7381013!16zL20vMDR4bm12?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>24</td>
                            <td>Chaungtha</td>
                            <td>Into The Azura Hotel</td>
                            <td>042-42360</td>
                            <td>chaungthar@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Azura+Beach+Resort+%26+Spa+@chaung+thar/@16.9594509,94.4385654,17z/data=!4m5!3m4!1s0x30bfb3806dca8bc7:0xaaea79e9d896475b!8m2!3d16.9594509!4d94.4407541?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>25</td>
                            <td>Nge Saung</td>
                            <td>Junction Hotel Zone road, No.(3) ward, B.E.H.S, Nge Saung</td>
                            <td>042-21942</td>
                            <td>ngwesaung@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Basic+Education+High+School/@16.8574681,94.3871756,677m/data=!3m1!1e3!4m6!3m5!1s0x30be3550e5154149:0xc596f741d7ef5294!8m2!3d16.8574681!4d94.3893643!16s%2Fg%2F11cs5pq9qk?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>26</td>
                            <td>Bago</td>
                            <td>Between No. (3)road and No.(4), Northern Zaiga Ning</td>
                            <td>052-2221113,2201768</td>
                            <td>bago@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Bago+University/@17.2699468,96.4617391,2702m/data=!3m1!1e3!4m6!3m5!1s0x30c3d41813384fab:0xfcf14a6841f404d6!8m2!3d17.2704203!4d96.4726196!16s%2Fg%2F1hm5_zlt4?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                         <tr>
                            <td>27</td>
                            <td>Thandwe</td>
                            <td>Thandwe Airport</td>
                            <td>043-2065311</td>
                            <td>thandwe@tourism.gov.mm</td>
                            <td><a href="https://www.google.com/maps/place/Thandwe+Airport/@18.4578955,94.2966427,17z/data=!3m1!4b1!4m5!3m4!1s0x30b91944a799414b:0x61142f6b89e3a563!8m2!3d18.4578955!4d94.2988314?shorturl=1" target="_blank" className="view-on-map">View on Map</a></td>
                        </tr>
                       
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}