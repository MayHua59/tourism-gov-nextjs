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
      <BannerSection imageUrl="/assets/images/cover-images-mm-title/8.jpg" altText="branch offices cover photo" />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "နယ်ရုံးခွဲများ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>နယ်ရုံးခွဲများ</h1>
        <p className={styles.paragraph}>မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ရုံးခွဲများ၏ ဆက်သွယ်ရန်အချက်အလက်များကို ရှာဖွေနိုင်ပါသည်။</p>
        <div className={styles.tableResponsive}>
          <table className={styles.branchTable}>
            <thead>
              <tr>
                <th>စဉ်</th>
                        <th>ရုံးခွဲ</th>
                        
                        <th>ဖုန်းနံပတ်</th>
                        <th>E-mail လိပ်စာ</th>
              </tr>
            </thead>
           <tbody>
                    <tr>
                        <td>၁</td>
                        <td>နေပြည်တော်ရုံး</td>
                        <td>၀၉၂၅၁၀၀၈၆၂၄</td>
                        <td><a href="mailto:naypyidawy@tourism.gov.mm">naypyidawy@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂</td>
                        <td>ရန်ကုန်ရုံး</td>
                        <td>၀၁- ၂၅၆၇၃၉, ၂၅၆၈၂၈၀၁-၂၅၆၇၄၈, ၂၅၆၅၆၁,၂၉၁၃၀၆</td>
                        <td><a href="mailto:yangon@tourism.gov.mm">yangon@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃</td>
                        <td>မန္တလေးရုံး</td>
                        <td>၀၂-၂၈၄၈၀၄၁,၂၈၄၈၀၄၂, ၄၀၆၆၆၂၄</td>
                        <td><a href="mailto:mdy@tourism.gov.mm">mdy@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၄</td>
                        <td>ထားဝယ်ရုံး</td>
                        <td>၀၅၉-၂၀၂၁၀၉၈, ၂၀၂၁၂၃၁</td>
                        <td><a href="mailto:dawei@tourism.gov.mm">dawei@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၅</td>
                        <td>တောင်ကြီးရုံး</td>
                        <td>၀၈၁-၂၁၂၄၂၇၅, ၂၁၂၁၁၁၅, ၂၁၂၁၃၀၂</td>
                        <td><a href="mailto:taunggyi@tourism.gov.mm">taunggyi@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၆</td>
                        <td>စစ်တွေရုံး</td>
                        <td>၀၄၃-၂၂၀၄၈, ၂၂၀၄၉, ၂၁၅၅၇</td>
                        <td><a href="mailto:sittwe@tourism.gov.mm">sittwe@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၇</td>
                        <td>ပုဂံရုံး</td>
                        <td>၀၆၁-၂၄၆၅၀၄၀</td>
                        <td><a href="mailto:bgn@tourism.gov.mm">bgn@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၈</td>
                        <td>မကွေးရုံး</td>
                        <td>၀၆၃-၂၀၂၅၀၅၇</td>
                        <td><a href="mailto:magway@tourism.gov.mm">magway@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၉</td>
                        <td>မုံရွာရုံး</td>
                        <td>၀၇၁-၂၁၁၅၂</td>
                        <td><a href="mailto:monywa@tourism.gov.mm">monywa@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၀</td>
                        <td>ပဲခူးရုံး</td>
                        <td>၀၅၂-၂၂၂၁၁၁၃,၂၂၀၁၇၆၈</td>
                        <td><a href="mailto:bago@tourism.gov.mm">bago@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၁</td>
                        <td>ပုသိမ်ရုံး</td>
                        <td>၀၄၂-၂၁၁၄၆</td>
                        <td><a href="mailto:pathein@tourism.gov.mm">pathein@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၂</td>
                        <td>ကျိုင်းတုံရုံး</td>
                        <td>၀၈၄-၂၁၆၁၇</td>
                        <td><a href="mailto:kyaington@tourism.gov.mm">kyaington@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၃</td>
                        <td>လားရှိုးရုံး</td>
                        <td>၀၈၂-၂၂၀၃၀၁၅</td>
                        <td><a href="mailto:lashio@tourism.gov.mm">lashio@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၄</td>
                        <td>လွိုင်ကော်ရုံး</td>
                        <td>၀၈၃-၂၂၂၁၀၇၈</td>
                        <td><a href="mailto:loikaw@tourism.gov.mm">loikaw@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၅</td>
                        <td>မြစ်ကြီးနားရုံး</td>
                        <td>၀၇၄-၂၂၆၂၂</td>
                        <td><a href="mailto:mkn@tourism.gov.mm">mkn@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၆</td>
                        <td>သံတွဲရုံး</td>
                        <td>၀၄၃-၂၀၆၅၃၁၁</td>
                        <td><a href="mailto:thandwe@tourism.gov.mm">thandwe@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၇</td>
                        <td>မော်လမြိုင်ရုံး</td>
                        <td>၀၅၇-၂၇၀၅၆, ၂၄၆၅၀</td>
                        <td><a href="mailto:mlm@tourism.gov.mm">mlm@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၈</td>
                        <td>ဘားအံရုံး</td>
                        <td>၀၅၈-၂၁၀၇၅</td>
                        <td><a href="mailto:hpaan@tourism.gov.mm">hpaan@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၁၉</td>
                        <td>ဟားခါးရုံး</td>
                        <td>၄၂၄၈၁၂၈၆၄</td>
                        <td><a href="mailto:hakha@tourism.gov.mm">hakha@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၀</td>
                        <td>မြိတ်ရုံး</td>
                        <td>၀၅၉-၄၁၀၃၇</td>
                        <td><a href="mailto:myeik@tourism.gov.mm">myeik@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၁</td>
                        <td>ကော့သောင်းရုံး</td>
                        <td>၀၅၉-၅၁၅၇၈</td>
                        <td><a href="mailto:kawthaung@tourism.gov.mm">kawthaung@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၂</td>
                        <td>မူဆယ်ရုံး</td>
                        <td>၀၈၂-၅၁၅၃၄</td>
                        <td><a href="mailto:muse@tourism.gov.mm">muse@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၃</td>
                        <td>တာချီလိတ်ရုံး</td>
                        <td>၀၈၄-၅၂၁၉၇</td>
                        <td><a href="mailto:tachileik@tourism.gov.mm">tachileik@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၄</td>
                        <td>ဗန်းမော်ရုံး</td>
                        <td>၀၇၄-၅၀၂၈၁</td>
                        <td><a href="mailto:banmaw@tourism.gov.mm">banmaw@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၅</td>
                        <td>မြောက်ဦးရုံး</td>
                        <td>၀၄၃-၅၀၃၂၇</td>
                        <td><a href="mailto:myaukoo@tourism.gov.mm">myaukoo@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၆</td>
                        <td>မြဝတီရုံး</td>
                        <td>၀၅၈-၅၁၃၉၁</td>
                        <td><a href="mailto:mwd@tourism.gov.mm">mwd@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၇</td>
                        <td>မင်းတပ်ရုံး</td>
                        <td>၀၇၀-၇၀၃၈၉</td>
                        <td><a href="mailto:mindat@tourism.gov.mm">mindat@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၈</td>
                        <td>ပြင်ဦးလွင်ရုံး</td>
                        <td>၀၈၅-၂၁၉၃၅</td>
                        <td><a href="mailto:pol@tourism.gov.mm">pol@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၂၉</td>
                        <td>ရွှေဘိုရုံး</td>
                        <td>၀၇၅-၂၁၀၅၇</td>
                        <td><a href="mailto:shwebo@tourism.gov.mm">shwebo@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၀</td>
                        <td>ကလေးရုံး</td>
                        <td>၀၇၃-၂၁၀၁၁</td>
                        <td><a href="mailto:kalay@tourism.gov.mm">kalay@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၁</td>
                        <td>ပြည်ရုံး</td>
                        <td>၀၅၃-၂၄၂၂၇</td>
                        <td><a href="mailto:pyay@tourism.gov.mm">pyay@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၂</td>
                        <td>ငွေဆောင်ရုံး</td>
                        <td>၀၄၂-၂၁၉၄၂</td>
                        <td><a href="mailto:ngwesaung@tourism.gov.mm">ngwesaung@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၃</td>
                        <td>ချောင်းသာရုံး</td>
                        <td>၀၄၂-၄၂၃၆၀</td>
                        <td><a href="mailto:chaungthar@tourism.gov.mm">chaungthar@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၄</td>
                        <td>ကျောက်ဖြူရုံး</td>
                        <td>၀၄၃-၄၆၀၂၃</td>
                        <td><a href="mailto:kyaukphyu@tourism.gov.mm">kyaukphyu@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၅</td>
                        <td>ပခုက္ကူရုံး</td>
                        <td>၀၆၂-၂၁၀၅၂</td>
                        <td><a href="mailto:pakokku@tourism.gov.mm">pakokku@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၆</td>
                        <td>တောင်ငူရုံး</td>
                        <td>၀၉၂၅၃၆၇၆၇၀၀</td>
                        <td><a href="mailto:taungoo@tourism.gov.mm">taungoo@tourism.gov.mm</a></td>
                    </tr>
                    <tr>
                        <td>၃၇</td>
                        <td>မိုးကုတ်ရုံး</td>
                        <td>၀၈၆၂၀၁၆၆</td>
                        <td><a href="mailto:mogok@tourism.gov.mm">mogok@tourism.gov.mm</a></td>
                    </tr>
                </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}