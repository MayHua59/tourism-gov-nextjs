"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TravelerInformationSection.module.css";

const faqData = [
  {
    question: "ဗီဇာရရှိရန် လိုအပ်သောအချက်အလက်များ",
    answer:
      "ဧည့်သည်အများစုသည် မြန်မာနိုင်ငံသို့ဝင်ရောက်ရန် ဗီဇာလိုအပ်ပါသည်။ ခရီးသွားဗီဇာကို အီးဗီဇာ(E-Visa) စနစ်မှတစ်ဆင့် အွန်လိုင်းလျှောက်ထားနိုင်သလို မြန်မာသံရုံးများတွင်လည်းရယူနိုင်ပါသည်။ အီးဗီဇာ(E-Visa) ဖြင့် ခရီးသွားရည်ရွယ်ချက်ဖြင့် ၂၈ ရက်အထိ နေထိုင်ခွင့်ပြုပါသည်။",
  },
  {
    question: "လည်ပတ်ရန် အကောင်းဆုံးအချိန်",
    answer:
      "မြန်မာနိုင်ငံ၏ အအေးပိုင်းနှင့် ခြောက်သွေ့သော လများဖြစ်သည့် နိုဝင်ဘာမှ ဖေဖော်ဝါရီအထိကာလသည် နေရာအများစုသို့ သွားရောက်လည်ပတ်ရန် အကောင်းဆုံးအချိန်ဖြစ်ပါသည်။ ကမ်းခြေများသို့မူ နိုဝင်ဘာမှ ဧပြီအထိ သွားရောက်ရန်သင့်တော်ပြီး မြောက်ပိုင်းဒေသများတွင် လမ်းလျှောက်ခရီးထွက်ရန် အောက်တိုဘာမှ မတ်လအထိကာလက အကောင်းဆုံးဖြစ်ပါသည်။",
  },
  {
    question: "ယဉ်ကျေးမှုဆိုင်ရာလိုက်နာကျင့်သုံးရမည့်အချက်များ",
    answer:
      "ဘုရားစေတီများသို့ သွားရောက်လည်ပတ်သည့်အခါ ရိုသေလေးစားမှုဖြင့် ဝတ်စားဆင်ယင်ပါ (ပခုံးနှင့်ဒူးများ ဖုံးအုပ်ပါ)ဖိနပ်နှင့်ခြေအိတ်များ ချွတ်ပါ ဗုဒ္ဓရုပ်ပွားတော်များကို မထိပါနှင့် ဓာတ်ပုံရိုက်မည်ဆိုပါက လူများထံ ခွင့်တောင်းပါ အရာဝတ္ထုများကို လက်ယာဖြင့်သာ ယူပါ/ပေးပါ",
  },
  {
    question: "ကျန်းမာရေးနှင့် ဘေးအန္တရာယ်ကင်းရှင်းရေး",
    answer:
      "ခရီးမသွားမီ ထိုးသင့်သော ကာကွယ်ဆေးများအတွက် ဆရာဝန်နှင့် တိုင်ပင်ဆွေးနွေးပါ။ သောက်ရေသန့် သို့မဟုတ် သန့်စင်ပြီးရေကိုသာ သောက်သုံးပါ။ မြန်မာနိုင်ငံသည် ခရီးသွားများအတွက် ယေဘုယျအားဖြင့် ဘေးကင်းသော်လည်း အဖိုးတန်ပစ္စည်းများနှင့် ပတ်သက်၍ ပုံမှန်သတိထား ဆောင်ရွက်ပါ။",
  },
];

const TravelerInformationSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.travelerInfoSection}>
      <div className="container">
        <div className={`row mb-30-none ${styles.rowStretch}`}>
          <div className={`col-lg-6 mb-30 ${styles.colFullHeight}`}>
            <div className={styles.faqContent}>
              <h2 className={styles.faqTitle}>ခရီးသွားများအတွက် အချက်အလက်များ</h2>
              <div className={styles.faqWrapper}>
                {faqData.map((item, idx) => (
                  <div
                    key={item.question}
                    className={`${styles.faqItem} ${openIndex === idx ? styles.open : ""}`}
                  >
                    <h3
                      className={styles.faqQuestion}
                      onClick={() => handleToggle(idx)}
                    >
                      <span className={styles.faqQuestionText}>{item.question}</span>
                      <span className={styles.faqIcon}>
                        {openIndex === idx ? (
                          <span className={styles.iconMinus}>−</span>
                        ) : (
                          <span className={styles.iconPlus}>+</span>
                        )}
                      </span>
                    </h3>
                    <div
                      className={`${styles.faqAnswerWrapper} ${
                        openIndex === idx ? styles.expanded : ""
                      }`}
                    >
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`col-lg-6 mb-30 ${styles.colFullHeight}`}>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5SBjWjO3ilc?si=GbnrG-i0wG_v9vqL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ display: "block" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TravelerInformationSection;