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
      <BannerSection imageUrl="/assets/images/cover-images/51.jpg" altText="myanmar ministries cover photo" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon: faHome },
          { label: "Myanmar Ministries", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Myanmar Ministries</h1>
        <section id="ministries-table" className={styles.mt5}>
          <div className={styles.tableResponsive}>
            <table className={styles.ministriesTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Ministry</th>
                  <th>Website Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>၁</td>
                  <td>နိုင်ငံတော်ဝန်ကြီးချုပ်ရုံးနှင့် အမျိုးသားစီမံကိန်းဝန်ကြီးဌာန</td>
                  <td></td>
                </tr>
                <tr>
                  <td>၂</td>
                  <td>နိုင်ငံတော်သမ္မတရုံးဝန်ကြီးဌာန (၁)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>၃</td>
                  <td>နိုင်ငံတော်သမ္မတရုံးဝန်ကြီးဌာန (၂)
                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>၄</td>
                  <td>နိုင်ငံတော်သမ္မတရုံးဝန်ကြီးဌာန (၃)
                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>၅</td>
                  <td>နိုင်ငံတော်သမ္မတရုံးဝန်ကြီးဌာန (၄)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>၆</td>
                  <td>ပို့ဆောင်ရေးနှင့်ဆက်သွယ်ရေးဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.motc.gov.mm
" target="_blank" rel="noopener">https://www.motc.gov.mm
                  </a></td>
                </tr>
                <tr>
                  <td>၇</td>
                  <td>ကာကွယ်ရေးဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.mod.gov.mm

" target="_blank" rel="noopener">https://www.mod.gov.mm

                    </a>
                  </td>
                </tr>
                <tr>
                  <td>၈</td>
                  <td>ဘဏ္ဍာရေးနှင့်အခွန်ဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.mopf.gov.mm


" target="_blank" rel="noopener">https://www.mopf.gov.mm</a><br />
<a href="https://www.mmftb.gov.mm" target="_blank" rel="noopener">https://www.mmftb.gov.mm</a><br />
<a href="https://www.cbm.gov.mm" target="_blank" rel="noopener">https://www.cbm.gov.mm</a><br />
<a href="https://ird.gov.mm" target="_blank" rel="noopener">https://ird.gov.mm</a><br />
<a href="https://customs.gov.mm
" target="_blank" rel="noopener">https://customs.gov.mm
</a><br />
<a href="https://www.mminsurance.gov.mm

" target="_blank" rel="noopener">https://www.mminsurance.gov.mm

</a><br />
                  </td>
                </tr>
                <tr>
                  <td>၉</td>
                  <td>နိုင်ငံခြားရေးဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.mofa.gov.mm



" target="_blank" rel="noopener">https://www.mofa.gov.mm



                    </a>
                  </td>
                </tr>
                <tr>
                  <td>၁၀</td>
                  <td>ပြည်ထဲရေးဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.moha.gov.mm
" target="_blank" rel="noopener">https://www.moha.gov.mm
                  </a><br/>
                  <a href="https://policeforce.gov.mm

" target="_blank" rel="noopener">https://policeforce.gov.mm

</a><br />
<a href="https://gad.gov.mm


" target="_blank" rel="noopener">https://gad.gov.mm


</a><br />
<a href="https://bsi.gov.mm



" target="_blank" rel="noopener">https://bsi.gov.mm



</a><br />
<a href="https://prisonsdepartment.gov.mm




" target="_blank" rel="noopener">https://prisonsdepartment.gov.mm




</a><br />
<a href="https://www.fsd.gov.mm





" target="_blank" rel="noopener">https://www.fsd.gov.mm





</a><br />
                  </td>
                </tr>
                <tr>
                  <td>၁၁</td>
                  <td>နယ်စပ်ရေးရာဝန်ကြီးဌာနနှင့် တိုင်းရင်းသားလူမျိုးများရေးရာဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.moba.gov.mm
" target="_blank" rel="noopener">https://www.moba.gov.mm
                    </a><br />
                    <a href="https://portal.moea.gov.mm
" target="_blank" rel="noopener">https://portal.moea.gov.mm
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>၁၂</td>
                  <td>ရင်းနှီးမြှုပ်နှံမှုနှင့်နိုင်ငံခြားစီးပွားဆက်သွယ်ရေးဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.mifer.gov.mm
" target="_blank" rel="noopener">https://www.mifer.gov.mm
                  </a><br/>

                  <a href="https://www.dica.gov.mm

" target="_blank" rel="noopener">https://www.dica.gov.mm

                  </a>
                  
                  </td>
                </tr>
                <tr>
                  <td>၁၃</td>
                  <td>ဥပဒေရေးရာဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.mola.gov.mm
" target="_blank" rel="noopener">https://www.mola.gov.mm
                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>၁၄</td>
                  <td>ပြန်ကြားရေးဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.moi.gov.mm
" target="_blank" rel="noopener">https://www.moi.gov.mm
                    </a><br />
                    <a href="https://www.mrtv.gov.mm

" target="_blank" rel="noopener">https://www.mrtv.gov.mm

                    </a><br />
                    <a href="https://www.moi.gov.mm/iprd

" target="_blank" rel="noopener">https://www.moi.gov.mm/iprd

                    </a><br />
                    <a href="https://moi.gov.mm/ppd

" target="_blank" rel="noopener">https://moi.gov.mm/ppd

                    </a><br />
                    <a href="https://moi.gov.mm/npe

" target="_blank" rel="noopener">https://moi.gov.mm/npe

                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>၁၅</td>
                  <td>သာသနာရေးနှင့်ယဉ်ကျေးမှုဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.mora.gov.mm

" target="_blank" rel="noopener">https://www.mora.gov.mm

                  </a><br />
                    <a href="https://www.kbrl.gov.mm


" target="_blank" rel="noopener">https://www.kbrl.gov.mm


                    </a><br />
                    <a href="https://www.mahana.org.mm


" target="_blank" rel="noopener">https://www.mahana.org.mm


                    </a><br />
                  </td>
                </tr>
                <tr>
                  <td>၁၆</td>
                  <td>စိုက်ပျိုးရေး၊ မွေးမြူရေးနှင့်ဆည်မြောင်းဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.moali.gov.mm
" target="_blank" rel="noopener">https://www.moali.gov.mm
                  </a></td>
                </tr>
                <tr>
                  <td>၁၇</td>
                  <td>သမဝါယမနှင့်ကျေးလက်ဖွံ့ဖြိုးရေးဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://mcrd.gov.mm
" target="_blank" rel="noopener">https://mcrd.gov.mm
                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>၁၈</td>
                  <td>သယံဇာတနှင့်သဘာဝပတ်ဝန်းကျင်ထိန်းသိမ်းရေးဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.monrec.gov.mm

" target="_blank" rel="noopener">https://www.monrec.gov.mm

                  </a>
                    <br />
                    <a href="https://www.mining.gov.mm


" target="_blank" rel="noopener">https://www.mining.gov.mm


                    </a>
                    <br />
                    <a href="https://www.mte.com.mm


" target="_blank" rel="noopener">https://www.mte.com.mm


                    </a>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>၁၉</td>
                  <td>လျှပ်စစ်စွမ်းအားဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.moep.gov.mm

" target="_blank" rel="noopener">https://www.moep.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>၂၀</td>
                  <td>စွမ်းအင်ဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.energy.gov.mm

" target="_blank" rel="noopener">https://www.energy.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>၂၁</td>
                  <td>စက်မှုဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://industry.gov.mm

" target="_blank" rel="noopener">https://industry.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>၂၂</td>
                  <td>လူဝင်မှုကြီးကြပ်ရေးနှင့် ပြည်သူ့အင်အားဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.mip.gov.mm

" target="_blank" rel="noopener">https://www.mip.gov.mm

                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>၂၃</td>
                  <td>အလုပ်သမားဝန်ကြီးဌာန
                  </td>
                  <td>
                    <a href="https://www.mol.gov.mm
" target="_blank" rel="noopener">https://www.mol.gov.mm
                    </a><br />
                    <a href="https://www.ssb.gov.mm

" target="_blank" rel="noopener">https://www.ssb.gov.mm

                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>၂၄</td>
                  <td>စီးပွားရေးနှင့်ကူးသန်းရောင်းဝယ်ရေးဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.commerce.gov.mm
" target="_blank" rel="noopener">https://www.commerce.gov.mm
                  </a><br />
                    <a href="https://www.myanmartradenet.com.mm

" target="_blank" rel="noopener">https://www.myanmartradenet.com.mm

                    </a><br />
                    <a href="https://www.servicetrade.gov.mm

" target="_blank" rel="noopener">https://www.servicetrade.gov.mm

                    </a>
                  </td>
                </tr>
                <tr>
                  <td>၂၅</td>
                  <td>သိပ္ပံနှင့်နည်းပညာဝန်ကြီးဌာန</td>
                  <td><a href="https://www.most.gov.mm
" target="_blank" rel="noopener">https://www.most.gov.mm</a></td>
                </tr>
                <tr>
                  <td>၂၆</td>
                  <td>ကျန်းမာရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.mohs.gov.mm
" target="_blank" rel="noopener">https://www.mohs.gov.mm
                  </a></td>
                </tr>
                <tr>
                  <td>၂၇</td>
                  <td>အားကစားနှင့်လူငယ်ရေးရာဝန်ကြီးဌာနနှင့် ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://mosya.gov.mm
" target="_blank" rel="noopener">https://mosya.gov.mm
                  </a><br></br>
                    <a href="https://www.tourism.gov.mm

" target="_blank" rel="noopener">https://www.tourism.gov.mm

                    </a>
                  </td>
                </tr>
                <tr>
                  <td>၂၈</td>
                  <td>ဆောက်လုပ်ရေးဝန်ကြီးဌာန</td>
                  <td><a href="https://www.construction.gov.mm

" target="_blank" rel="noopener">https://www.construction.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>၂၉</td>
                  <td>လူမှုဝန်ထမ်းကယ်ဆယ်ရေးနှင့်ပြန်လည်နေရာချထားရေးဝန်ကြီးဌာန</td>
                  <td>
                    <a href="https://www.moswrr.gov.mm
" target="_blank" rel="noopener">https://www.moswrr.gov.mm
                    </a><br />
                    <a href="https://www.dsw.gov.mm
" target="_blank" rel="noopener">https://www.dsw.gov.mm
                    </a><br />
                    <a href="https://www.ddm.gov.mm
" target="_blank" rel="noopener">https://www.ddm.gov.mm
                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>၃၀</td>
                  <td>ပညာရေးဝန်ကြီးဌာန
                  </td>
                  <td><a href="https://www.moe.gov.mm
" target="_blank" rel="noopener">https://www.moe.gov.mm
                  </a></td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}