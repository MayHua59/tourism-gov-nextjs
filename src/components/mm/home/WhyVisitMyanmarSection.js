import React from "react";
import styles from "./WhyVisitMyanmarSection.module.css";

export default function WhyVisitMyanmarSection() {
  return (
    <section className={styles.chooseUsSection}>
      <div className="container-fluid">
        {/* Why Visit Myanmar Row */}
        <div className={`row ${styles.flexRow}`}>
          <div className={`col-lg-6 col-md-6 ${styles.noPaddingLeft}`}>
            <div className={styles.chooseUsThumb} aria-label=""></div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className={`${styles.chooseContent} ${styles.responsivePadding}`}>
              <h2 className={styles.title}>မြန်မာပြည်ကို ဘာကြောင့်လာရောက်လည်ပတ်သင့်သလဲ။</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>စစ်မှန်သော အတွေ့အကြုံများ</h3>
                    <p>မြန်မာပြည်သည် အစစ်အမှန်သော ယဉ်ကျေးမှုအတွေ့အကြုံများကို ပေးစွမ်းပြီး လူထူထပ်သော ခရီးသွားလုပ်ငန်း၏ သက်ရောက်မှုမှ လွတ်ကင်းနေဆဲဖြစ်သည်။</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>ကြွယ်ဝသော ယဉ်ကျေးမှုအမွေအနှစ်</h3>
                    <p>နှစ်ပေါင်း ၂၀၀၀ ကျော် သက်တမ်းရှိသော သမိုင်းကြောင်းနှင့်အတူ မြန်မာနိုင်ငံသည် ရှေးဟောင်းသုတေသနဆိုင်ရာ အမွေအနှစ် ရတနာမြောက်မြားစွာကို ပိုင်ဆိုင်ထားပါသည်။</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>သဘာဝ အလှတရား</h3>
                    <p>ဟိမဝန္တာတောင်တန်းများ၏ မြင့်မားသောထိပ်သီးများမှ အပူပိုင်းဒေသရှိ ကျွန်းစုများအထိ၊ မြန်မာနိုင်ငံ၏ သဘာဝရှုခင်းတို့သည် အလွန်တရာ လှပသော ခံစားမှုကို ပေးစွမ်းနိုင်ပါသည်။</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className={styles.chooseItem}>
                    <h3 className={styles.itemTitle}>ကြင်နာသောဧည့်ဝတ်ကျေပွန်မှု</h3>
                    <p>မြန်မာလူမျိုးတို့၏ စစ်မှန်သောစေတနာနှင့် ဖော်ရွေပျူငှာမှုသည် ကမ္ဘာတွင်ကျော်ကြားလေ့ရှိပါသည်။</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Achievements Row */}
        <div className={`row ${styles.flexRow}`}>
          <div className="col-lg-6 col-md-6">
            <div className={`${styles.chooseContent} ${styles.chooseContentStyle} ${styles.responsivePadding}`}>
              <h2 className={styles.title}>ကျွန်ုပ်တို့၏ ခရီးသွားလှုပ်ရှားမှု ဆိုင်ရာ အောင်မြင်မှုမျာ</h2>
              <p>
                ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဝန်ကြီးဌာနသည် မြန်မာ့ယဉ်ကျေးမှုအမွေအနှစ်နှင့် သဘာဝပတ်ဝန်းကျင်ကို အနာဂတ်မျိုးဆက်သစ်များအတွက် ထိန်းသိမ်းရင်း၊ ရေရှည်တည်တံ့သော ခရီးသွားလုပ်ငန်း အခြေခံအဆောက်အအုံများ ဖွံ့ဖြိုးတိုးတက်ရေး၌ သိသာထင်ရှားသော အောင်မြင်မှုများ ရရှိခဲ့ပါသည်။
              </p>
              <ul className={styles.chooseItemStyle}>
                <li>၂၀၁၉ ခုနှစ်တွင် နိုင်ငံတကာမှ ဧည့်သည်ဦးရေ ၄.၃ သန်းကျော် ရောက်ရှိခဲ့ပါသည်။</li>
                <li>၂၀၁၁ ခုနှစ်မှ ယခုအချိန်အထိ ဟိုတယ်အခန်းအရေအတွက် ၅၀% တိုးတက်မှု ရှိခဲ့ပါသည်။</li>
                <li>မြန်မာနိုင်ငံရှိ ယဉ်ကျေးမှုဆိုင်ရာ အမွေအနှစ်နေရာများ ၁၂ ခုသည် ယူနက်စကို၏
                                အကြံပြုစာရင်းတွင် ပါဝင်နေပါသည်။</li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-6 col-md-6 ${styles.noPaddingRight}`}>
            <div className={styles.chooseUsThumbStyle} aria-label="Achievements Background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}