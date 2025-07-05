'use client';

import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

// Example menu. You can expand as needed.
const mainMenu = [
  {
    label: "Vital Info",
    submenu: [
      { label: "About Myanmar", href: "/about-myanmar" },
      {
        label: "Visa Requirements",
        submenu: [
          { label: "Electronic Visa", href: "/coming" },
          { label: "Visa Exemption", href: "/visa-exemption" },
          { label: "Visa on Arrival", href: "/visa-on-arrival" },
        ],
      },
      { label: "Guidelines For Tour Companies", href: "/guidelines-for-tour-companies" },
      {
        label: "Helpdesk",
        submenu: [
          { label: "Branch Offices", href: "/branch-offices" },
          { label: "Information Counters", href: "/information-counters" },
          { label: "Tourism Police Offices", href: "/tourism-police-offices" },
        ],
      },
      {
        label: "Embassies & Missions",
        submenu: [
          { label: "Myanmar Missions", href: "/myanmar-missions" },
          { label: "Foreign Embassies in Myanmar", href: "/coming" },
        ],
      },
      { label: "Myanmar Ministries", href: "/myanmar-ministries" },
    ],
  },
  {
    label: "Explorer Myanmar",
    submenu: [
      {
        label: "North Myanmar",
        submenu: [
          { label: "Kachin", href: "/coming" },
          { label: "Sagaing", href: "/coming" },
          { label: "Chin", href: "/coming" },
          { label: "Shan", href: "/coming" },
        ],
      },
      {
        label: "Central Myanmar",
        submenu: [
          { label: "Magway", href: "/coming" },
          { label: "Nay Pyi Taw", href: "/coming" },
          { label: "Mandalay", href: "/coming" },
          { label: "Rakhine", href: "/coming" },
        ],
      },
      {
        label: "South Myanmar",
        submenu: [
          { label: "Ayeyarwady", href: "/coming" },
          { label: "Kayah", href: "/coming" },
          { label: "Kayin", href: "/coming" },
          { label: "Bago", href: "/coming" },
          { label: "Yangon", href: "/coming" },
          { label: "Mon", href: "/coming" },
          { label: "Tanintharyi", href: "/coming" },
        ],
      },
    ],
  },
  {
    label: "Highlight",
    submenu: [
      { label: "Festivals", href: "/coming" },
      { label: "Ecotourism", href: "/coming" },
      { label: "Community Based Tourism", href: "/coming" },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Accommodation",
        submenu: [
          { label: "Hotels & Resorts", href: "/coming" },
        ],
      },
      {
        label: "Tours",
        submenu: [
          {
            label: "Tour Companies",
            submenu: [
              { label: "Inbound Tour Companies", href: "/coming" },
              { label: "Outbound Tour Companies", href: "/coming" },
            ],
          },
          {
            label: "Tour Guides",
            submenu: [
              { label: "National Tour Guides", href: "/coming" },
              { label: "Regional Tour Guides", href: "/coming" },
            ],
          },
          {
            label: "Transportation",
            submenu: [
              { label: "Cruises & Others", href: "/coming" },
              { label: "Hot-Air Balloons", href: "/coming" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Guides & Resources",
    submenu: [
      { label: "Tourism Legislation", href: "/coming" },
      { label: "Tourism Statistics", href: "/coming" },
      { label: "Tourism Publications", href: "/tourism-publication" },
      { label: "ASEAN Tourism Standards", href: "/coming" },
      { label: "Myanmar Be Enchanted", href: "/coming" },
      { label: "Brochures & Pamphlets", href: "/coming" },
    ],
  },
  {
    label: "News & Announcements",
    submenu: [
      { label: "Weather Forecast", href: "/coming" },
      { label: "Upcoming Events", href: "/coming" },
      { label: "News", href: "/news" },
      { label: "Announcements", href: "/announcements" },
      { label: "Travel Advisory", href: "/coming" },
    ],
  },
  {
    label: "Our Role",
    submenu: [
      { label: "Duties & Responsibilities", href: "/duties" },
      { label: "Objectives", href: "/objectives" },
      { label: "Six Policies of Ministry of Hotels and Tourism", href: "/six-policies" },
      { label: "International Cooperation", href: "/coming" },
      {
        label: "Tourism Business",
        submenu: [
          { label: "Doing Business in Myanmar", href: "/coming" },
          { label: "Myanmar Investment Law", href: "/investment-law" },
          { label: "Tourism Investment Opportunities", href: "/coming" },
          { label: "Why Invest in Myanmar", href: "/coming" },
          { label: "Foreign Investment in Hotels and commercial complexes", href: "/foreign-investment-in-hotels" },
        ],
      },
      {
        label: "Arrivals",
        submenu: [
          { label: "Tourism Statistics", href: "/coming" },
          { label: "Arrivals 2024", href: "/coming" },
          { label: "Arrivals 2023", href: "/coming" },
          { label: "Arrivals 2022", href: "/coming" },
          { label: "Arrivals 2021", href: "/coming" },
          { label: "Arrivals 2020", href: "/coming" },
          { label: "Arrivals 2019", href: "/coming" },
        ],
      },
      {
        label: "Training",
        submenu: [
          { label: "Training Courses", href: "/coming" },
        ],
      },
      
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];


function renderMenu(menu, styles, parentKey = "") {
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
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showHeaderTop, setShowHeaderTop] = useState(true);
  const [showHeaderBottom, setShowHeaderBottom] = useState(true);
  const [animateBottom, setAnimateBottom] = useState(false);
  const scrollTimeout = useRef(null);
const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [isSticky, setIsSticky] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // Determine if page is scrolled at all (for box-shadow)
  //     if (currentScrollY > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }

  //     // Determine visibility based on scroll direction
  //     if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
  //       // Scrolling down
  //       setIsNavVisible(false);
  //     } else {
  //       // Scrolling up or at the top
  //       setIsNavVisible(true);
  //     }

  //     // Update last scroll position
  //     lastScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // Remove animation class after animation ends for re-triggering
  useEffect(() => {
    if (animateBottom) {
      const timer = setTimeout(() => setAnimateBottom(false), 450);
      return () => clearTimeout(timer);
    }
  }, [animateBottom]);

   useEffect(() => {
    const handleScroll = () => {
      // Set the nav to be sticky when scroll position is greater than 100px
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
        <a className="site-logo site-title" href="/">
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
            defaultValue="en"
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