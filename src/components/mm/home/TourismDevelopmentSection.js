"use client";
import React, { useState, useEffect } from "react";
import styles from "./TourismDevelopmentSection.module.css";
import { FaCheck } from "react-icons/fa";

export default function TourismDevelopmentSection() {
  const [planeX, setPlaneX] = useState(0);

  useEffect(() => {
    // On mount, capture scroll
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Move right (positive) when scrolling down, left (negative) when up
      setPlaneX((prev) => {
        let next = prev + (currentScrollY - lastScrollY) * 0.7;
        // Clamp between -60 and 60
        if (next > 60) next = 60;
        if (next < -60) next = -60;
        return next;
      });
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.tdSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Image column */}
          <div className={styles.colLeft}>
            <img
              src="/assets/images/cover-images/bagan.jpg"
              alt="Tourism Myanmar"
              className={styles.tdImage}
            />
          </div>
          {/* Text column with moving airplane background */}
          <div className={styles.colRight}>
            <div
              className={styles.tdPlaneBg}
              style={{
                transform: `translateX(${planeX}px)`
              }}
              aria-hidden="true"
            >
              <img src="/assets/images/overview-bg.png" alt="" />
            </div>
            <div className={styles.tdContent}>
              <h2 className={styles.tdTitle}>မြန်မာနိုင်ငံ၏ ခရီးသွားလုပ်ငန်း ဖွံ့ဖြိုးတိုးတက်ရေး</h2>
              <p>
                ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဝန်ကြီးဌာနသည် မြန်မာနိုင်ငံတစ်ဝှမ်းလုံး
                            ခရီးသွားလုပ်ငန်းအခြေခံအဆောက်အအုံများ ဖွံ့ဖြိုးတိုးတက်ရေး၊ ဝန်ဆောင်မှုစံချိန်စံညွှန်းများ
                            မြှင့်တင်ရေးနှင့် ဒေသခံအခြေပြု ခရီးသွားလုပ်ငန်းလုပ်ငန်းစဉ်များ အားကောင်းစေရန်အတွက်
                            နည်းဗျူဟာမြောက် အစီအစဉ်များ အကောင်အထည်ဖော်ဆောင်ရွက်လျက်ရှိပါသည်။ ကျွန်ုပ်တို့၏
                            အဓိကအာရုံစိုက်မှုမှာ ဒေသခံအသိုင်းအဝိုင်းများ အကျိုးကျေးဇူးခံစားရရှိစေရန်နှင့်
                            ယဉ်ကျေးမှုအမွေအနှစ်များနှင့် သဘာဝပတ်ဝန်းကျင်ကို ထိန်းသိမ်းရန်အပြင် ရေရှည်တည်တံ့သော
                            ဖွံ့ဖြိုးတိုးတက်မှုကို ရရှိစေရန်ဖြစ်ပါသည်။
              </p>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    {/* <li>
                      <FaCheck className={styles.checkIcon} />
                      Improved visa policies
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      Enhanced air connectivity
                    </li> */}
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      ခရီးသွားလုပ်ငန်း ဇုန်သတ်မှတ်ချက်များ
                    </li>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      ဒစ်ဂျစ်တယ် ခရီးသွားလုပ်ငန်း ပလက်ဖောင်းများ
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd6}>
                  <ul className={styles.tdList}>
                    <li>
                      <FaCheck className={styles.checkIcon} />
                      လူထုအခြေပြု ခရီးသွားလုပ်ငန်းစီမံကိန်းများ
                    </li>
                    {/* <li>
                      <FaCheck className={styles.checkIcon} />
                      Heritage conservation
                    </li> */}
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}