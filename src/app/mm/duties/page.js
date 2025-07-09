import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Duties.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Duties and Responsibilites",
  description: "Duties and responsibilities of departments and offices under the Ministry of Hotels and Tourism."
};

export default function DutiesAndResponsibilities() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/3.jpg"
        altText="duties and responsibilities cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "တာဝန်နှင့်ဝတ္တရားများ", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>တာဝန်နှင့်ဝတ္တရားများ</h1>

        <h2 className={styles.sectionTitle}>ဌာနခွဲအလိုက် တာဝန်နှင့်ဝတ္တရားများ</h2>

        <section id="administration">
          <h2 className={styles.sectionTitle}>အုပ်ချုပ်ရေးနှင့်လူ့အရင်းအမြစ်စီမံခန့်ခွဲမှုဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>ဝန်ကြီးရုံးနှင့် အမြဲတမ်းအတွင်းဝန်ရုံးများ၏ အုပ်ချုပ်မှုကိစ္စရပ်များကို
ဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ဝန်ကြီးဌာနဝန်ထမ်းစီမံနှင့် အထွေထွေအုပ်ချုပ်ရေးကိစ္စများ စီမံဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>မြန်မာနိုင်ငံရှိ သင်တန်းများ တက်ရောက်ရန် ရွေးချယ်ခံရသူများအား
ညှိနှိုင်းဆောင်ရွက်ပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်တွင်းပြည်ပနှီးနှောဖလှယ်ပွဲများ၊ ပြပွဲနှင့်ဆွေးနွေးပွဲများသို့ တက်ရောက်သော
ဝန်ကြီးဌာနကိုယ်စားလှယ်များ၏ကိစ္စများ ကြီးကြပ်ခြင်း။</li>
            <li className={styles.dutiesListItem}>မှတ်ပုံတင်လုပ်ငန်းများ၊ ဝန်ကြီးဌာန၏လုပ်ငန်းလိုင်စင်နှင့် အခွန်အခဆိုင်ရာ ကိစ္စရပ်
များဆောင်ရွက်ခြင်း။</li>
          </ul>
        </section>

        <section id="policy">
          <h2 className={styles.sectionTitle}>မူဝါဒရေးရာဌာန</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>မူဝါဒ၊ ဥပဒေများ၊ နည်းဥပဒေများနှင့် လုပ်ထုံးလုပ်နည်းများ၊ အမိန့်များ ထုတ်ပြန်ခြင်း၊
ပြင်ဆင်ခြင်း၊ ဖြည့်စွက်ခြင်း၊</li>
            <li className={styles.dutiesListItem}>ဝန်ကြီးဌာန လက်အောက်ရှိ ဌာနအသီးသီးမှ တင်ပြလာသည့် လုပ်ငန်းဆိုင်ရာ
တင်ပြချက်များကို မူဝါဒများ၊ လုပ်ထုံးလုပ်နည်းများနှင့် ညီ/မညီ စိစစ်ခြင်း</li>
            <li className={styles.dutiesListItem}>နိုင်ငံတကာအဖွဲ့အစည်းများ၊ ဒေသတွင်းအဖွဲ့အစည်းများနှင့် သဘောတူထားသည့်
မူဝါဒများ၊ လုပ်ထုံးလုပ်နည်းများ ထုတ်ပြန်ခြင်း၊ ပူးပေါင်းဆောင်ရွက်ခြင်းနှင့်
ကြီးကြပ်ခြင်း၊</li>
            <li className={styles.dutiesListItem}>လွှတ်တော်အပါအဝင် အထက်အဖွဲ့အစည်းများမှ မေးမြန်းသည့် မေးခွန်းများ
ဖြေကြားခြင်း၊ ကတိကဝတ်ဆိုင်ရာများ ဆောင်ရွက်ခြင်း၊</li>
            <li className={styles.dutiesListItem}>ပြည်ထောင်စုအစိုးရအဖွဲ့ အစည်းအဝေးများနှင့် အစိုးရအဖွဲ့ကော်မတီအသီးသီးသို့
အမှာစာများ ပြုစုတင်ပြခြင်း၊</li>
            <li className={styles.dutiesListItem}>ဝန်ကြီးဌာန၏ မူဝါဒသာမက ဝန်ကြီးဌာနက တာဝန်ယူဆောင်ရွက်နေသော လုပ်ငန်း
