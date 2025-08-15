
"use client"
import React, { useState, useEffect } from 'react';

import styles from "./AboutSection.module.css";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function AboutSection() {
    const [offsetX, setOffsetX] = useState(0);
     const handleScroll = () => {
    // Adjust the multiplier (e.g., 0.25) to change the parallax speed
    setOffsetX(window.scrollY * -0.25);
  };
    useEffect(() => {
    // Set up the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component is removed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
     <section className={styles.aboutSection}>
       <div className={styles.aboutElementOne}>
        <img src="/assets/images/shape.png" alt="element shape" />
      </div>
       {/* The aeroplane - Parallax effect applied via inline style */}
      <div
        className={styles.aboutElementTwo}
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        <img src="/assets/images/shape-2.png" alt="element shape 2" />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg6}>
            <div className={styles.aboutLeftContent}>
              <h2 className={styles.title}>မြန်မာနိုင်ငံမှ ကြိုဆိုပါသည်။</h2>
              <p>
                မြန်မာနိုင်ငံသည် ထင်ရှားသော ရွှေရောင်စေတီပုထိုးများကြောင့် ရွှေရောင်လွှမ်းသောနိုင်ငံ (Golden Land) အဖြစ် ထင်ရှားပြီး မတူညီသော ယဉ်ကျေးမှုများ၊ ရှေးဟောင်းအမွေအနှစ်များနှင့် သဘာဝအလှတရားများဖြင့် ပြည့်နှက်နေပြီး ကမ္ဘာလှည့်ခရီးသွားများ၏ စိတ်ဝင်စားဖွယ် လေ့လာလည်ပတ်စရာနေရာတစ်ခုဖြစ်ပါသည်။</p>
                  
              <p>
                ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာနသည် ဒေသခံအပြည်သူလူထုများ အကျိုးကျေးဇူးရရှိစေရန်နှင့် နိုင်ငံတော်၏ ယဉ်ကျေးမှုဆိုင်ရာနှင့် သဘာဝအမွေအနှစ်များ ထိန်းသိမ်းကာကွယ်နိုင်ရန်အတွက် ရေရှည်တည်တံ့ခိုင်မြဲသော ခရီးသွားလုပ်ငန်းများ ဖွံ့ဖြိုးတိုးတက်စေရန် ရည်မှန်းချက်ထားဆောင်ရွက်လျက်ရှိပါသည်။ ဝန်ကြီးဌာန၏ ရည်မှန်းချက်မှာ မြန်မာနိုင်ငံကို ခရီးသွားဧည့်သည်များအတွက် စစ်မှန်သော အတွေ့အကြုံများကို ပေးစွမ်းနိုင်သည့် မဖြစ်မနေလာရောက်သင့်သော ခရီးစဉ်ဒေသများတည်ရှိရာ နိုင်ငံတစ်ခုအဖြစ် ပုံဖော်ရန်ဖြစ်ပါသည်။
              </p>
              <div className={styles.row}>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      သမိုင်းကြောင်း နှစ် ၂၀၀၀ ကျော်
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      တိုင်းရင်းသားလူမျိုး ၁၃၅ မျိုး
                    </li>
                  </ul>
                </div>
                <div className={styles.colLg6}>
                  <ul className={styles.aboutItem}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      ကမ်းရိုးတန်းအရှည် ၁၀၀၀ မိုင်ကျော်
                    </li>
                  </ul>
                </div>
              </div>
             <Link href="/mm/about-myanmar" className={styles.cmnBtn}>
  ပိုမိုလေ့လာရန်
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}