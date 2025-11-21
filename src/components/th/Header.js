'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import Image from "next/image";

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";


const mainMenu = [
  {
    label: "ข้อมูลสำคัญ", // Vital Info
    submenu: [
      { label: "เกี่ยวกับเมียนมา", href: "/th/information-pages/about-myanmar" }, // About Myanmar
      {
        label: "ข้อกำหนดการขอวีซ่า", // Visa Requirements
        submenu: [
          { label: "วีซ่าอิเล็กทรอนิกส์", href: "/th/e-visa" }, // Electronic Visa
          { label: "การยกเว้นวีซ่า", href: "/th/information-pages/visa-exemption" }, // Visa Exemption
          { label: "วีซ่าเมื่อเดินทางมาถึง", href: "/th/information-pages/visa-on-arrival" }, // Visa on Arrival
        ],
      },
      { label: "แนวทางสำหรับบริษัททัวร์", href: "/th/guidelines-for-tour-companies" }, // Guidelines For Tour Companies
      {
        label: "ศูนย์ช่วยเหลือ", // Helpdesk
        submenu: [
          { label: "สำนักงานสาขา", href: "/th/branch-offices" }, // Branch Offices
          { label: "เคาน์เตอร์ข้อมูล", href: "/th/information-counters" }, // Information Counters
          { label: "สำนักงานตำรวจท่องเที่ยว", href: "/th/tourism-police-offices" }, // Tourism Police Offices
        ],
      },
      {
        label: "สถานทูตและคณะผู้แทน", // Embassies & Missions
        submenu: [
          { label: "คณะผู้แทนเมียนมา", href: "/th/myanmar-missions" }, // Myanmar Missions
          { label: "สถานทูตต่างประเทศในเมียนมา", href: "/th/foreign-embassies" }, // Foreign Embassies in Myanmar
        ],
      },
      { label: "กระทรวงต่างๆ ของเมียนมา", href: "/th/myanmar-ministries" }, // Myanmar Ministries
    ],
  },
  {
    label: "สำรวจเมียนมา", // Explore Myanmar
    submenu: [
      {
        label: "เมียนมาตอนเหนือ", // North Myanmar
        submenu: [
          { label: "คะฉิ่น", href: "/th/regions/kachin" }, // Kachin
          { label: "สะไกง์", href: "/th/regions/sagaing" }, // Sagaing
          { label: "ชิน", href: "/th/regions/chin" }, // Chin
          { label: "ฉาน", href: "/th/regions/shan" }, // Shan
        ],
      },
      {
        label: "เมียนมาตอนกลาง", // Central Myanmar
        submenu: [
          { label: "มาเกว", href: "/th/regions/magway" }, // Magway
          { label: "เนปิดอว์", href: "/th/regions/naypyitaw" }, // Nay Pyi Taw
          { label: "มัณฑะเลย์", href: "/th/regions/mandalay" }, // Mandalay
          { label: "ยะไข่", href: "/th/regions/rakhine" }, // Rakhine
        ],
      },
      {
        label: "เมียนมาตอนใต้", // South Myanmar
        submenu: [
          { label: "อิรวดี", href: "/th/regions/ayeyarwady" }, // Ayeyarwady
          { label: "กายะห์", href: "/th/regions/kayah" }, // Kayah
          { label: "กะเหรี่ยง", href: "/th/regions/kayin" }, // Kayin
          { label: "พะโค", href: "/th/regions/bago" }, // Bago
          { label: "ย่างกุ้ง", href: "/th/regions/yangon" }, // Yangon
          { label: "มอญ", href: "/th/regions/mon" }, // Mon
          { label: "ตะนาวศรี", href: "/th/regions/tanintharyi" }, // Tanintharyi
        ],
      },
    ],
  },
  {
    label: "จุดเด่น", // Highlight
    submenu: [
      { label: "เทศกาล", href: "/th/festivals" }, // Festivals
      { label: "การท่องเที่ยวเชิงนิเวศ", href: "/th/tourism-categories/ecotourism" }, // Ecotourism
      { label: "การท่องเที่ยวโดยชุมชน", href: "/th/community-based-tourism" }, // Community Based Tourism
    ],
  },
  {
    label: "บริการ", // Services
    submenu: [
      {
        label: "ที่พัก", // Accommodation
        submenu: [
          { label: "โรงแรมและรีสอร์ท", href: "/th/hotels-and-resorts" }, // Hotels & Resorts
        ],
      },
      {
        label: "ทัวร์", // Tours
        submenu: [
          {
            label: "บริษัททัวร์", // Tour Companies
            submenu: [
              { label: "บริษัททัวร์ขาเข้า", href: "/th/inbound-tour-companies" }, // Inbound Tour Companies
              { label: "บริษัททัวร์ขาออก", href: "/th/outbound-tour-companies" }, // Outbound Tour Companies
            ],
          },
          {
            label: "มัคคุเทศก์", // Tour Guides
            submenu: [
              { label: "มัคคุเทศก์ระดับประเทศ", href: "/th/tour-guides/national-tour-guides" }, // National Tour Guides
              { label: "มัคคุเทศก์ระดับภูมิภาค", href: "/th/tour-guides/regional-tour-guides" }, // Regional Tour Guides
            ],
          },
          {
            label: "การขนส่ง", // Transportation
            submenu: [
              { label: "เรือสำราญและอื่นๆ", href: "/th/cruises-and-others" }, // Cruises & Others
              { label: "บอลลูนอากาศร้อน", href: "/th/hot-air-balloons" }, // Hot-Air Balloons
            ],
          },
        ],
      },
    ],
  },
  {
    label: "คู่มือและแหล่งข้อมูล", // Guides & Resources
    submenu: [
      { label: "กฎหมายการท่องเที่ยว", href: "/th/tourism-legislation" }, // Tourism Legislation
        { label: "สถิติการท่องเที่ยว", href: "/th/tourism-statistics" }, // Tourism Statistics
      { label: "สิ่งพิมพ์ด้านการท่องเที่ยว", href: "/th/tourism-publication" }, // Tourism Publications
      { label: "มาตรฐานการท่องเที่ยวอาเซียน", href: "/th/asean-tourism-standards" }, // ASEAN Tourism Standards
      // { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "แผ่นพับและจุลสาร", href: "/th/brochures-and-pamphlets" }, // Brochures & Pamphlets
      { label: "แผนที่", href: "/th/maps" } // Maps
    ],
  },
  {
    label: "ข่าวสารและประกาศ", // News & Announcements
    submenu: [
      // { label: "Weather Forecast", href: "/en/coming-soon" },
      { label: "กิจกรรมที่กำลังจะมาถึง", href: "/th/upcoming-events" }, // Upcoming Events
      { label: "ข่าว", href: "/th/news" }, // News
      { label: "ประกาศ", href: "/th/announcements" }, // Announcements
      // { label: "Travel Advisory", href: "/th/coming-soon" },
    ],
  },
  {
    label: "บทบาทของเรา", // Our Role
    submenu: [
      { label: "หน้าที่และความรับผิดชอบ", href: "/th/duties" }, // Duties & Responsibilities
      { label: "วัตถุประสงค์", href: "/th/information-pages/objectives" }, // Objectives
      { label: "นโยบาย 6 ประการของกระทรวงโรงแรมและการท่องเที่ยว", href: "/th/six-policies" }, // Six Policies of Ministry of Hotels and Tourism
      // { label: "International Cooperation", href: "/th/coming-soon" },
      // {
      //   label: "Tourism Business",
      //   submenu: [
      //     { label: "Doing Business in Myanmar", href: "/th/doing-business" },
      //     { label: "Myanmar Investment Law", href: "/th/investment-law" },
      //     { label: "Tourism Investment Opportunities", href: "/th/investment-opportunity" },
      //     { label: "Why Invest in Myanmar", href: "/th/why-invest-in-myanmar" },
      //     { label: "Foreign Investment in Hotels and commercial complexes", href: "/th/foreign-investment" },
      //   ],
      // },
      // {
      //   label: "Arrivals",
      //   submenu: [
        //     { label: "Tourism Statistics", href: "/th/coming-soon" },
      //     { label: "Arrivals 2024", href: "/th/coming-soon" },
      //     { label: "Arrivals 2023", href: "/th/coming-soon" },
      //     { label: "Arrivals 2022", href: "/th/coming-soon" },
      //     { label: "Arrivals 2021", href: "/th/coming-soon" },
      //     { label: "Arrivals 2020", href: "/th/coming-soon" },
      //     { label: "Arrivals 2019", href: "/th/coming-soon" },
      //   ],
      // },
      // {
      //   label: "Training",
      //   submenu: [
      //     { label: "Training Courses", href: "/th/coming-soon" },
      //   ],
      // },

      { label: "ติดต่อเรา", href: "/th/contact-us" }, // Contact Us
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

  const currentLang = pathname.split('/')[1] || 'th';

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
        <a className="site-logo site-title" href="/th">
          <Image
            src="/assets/images/logo-with-text-cut.png"
            alt="กระทรวงโรงแรมและการท่องเที่ยว"
            className={styles.headerLogo}
            width={400}
            height={80}
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