များနှင့် ဆက်စပ်နေသော ကဏ္ဍအလိုက် မူဝါဒများကို စိစစ်တင်ပြခြင်း။</li>
          </ul>
        </section>

        <section id="planning">
          <h2 className={styles.sectionTitle}>စီမံကိန်းနှင့်စာရင်းအင်းဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
<li className={styles.dutiesListItem}>နှစ်တို/နှစ်ရှည်၊ နှစ်စဉ်စီမံကိန်းများရေးဆွဲခြင်းနှင့် တိုးတက်မှုအစီရင်ခံခြင်း။</li>
<li className={styles.dutiesListItem}>ဝန်ကြီးဌာန၊ တိုင်းဒေသကြီးနှင့် ပြည်နယ်များ၏စီမံကိန်းများအား
ညှိနှိုင်းဆောင်ရွက်ခြင်း၊ အကောင်အထည်ဖော်ခြင်း။</li>
<li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာနမှ စုစည်းထားသောစာရင်းအင်း ကိန်းဂဏန်း
အချက်အလက်များအား အခြားဝန်ကြီးဌာနများသို့ ဖြန့်ဝေရာတွင်
ညှိနှိုင်းဆောင်ရွက်ခြင်း။</li>
<li className={styles.dutiesListItem}>သက်ဆိုင်ရာစာရင်းအင်းကိန်းဂဏန်းအချက်အလက်များအား စုစည်းဆောင်ရွက်ခြင်း။</li>
<li className={styles.dutiesListItem}>သတင်းအချက်အလက်ကိန်းဂဏန်းများအား ICT နည်းပညာသုံးစွဲ၍
စုစည်းထိန်းသိမ်းခြင်း။</li>
<li className={styles.dutiesListItem}>တိုင်းဒေသကြီးများ၊ ပြည်နယ်များနှင့်ချိတ်ဆက်၍ သတင်းအချက်အလက်များ
စုဆောင်းခြင်း၊ ဖြန့်ဝေခြင်းတို့ကိုအစဉ်ကြီးကြပ်ခြင်း။</li>
<li className={styles.dutiesListItem}>E-Government နှင့် သတင်းအချက်အလက်နှင့်နည်းပညာဆိုင်ရာလုပ်ငန်းများကို
အကောင်အထည်ဖော်ဆောင်ရွက်ခြင်း။</li>
<li className={styles.dutiesListItem}>သုတေသနလုပ်ငန်းများဆောင်ရွက်၍ အကဲဖြတ်စီစစ်ခြင်း။</li>
<li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဝန်ကြီးဌာနမှ တာဝန်ယူကြီးကြပ်သော အသင်းအဖွဲ့များ၏
ဆောင်ရွက်မှုမှတ်တမ်းများအား ICT နည်းပညာဖြင့်ထိန်းသိမ်းဆောင်ရွက်ခြင်း။</li>
</ul>
        </section>

        <section id="audit">
          <h2 className={styles.sectionTitle}>ဌာနတွင်းစာရင်းစစ်နှင့်ဘဏ္ဍာရေးဌာနခွဲ</h2>
          <ul className={styles.dutiesList}><li className={styles.dutiesListItem}>လုပ်ထုံးလုပ်နည်းများနှင့်အညီ ရသုံးမှန်းခြေငွေစာရင်းကို စီမံဆောင်ရွက်ခြင်း။</li><li className={styles.dutiesListItem}>ဌာနများ၏လစဉ်ရသုံးဘဏ္ဍာငွေအချက်အလက်များကို စီစစ်ခြင်း။</li><li className={styles.dutiesListItem}>ဘဏ္ဍာရေးလုပ်ငန်းစဉ်များအား လုပ်ထုံးလုပ်နည်းများနှင့်အညီ စီမံဆောင်ရွက်ခြင်း။</li><li className={styles.dutiesListItem}>ဝန်ကြီးဌာနတွင်း စာရင်းစစ်လုပ်ငန်းများ ဆောင်ရွက်ခြင်း။</li><li className={styles.dutiesListItem}>ပြည်ထောင်စုစာရင်းစစ်ရုံး၏ စာရင်းစစ်လုပ်ငန်းစဉ်များအားခံယူရန် စီစဉ်ခြင်းနှင့်
