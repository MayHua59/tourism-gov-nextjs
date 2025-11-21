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
              <h3 className={styles.widgetTitle}>ลิงก์ด่วน</h3>
             
              <ul>
                <li><Link href="/kr/about-myanmar">เกี่ยวกับเมียนมา</Link></li>
                <li><Link href="/kr/maps">แผนที่</Link></li>
                <li><Link href="/kr/tourism-publication">บทความการท่องเที่ยว</Link></li>
                <li><Link href="/kr/brochures-and-pamphlets">บทความการท่องเที่ยว</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>สำรวจเว็บไซต์</h3>
              {/* 3. Replace <a> with <Link> and use absolute paths */}
              <ul>
                <li><Link href="/kr/news">ข่าว</Link></li>
                <li><Link href="/kr/announcements">ประกาศ</Link></li>
                <li><Link href="/kr/hotels-and-resorts">ที่พัก</Link></li>
                <li><Link href="/kr/festivals">งานประกวด</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>การติดต่อ</h3>
              <ul className={styles.footerWidgetContent}>
                <li>
                  <p><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} /> (+95) 673406458</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} /> (+95) 673406247</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} /> 1551</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />Ministry of Hotels and Tourism, Office No. 33, Nay Pyi Taw, Myanmar</p>
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

