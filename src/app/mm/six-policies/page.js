import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./SixPolicies.module.css";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Six Policies of Ministry of Hotels and Tourism",
  description: "Six core policies of the Ministry of Hotels and Tourism, Myanmar."
};

export default function SixPoliciesOfMoHT() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-mm-title/9.jpg"
        altText="six policies of Ministry of Hotels and Tourism cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန၏ မူဝါဒ (၆) ရပ်", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန၏ မူဝါဒ (၆) ရပ်</h1>
        <section id="policies">
          <ol className={styles.policiesList}>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလာရေးလုပ်ငန်းများကို နိုင်ငံတော်အတွက် နိုင်ငံခြားငွေရှာဖွေပေးသည့် အရေးကြီးသော စီးပွားရေးကဏ္ဍဖြစ်စေရေး၊
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလာရေးလုပ်ငန်း ရေရှည်တည်တံ့ခိုင်မြဲရေးအတွက် တိုင်းရင်းသားအားလုံး၏ ယဉ်ကျေးမှုအမွေအနှစ်များ၊ ဓလေ့ထုံး စံများ၊ ရေမြေတောတောင် သဘာဝပတ်ဝန်းကျင် များကို ထိန်းသိမ်းစောင့်ရှောက်ရေး၊
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />ခရီးသွားလာရေးလုပ်ငန်းကဏ္ဍ တိုးတက်ကျယ်ပြန့်အောင် ဆောင်ရွက်ခြင်းဖြင့် ပြည်သူများ၏ လူမှုစီးပွားရေးဘဝများ ဖွံ့ဖြိုးတိုးတက်စေရေးနှင့် ပြည်တွင်း ပုဂ္ဂလိက ကဏ္ဍဖွံ့ဖြိုးတိုးတက်စေရေး၊
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />နိုင်ငံတကာနှင့်ဒေသတွင်း ချုပ်ဆိုထားသော သဘောတူစာချုပ်များကို နိုင်ငံ၏ အကျိုးစီးပွားနှင့်ယှဉ်၍ တတ်စွမ်းသမျှ အကောင်အထည်ဖော်ဆောင်ရေး၊
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ငြိမ်းချမ်းရေးတည်ဆောက်ရာတွင် ခရီးသွားလာရေးကဏ္ဍအနေဖြင့် ပါဝင်ဖြည့်ဆည်း အကျိုးပြုစေရေး၊
            </li>
            <li className={styles.policiesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ရေရှည်တည်တံ့ခိုင်မြဲပြီး အများပါဝင်မှုရှိသော တာဝန်သိခရီးသွားလုပ်ငန်း ဖော်ဆောင်ရေး။
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}