စာရင်းစစ်လုပ်ငန်းမှ ထွက်ပေါ်လာသောအချက်လက်များကို ပြန်လည်စီစစ်ခြင်း။</li></ul>
        </section>

        <section id="relations">
          <h2 className={styles.sectionTitle}>ပြည်တွင်းပြည်ပဆက်ဆံရေးနှင့်သတင်းပြန်ကြားရေးဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
<li className={styles.dutiesListItem}>ပြည်တွင်းပြည်ပမီဒီယာများမှ မေးမြန်းလာသည့် သတင်းအချက်အလက်များကို
ဖြေကြားပေးခြင်း။</li>
<li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန၏လှုပ်ရှားမှုဆိုင်ရာ သတင်းအချက်အလက်
များအား Websiteနှင့် Social Mediaတို့တွင် လွှင့်တင်ခြင်း။</li>
<li className={styles.dutiesListItem}>E-Government၏ ဆောင်ရွက်မှုကဏ္ဍတစ်ခုဖြစ်သည့် ဝန်ကြီးဌာနများ၊ တိုင်းဒေသ
ကြီးများနှင့် ပြည်နယ်အစိုးရအဖွဲ့များ အစည်းအဝေးကျင်းပပြုလုပ်ရာတွင် video
conferencing စနစ်ဖြင့် နည်းပညာပိုင်းဆိုင်ရာဆောင်ရွက်ပေးခြင်း။</li>
<li className={styles.dutiesListItem}>ခရီးသွားလုပ်ငန်းနှင့်ဆိုင်သော နိုင်ငံတကာအစည်းအဝေးပွဲများ၊ အခမ်းအနားများနှင့်
ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန၏ လှုပ်ရှားမှုများအား
ရုပ်သံမှတ်တမ်းတင်ခြင်း။</li>
<li className={styles.dutiesListItem}>မြန်မာနိုင်ငံအတွင်းဝင်ရောက်လာသော အထူးခရီးစဉ်များဖြစ်သည့် မော်တော်ကား
ယာဉ်တန်းခရီးစဉ်များ၊ မော်တော်ဆိုင်ကယ်ယာဉ်တန်းခရီးစဉ်များ၊
စက်ဘီးယာဉ်တန်းခရီးစဉ်များ၊ အပျော်စီးသင်္ဘောခရီးစဉ်များ၊
စက်တပ်ရွက်လှေခရီးစဉ်များ၊ မြစ်ကြောင်းခရီးစဉ်များနှင့်
စင်းလုံးငှားလေယာဉ်ခရီးစဉ်များအတွက် ခွင့်ပြုမိန့် လုပ်ငန်းစဉ်များကို
စီစဉ်ဆောင်ရုပ်ဆောင်ရွက်ခြင်း။</li>
<li className={styles.dutiesListItem}>ခရီးစဉ်သတင်းများကို မြန်မာ့အသံနှင့်ရုပ်မြင်သံကြား (MRTV) သို့ပေးပို့ခြင်း၊
ဝန်ကြီးဌာန Websiteနှင့် Facebookတို့တွင် ခရီးစဉ်သတင်းများ လွှင့်တင်ခြင်း။</li></ul>
        </section>

        <section id="union">
          <h2 className={styles.sectionTitle}>e-Government ဌာနခွဲ လုပ်ငန်းတာဝန်များ</h2>
          <ul className={styles.dutiesList}>
