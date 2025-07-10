import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./VisaExemption.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Visa Exemption",
  description: "Information about visa exemption for Russian Federation tourists visiting Myanmar."
};

export default function VisaExemption() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images-mm-title/7.jpg" altText="visa exemption cover photo" />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ဗီဇာကင်းလွတ်ခွင့်", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ဗီဇာကင်းလွတ်ခွင့်</h1>
        <section id="visa-exemption-content" className={styles.mt5}>
          <div className={styles.businessSection}>
            <p className={styles.paragraph}>
              ရုရှားဖက်ဒရေးရှင်းနိုင်ငံ၊ သာမန်နိုင်ငံကူးလက်မှတ်ကိုင်ဆောင်သူ ကမ္ဘာလှည့်ခရီးသည်များအတွက် ဗီဇာကင်းလွတ်ခွင့် (Exemption) အား ၁-၇-၂၀၂၂ ရက်နေ့မှ စ၍ခွင့်ပြုပေးသွားမည်ဖြစ်ကြောင်း အသိပေးခြင်း
            </p>
            <ol className={styles.noticeList}>
              <li>
                မြန်မာနိုင်ငံအတွင်းသို့ လေကြောင်းခရီးဖြင့် ဝင်ရောက်လာသည့် ရုရှားဖက်ဒရေးရှင်းနိုင်ငံ၊ သာမန်နိုင်ငံကူးလက်မှတ်ကိုင်ဆောင်သူ ကမ္ဘာလှည့်ခရီးသည်များအတွက် ဗီဇာကင်းလွတ်ခွင့် (Exemption) အား ၁-၇-၂၀၂၂ ရက်နေ့မှစ၍ စမ်းသပ်ကာလ (၁) နှစ် သတ်မှတ်ပြီး ကျန်းမာရေးဝန်ကြီးဌာနမှ ထုတ်ပြန်ထားရှိသော ကိုဗစ် (၁၉) ရောဂါ ကာကွယ်၊ ထိန်းချူပ်၊ ကုသရေး စည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များနှင့်အညီ ခွင့်ပြုဆောင်ရွက်ပေးသွားမည် ဖြစ်ပါသည်။
              </li>
              <li>
                ရုရှားဖက်ဒရေးရှင်းနိုင်ငံ၊ သာမန်နိုင်ငံကူးလက်မှတ်ကိုင်ဆောင်သူကမ္ဘာလှည့်ခရီးသွားများ အပြည်ပြည်ဆိုင်ရာလေဆိပ်များသို့ ဝင်ရောက်လာပါက ဗီဇာကင်းလွတ်ခွင့် (Exemption) အား အောက်ပါအတိုင်း ခွင့်ပြုဆောင်ရွက်သွားမည်ဖြစ်ပါသည်-
                <ul className={styles.subList}>
                  <li>
                    (က) နိုင်ငံကူးလက်မှတ်သတ်တမ်းအနည်းဆုံး (၆) လ ရှိရမည်ဖြစ်ပြီး (၆) လ အောက်ဖြစ်ပါက ပြည်ဝင်ခွင့်မပြုဘဲ ခရီးသည်လိုက်ပါလာသည့် လေကြောင်းလိုင်းဖြင့် ပြန်လည်တင်ပို့ခြင်း ခံရမည်ဖြစ်ပါသည်။
                  </li>
                  <li>
                    (ခ) နေခွင့်ရက်ပေါင်း (၃၀) ခွင့်ပြုမည်ဖြစ်ပြီး သက်တမ်းတိုးမြှင့်ပေးရန် လျှောက်ထားခြင်းကို ခွင့်ပြုမည်မဟုတ်ပါ။
                  </li>
                  <li>
                    (ဂ) နေထိုင်ခွင့် သတ်မှတ်ရက်ထက် ကျော်လွန်နေထိုင်ပါက သတ်မှတ် ရက်လွန်ဒဏ်ကြေး အခငွေပေးဆောင်ရမည်ဖြစ်ပါသည်။
                  </li>
                </ul>
              </li>
              <li>
                ဗီဇာကင်းလွတ်ခွင့် (Exemption) ဖြင့်ဝင်ရောက်လာသည့် ရုရှားဖက်ဒရေးရှင်းနိုင်ငံ၊ သာမန်နိုင်ငံ ကူးလက်မှတ် ကိုင်ဆောင်သူများသည် အောက်ဖော်ပြပါစည်းကမ်းများကို လိုက်နာနေထိုင်ရပါမည်-
                <ul className={styles.subList}>
                  <li>(က) မြန်မာနိုင်ငံ၏ တည်ဆဲဥပဒေ၊ လုပ်ထုံးလုပ်နည်းများကို လေးစားလိုက်နာရမည်ဖြစ် ပါသည်။</li>
                  <li>(ခ) မြန်မာနိုင်ငံအတွင်း လုံခြုံရေးအရ တားမြစ်ကန့်သတ်ထားသော နယ်မြေမှအပ နိုင်ငံခြားသားများ သွားလာခွင့်ရှိသည့် နေရာများကို လွတ်လပ်စွာ သွားလာနိုင်သည်။</li>
                  <li>(ဂ) ဗီဇာကင်းလွတ်ခွင့် (Exemption) ဖြင့်ဝင်ရောက်ရန် ရောက်ရှိလာသူသည် သက်ဆိုင်ရာ လုံခြုံရေးဌာန/အဖွဲ့အစည်းများမှ ခွင့်မပြုလျင်သော်လည်ကောင်း၊ လူဝင်မှုကြီးကြပ်ရေး ဦးစီးဌာန၏ အမည်မည်းစာရင်း (Blacklist) တွင်ပါဝင်ပါက ပြည်ဝင်ခွင့်အားငြင်းပယ် သွားမည်ဖြစ်ပြီး ခရီးသည်လိုက်ပါလာသည့် လေကြောင်းလိုင်းဖြင့် ပြန်လည်တင်ပို့ခြင်းခံ ရမည်ဖြစ်ပါသည်။</li>
                  <li>(ဃ) အပြည်ပြည်ဆိုင်ရာလေဆိပ်မှ ဗီဇာကင်းလွတ်ခွင့် (Exemption) ဖြင့် ဝင်ရောက်လာသူ သည်မည်သည့် အပြည်ပြည်ဆိုင်ရာလေဆိပ်များမှ မဆိုပြန်လည် ထွက်ခွာနိုင်မည် ဖြစ်ပါသည်။</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className={styles.businessSection}>
            <h2 className={styles.sectionTitle}>Learn More</h2>
            <p className={styles.paragraph}>
              <a href="http://www.mip.gov.mm/" target="_blank" rel="noopener">http://www.mip.gov.mm/</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}