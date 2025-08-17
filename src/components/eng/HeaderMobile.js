"use client";

import React, { useState , useEffect} from "react";
import Link from "next/link"; 
import styles from "./HeaderMobile.module.css";
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const menuData = [
  {
    label: "Vital Info",
    submenu: [
      { label: "About Myanmar", href: "/en/information-pages/about-myanmar" },
      {
        label: "Visa Requirements",
        submenu: [
          { label: "Electronic Visa", href: "/en/information-pages/electronic-visa" },
          { label: "Visa Exemption", href: "/en/information-pages/visa-exemption" },
          { label: "Visa on Arrival", href: "/en/information-pages/visa-on-arrival" },
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
          { label: "Branch Offices", href: "/en/information-pages/branch-offices" },
          { label: "Information Counters", href: "/en/information-pages/information-counters" },
          { label: "Tourism Police Offices", href: "/en/information-pages/tourism-police-offices" },
        ],
      },
      // { label: "Attraction Entry Free", href: "/coming.html" },
      {
        label: "Embassies & Missions",
        submenu: [
          { label: "Myanmar Missions", href: "/en/information-pages/myanmar-missions" },
          { label: "Foreign Embassies in Myanmar", href: "/en/foreign-embassies" },
        ],
      },
      { label: "Myanmar Ministries", href: "/en/information-pages/myanmar-ministries" },
    ],
  },
  {
    label: "Explore Myanmar",
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
          { label: "Nay Pyi Taw", href: "/en/regions/naypyitaw" },
          { label: "Mandalay", href: "/en/regions/mandalay" },
          { label: "Rakhine", href: "/en/regions/rakhine" },
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
          { label: "Hotels & Resorts", href: "/en/hotels-and-resorts" },
        ],
      },
      {
        label: "Tours",
        submenu: [
          {
            label: "Tour Companies",
            submenu: [
              { label: "Inbound Tour Companies", href: "/en/inbound-tour-companies" },
              { label: "Outbound Tour Companies", href: "/en/outbound-tour-companies" },
            ],
          },
          {
            label: "Tour Guides",
            submenu: [
              { label: "National Tour Guides", href: "/en/tour-guides/national-tour-guides" },
              { label: "Regional Tour Guides", href: "/en/tour-guides/regional-tour-guides" },
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
      { label: "Duties & Responsibilities", href: "/en/information-pages/duties-and-responsibilities" },
      { label: "Objectives", href: "/en/information-pages/objectives" },
      { label: "Six Policies of Ministry of Hotels and Tourism", href: "/en/information-pages/six-policies-of-ministry-of-hotels-and-tourism" },
      { label: "International Cooperation", href: "/en/information-pages/international-cooperation" },
      {
        label: "Tourism Business",
        submenu: [
          { label: "Doing Business in Myanmar", href: "/en/information-pages/doing-business-in-myanmar" },
          { label: "Myanmar Investment Law", href: "/en/information-pages/myanmar-investment-law" },
          { label: "Tourism Investment Opportunities", href: "/en/information-pages/tourism-investment-opportunities" },
          { label: "Why Invest in Myanmar", href: "/en/information-pages/why-invest-in-myanmar" },
          { label: "Foreign Investment in Hotels and commercial complexes", href: "/en/information-pages/foreign-investment-in-hotels-and-commercial-complexes" },
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
      { label: "Contact Us", href: "/en/information-pages/contact-us" },
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

 const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  function changeLanguage(e) {
    const lang = e.target.value;
    
  }

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
          {/* 8. Update the select element to be a controlled component */}
          <select
            className={styles.languageSelector}
            id="language-selector-mobile"
            value={currentLang}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="mm">Myanmar</option>
          </select>
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