<li className={styles.dutiesListItem}>အစိုးရအဖွဲ့အစည်းများ၊ ပြည်ထောင်စုဝန်ကြီးဌာနများ၊ တိုင်းဒေသကြီးနှင့် ပြည်နယ်
အစိုးရ အဖွဲ့များနှင့် ပေါင်းစပ်ညှိနှိုင်း၍ e-Government ဆိုင်ရာ Common Application
လုပ်ငန်းများ အောင်မြင်တိုးတက်စေရေးအတွက် ဆောင်ရွက်ခြင်း။</li>
<li className={styles.dutiesListItem}>ဝန်ကြီးဌာန၏ ICT လုပ်ငန်းများကို တာဝန်ယူအကောင်အထည်ဖော်ဆောင်ရွက်ခြင်း။</li>
<li className={styles.dutiesListItem}>ဝန်ကြီးဌာန၏ မူဝါဒ၊ ရည်မှန်းချက်များနှင့်အညီ ICT လုပ်ငန်းများဖွံ့ဖြိုးတိုးတက်အောင်
ဆောင်ရွက်၍ပြည်သူ့ဝန်ဆောင်မှုလုပ်ငန်းများ ပိုမိုတိုးတက်ကောင်းမွန်အောင်
အကောင်အထည် ဖော်ဆောင်ရွက်ခြင်း။</li>
<li className={styles.dutiesListItem}>ခေတ်နှင့်လျော်ညီသော နည်းပညာအသစ်များကို စဉ်ဆက်မပြတ်ရှာဖွေလေ့လာ၍
ဝန်ကြီး ဌာန၏ လုပ်ငန်းစဉ်များတွင် အသုံးချနိုင်ရေးအတွက် ပြုစုတင်ပြခြင်း။</li>
<li className={styles.dutiesListItem}>ဝန်ကြီးဌာနတွင်း ICT ကျွမ်းကျင်ဝန်ထမ်းများ တိုးတက်များပြားလာစေရေးအတွက်
သင်တန်း များ စီစဉ်ပို့ချပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ကာလတို/ကာလရှည် e-Government စီမံကိန်းများ ရေးဆွဲတင်ပြခြင်းနှင့် လိုအပ်သော
ဘဏ္ဍာငွေ လျာထားတင်ပြတောင်းခြင်း။</li>
</ul>
        </section>

        <section id="executive">
          <h2 className={styles.sectionTitle}>ဦးစီးရုံး</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>ပြည်ထောင်စုဝန်ကြီးနှင့် ဌာနဆိုင်ရာအကြီးအကဲများ၏ ပြည်တွင်းပြည်ပခရီးစဉ်များ
ကို စီစဉ်ဆောင်ရွက်ပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်ထောင်စုဝန်ကြီး၊ ဌာနဆိုင်ရာအကြီးအကဲများ၊
အခြားဝန်ကြီးဌာနများနှင့်ဆက်စပ်သောအကြောင်းအရာများ၊ မိန့်ခွန်းများနှင့်
ခရီးစဉ်များအား စီမံ ဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်ထောင်စုဝန်ကြီးနှင့် ဌာနဆိုင်ရာအကြီးအကဲများ၏ အိမ်အလုပ်သမားများအား
လစာများစီမံပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်ထောင်စုဝန်ကြီး၊ ဒုတိယဝန်ကြီး၊ အမြဲတမ်းအတွင်းဝန်နှင့်
ဒုတိယအမြဲတမ်းအတွင်းဝန်တို့ထံ တင်ပြသောစာများအား ဝင်စာမှတ်ပုံတင်ခြင်း။</li>
            <li className={styles.dutiesListItem}>အခါအားလျော်စွာ ပေးအပ်သောဝန်ထမ်းတာဝန်များကို ထမ်းဆောင်ခြင်း။</li>
          </ul>
        </section>

        <h2 className={styles.sectionTitle}>ဟိုတယ်နှင့်ခရီးသွားညွှန်ကြားမှုဦးစီးဌာန</h2>

        <section id="budget">
          <h2 className={styles.sectionTitle}>အုပ်ချုပ်ရေးနှင့်ဘဏ္ဍာရေးဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>လစာ၊ပင်စင်၊အလုပ်သမားကိုယ်ရေးမှတ်တမ်း၊ အဆောက်အအုံနှင့်စက်ပစ္စည်းပြုပြင်
ထိန်းသိမ်းရေးလုပ်ငန်းများအပါအဝင် ဌာန၏ဌာနတွင်းစာရင်းအင်းနှင့် တရားဝင်
လုပ်ငန်းများအားစီမံခြင်း။</li>
            <li className={styles.dutiesListItem}>ရသုံးမှန်းခြေငွေစာရင်းရေးဆွဲခြင်းနှင့် ရန်ပုံငွေခွဲဝေကြီးကြပ်ထိန်းသိမ်းခြင်း။</li>
            <li className={styles.dutiesListItem}>ပုဂ္ဂလိကသို့ဌားရမ်းထားသည့်ဟိုတယ်များနှင့် JV
