import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Objectives.module.css";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Objectives",
  description: "Objectives of Myanmar tourism sector."
};

export default function Objectives() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/53.jpg"
        altText="objectives cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "ရည်ရွယ်ချက်များ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ရည်ရွယ်ချက်များ</h1>
        <section id="objectives">
          <ol className={styles.objectivesList}>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> မြန်မာနိုင်ငံကိုကမ္ဘာ့ခရီးသွားလုပ်ငန်း၏ ခရီးစဉ်ဒေသတစ်ခုအဖြစ် ပေါ်ထွက်လာစေရေးအတွက် ထိရောက်သော ပြည်တွင်းပြည်ပဈေးကွက်မြှင့်တင်မှုများ ဆောင်ရွက်ခြင်းဖြင့် အထောက်အကူ ဖြစ်စေရန်၊
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလုပ်ငန်းဆောင်ရွက်သူနှင့် ခရီးသည်တို့၏ အခွင့်အရေးကို ကာကွယ်ပေးရန်နှင့် ယင်းတို့၏ တာဝန်ဝတ္တရားများကို သိရှိလိုက်နာစေရန်၊
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလုပ်ငန်းဝန်ဆောင်မှုများ၏ အရည်အသွေးနှင့် လုံခြုံစိတ်ချရမှုကို အာမခံနိုင်ရန်၊
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလုပ်ငန်းဖွံ့ဖြိုးတိုးတက်ရေးနှင့် စီမံခန့်ခွဲရေးဆိုင်ရာညှိနှိုင်းပူးပေါင်းဆောင်ရွက်မှုကို မြှင့်တင်သွားရန်၊
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလုပ်ငန်းဆိုင်ရာ ပညာရပ်များတိုးတက်ထွန်းကားစေ၍ အလုပ်အကိုင် အခွင့်အလမ်းနှင့် လူသားအရင်းအမြစ်များ ပိုမိုဖွံ့ဖြိုးတိုးတက်စေရန်၊
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> တာဝန်ယူမှုရှိသော ခရီးသွားလုပ်ငန်းများဖွံ့ဖြိုးတိုးတက်စေပြီး နိုင်ငံတော်၏ ရေရှည်စဉ်ဆက်မပြတ်ဖွံ့ဖြိုးရေး၊ သဘာဝအခြေခံ ခရီးသွားလုပ်ငန်းနှင့် ပတ်ဝန်းကျင်ထိန်းသိမ်းရေးကို အထောက်အကူဖြစ်စေရန်၊
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလုပ်ငန်းကိုအခြေပြု၍ဒေသအလိုက် ဆက်စပ်စီးပွားရေးလုပ်ငန်းများ၊ အသေးစားနှင့် အလတ်စား စီးပွားရေးလုပ်ငန်းများ ပိုမိုဖွံ့ဖြိုးတိုးတက်လာစေရန်၊ ဒေသခံများ၏စီးပွားရေးအခွင့်အလမ်းများ တိုးတက် ဖွံ့ဖြိုးလာစေရန်နှင့် လူထုအခြေပြုခရီးသွား လုပ်ငန်းဖွံ့ဖြိုးတိုးတက်စေရန်၊
            </li>
            <li className={styles.objectivesListItem}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> ခရီးသွားလုပ်ငန်းဆိုင်ရာ သုတေသနပြုလုပ်လေ့လာခြင်း၊ စာတမ်းများပြုစုခြင်းတို့ကို ပြည်တွင်းပြည်ပမှ သက်ဆိုင်ရာတက္ကသိုလ်များ၊ ခရီးသွားလုပ်ငန်းတွင် လက်တွေ့ပါဝင်ဆောင်ရွက်သူများနှင့် ညှိနှိုင်းပူးပေါင်း ဆောင်ရွက်ရန်။
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}