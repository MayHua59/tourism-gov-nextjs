"use client";

import React, { useState , useEffect} from "react";
import Link from "next/link"; 
import styles from "./HeaderMobile.module.css";
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";

const menuData = [
  {
    label: "重要情報",
    submenu: [
      { label: "ミャンマーについて", href: "/jp/information-pages/about-myanmar" },
      {
        label: "ビザ要件",
        submenu: [
          { label: "電子ビザ", href: "/jp/e-visa" },
          { label: "ビザ免除", href: "/jp/information-pages/visa-exemption" },
          { label: "アライバルビザ", href: "/jp/information-pages/visa-on-arrival" },
        ],
      },
      { label: "ツアー会社向けガイドライン", href: "/jp/information-pages/guidelines-for-tour-companies" },
      {
        label: "ヘルプデスク",
        submenu: [
          { label: "支店", href: "/jp/branch-offices" },
          { label: "案内所", href: "/jp/information-counters" },
          { label: "観光警察署", href: "/jp/tourism-police-offices" },
        ],
      },
      {
        label: "大使館・公館",
        submenu: [
            { label: "ミャンマー公館", href: "/jp/myanmar-missions" },
          { label: "在ミャンマー外国大使館", href: "/jp/foreign-embassies" },
        ],
      },
      { label: "ミャンマーの各省庁", href: "/jp/myanmar-ministries" },
    ],
  },
  {
    label: "ミャンマーを探る",
    submenu: [
      {
        label: "ミャンマー北部",
        submenu: [
          { label: "カチン州", href: "/jp/regions/kachin" },
          { label: "ザガイン地域", href: "/jp/regions/sagaing" },
          { label: "チン州", href: "/jp/regions/chin" },
          { label: "シャン州", href: "/jp/regions/shan" },
        ],
      },
      {
        label: "ミャンマー中央部",
        submenu: [
          { label: "マグウェ地域", href: "/jp/regions/magway" },
          { label: "ネピドー", href: "/jp/regions/naypyitaw" },
          { label: "マンダレー地域", href: "/jp/regions/mandalay" },
          { label: "ラカイン州", href: "/jp/regions/rakhine" },
        ],
      },
      {
        label: "ミャンマー南部",
        submenu: [
          { label: "エーヤワディ地域", href: "/jp/regions/ayeyarwady" },
          { label: "カヤー州", href: "/jp/regions/kayah" },
          { label: "カイン州", href: "/jp/regions/kayin" },
          { label: "バゴー地域", href: "/jp/regions/bago" },
          { label: "ヤンゴン地域", href: "/jp/regions/yangon" },
          { label: "モン州", href: "/jp/regions/mon" },
          { label: "タニンダーリ地域", href: "/jp/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "ハイライト",
    submenu: [
      { label: "お祭り", href: "/jp/festivals" },
      { label: "エコツーリズム", href: "/jp/tourism-categories/ecotourism" },
      { label: "コミュニティベースの観光", href: "/jp/community-based-tourism" },
    ],
  },
  {
    label: "サービス",
    submenu: [
      {
        label: "宿泊施設",
        submenu: [
          { label: "ホテル・リゾート", href: "/jp/hotels-and-resorts" },
        ],
      },
      {
        label: "ツアー",
        submenu: [
          {
            label: "ツアー会社",
            submenu: [
              { label: "インバウンドツアー会社", href: "/jp/inbound-tour-companies" },
              { label: "アウトバウンドツアー会社", href: "/jp/outbound-tour-companies" },
            ],
          },
          {
            label: "ツアーガイド",
            submenu: [
              { label: "国家認定ツアーガイド", href: "/jp/tour-guides/national-tour-guides" },
              { label: "地域認定ツアーガイド", href: "/jp/tour-guides/regional-tour-guides" },
            ],
          },
          {
            label: "交通手段",
            submenu: [
              { label: "クルーズ・その他", href: "/jp/cruises-and-others" },
              { label: "熱気球", href: "/jp/hot-air-balloons" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "ガイド・リソース",
    submenu: [
      { label: "観光関連法規", href: "/jp/tourism-legislation" },
      { label: "観光統計", href: "/jp/tourism-statistics" },
      { label: "観光出版物", href: "/jp/tourism-publication" },
      { label: "ASEAN観光基準", href: "/jp/asean-tourism-standards" },
      // { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "パンフレット・小冊子", href: "/jp/brochures-and-pamphlets" },
      { label: "地図", href: "/jp/maps" }
    ],
  },
  {
    label: "ニュース・お知らせ",
    submenu: [
      // { label: "Weather Forecast", href: "/en/coming-soon" },
      { label: "今後のイベント", href: "/jp/upcoming-events" },
      { label: "ニュース", href: "/jp/news" },
      { label: "お知らせ", href: "/jp/announcements" },
      // { label: "Travel Advisory", href: "/en/coming-soon" },
    ],
  },
  {
    label: "私たちの役割",
    submenu: [
      { label: "責務", href: "/jp/information-pages/duties-and-responsibilites" },
      { label: "目的", href: "/jp/information-pages/objectives" },
      { label: "ホテル観光省の六つの政策", href: "/jp/information-pages/six-policies" },
      // { label: "International Cooperation", href: "/en/coming-soon" },
      // {
      //   label: "Tourism Business",
      //   submenu: [
        //     { label: "Doing Business in Myanmar", href: "/jp/doing-business" },
      //     { label: "Myanmar Investment Law", href: "/jp/investment-law" },
      //     { label: "Tourism Investment Opportunities", href: "/jp/investment-opportunity" },
      //     { label: "Why Invest in Myanmar", href: "/jp/why-invest-in-myanmar" },
      //     { label: "Foreign Investment in Hotels and commercial complexes", href: "/jp/foreign-investment" },
      //   ],
      // },
      // {
      //   label: "Arrivals",
      //   submenu: [
        //     { label: "Tourism Statistics", href: "/jp/coming-soon" },
      //     { label: "Arrivals 2024", href: "/jp/coming-soon" },
      //     { label: "Arrivals 2023", href: "/jp/coming-soon" },
      //     { label: "Arrivals 2022", href: "/jp/coming-soon" },
      //     { label: "Arrivals 2021", href: "/jp/coming-soon" },
      //     { label: "Arrivals 2020", href: "/jp/coming-soon" },
      //     { label: "Arrivals 2019", href: "/jp/coming-soon" },
      //   ],
      // },
      // {
      //   label: "Training",
      //   submenu: [
      //     { label: "Training Courses", href: "/jp/coming-soon" },
      //   ],
      // },

      { label: "お問い合わせ", href: "/jp/contact-us" },
    ],
  },
];

function MobileMenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasSubMenu = Array.isArray(item.submenu) && item.submenu.length > 0;

  //  const toggleSubMenu = (e) => {
  //   if (hasSubMenu) {
  //     e.preventDefault();
  //     setOpen(!open);
  //   }
  // };

  return (
    <li className={`${hasSubMenu ? styles.hasChildren : ""} ${open ? styles.open : ""}`}>
      <div
        className={styles.menuTitle}
        onClick={e => {
          if (hasSubMenu) {
            e.preventDefault();
            setOpen(o => !o);
          }
        }}
      >
        <a
          href={item.href || "#"}
          tabIndex={0}
          onClick={e => {
            if (hasSubMenu) e.preventDefault();
          }}
        >
          {item.label}
          {hasSubMenu && (
            <span className={styles.subMenuIcon}>{open ? "-" : "+"}</span>
          )}
        </a>
      </div>
      {hasSubMenu && (
        <ul className={styles.subMenu} style={{ display: open ? "block" : "none" }}>
          {item.submenu.map((sub, i) => (
            <MobileMenuItem item={sub} key={i} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
    const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  useEffect(() => {
  const handleScroll = () => {
    setIsFloating(window.scrollY > 100);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 

  

  return (
    <>
      <div className={`${styles.mobileHeaderBar} ${isFloating ? styles.floatingNav : ""}`}>
        <div className={styles.logoContainer}>
          {/* 7. Make the logo a dynamic link */}
          <Link href={`/${currentLang}`}>
            <img
              src="/assets/images/logo-with-text-cut.png"
              alt="Mobile Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.rightGroup}>
          
        <LanguageSwitcher 
            size="small" 
            variant="flags" 
            className={styles.mobileLanguageSwitcher}
          />
          <button
            className={`navbar-toggler ml-auto ${styles.toggler}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuClose} onClick={() => setMenuOpen(false)}>&times;</span>
        </div>
        <ul className={styles.mobileMainMenu}>
          {menuData.map((item, idx) => (
            <MobileMenuItem item={item} key={idx} />
          ))}
        </ul>
      </div>
      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />}
    </>
  );
}