ဟိုတယ်များမှဌားရမ်းခများတောင်းခံခြင်း။</li>
            <li className={styles.dutiesListItem}>နိုင်ငံခြားငွေကြေးများနှင့်ပတ်သက်၍စီမံခြင်း။</li>
           
            <li className={styles.dutiesListItem}>လချုပ်စာရင်းပြုစုခြင်း။</li>
            <li className={styles.dutiesListItem}>နှစ်ချုပ်စာရင်းများအရစာရင်းပေါင်းချုပ်ရေးဆွဲတင်ပြခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်ထောင်စုစာရင်းစစ်ချုပ်ရုံးမှ စာရင်းစစ်အစီရင်ခံစာများကို ပြန်လည်ဖြေကြားတင်
ပြခြင်း။</li>
            <li className={styles.dutiesListItem}>ရုံးခွဲများပူးပေါင်း၍ အုပ်ချုပ်မှုကိစ္စများ ဆောင်ရွက်ခြင်း။</li>
          </ul>
        </section>

            

        <section id="hotels">
          <h2 className={styles.sectionTitle}>ဟိုတယ်လုပ်ငန်းနှင့်ခရီးသွားလုပ်ငန်းကြီးကြပ်မှုဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>ဟိုတယ်၊မိုတယ်နှင့်တည်းခိုရိပ်သာလိုင်စင်များစီစစ်ထုတ်ပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ခရီးလှည့်လည်ရေးလုပ်ငန်းလိုင်စင်များ စီစစ်ထုတ်ပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ခရီးသည်ပို့ဆောင်ရေးလုပ်ငန်းလိုင်စင်များ စီစစ်ထုတ်ပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ဧည့်လမ်းညွှန်လိုင်စင်များ စီစစ်ထုတ်ပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဆိုင်ရာဥပဒေများ၊စည်းမျဉ်းစည်းကမ်းများ၊အမိန့်များ
နှင့်ညွှန်ကြားချက်များကိုကြီးကြပ်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာနမှထုတ်ပေးထားသောလုပ်ငန်းလိုင်စဉ်များ
အားစစ်ဆေးကြီးကြပ်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဆိုင်ရာစာရင်းအင်းကိန်းဂဏန်းအချက်အလက်များအား
စစ်ဆေးကြီးကြပ်ခြင်း။</li>
            <li className={styles.dutiesListItem}>လုပ်ငန်းလိုင်စင်လေးမျိုးအားထုတ်ပေးသောဟိုတယ်နှင့်ခရီးသွားညွှန်ကြားမှုဦးစီး ဌာန၊
နယ်ရုံးခွဲများ၏ အလုပ်တာဝန်များအားစီမံခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားမြင့်တင်ရေး၊သင်တန်းများဖွင့်လှစ်နိုင်ခြင်းဆိုင်ရာလုပ်ငန်းများအား
လူအရင်းအမြစ်စီမံခန့်ခွဲမှုဌာနနှင့်အတူတူညီပံ့ပိုးဆောင်ရွက်ခြင်း။</li>
          </ul>
        </section>

        <section id="training">
          <h2 className={styles.sectionTitle}>လေ့ကျင့်ပေးရေးနှင့်ပညာပေးရေးဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>ဝန်ကြီးဌာနနှင့်သက်ဆိုင်ရာ အဖွဲ့အစည်းများမှ ပြုလုပ်သည့်အစည်းအဝေးများ၊
