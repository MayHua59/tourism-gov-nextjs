'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; 
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
          { label: "Kachin", href: "/en/coming" },
          { label: "Sagaing", href: "/en/coming" },
          { label: "Chin", href: "/en/coming" },
          { label: "Shan", href: "/en/coming" },
        ],
      },
      {
        label: "Central Myanmar",
        submenu: [
          { label: "Magway", href: "/en/coming" },
          { label: "Nay Pyi Taw", href: "/en/coming" },
          { label: "Mandalay", href: "/en/coming" },
          { label: "Rakhine", href: "/en/coming" },
        ],
      },
      {
        label: "South Myanmar",
        submenu: [
          { label: "Ayeyarwady", href: "/en/coming" },
          { label: "Kayah", href: "/en/coming" },
          { label: "Kayin", href: "/en/coming" },
          { label: "Bago", href: "/en/coming" },
          { label: "Yangon", href: "/en/coming" },
          { label: "Mon", href: "/en/coming" },
          { label: "Tanintharyi", href: "/en/coming" },
        ],
      },
    ],
  },
  {
    label: "Highlight",
    submenu: [
      { label: "Festivals", href: "/en/coming" },
      { label: "Ecotourism", href: "/en/coming" },
      { label: "Community Based Tourism", href: "/en/coming" },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Accommodation",
        submenu: [
          { label: "Hotels & Resorts", href: "/en/coming" },
        ],
      },
      {
        label: "Tours",
        submenu: [
          {
            label: "Tour Companies",
            submenu: [
              { label: "Inbound Tour Companies", href: "/en/coming" },
              { label: "Outbound Tour Companies", href: "/en/coming" },
            ],
          },
          {
            label: "Tour Guides",
            submenu: [
              { label: "National Tour Guides", href: "/en/coming" },
              { label: "Regional Tour Guides", href: "/en/coming" },
            ],
          },
          {
            label: "Transportation",
            submenu: [
              { label: "Cruises & Others", href: "/en/coming" },
              { label: "Hot-Air Balloons", href: "/en/coming" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Guides & Resources",
    submenu: [
      { label: "Tourism Legislation", href: "/en/coming" },
      { label: "Tourism Statistics", href: "/en/coming" },
      { label: "Tourism Publications", href: "/en/tourism-publication" },
      { label: "ASEAN Tourism Standards", href: "/en/coming" },
      { label: "Myanmar Be Enchanted", href: "/en/coming" },
      { label: "Brochures & Pamphlets", href: "/en/coming" },
    ],
  },
  {
    label: "News & Announcements",
    submenu: [
      { label: "Weather Forecast", href: "/en/coming" },
      { label: "Upcoming Events", href: "/en/coming" },
      { label: "News", href: "/en/news" },
      { label: "Announcements", href: "/en/announcements" },
      { label: "Travel Advisory", href: "/en/coming" },
    ],
  },
  {
    label: "Our Role",
    submenu: [
      { label: "Duties & Responsibilities", href: "/en/duties" },
      { label: "Objectives", href: "/en/objectives" },
      { label: "Six Policies of Ministry of Hotels and Tourism", href: "/en/six-policies" },
      { label: "International Cooperation", href: "/en/coming" },
      {
        label: "Tourism Business",
        submenu: [
          { label: "Doing Business in Myanmar", href: "/en/coming" },
          { label: "Myanmar Investment Law", href: "/en/investment-law" },
          { label: "Tourism Investment Opportunities", href: "/en/coming" },
          { label: "Why Invest in Myanmar", href: "/en/coming" },
          { label: "Foreign Investment in Hotels and commercial complexes", href: "/en/foreign-investment-in-hotels" },
        ],
      },
      {
        label: "Arrivals",
        submenu: [
          { label: "Tourism Statistics", href: "/en/coming" },
          { label: "Arrivals 2024", href: "/en/coming" },
          { label: "Arrivals 2023", href: "/en/coming" },
          { label: "Arrivals 2022", href: "/en/coming" },
          { label: "Arrivals 2021", href: "/en/coming" },
          { label: "Arrivals 2020", href: "/en/coming" },
          { label: "Arrivals 2019", href: "/en/coming" },
        ],
      },
      {
        label: "Training",
        submenu: [
          { label: "Training Courses", href: "/en/coming" },
        ],
      },
      
      { label: "Contact Us", href: "/en/contact-us" },
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
              // 3. Use the Link component for client-side navigation
              <Link href={item.href || "#"}>{item.label}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
  // ... rest of your component logic remains the same
// ...existing code...
  const [isSticky, setIsSticky] = useState(false);

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