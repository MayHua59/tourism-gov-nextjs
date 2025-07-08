"use client";

import React, { useState , useEffect} from "react";
import styles from "./HeaderMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const menuData = [
  {
    label: "Vital Info",
    submenu: [
      { label: "About Myanmar", href: "/about-myanmar" },
      {
        label: "Visa Requirements",
        submenu: [
          { label: "Electronic Visa", href: "/e-visa" },
          { label: "Visa Exemption", href: "/visa-exemption.html" },
          { label: "Visa on Arrival", href: "/visa-on-arrival.html" },
        ],
      },
      { label: "Guidelines For Tour Companies", href: "/guidelines-for-tour-companies.html" },
      {
        label: "Traveller Tips",
        submenu: [
          { label: "Traveller Tips", href: "/coming.html" },
          { label: "Required Documents for Applying Tours", href: "/coming.html" },
        ],
      },
      {
        label: "Helpdesk",
        submenu: [
          { label: "Branch Offices", href: "/branch-offices.html" },
          { label: "Information Counters", href: "/information-counters.html" },
          { label: "Tourism Police Offices", href: "/tourism-police-offices.html" },
        ],
      },
      { label: "Attraction Entry Free", href: "/coming.html" },
      {
        label: "Embassies & Missions",
        submenu: [
          { label: "Myanmar Missions", href: "/myanmar-missions.html" },
          { label: "Foreign Embassies in Myanmar", href: "/foreign-embassies.html" },
        ],
      },
      { label: "Myanmar Ministries", href: "/myanmar-ministries.html" },
    ],
  },
  {
    label: "Explorer Myanmar",
    submenu: [
      {
        label: "North Myanmar",
        submenu: [
          { label: "Kachin", href: "/coming.html" },
          { label: "Sagaing", href: "/coming.html" },
          { label: "Chin", href: "/coming.html" },
          { label: "Shan", href: "/coming.html" },
        ],
      },
      {
        label: "Central Myanmar",
        submenu: [
          { label: "Magway", href: "/coming.html" },
          { label: "Nay Pyi Taw", href: "/coming.html" },
          { label: "Mandalay", href: "/coming.html" },
          { label: "Rakhine", href: "/coming.html" },
        ],
      },
      {
        label: "South Myanmar",
        submenu: [
          { label: "Ayeyarwady", href: "/coming.html" },
          { label: "Kayah", href: "/coming.html" },
          { label: "Kayin", href: "/coming.html" },
          { label: "Bago", href: "/coming.html" },
          { label: "Yangon", href: "/coming.html" },
          { label: "Mon", href: "/coming.html" },
          { label: "Tanintharyi", href: "/coming.html" },
        ],
      },
    ],
  },
  {
    label: "Highlight",
    submenu: [
      { label: "Festivals", href: "/coming.html" },
      { label: "Ecotourism", href: "/coming.html" },
      { label: "Community Based Tourism", href: "/coming.html" },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Accommodation",
        submenu: [
          { label: "Hotels & Resorts", href: "/coming.html" },
        ],
      },
      {
        label: "Tours",
        submenu: [
          {
            label: "Tour Companies",
            submenu: [
              { label: "Inbound Tour Companies", href: "/coming.html" },
              { label: "Outbound Tour Companies", href: "/coming.html" },
            ],
          },
          {
            label: "Tour Guides",
            submenu: [
              { label: "National Tour Guides", href: "/national-tour-guides.html" },
              { label: "Regional Tour Guides", href: "/regional-tour-guides.html" },
            ],
          },
          {
            label: "Transportation",
            submenu: [
              { label: "Cruises & Others", href: "/coming.html" },
              { label: "Hot-Air Balloons", href: "/coming.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Guides & Resources",
    submenu: [
      { label: "Tourism Legislation", href: "/tourism-legislation.html" },
      { label: "Tourism Statistics", href: "/tourism-statistics.html" },
      { label: "Tourism Publications", href: "/tourism-publication.html" },
      { label: "ASEAN Tourism Standards", href: "/ASEAN-tourism-standards.html" },
      { label: "Myamar Be Enchanted", href: "/coming.html" },
      { label: "Brochures & Pamphlets", href: "/brochures-and-pamphlets.html" },
      { label: "Maps", href: "/maps.html" },
    ],
  },
  {
    label: "News & Announcements",
    submenu: [
      { label: "Health And Travel Latest News From Myanmar", href: "/coming.html" },
      { label: "Weather Forecast", href: "/coming.html" },
      { label: "Upcoming Events", href: "/coming.html" },
      { label: "News", href: "/news.html" },
      { label: "Announcements", href: "/announcements.html" },
      { label: "Travel Advisory", href: "/coming.html" },
    ],
  },
  {
    label: "Our Role",
    submenu: [
      { label: "Duties & Responsibilities", href: "/duties.html" },
      { label: "Objectives", href: "/objectives.html" },
      { label: "Six Policies of Ministry of Hotels and Tourism", href: "/six-policies.html" },
      // { label: "International Cooperation", href: "/coming.html" },
      {
        label: "Tourism Business",
        submenu: [
          { label: "Doing Business in Myanmar", href: "/doing-business.html" },
          { label: "Myanmar Investment Law", href: "/investment-law.html" },
          { label: "Tourism Investment Opportunities", href: "/tourism-investment-opportunity.html" },
          { label: "Why Invest in Myanmar", href: "/why-invest.html" },
          { label: "Foreign Investment in Hotels and commercial complexes", href: "/foreign-investment-in-hotels.html" },
        ],
      },
      {
        label: "Statistics",
        submenu: [
          { label: "Tourism Statistics", href: "/coming.html" },
          { label: "Arrivals 2024", href: "/coming.html" },
          { label: "Arrivals 2023", href: "/coming.html" },
          { label: "Arrivals 2022", href: "/coming.html" },
          { label: "Arrivals 2021", href: "/coming.html" },
          { label: "Arrivals 2020", href: "/coming.html" },
          { label: "Arrivals 2019", href: "/coming.html" },
        ],
      },
      {
        label: "Training",
        submenu: [
          { label: "Training Courses", href: "/coming.html" },
        ],
      },
      // { label: "Contact Person", href: "/coming.html" },
      { label: "Contact Us", href: "/contact-us.html" },
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