ဆွေးနွေးပွဲများ၊ စာတမ်းဖတ်ပွဲများနှင့် အခြားကိစ္စများသို့ ကိုယ်စားလှယ် စေလွတ်ရန်
အတွက် တာဝန်ခံစေလွတ်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြင်ပပုဂ္ဂလိကအနေဖြင့်ဟိုတယ်နှင့် ခရီးသွားလုပ်ငန်းဆိုင်ရာသင်တန်းကျောင်းများ
အားညှိနှုင်းကြီးကြပ် ဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>မြန်မာနိုင်ငံတွင် သင်တန်းအဆောင်အအုံများတည်ဆောင်နိုင်ရန်
ပြည်ပအဖွဲ့အစည်းများနှင့်ပူးပေါင်းဆောင်ရွင်ခြင်း။</li>
            <li className={styles.dutiesListItem}>သင်တန်းနှင့်သင်တန်းသားရာဇဝင်များအား မှတ်တမ်းတင်သိမ်းဆည်းခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်း၏ဒေသအလိုက်လေ့ကျင့်ရေးသင်တန်းများအားစီစဉ်
ခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဝန်ကြီးဌာန၏စာကြည့်တိုက်ဖွင့်လှစ်ထားရှိခြင်း။</li>
            <li className={styles.dutiesListItem}>ခရီးသွားလုပ်ငန်းလေ့ကျင့်ပေးရေးနှင့်သင်တန်းပေးရေးဌာနခွဲ၏အုပ်ချုပ်မှုဆိုင်ရာစီမံ
ခြင်း။</li>
            <li className={styles.dutiesListItem}>အခါအားလျော်စွာ ပေးအပ်သည့်တာဝန်များကိုထမ်းဆောင်ခြင်း။</li>
          </ul>
        </section>


        <section id="planning2">
          <h2 className={styles.sectionTitle}>စီမံကိန်းဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>ဟိုတယ်စီမံကိန်းအဆိုပြုရေးဆိုင်ရာလုပ်ထုံးလုပ်နည်းများနှင့်သက်ဆိုင်သည့်အချက်
အလက်များအားပြည်တွင်း၊ပြည်ပလုပ်ရှင်များထံသို့အသိပေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်တွင်း၊ပြည်ပလုပ်ငန်းရှင်များမှတင်ပြလာသောဟိုတယ်စီမံကိန်းအဆိုပြုချက်များ
အားစစ်ဆေးခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်ဇုန်ဖော်ထုတ်ခြင်း၊
ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဝန်ကြီးဌာန၏အခြားဌာနခွဲများ၊
သက်ဆိုင်ရာဒေသအာဏာပိုင်များနှင့်ပူးပေါင်းဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်စီမံကိန်းအသစ်များဖော်ထုတ်ခြင်း၊ ဖြစ်နိုင်ခြေလေ့လာသုံးသပ်ခြင်းနှင့်
အကောင်အထည်ဖော်ရန်စီမံခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်တွင်း၊ပြည်ပဟိုတယ်စီမံကိန်းများအတွက် စာချုပ်ဥပဒေပြဌာန်းချက်၊
လုပ်ထုံးလုပ်နည်း၊ ညွှန်ကြားချက်များနှင့်အညီစီမံခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်တွင်း၊ပြည်ပစီမံကိန်းများအကောင်အထည်ဖော်မှုစီမံခြင်း။</li>
            <li className={styles.dutiesListItem}>စာချုပ်ပါစည်းမျဉ်းစည်းကမ်းများနှင့်အညီ ဟိုတယ်စီမံကိန်းလုပ်ငန်းအကောင်
အထည်ဖော်ခြင်းကို စဉ်ဆက်မပြတ်ကြီးကြပ်ကွပ်ကဲခြင်း။</li>
            <li className={styles.dutiesListItem}>စာချုပ်ဖောက်ဖျက်မှုအပေါ်ဥပဒေအရဆောင်ရွက်နိုင်ခြင်းအားစီစစ်တင်ပြခြင်း။</li>
            <li className={styles.dutiesListItem}>ဟိုတယ်၏လုပ်ငန်းသုံးပစ္စည်းများ၊ အခွန်အခများနှင့် အခြားကိစ္စရပ်များကို
