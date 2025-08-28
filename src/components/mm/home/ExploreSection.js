import React from "react";
import styles from "./ExploreSection.module.css";

const places = [
  {
    img: "/assets/images/cover-images/bagan-sunrise.jpg",
    alt: "Bagan Temples",
    title: "ပုဂံဘုရားပုထိုးလွင်ပြင်",
    desc:
      "၉ ရာစုမှ စတင်တည်ဆောက်ခဲ့သော ယူနက်စကို ကမ္ဘာ့အမွေအနှစ်နေရာ ပုဂံ၏ မြေပြန့်လွင်ပြင်တွင်ရှေးဟောင်းဘုရားပုထိုး ၂၀၀၀ ကျော်ကို အံ့ဩဖွယ် ကြည့်ရှုလေ့လာနိုင်ပါသည်။",
  },
  {
    img: "/assets/images/cover-images/inle-boat.jpg",
    alt: "Inle Lake",
    title: "အင်းလေးကန်",
    desc:
      "မြန်မာနိုင်ငံ၏ ဒုတိယအကြီးဆုံးကန်ဖြစ်သော အင်းလေးကန်တွင် အင်းသားလူမျိုးတို့၏ ထူးခြားသောငါးဖမ်းယဉ်ကျေးမှုနှင့် ရေပေါ်ကျေးရွာများကို အတူတူ ရှုမြင်ခံစားနိုင်ပါသည်။ တောင်တန်းများဝန်းရံထားသော ဤကန်ကြီးသည် သဘာဝအလှနှင့် ယဉ်ကျေးမှုဆိုင်ရာဆွဲဆောင်မှုများစွာကို ပိုင်ဆိုင်ထားပါသည်။",
  },
  {
    img: "/assets/images/cover-images/ngapali-beach.jpg",
    alt: "ငပလီကမ်းခြေ",
    title: "ငပလီကမ်းခြေ",
    desc:
      "ဘင်္ဂလားပင်လယ်အော်တစ်လျှောက်ရှိ သဘာဝအတိုင်း သန့်စင်ဖြူစင်သော သဲသောင်ပြင်များပေါ်တွင်လှုပ်ယိမ်းနေသော ထန်းပင်များနှင့် ကြည်လင်တောက်ပသည့် ရေပြင်တို့နှင့်အတူ အနားယူအပန်းဖြေလိုက်ပါ။",
  },
  {
    img: "/assets/images/cover-images/upaing.jpg",
    alt: "Mandalay",
    title: "မန္တလေးတိုင်းဒေသကြီး",
    desc:
      "ရှေးဟောင်းမြို့တော်များ၊ ရိုးရာလက်မှုပညာများနှင့် ထင်ရှားကျော်ကြားသော ဦးပိန်တံတားတို့နှင့်အတူ မြန်မာနိုင်ငံ၏ ယဉ်ကျေးမှုနှလုံးသားကို ရှာဖွေလေ့လာလိုက်ပါ။",
  },
  {
    img: "/assets/images/cover-images/kantawgyi.jpg",
    alt: "Yangon",
    title: "ရန်ကုန်",
    desc:
      "ကိုလိုနီခေတ် ဗိသုကာလက်ရာများနှင့် ခမ်းနားထည်ဝါသော ရွှေတိဂုံဘုရားတို့နှင့်အတူ စည်ကားသော မြို့တော်ဟောင်းကို စူးစမ်းလေ့လာလိုက်ပါ။",
  },
  {
    img: "/assets/images/cover-images/kuaikhteeyoe.jpg",
    alt: "Kyaiktiyo",
    title: "ကျိုက်ထီးရိုးစေတီတော်",
    desc:
      "မြန်မာနိုင်ငံ၏ ကမ္ဘာ့အံ့ဖွယ်တစ်ခုဖြစ်ပြီး အပြည်ပြည်ဆိုင်ရာ ဗုဒ္ဓဘာသာဝင်များအထွတ်အမြတ်ထားရာ ကျိုက်ထီးရိုးဘုရားရှိ ရွှေရောင်ကျောက်တုံးကြီး၏ အံ့ဩဖွယ်ရာ မြင်ကွင်းကိုကြည်နူးခံစားလိုက်ပါ။",
  },
];

export default function ExploreSection() {
  return (
    <section className={`explore-section ${styles.exploreSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>မြန်မာ့အမွေအနှစ်များကို လေ့လာရှာဖွေပါ</h2>
              <span className={styles.titleBorder}></span>
              <p>
               ရှေးဟောင်းဘုရားပုထိုးများမှ စတင်ကာ သဘာဝအတိုင်း သန့်စင်သော ကမ်းခြေများအထိ မြန်မာနိုင်ငံသည်
                            ခရီးသွားတိုင်းအတွက် မတူကွဲပြားသော အတွေ့အကြုံများကို ပေးစွမ်းပါသည်။ ကျွန်ုပ်တို့၏
                            အထင်ကရနေရာများစွာကို ရှာဖွေလိုက်ပါ။
              </p>
            </div>
          </div>
        </div>
        <div className={`row ${styles.cardGrid}`}>
          {places.map((place) => (
            <div className="col-lg-4 col-md-6 col-sm-8 " key={place.title}>
              <div className={styles.exploreItem}>
                <div className={styles.exploreThumb}>
                  <img src={place.img} alt={place.alt} />
                  <div className={styles.exploreOverlay}>
                    <div className={styles.exploreOverlayThumb}>
                      <img src={place.img} alt={place.alt} />
                    </div>
                  </div>
                </div>
                <div className={styles.exploreContent}>
                  <h3 className={styles.title}>{place.title}</h3>
                  <p>{place.desc}</p>
                </div>
                <div className={styles.exploreOverlay}>
                  <div className={styles.exploreOverlayThumb}>
                    <img src={place.img} alt={place.alt} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}