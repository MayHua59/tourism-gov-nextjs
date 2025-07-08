"use client";

import React, { useState , useEffect} from "react";
import styles from "./HeaderMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const menuData = [
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
      // {
      //   label: "Traveller Tips",
      //   submenu: [
      //     { label: "Traveller Tips", href: "/coming.html" },
      //     { label: "Required Documents for Applying Tours", href: "/coming.html" },
      //   ],
      // },
      {
        label: "Helpdesk",
        submenu: [
          { label: "Branch Offices", href: "/en/branch-offices" },
          { label: "Information Counters", href: "/en/information-counters" },
          { label: "Tourism Police Offices", href: "/en/tourism-police-offices" },
        ],
      },
      // { label: "Attraction Entry Free", href: "/coming.html" },
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
          { label: "Kachin", href: "/en/coming-soon" },
          { label: "Sagaing", href: "/en/coming-soon" },
          { label: "Chin", href: "/en/coming-soon" },
          { label: "Shan", href: "/en/coming-soon" },
        ],
      },
      {
        label: "Central Myanmar",
        submenu: [
          { label: "Magway", href: "/en/coming-soon" },
          { label: "Nay Pyi Taw", href: "/en/coming-soon" },
          { label: "Mandalay", href: "/en/coming-soon" },
          { label: "Rakhine", href: "/en/coming-soon" },
        ],
      },
      {
        label: "South Myanmar",
        submenu: [
          { label: "Ayeyarwady", href: "/en/coming-soon" },
          { label: "Kayah", href: "/en/coming-soon" },
          { label: "Kayin", href: "/en/coming-soon" },
          { label: "Bago", href: "/en/coming-soon" },
          { label: "Yangon", href: "/en/coming-soon" },
          { label: "Mon", href: "/en/coming-soon" },
          { label: "Tanintharyi", href: "/en/coming-soon" },
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
      { label: "Myamar Be Enchanted", href: "/en/coming-soon" },
      { label: "Brochures & Pamphlets", href: "/en/brochures-and-pamphlets" },
      { label: "Maps", href: "/en/maps" },
    ],
  },
  {
    label: "News & Announcements",
    submenu: [
      { label: "Health And Travel Latest News From Myanmar", href: "/en/coming-soon" },
      { label: "Weather Forecast", href: "/en/coming-soon" },
      { label: "Upcoming Events", href: "/en/coming-soon" },
      { label: "News", href: "/en/coming-soon" },
      { label: "Announcements", href: "/en/announcements" },
      { label: "Travel Advisory", href: "/en/coming-soon" },
    ],
  },
  {
    label: "Our Role",
    submenu: [
      { label: "Duties & Responsibilities", href: "/en/duties.html" },
      { label: "Objectives", href: "/en/objectives" },
      { label: "Six Policies of Ministry of Hotels and Tourism", href: "/en/six-policies" },
      // { label: "International Cooperation", href: "/coming.html" },
      {
        label: "Tourism Business",
        submenu: [
          { label: "Doing Business in Myanmar", href: "/en/doing-business" },
          { label: "Myanmar Investment Law", href: "/en/investment-law" },
          { label: "Tourism Investment Opportunities", href: "/en/tourism-investment-opportunity" },
          { label: "Why Invest in Myanmar", href: "/en/why-invest" },
          { label: "Foreign Investment in Hotels and commercial complexes", href: "/en/foreign-investment" },
        ],
      },
      {
        label: "Statistics",
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
      // { label: "Contact Person", href: "/coming.html" },
      { label: "Contact Us", href: "/en/contact-us" },
    ],
  },
];

function MobileMenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasSubMenu = Array.isArray(item.submenu) && item.submenu.length > 0;

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
  useEffect(() => {
  const handleScroll = () => {
    setIsFloating(window.scrollY > 100);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  function changeLanguage(e) {
    const lang = e.target.value;
    
  }

  return (
    <>
      <div className={`${styles.mobileHeaderBar} ${isFloating ? styles.floatingNav : ""}`}>
        <div className={styles.logoContainer}>
          <img
            src="/assets/images/logo-with-text-cut.png"
            alt="Mobile Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.rightGroup}>
          <select
            className={styles.languageSelector}
            id="language-selector-mobile"
            onChange={changeLanguage}
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="mm">Myanmar</option>
          </select>
          {/* Toggler Button */}
           <button
            className={`navbar-toggler ml-auto ${styles.toggler}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(true)}
          >
            {/* 2. Replace the <span> with the FontAwesomeIcon component */}
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