သက်ဆိုင်ရာဌာနများနှင့်ညှိနှိုင်းဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>စီမံကိန်း၏ဆောက်လုပ်ရေးဒီဇိုင်းအား ကြည့်ရှုစစ်ဆေးခြင်း။</li>
            <li className={styles.dutiesListItem}>စာချုပ်များပြုစုရေးသားခြင်း။</li>
          </ul>
        </section>

        <section id="international">
          <h2 className={styles.sectionTitle}>နိုင်ငံတကာနှင့်ဒေသတွင်းပူးပေါင်းဆောင်ရွက်ရေးဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>အရှေ့တောင်အာရှနိုင်ငံများအသင်း(အာဆီယံ)၊ မဟာမဲခေါင်ဒေသခွဲ(ဂျီအမ်အက်စ်)၊ ကမ္ဘောဒီးယား၊ လာအို၊ မြန်မာ၊ ဗီယက်နမ်(စီအယ်လ်အမ်ဗွီ)၊ ဧရာဝတီ-ကျောက်ဖယား-မဲခေါင်စီးပွားရေးပူးပေါင်းဆောင်ရွက်မှု မဟာဗျူဟာ(အက်မက်စ်)၊ ကဏ္ဍစုံနည်းပညာနှင့် စီးပွားရေးပူးပေါင်းဆောင်ရွက်မှုဆိုင်ရာ ဘင်္ဂလားပင်လယ် အော် ဦးဆောင်ဦးရွက်ပြုမည့်အစီအစဉ်။</li>
            <li className={styles.dutiesListItem}>ဌာနများ၏လစဉ်ရသုံးဘဏ္ဍာငွေအချက်အလက်များကိုစီစစ်ခြင်း။</li>
            <li className={styles.dutiesListItem}>နိုင်ငံတကာနှင့်ဒေသတွင်းနိုင်ငံများ နှစ်နိုင်ငံပူးပေါင်းဆောင်ရွက်ခြင်း။</li>
          </ul>
        </section>

        <section id="promotion">
          <h2 className={styles.sectionTitle}>ခရီးသွားမြှင့်တင်ရေးဌာနခွဲ</h2>
          <ul className={styles.dutiesList}>
            <li className={styles.dutiesListItem}>ခရီးသွားလုပ်ငန်းရည်မှန်းချက်၊ ခရီးစဉ်ဒေသများနှင့် ရေရှည်မြှင့်တင်ရေးလုပ်ငန်း ပွဲစဉ်များကို ပိုမိုသိရှိလာစေရန်ဖန်တီးခြင်း။</li>
            <li className={styles.dutiesListItem}>ခရီးသွားမြှင့်တင်မှုတိုးတက်စေရန်ရေးသားထုတ်ဝေသော စာအုပ်စာစောင်များဖြစ်သည့် brochures, pamphlets,CD/DVD များကိုနိုင်ငံတကာခရီးသွားပြပွဲများတွင် ပြသခြင်း၊ ပြည်ပရှိမြန်မာသံရုံးများသို့ပေးပို့ခြင်း။</li>
            <li className={styles.dutiesListItem}>မြန်မာနိုင်ငံရှိခရီးစဉ်ဒေသများမြှင့်တင်စေရန် pamphlets နှင့် brochures များ ထုတ်ဝေခြင်း။</li>
            <li className={styles.dutiesListItem}>ခရီးသွားလုပ်ငန်းနှင့်သက်ဆိုင်သော နိုင်ငံတကာခရီးသွားပြပွဲများ၊ workshops,forums နှင့် seminars များသို့ ပါဝင်တက်ရောက်နိုင်ရေးအတွက် လိုအပ်သည် များအား စီစဉ် ဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ဈေးကွက်မြှင့်တင်ရေးအတွက် အိမ်နီးချင်းနိုင်ငံများသာမက အလားအလာရှိသော အခြားနိုင်ငံများသို့ဆက်သွယ်ဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ခရီးသွားမြှင့်တင်မှုနှင့် ဈေးကွက်ရှာဖွေရေးလုပ်ငန်းပွဲစဉ်များအား ပြည်ထောင်စုဝန်ကြီး၏ညွှန်ကြားမှုနှင့်အညီ အကောင်အထည်ဖော်ဆောင်ရွက်ခြင်း။</li>
            <li className={styles.dutiesListItem}>ပြည်တွင်းဒေသအလိုက်ခရီးသွာမြှင့်တင်ရေးဆိုင်ရာလုပ်ငန်းများ၊ ပွဲတော်များကျင်းပနိုင်ရေးအားပူးပေါင်းညှိနှိုင်းဆောင်ရွက်ခြင်း။</li>
          </ul>
        </section>
      </div>
    </div>
  );
}