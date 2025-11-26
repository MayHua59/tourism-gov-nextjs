'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; 

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";


const mainMenu = [
  {
    label: "Thông tin quan trọng",
    submenu: [
      { label: "Về Myanmar", href: "/vn/information-pages/about-myanmar" },
      {
        label: "Yêu cầu Visa",
        submenu: [
          { label: "Visa Điện tử", href: "/vn/e-visa" },
          { label: "Miễn visa", href: "/vn/information-pages/visa-exemption" },
          { label: "Visa Trên Đến", href: "/vn/information-pages/visa-on-arrival" },
        ],
      },
      { label: "Hướng dẫn Cho Công ty Du lịch", href: "/vn/guidelines-for-tour-companies" },
      {
        label: "Trợ lý",
        submenu: [
          { label: "Chi nhánh", href: "/vn/branch-offices" },
          { label: "Trợ lý thông tin", href: "/vn/information-counters" },
          { label: "Trợ lý Công an Du lịch", href: "/vn/tourism-police-offices" },
        ],
      },
      {
        label: "Đại sứ và Nhiệm vụ",
        submenu: [
          { label: "Nhiệm vụ Myanmar", href: "/vn/myanmar-missions" },
          { label: "Đại sứ quán nước ngoài ở Myanmar", href: "/vn/foreign-embassies" },
        ],
      },
      { label: "Bộ Ngoại giao Myanmar", href: "/vn/myanmar-ministries" },
    ],
  },
  {
    label: "Khám phá Myanmar",
    submenu: [
      {
        label: "North Myanmar",
        submenu: [
          { label: "Kachin", href: "/vn/regions/kachin" },
          { label: "Sagaing", href: "/vn/regions/sagaing" },
          { label: "Chin", href: "/vn/regions/chin" },
          { label: "Shan", href: "/vn/regions/shan" },
        ],
      },
      {
        label: "Central Myanmar",
        submenu: [
          { label: "Magway", href: "/vn/regions/magway" },
          { label: "Nay Pyi Taw", href: "/vn/regions/naypyitaw" },
          { label: "Mandalay", href: "/vn/regions/mandalay" },
          { label: "Rakhine", href: "/vn/regions/rakhine" },
        ],
      },
      {
        label: "South Myanmar",
        submenu: [
          { label: "Ayeyarwady", href: "/vn/regions/ayeyarwady" },
          { label: "Kayah", href: "/vn/regions/kayah" },
          { label: "Kayin", href: "/vn/regions/kayin" },
          { label: "Bago", href: "/vn/regions/bago" },
          { label: "Yangon", href: "/vn/regions/yangon" },
          { label: "Mon", href: "/vn/regions/mon" },
          { label: "Tanintharyi", href: "/vn/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "Nổi bật",
    submenu: [
      { label: "Lễ hội", href: "/vn/festivals" },
      { label: "Du lịch sinh thái", href: "/vn/tourism-categories/ecotourism" },
      { label: "Du lịch cộng đồng", href: "/vn/community-based-tourism" },
    ],
  },
  {
    label: "Dịch vụ",
    submenu: [
      {
        label: "Chỗ ở",
        submenu: [
          { label: "Khách sạn và Resort", href: "/vn/hotels-and-resorts" },
        ],
      },
      {
        label: "Tour",
        submenu: [
          {
            label: "Công ty Du lịch",
            submenu: [
              { label: "Công ty Du lịch nhập khẩu", href: "/vn/inbound-tour-companies" },
              { label: "Công ty Du lịch xuất khẩu", href: "/vn/outbound-tour-companies" },
            ],
          },
          {
            label: "Hướng dẫn viên Du lịch",
            submenu: [
              { label: "Hướng dẫn viên Du lịch quốc gia", href: "/vn/tour-guides/national-tour-guides" },
              { label: "Hướng dẫn viên Du lịch miền", href: "/vn/tour-guides/regional-tour-guides" },
            ],
          },
          {
            label: "Vận chuyển",
            submenu: [
              { label: "Tàu thuỷ & Khác", href: "/vn/cruises-and-others" },
              { label: "Máy bay nóng bay", href: "/vn/hot-air-balloons" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Hướng dẫn và Tài nguyên",
    submenu: [
      { label: "Luật Du lịch", href: "/vn/tourism-legislation" },
      { label: "Thống kê Du lịch", href: "/vn/tourism-statistics" },
      { label: "Ấn phẩm Du lịch", href: "/vn/tourism-publication" },
      { label: "Tiêu chuẩn Du lịch ASEAN", href: "/vn/asean-tourism-standards" },
      // { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "Tờ rơi và Sách nhỏ", href: "/vn/brochures-and-pamphlets" },
      { label: "Bản đồ", href: "/vn/maps" }
    ],
  },
  {
    label: "Tin tức và Thông báo",
    submenu: [
      // { label: "Weather Forecast", href: "/en/coming-soon" },
      { label: "Sự kiện sắp tới", href: "/vn/upcoming-events" },
      { label: "Tin tức", href: "/vn/news" },
      { label: "Thông báo", href: "/vn/announcements" },
      // { label: "Travel Advisory", href: "/en/coming-soon" },
    ],
  },
  {
    label: "Vai trò của chúng tôi",
    submenu: [
      { label: "Nhiệm vụ và Trách nhiệm", href: "/vn/duties" },
      { label: "Mục tiêu", href: "/vn/information-pages/objectives" },
      { label: "Sáu chính sách của Bộ Khách sạn và Du lịch", href: "/vn/six-policies" },
      // { label: "International Cooperation", href: "/en/coming-soon" },
      // {
      //   label: "Tourism Business",
      //   submenu: [
      //     { label: "Doing Business in Myanmar", href: "/en/doing-business" },
      //     { label: "Myanmar Investment Law", href: "/en/investment-law" },
      //     { label: "Tourism Investment Opportunities", href: "/en/investment-opportunity" },
      //     { label: "Why Invest in Myanmar", href: "/en/why-invest-in-myanmar" },
      //     { label: "Foreign Investment in Hotels and commercial complexes", href: "/en/foreign-investment" },
      //   ],
      // },
      // {
      //   label: "Arrivals",
      //   submenu: [
      //     { label: "Tourism Statistics", href: "/en/coming-soon" },
      //     { label: "Arrivals 2024", href: "/en/coming-soon" },
      //     { label: "Arrivals 2023", href: "/en/coming-soon" },
      //     { label: "Arrivals 2022", href: "/en/coming-soon" },
      //     { label: "Arrivals 2021", href: "/en/coming-soon" },
      //     { label: "Arrivals 2020", href: "/en/coming-soon" },
      //     { label: "Arrivals 2019", href: "/en/coming-soon" },
      //   ],
      // },
      // {
      //   label: "Training",
      //   submenu: [
      //     { label: "Training Courses", href: "/en/coming-soon" },
      //   ],
      // },
      
      { label: "Liên hệ", href: "/vn/contact-us" },
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
        <a className="site-logo site-title" href="/vn">
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
        className={`${styles.headerNav} ${styles.headerBottom} border-bottom ${
          isSticky ? styles.floatingNav : ""
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