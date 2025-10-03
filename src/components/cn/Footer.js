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
              <h3 className={styles.widgetTitle}>快速链接</h3>
              {/* 2. Replace <a> with <Link> and use absolute paths */}
              <ul>
                <li><Link href="/cn/about-myanmar">探索缅甸</Link></li>
                <li><Link href="/cn/maps">旅游地图</Link></li>
                <li><Link href="/cn/tourism-publication">旅游出版物</Link></li>
                <li><Link href="/cn/brochures-and-pamphlets">宣传册页</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>浏览网站</h3>
              {/* 3. Replace <a> with <Link> and use absolute paths */}
              <ul>
                <li><Link href="/cn/news">新闻资讯</Link></li>
                <li><Link href="/cn/announcements">官方公告</Link></li>
                <li><Link href="/cn/hotels-and-resorts">住宿信息</Link></li>
                <li><Link href="/cn/festivals">节庆活动</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>联系我们</h3>
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
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />缅甸联邦共和国酒店与旅游部，内比都第33号办公室</p>
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
            <p className={styles.privacyArea}>© 2025 缅甸联邦共和国酒店与旅游部。版权所有。</p>
          </div>
        </div>
      </div>
    </footer>
  );
}