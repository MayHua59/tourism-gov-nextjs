import React from "react";
import Link from "next/link"; // 1. Import the Link component
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faTelegramPlane,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        <div className="row mb-0">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.footerWidget}>
              {/* <h3 className={styles.widgetTitle}>Quick Links</h3> */}
              {/* 2. Replace <a> with <Link> and use absolute paths */}
              <ul>
                <li><Link href="/mm/coming-soom">မြန်မာနိုင်ငံသို့ လှမ်းလာခဲ့ပါ</Link></li>
                <li><Link href="/mm/maps">မြေပုံ</Link></li>
                <li><Link href="/mm/tourism-publication">စာအုပ်၊စာစောင်များ</Link></li>
                <li><Link href="/mm/brochures-and-pamphlets">လက်ကမ်းစာစောင်များ</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.footerWidget}>
              {/* <h3 className={styles.widgetTitle}>Explore Our Site</h3> */}
              {/* 3. Replace <a> with <Link> and use absolute paths */}
              <ul>
                <li><Link href="/mm/news">သတင်းများ</Link></li>
                <li><Link href="/mm/announcements">ကြေညာချက်များ</Link></li>
                <li><Link href="/mm/coming-soon">တည်းခိုနေထိုင်ရေး</Link></li>
                <li><Link href="/mm/coming-soon">ခရီးစဉ်များ</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.footerWidget}>
              {/* <h3 className={styles.widgetTitle}>Contact Us</h3> */}
              <ul className={styles.footerWidgetContent}>
                <li>
                  <p><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} /> (+၉၅) ၆၇၃၄၀၆၄၅၈</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />(+၉၅) ၆၇၃၄၀၆၂၄၇</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} /> ၁၅၅၁</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန၊ ရုံးအမှတ် (၃၃)၊ နေပြည်တော်၊ ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်</p>
                </li>
              </ul>
              {/* External social links correctly remain as <a> tags */}
              <ul className={styles.footerSocial}>
                <li><a href="https://facebook.com/tourismmyanmar.com.mm" target="_blank" rel="noopener"><FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} /></a></li>
                <li><a href="https://twitter.com/VisitMyanmar_MM" className="active" target="_blank" rel="noopener"><FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} /></a></li>
                <li><a href="https://www.youtube.com/channel/UCYYysRno81dDb7Tyhxz3OEQ" target="_blank" rel="noopener"><FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} /></a></li>
                <li><a href="https://linkedin.com/in/tourismmyanmar" target="_blank" rel="noopener"><FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} /></a></li>
                <li><a href="https://instagram.com/tourismmyanmar" target="_blank" rel="noopener"><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} /></a></li>
                <li><a href="https://t.me/myanmarbeenchanted" target="_blank" rel="noopener"><FontAwesomeIcon icon={faTelegramPlane} className={styles.socialIcon} /></a></li>
                <li><a href="https://pinterest.com/tourisminmyanmar" target="_blank" rel="noopener"><FontAwesomeIcon icon={faPinterestP} className={styles.socialIcon}/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className={styles.privacyArea}>© 2025 Ministry of Hotels and Tourism, Myanmar. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}