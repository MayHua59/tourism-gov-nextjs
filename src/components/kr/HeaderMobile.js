"use client";

import React, { useState , useEffect} from "react";
import Link from "next/link"; 
import Image from "next/image";
import styles from "./HeaderMobile.module.css";
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";

const menuData = [
  {
    label: "주요 정보",
    submenu: [
      { label: "미얀마 소개", href: "/kr/information-pages/about-myanmar" },
      {
        label: "비자 요건",
        submenu: [
            { label: "전자 비자", href: "/kr/e-visa" },
          { label: "비자 면제", href: "/kr/information-pages/visa-exemption" },
          { label: "도착 비자", href: "/kr/information-pages/visa-on-arrival" },
        ],
      },
      { label: "관광 업체 가이드라인", href: "/kr/guidelines-for-tour-companies" },
      {
        label: "고객 센터",
        submenu: [
          { label: "관광부 지부", href: "/kr/branch-offices" },
          { label: "관광 안내소", href: "/kr/information-counters" },
          { label: "관광 경찰 사무소", href: "/kr/tourism-police-offices" },
        ],
      },
      {
        label: "대사관 & 미쓰",
        submenu: [
          { label: "미얀마 미쓰", href: "/kr/myanmar-missions" },
          { label: "미얀마 외교관", href: "/kr/foreign-embassies" },
        ],
      },
      { label: "미얀마 부처", href: "/kr/myanmar-ministries" },
    ],
  },
  {
    label: "미얀마 탐험",
    submenu: [
      {
        label: "북미얀마",
        submenu: [
            { label: "카치인", href: "/kr/regions/kachin" },
          { label: "사가인", href: "/kr/regions/sagaing" },
          { label: "치인", href: "/kr/regions/chin" },
          { label: "샨", href: "/kr/regions/shan" },
        ],
      },
      {
        label: "중앙 미얀마",
        submenu: [
          { label: "마그웨이", href: "/kr/regions/magway" },
          { label: "네피도", href: "/kr/regions/naypyitaw" },
          { label: "만다레이", href: "/kr/regions/mandalay" },
          { label: "라크인", href: "/kr/regions/rakhine" },
        ],
      },
      {
        label: "남미얀마",
        submenu: [
            { label: "에야 와디", href: "/kr/regions/ayeyarwady" },
          { label: "카야", href: "/kr/regions/kayah" },
          { label: "카이인", href: "/kr/regions/kayin" },
          { label: "바고", href: "/kr/regions/bago" },
          { label: "양곤", href: "/kr/regions/yangon" },
          { label: "몬", href: "/kr/regions/mon" },
          { label: "따닌따이", href: "/kr/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "하이라이트",
    submenu: [
      { label: "페스티벌", href: "/kr/festivals" },
      { label: "에코관광", href: "/kr/tourism-categories/ecotourism" },
      { label: "커뮤니티 기반 관광", href: "/kr/community-based-tourism" },
    ],
  },
  {
    label: "서비스",
    submenu: [
      {
        label: "숙박",
        submenu: [
          { label: "호텔 & 리조트", href: "/kr/hotels-and-resorts" },
        ],
      },
      {
        label: "관광",
        submenu: [
          {
            label: "관광 업체",
            submenu: [
              { label: "인바운드 관광 업체", href: "/kr/inbound-tour-companies" },
              { label: "아웃바운드 관광 업체", href: "/kr/outbound-tour-companies" },
            ],
          },
          {
            label: "관광 가이드",
            submenu: [
              { label: "국가 관광 가이드", href: "/kr/tour-guides/national-tour-guides" },
              { label: "지역 관광 가이드", href: "/kr/tour-guides/regional-tour-guides" },
            ],
          },
          {
              label: "교통",
            submenu: [
              { label: "크루즈 & 기타", href: "/kr/cruises-and-others" },
              { label: "핫 에어 볼론", href: "/kr/hot-air-balloons" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "가이드 & 리소스",
    submenu: [
      { label: "관광 법률", href: "/kr/tourism-legislation" },
      { label: "관광 통계", href: "/kr/tourism-statistics" },
      { label: "관광 출판물", href: "/kr/tourism-publication" },
      { label: "ASEAN 관광 표준", href: "/kr/asean-tourism-standards" },
      // { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "브로셔 & 패션", href: "/kr/brochures-and-pamphlets" },
      { label: "지도", href: "/kr/maps" }
    ],
  },
  {
    label: "뉴스 & 공지사항",
    submenu: [
      // { label: "Weather Forecast", href: "/en/coming-soon" },
      { label: "다가오는 이벤트", href: "/kr/upcoming-events" },
      { label: "뉴스", href: "/kr/news" },
      { label: "공지사항", href: "/kr/announcements" },
      // { label: "Travel Advisory", href: "/kr/coming-soon" },
    ],
  },
  {
    label: "우리의 역할",
    submenu: [
      { label: "업무 & 책임", href: "/kr/duties" },
      { label: "목표", href: "/kr/information-pages/objectives" },
      { label: "미얀마 호텔 & 관광부 6가지 정책", href: "/kr/six-policies" },
      // { label: "International Cooperation", href: "/en/coming-soon" },
      // {
      //   label: "Tourism Business",
      //   submenu: [
      //     { label: "Doing Business in Myanmar", href: "/kr/doing-business" },
      //     { label: "Myanmar Investment Law", href: "/kr/investment-law" },
      //     { label: "Tourism Investment Opportunities", href: "/kr/investment-opportunity" },
      //     { label: "Why Invest in Myanmar", href: "/kr/why-invest-in-myanmar" },
      //     { label: "Foreign Investment in Hotels and commercial complexes", href: "/kr/foreign-investment" },
      //   ],
      // },
      // {
        //   label: "도착",
      //   submenu: [
      //     { label: "Tourism Statistics", href: "/kr/coming-soon" },
      //     { label: "Arrivals 2024", href: "/kr/coming-soon" },
      //     { label: "Arrivals 2023", href: "/kr/coming-soon" },
      //     { label: "Arrivals 2022", href: "/kr/coming-soon" },
      //     { label: "Arrivals 2021", href: "/kr/coming-soon" },
      //     { label: "Arrivals 2020", href: "/kr/coming-soon" },
      //     { label: "Arrivals 2019", href: "/kr/coming-soon" },
      //   ],
      // },
      // {
      //   label: "Training",
      //   submenu: [
      //     { label: "Training Courses", href: "/kr/coming-soon" },
      //   ],
      // },
      
      { label: "연락처", href: "/kr/contact-us" },
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
            <Image
              src="/assets/images/logo-with-text-cut.png"
              alt="Mobile Logo"
              className={styles.logo}
              width={230}
              height={80}
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

