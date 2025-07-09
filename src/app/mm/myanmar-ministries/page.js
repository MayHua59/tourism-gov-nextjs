import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./MyanmarMinistries.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Myanmar Ministries",
  description: "List of Myanmar government ministries and their official websites."
};

export default function MyanmarMinistries() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images-title/12.jpg" altText="myanmar ministries cover photo" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/mm/", icon: faHome },
          { label: "ဝန်ကြီးဌာနများ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ဝန်ကြီးဌာနများ</h1>
        <section id="ministries-table" className={styles.mt5}>
          <div className={styles.tableResponsive}>
            <table className={styles.ministriesTable}>
              <thead>
                <tr>
                  <th>စဉ်</th>
                            <th>ဝန်ကြီးဌာန</th>
                            <th>Website လိပ်စာ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ပို့ဆောင်ရေးနှင့်ဆက်သွယ်ရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.motc.gov.mm" target="_blank" rel="noopener">https://www.motc.gov.mm</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ကာကွယ်ရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.mod.gov.mm" target="_blank" rel="noopener">https://www.mod.gov.mm</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ပြည်ထဲရေးဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.moha.gov.mm" target="_blank" rel="noopener">https://www.moha.gov.mm</a><br />
                    <a href="https://policeforce.gov.mm" target="_blank" rel="noopener">https://policeforce.gov.mm</a><br />
                    <a href="https://gad.gov.mm" target="_blank" rel="noopener">https://gad.gov.mm</a><br />
                    <a href="https://bsi.gov.mm" target="_blank" rel="noopener">https://bsi.gov.mm</a><br />
                    <a href="https://prisonsdepartment.gov.mm" target="_blank" rel="noopener">https://prisonsdepartment.gov.mm</a><br />
                    <a href="https://www.fsd.gov.mm" target="_blank" rel="noopener">https://www.fsd.gov.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>စီမံကိန်းနှင့်ဘဏ္ဍာရေးဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.mopf.gov.mm" target="_blank" rel="noopener">https://www.mopf.gov.mm</a><br />
                    <a href="https://www.mmftb.gov.mm" target="_blank" rel="noopener">https://www.mmftb.gov.mm</a><br />
                    <a href="https://www.cbm.gov.mm" target="_blank" rel="noopener">https://www.cbm.gov.mm</a><br />
                    <a href="https://ird.gov.mm" target="_blank" rel="noopener">https://ird.gov.mm</a><br />
                    <a href="https://customs.gov.mm" target="_blank" rel="noopener">https://customs.gov.mm</a><br />
                    <a href="https://www.mminsurance.gov.mm" target="_blank" rel="noopener">https://www.mminsurance.gov.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>နိုင်ငံခြားရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.mofa.gov.mm" target="_blank" rel="noopener">https://www.mofa.gov.mm</a></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>နိုင်ငံတော်စီမံအုပ်ချုပ်ရေးကောင်စီဥက္ကဋ္ဌရုံးဝန်ကြီးဌာန (၁)</td>
                  <td><a href="https://sacministry.gov.mm" target="_blank" rel="noopener">https://sacministry.gov.mm</a></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>နိုင်ငံတော်စီမံအုပ်ချုပ်ရေးကောင်စီဥက္ကဋ္ဌရုံးဝန်ကြီးဌာန (၂)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>နိုင်ငံတော်စီမံအုပ်ချုပ်ရေးကောင်စီဥက္ကဋ္ဌရုံးဝန်ကြီးဌာန (၃)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>နိုင်ငံတော်စီမံအုပ်ချုပ်ရေးကောင်စီဥက္ကဋ္ဌရုံးဝန်ကြီးဌာန (၄)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>နယ်စပ်ရေးရာဝန်ကြီးဌာန</td>
                  <td><a href="https://www.moba.gov.mm" target="_blank" rel="noopener">https://www.moba.gov.mm</a></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>ရင်းနှီးမြှုပ်နှံမှုနှင့်နိုင်ငံခြားစီးပွားဆက်သွယ်ရေး ဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.mifer.gov.mm" target="_blank" rel="noopener">https://www.mifer.gov.mm</a><br />
                    <a href="https://www.dica.gov.mm" target="_blank" rel="noopener">https://www.dica.gov.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>ဥပဒေရေးရာဝန်ကြီးဌာန</td>
                  <td><a href="https://www.mola.gov.mm" target="_blank" rel="noopener">https://www.mola.gov.mm</a></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>ပြန်ကြားရေးဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.moi.gov.mm" target="_blank" rel="noopener">https://www.moi.gov.mm</a><br />
                    <a href="https://www.mrtv.gov.mm" target="_blank" rel="noopener">https://www.mrtv.gov.mm</a><br />
                    <a href="https://www.moi.gov.mm/iprd" target="_blank" rel="noopener">https://www.moi.gov.mm/iprd</a><br />
                    <a href="https://moi.gov.mm/ppd" target="_blank" rel="noopener">https://moi.gov.mm/ppd</a><br />
                    <a href="https://moi.gov.mm/npe" target="_blank" rel="noopener">https://moi.gov.mm/npe</a>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>သာသနာရေးနှင့်ယဉ်ကျေးမှုဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.mora.gov.mm" target="_blank" rel="noopener">https://www.mora.gov.mm</a><br />
                    <a href="https://www.kbrl.gov.mm" target="_blank" rel="noopener">https://www.kbrl.gov.mm</a><br />
                    <a href="https://www.mahana.org.mm" target="_blank" rel="noopener">https://www.mahana.org.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>စိုက်ပျိုးရေးမွေးမြူရေးနှင့်ဆည်မြောင်းဝန်ကြီးဌာန</td>
                  <td><a href="https://www.moali.gov.mm" target="_blank" rel="noopener">https://www.moali.gov.mm</a></td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>သမဝါယမနှင့် ကျေးလက်ဖွံ့ဖြိုးရေး ဝန်ကြီးဌာန</td>
                  <td><a href="https://mcrd.gov.mm" target="_blank" rel="noopener">https://mcrd.gov.mm</a></td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>သယံဇာတနှင့်သဘာဝပတ်ဝန်းကျင် ထိန်းသိမ်းရေးဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.monrec.gov.mm" target="_blank" rel="noopener">https://www.monrec.gov.mm</a><br />
                    <a href="https://www.mining.gov.mm" target="_blank" rel="noopener">https://www.mining.gov.mm</a><br />
                    <a href="https://www.mte.com.mm" target="_blank" rel="noopener">https://www.mte.com.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>လျှပ်စစ်စွမ်းအားဝန်ကြီးဌာန</td>
                  <td><a href="https://www.moep.gov.mm" target="_blank" rel="noopener">https://www.moep.gov.mm</a></td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>စွမ်းအင်ဝန်ကြီးဌာန</td>
                  <td><a href="https://www.energy.gov.mm" target="_blank" rel="noopener">https://www.energy.gov.mm</a></td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>စက်မှုဝန်ကြီးဌာန</td>
                  <td><a href="https://industry.gov.mm" target="_blank" rel="noopener">https://industry.gov.mm</a></td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>လူဝင်မှုကြီးကြပ်ရေးနှင့် ပြည်သူ့အင်အားဝန်ကြီးဌာန</td>
                  <td><a href="https://www.mip.gov.mm" target="_blank" rel="noopener">https://www.mip.gov.mm</a></td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>အလုပ်သမားဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.mol.gov.mm" target="_blank" rel="noopener">https://www.mol.gov.mm</a><br />
                    <a href="https://www.ssb.gov.mm" target="_blank" rel="noopener">https://www.ssb.gov.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>စီးပွားရေးနှင့်ကူးသန်းရောင်းဝယ်ရေးဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.commerce.gov.mm" target="_blank" rel="noopener">https://www.commerce.gov.mm</a><br />
                    <a href="https://www.myanmartradenet.com.mm" target="_blank" rel="noopener">https://www.myanmartradenet.com.mm</a><br />
                    <a href="https://www.servicetrade.gov.mm" target="_blank" rel="noopener">https://www.servicetrade.gov.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>ပညာရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.moe.gov.mm" target="_blank" rel="noopener">https://www.moe.gov.mm</a></td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>သိပ္ပံနှင့်နည်းပညာဝန်ကြီးဌာန</td>
                  <td><a href="https://www.most.gov.mm" target="_blank" rel="noopener">https://www.most.gov.mm</a></td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>ကျန်းမာရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.mohs.gov.mm" target="_blank" rel="noopener">https://www.mohs.gov.mm</a></td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>အားကစားနှင့်လူငယ်ရေးရာဝန်ကြီးဌာန</td>
                  <td><a href="https://mosya.gov.mm" target="_blank" rel="noopener">https://mosya.gov.mm</a></td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>ဆောက်လုပ်ရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.construction.gov.mm" target="_blank" rel="noopener">https://www.construction.gov.mm</a></td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>လူမှုဝန်ထမ်းကယ်ဆယ်ရေးနှင့်ပြန်လည်နေရာချထားရေးဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.moswrr.gov.mm" target="_blank" rel="noopener">https://www.moswrr.gov.mm</a><br />
                    <a href="https://www.dsw.gov.mm" target="_blank" rel="noopener">https://www.dsw.gov.mm</a><br />
                    <a href="https://www.ddm.gov.mm" target="_blank" rel="noopener">https://www.ddm.gov.mm</a>
                  </td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.tourism.gov.mm" target="_blank" rel="noopener">https://www.tourism.gov.mm</a></td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>တိုင်းရင်းသားလူမျိုးများရေးရာဝန်ကြီးဌာန</td>
                  <td><a href="https://portal.moea.gov.mm" target="_blank" rel="noopener">https://portal.moea.gov.mm</a></td>
                </tr>
              </tbody>
            </table>
          </div>
           <h2 className={`${styles.pageTitle} ${styles.textCenter} ${styles.mt5}`}>အစိုးရအဖွဲ့အစည်းများ</h2>
          <div className={styles.tableResponsive}>
            <table className={styles.ministriesTable}>
              <thead>
                <tr>
                  <th>စဉ်</th>
                  <th>အဖွဲ့အစည်း</th>
                  <th>Website လိပ်စာ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ပြည်ထောင်စုတရားလွှတ်တော်ချုပ်ရုံး</td>
                  <td><a href="https://www.unionsupremecourt.gov.mm" target="_blank" rel="noopener">https://www.unionsupremecourt.gov.mm</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>နိုင်ငံတော်ဖွဲ့စည်းပုံအခြေခံဥဒေဆိုင်ရာခုံရုံး</td>
                  <td><a href="https://www.constitutionaltribunal.gov.mm" target="_blank" rel="noopener">https://www.constitutionaltribunal.gov.mm</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ပြည်ထောင်စုရွေးကောက်ပွဲကော်မရှင်</td>
                  <td><a href="https://www.uec.gov.mm" target="_blank" rel="noopener">https://www.uec.gov.mm</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>ပြည်ထောင်စုစာရင်းစစ်ချုပ်ရုံး</td>
                  <td><a href="https://www.oagmac.gov.mm" target="_blank" rel="noopener">https://www.oagmac.gov.mm</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>ပြည်ထောင်စုရာထူးဝန်အဖွဲ့ရုံး (UCSB)</td>
                  <td><a href="https://www.ucsb.gov.mm" target="_blank" rel="noopener">https://www.ucsb.gov.mm</a></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Myanmar National Portal</td>
                  <td><a href="https://www.myanmar.gov.mm" target="_blank" rel="noopener">https://www.myanmar.gov.mm</a></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>နေပြည်တော်ကောင်စီ</td>
                  <td><a href="https://www.nptdc.gov.mm" target="_blank" rel="noopener">https://www.nptdc.gov.mm</a></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>မြန်မာနိုင်ငံတော်ဗဟိုဘဏ်</td>
                  <td><a href="https://cbm.gov.mm" target="_blank" rel="noopener">https://cbm.gov.mm</a></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>အဂတိလိုက်စားမှုတိုက်ဖျက်ရေးကော်မရှင်ရုံး</td>
                  <td><a href="https://www.accm.gov.mm/acc" target="_blank" rel="noopener">https://www.accm.gov.mm/acc</a></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>မြန်မာနိုင်ငံအမျိုးသားလူ့အခွင့်အရေးကော်မရှင်ရုံး</td>
                  <td><a href="https://mnhrc.org.mm" target="_blank" rel="noopener">https://mnhrc.org.mm</a></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>ကချင်ပြည်နယ်အစိုးရအဖွဲ့</td>
                  <td><a href="https://kachinstate.gov.mm" target="_blank" rel="noopener">https://kachinstate.gov.mm</a></td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>ကယားပြည်နယ်အစိုးရအဖွဲ့</td>
                  <td><a href="https://www.kayahstate.gov.mm" target="_blank" rel="noopener">https://www.kayahstate.gov.mm</a></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>စစ်ကိုင်းတိုင်းဒေသကြီးအစိုးရအဖွဲ့</td>
                  <td><a href="https://www.sagaingregion.gov.mm" target="_blank" rel="noopener">https://www.sagaingregion.gov.mm</a></td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>ပဲခူးတိုင်းဒေသကြီးအစိုးရအဖွဲ့</td>
                  <td><a href="https://bagoregion.gov.mm" target="_blank" rel="noopener">https://bagoregion.gov.mm</a></td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>မန္တလေးတိုင်းဒေသကြီးအစိုးရအဖွဲ့</td>
                  <td><a href="http://mandalayregion.gov.mm" target="_blank" rel="noopener">http://mandalayregion.gov.mm</a></td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>ရန်ကုန်တိုင်းဒေသကြီးအစိုးရအဖွဲ့</td>
                  <td><a href="https://www.yangon.gov.mm" target="_blank" rel="noopener">https://www.yangon.gov.mm</a></td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>ရှမ်းပြည်နယ်အစိုးရအဖွဲ့</td>
                  <td><a href="https://www.shanstategovernment.com" target="_blank" rel="noopener">https://www.shanstategovernment.com</a></td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>ဧရာဝတီတိုင်းဒေသကြီးအစိုးရအဖွဲ့</td>
                  <td><a href="https://www.ayeyarwadyregion.gov.mm" target="_blank" rel="noopener">https://www.ayeyarwadyregion.gov.mm</a></td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>အခွန်အယူခံခုံအဖွဲ့</td>
                  <td><a href="https://www.ratb.gov.mm" target="_blank" rel="noopener">https://www.ratb.gov.mm</a></td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>အမျိုးသားစည်းလုံးညီညွတ်ရေးနှင့်ငြိမ်းချမ်းရေး
                    ဖော်ဆောင်မှုညှိနှိုင်းရေးကော်မတီ</td>
                  <td><a href="https://nspnc.gov.mm" target="_blank" rel="noopener">https://nspnc.gov.mm</a></td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>တစ်နိုင်ငံလုံးပစ်ခတ်တိုက်ခိုက်မှုရပ်စဲရေးသဘောတူစာချုပ်</td>
                  <td><a href="https://nca.gov.mm" target="_blank" rel="noopener">https://nca.gov.mm</a></td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>ဝန်ဆောင်မှုကုန်သွယ်ရေးနှင့် ရင်းနှီးမြှုပ်နှံမှု အချက်အလက်များ
                    ဘဏ္ဍာတိုက်</td>
                  <td><a href="https://www.servicetrade.gov.mm" target="_blank" rel="noopener">https://www.servicetrade.gov.mm</a></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>မိုးလေဝသနှင့်ဇလဗေဒညွှန်ကြားမှုဦးစီးဌာန</td>
                  <td><a href="https://www.moezala.gov.mm" target="_blank" rel="noopener">https://www.moezala.gov.mm</a></td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>E-Mandalay</td>
                  <td><a href="https://www.emandalay.gov.mm" target="_blank" rel="noopener">https://www.emandalay.gov.mm</a></td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>မြန်မာဥပဒေသတင်းအချက်အလက်စနစ်</td>
                  <td><a href="https://mlis.gov.mm" target="_blank" rel="noopener">https://mlis.gov.mm</a></td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>နေပြည်တော်စည်ပင်သာယာရေးကော်မတီ</td>
                  <td><a href="https://www.nptdc.gov.mm" target="_blank" rel="noopener">https://www.nptdc.gov.mm</a></td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>ရန်ကုန်မြို့တော်စည်ပင်သာယာရေးကော်မတီ</td>
                  <td><a href="https://www.ycdc.gov.mm" target="_blank" rel="noopener">https://www.ycdc.gov.mm</a></td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>မန္တလေးမြို့တော်စည်ပင်သာယာရေးကော်မတီ</td>
                  <td><a href="https://www.emcdc.com" target="_blank" rel="noopener">https://www.emcdc.com</a></td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>မြန်မာနိုင်ငံအမျိုးသားစာကြည့်တိုက်(နေပြည်တော်)</td>
                  <td><a href="https://eresources.nlmnpt.gov.mm" target="_blank" rel="noopener">https://eresources.nlmnpt.gov.mm</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}