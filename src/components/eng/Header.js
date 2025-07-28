'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; 

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";


const mainMenu = [
  {
    label: "Vital Info",
    submenu: [
      { label: "About Myanmar", href: "/en/about-myanmar" },
      {
        label: "Visa Requirements",
        submenu: [
          { label: "Electronic Visa", href: "/en/e-visa" },
          { label: "Visa Exemption", href: "/en/visa-exemption" },
          { label: "Visa on Arrival", href: "/en/visa-on-arrival" },
        ],
      },
      { label: "Guidelines For Tour Companies", href: "/en/guidelines-for-tour-companies" },
      {
        label: "Helpdesk",
        submenu: [
          { label: "Branch Offices", href: "/en/branch-offices" },
          { label: "Information Counters", href: "/en/information-counters" },
          { label: "Tourism Police Offices", href: "/en/tourism-police-offices" },
        ],
      },
      {
        label: "Embassies & Missions",
        submenu: [
          { label: "Myanmar Missions", href: "/en/myanmar-missions" },
          { label: "Foreign Embassies in Myanmar", href: "/en/foreign-embassies" },
        ],
      },
      { label: "Myanmar Ministries", href: "/en/myanmar-ministries" },
    ],
  },
  {
    label: "Explorer Myanmar",
    submenu: [
      {
        label: "North Myanmar",
        submenu: [
          { label: "Kachin", href: "/en/regions/kachin" },
          { label: "Sagaing", href: "/en/regions/sagaing" },
          { label: "Chin", href: "/en/regions/chin" },
          { label: "Shan", href: "/en/regions/shan" },
        ],
      },
      {
        label: "Central Myanmar",
        submenu: [
          { label: "Magway", href: "/en/regions/magway" },
          { label: "Nay Pyi Taw", href: "/en/regions/nay-pyi-taw" },
          { label: "Mandalay", href: "/en/regions/mandalay" },
          { label: "Rakhine", href: "/en/regions/rakine" },
        ],
      },
      {
        label: "South Myanmar",
        submenu: [
          { label: "Ayeyarwady", href: "/en/regions/ayeyarwady" },
          { label: "Kayah", href: "/en/regions/kayah" },
          { label: "Kayin", href: "/en/regions/kayin" },
          { label: "Bago", href: "/en/regions/bago" },
          { label: "Yangon", href: "/en/regions/yangon" },
          { label: "Mon", href: "/en/regions/mon" },
          { label: "Tanintharyi", href: "/en/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "Highlight",
    submenu: [
      { label: "Festivals", href: "/en/coming-soon" },
      { label: "Ecotourism", href: "/en/coming-soon" },
      { label: "Community Based Tourism", href: "/en/coming-soon" },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Accommodation",
        submenu: [
          { label: "Hotels & Resorts", href: "/en/coming-soon" },
        ],
      },
      {
        label: "Tours",
        submenu: [
          {
            label: "Tour Companies",
            submenu: [
              { label: "Inbound Tour Companies", href: "/en/coming-soon" },
              { label: "Outbound Tour Companies", href: "/en/coming-soon" },
            ],
          },
          {
            label: "Tour Guides",
            submenu: [
              { label: "National Tour Guides", href: "/en/coming-soon" },
              { label: "Regional Tour Guides", href: "/en/coming-soon" },
            ],
          },
          {
            label: "Transportation",
            submenu: [
              { label: "Cruises & Others", href: "/en/coming-soon" },
              { label: "Hot-Air Balloons", href: "/en/coming-soon" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Guides & Resources",
    submenu: [
      { label: "Tourism Legislation", href: "/en/tourism-legislation" },
      { label: "Tourism Statistics", href: "/en/tourism-statistics" },
      { label: "Tourism Publications", href: "/en/tourism-publication" },
      { label: "ASEAN Tourism Standards", href: "/en/asean-tourism-standards" },
      { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "Brochures & Pamphlets", href: "/en/brochures-and-pamphlets" },
      { label: "Maps", href: "/en/maps" }
    ],
  },
  {
    label: "News & Announcements",
    submenu: [
      { label: "Weather Forecast", href: "/en/coming-soon" },
      { label: "Upcoming Events", href: "/en/upcoming-events" },
      { label: "News", href: "/en/news" },
      { label: "Announcements", href: "/en/announcements" },
      { label: "Travel Advisory", href: "/en/coming-soon" },
    ],
  },
  {
    label: "Our Role",
    submenu: [
      { label: "Duties & Responsibilities", href: "/en/duties" },
      { label: "Objectives", href: "/en/objectives" },
      { label: "Six Policies of Ministry of Hotels and Tourism", href: "/en/six-policies" },
      { label: "International Cooperation", href: "/en/coming-soon" },
      {
        label: "Tourism Business",
        submenu: [
          { label: "Doing Business in Myanmar", href: "/en/doing-business" },
          { label: "Myanmar Investment Law", href: "/en/investment-law" },
          { label: "Tourism Investment Opportunities", href: "/en/investment-opportunity" },
          { label: "Why Invest in Myanmar", href: "/en/why-invest-in-myanmar" },
          { label: "Foreign Investment in Hotels and commercial complexes", href: "/en/foreign-investment" },
        ],
      },
      {
        label: "Arrivals",
        submenu: [
          { label: "Tourism Statistics", href: "/en/coming-soon" },
          { label: "Arrivals 2024", href: "/en/coming-soon" },
          { label: "Arrivals 2023", href: "/en/coming-soon" },
          { label: "Arrivals 2022", href: "/en/coming-soon" },
          { label: "Arrivals 2021", href: "/en/coming-soon" },
          { label: "Arrivals 2020", href: "/en/coming-soon" },
          { label: "Arrivals 2019", href: "/en/coming-soon" },
        ],
      },
      {
        label: "Training",
        submenu: [
          { label: "Training Courses", href: "/en/coming-soon" },
        ],
      },
      
      { label: "Contact Us", href: "/en/contact-us" },
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

   const handleLanguageChange = (e) => {
    const newLang = e.target.value;
     let newPath;
    
    
     if (pathname === '/') {
        newPath = `/${newLang}`;
    } else {
       
        newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    }

    router.push(newPath);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerTop} ${styles.flexRow} ${isSticky ? styles.headerTopHidden : ""}`}>
        <a className="site-logo site-title" href="/en">
          <img
            src="/assets/images/logo-with-text-cut.png"
            alt="Ministry of Hotels and Tourism"
            className={styles.headerLogo}
          />
        </a>
        <div className={styles.headerLangContainer}>
          <select
            className={styles.headerLang}
            id="language-selector"
            value={currentLang}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="mm">Myanmar</option>
          </select>
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