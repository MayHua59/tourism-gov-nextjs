'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";


const mainMenu = [
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


function renderMenu(menu, styles, parentKey = "") {
  const handleLinkClick = () => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };
  return (
    <ul className={parentKey === "" ? styles.headerMenu : styles.dropdown}>
      {menu.map((item, idx) => {
        const key = parentKey + idx;
        const hasDropdown = !!item.submenu;
        return (
          <li
            key={key}
            className={hasDropdown ? `${styles.hasDropdown} ${styles.menuItem}` : styles.menuItem}
          >
            {hasDropdown ? (
              <>
                <button
                  className={styles.dropdownToggle}
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabIndex={0}
                  type="button"
                >
                  {item.label}
                  <span className={styles.dropdownArrow}></span>
                </button>
                {renderMenu(item.submenu, styles, key)}
              </>
            ) : (
              // 3. Use the Link component for client-side navigation
              <Link href={item.href || "#"} onClick={handleLinkClick}>{item.label}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {

  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.split('/')[1] || 'en';

  useEffect(() => {
    const handleScroll = () => {

      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header className={styles.header}>
      <div className={`${styles.headerTop} ${styles.flexRow} ${isSticky ? styles.headerTopHidden : ""}`}>
        <a className="site-logo site-title" href="/jp">
          <img
            src="/assets/images/logo-with-text-cut.png"
            alt="Ministry of Hotels and Tourism"
            className={styles.headerLogo}
          />
        </a>
        <div className={styles.headerLangContainer}>
          <LanguageSwitcher
            size="medium"
            variant="flags"
            className={styles.headerLanguageSwitcher}
          />
        </div>
      </div>
      <nav
        className={`${styles.headerNav} ${styles.headerBottom} border-bottom ${isSticky ? styles.floatingNav : ""
          }`}
      >
        <div className={styles.flexRow}>
          <div className={styles.headerMenuContainer}>
            {renderMenu(mainMenu, styles)}
          </div>
        </div>
      </nav>
    </header>
  );
}