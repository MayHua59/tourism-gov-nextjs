"use client";

import React, { useState , useEffect} from "react";
import Link from "next/link"; 
import styles from "./HeaderMobile.module.css";
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";

const menuData = [
  {
    label: "Wichtige Informationen", // Vital Info
    submenu: [
      { label: "Über Myanmar", href: "/de/information-pages/about-myanmar" }, // About Myanmar
      {
        label: "Visabestimmungen", // Visa Requirements
        submenu: [
          { label: "Elektronisches Visum", href: "/de/e-visa" }, // Electronic Visa
          { label: "Visumbefreiung", href: "/de/information-pages/visa-exemption" }, // Visa Exemption
          { label: "Visum bei Ankunft", href: "/de/information-pages/visa-on-arrival" }, // Visa on Arrival
        ],
      },
      { label: "Richtlinien für Reiseunternehmen", href: "/de/guidelines-for-tour-companies" }, // Guidelines For Tour Companies
      {
        label: "Helpdesk", // Helpdesk
        submenu: [
          { label: "Zweigstellen", href: "/de/branch-offices" }, // Branch Offices
          { label: "Informationsschalter", href: "/de/information-counters" }, // Information Counters
          { label: "Büros der Tourismuspolizei", href: "/de/tourism-police-offices" }, // Tourism Police Offices
        ],
      },
      {
        label: "Botschaften & Missionen", // Embassies & Missions
        submenu: [
          { label: "Vertretungen Myanmars", href: "/de/myanmar-missions" }, // Myanmar Missions
          { label: "Ausländische Botschaften in Myanmar", href: "/de/foreign-embassies" }, // Foreign Embassies in Myanmar
        ],
      },
      { label: "Ministerien Myanmars", href: "/de/myanmar-ministries" }, // Myanmar Ministries
    ],
  },
  {
    label: "Myanmar Entdecken", // Explore Myanmar
    submenu: [
      {
        label: "Nord-Myanmar", // North Myanmar
        submenu: [
            { label: "Kachin", href: "/de/regions/kachin" },
          { label: "Sagaing", href: "/de/regions/sagaing" },
          { label: "Chin", href: "/de/regions/chin" },
          { label: "Shan", href: "/de/regions/shan" },
        ],
      },
      {
        label: "Zentral-Myanmar", // Central Myanmar
        submenu: [
          { label: "Magway", href: "/de/regions/magway" },
          { label: "Nay Pyi Taw", href: "/de/regions/naypyitaw" },
          { label: "Mandalay", href: "/de/regions/mandalay" },
          { label: "Rakhine", href: "/de/regions/rakhine" },
        ],
      },
      {
        label: "Süd-Myanmar", // South Myanmar
        submenu: [
          { label: "Ayeyarwady", href: "/de/regions/ayeyarwady" },
          { label: "Kayah", href: "/de/regions/kayah" },
          { label: "Kayin", href: "/de/regions/kayin" },
          { label: "Bago", href: "/de/regions/bago" },
          { label: "Yangon", href: "/de/regions/yangon" },
          { label: "Mon", href: "/de/regions/mon" },
          { label: "Tanintharyi", href: "/de/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "Highlights", // Highlight
    submenu: [
      { label: "Festivals", href: "/de/festivals" }, // Festivals
        { label: "Ökotourismus", href: "/de/tourism-categories/ecotourism" }, // Ecotourism
      { label: "Gemeindebasierter Tourismus", href: "/de/community-based-tourism" }, // Community Based Tourism
    ],
  },
  {
    label: "Dienstleistungen", // Services
    submenu: [
      {
        label: "Unterkünfte", // Accommodation
        submenu: [
          { label: "Hotels & Resorts", href: "/de/hotels-and-resorts" }, // Hotels & Resorts
        ],
      },
      {
        label: "Touren", // Tours
        submenu: [
          {
            label: "Reiseunternehmen", // Tour Companies
            submenu: [
              { label: "Inbound-Reiseunternehmen", href: "/de/inbound-tour-companies" }, // Inbound Tour Companies
              { label: "Outbound-Reiseunternehmen", href: "/de/outbound-tour-companies" }, // Outbound Tour Companies
            ],
          },
          {
            label: "Reiseführer", // Tour Guides
            submenu: [
              { label: "Nationale Reiseführer", href: "/de/tour-guides/national-tour-guides" }, // National Tour Guides
              { label: "Regionale Reiseführer", href: "/de/tour-guides/regional-tour-guides" }, // Regional Tour Guides
            ],
          },
          {
            label: "Transport", // Transportation
            submenu: [
              { label: "Kreuzfahrten & Sonstiges", href: "/de/cruises-and-others" }, // Cruises & Others
              { label: "Heißluftballons", href: "/de/hot-air-balloons" }, // Hot-Air Balloons
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Führer & Ressourcen", // Guides & Resources
    submenu: [
        { label: "Tourismusgesetzgebung", href: "/de/tourism-legislation" }, // Tourism Legislation
      { label: "Tourismusstatistiken", href: "/de/tourism-statistics" }, // Tourism Statistics
      { label: "Tourismuspublikationen", href: "/de/tourism-publication" }, // Tourism Publications
      { label: "ASEAN Tourismusstandards", href: "/de/asean-tourism-standards" }, // ASEAN Tourism Standards
      // { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "Broschüren & Flugblätter", href: "/de/brochures-and-pamphlets" }, // Brochures & Pamphlets
      { label: "Karten", href: "/de/maps" } // Maps
    ],
  },
  {
    label: "Nachrichten & Ankündigungen", // News & Announcements
    submenu: [
      // { label: "Wettervorhersage", href: "/en/coming-soon" },
      { label: "Kommende Veranstaltungen", href: "/de/upcoming-events" }, // Upcoming Events
      { label: "Nachrichten", href: "/de/news" }, // News
      { label: "Ankündigungen", href: "/de/announcements" }, // Announcements
      // { label: "Reisewarnungen", href: "/en/coming-soon" },
    ],
  },
  {
    label: "Unsere Rolle", // Our Role
    submenu: [
      { label: "Aufgaben & Verantwortlichkeiten", href: "/de/duties" }, // Duties & Responsibilities
      { label: "Ziele", href: "/de/information-pages/objectives" }, // Objectives
      { label: "Sechs Richtlinien des Ministeriums für Hotels und Tourismus", href: "/de/six-policies" }, // Six Policies of Ministry of Hotels and Tourism
      // { label: "Internationale Zusammenarbeit", href: "/en/coming-soon" },
      // {
      //   label: "Tourismusgeschäft", // Tourism Business
      //   submenu: [
      //     { label: "Geschäfte in Myanmar machen", href: "/en/doing-business" }, // Doing Business in Myanmar
      //     { label: "Myanmars Investitionsgesetz", href: "/en/investment-law" }, // Myanmar Investment Law
      //     { label: "Tourismus-Investitionsmöglichkeiten", href: "/en/investment-opportunity" }, // Tourism Investment Opportunities
      //     { label: "Warum in Myanmar investieren", href: "/en/why-invest-in-myanmar" }, // Why Invest in Myanmar
      //     { label: "Ausländische Investitionen in Hotels und Gewerbekomplexe", href: "/en/foreign-investment" }, // Foreign Investment in Hotels and commercial complexes
      //   ],
      // },
      // {
      //   label: "Ankünfte", // Arrivals
      //   submenu: [
      //     { label: "Tourismusstatistiken", href: "/en/coming-soon" },
      //     { label: "Ankünfte 2024", href: "/en/coming-soon" },
      //     { label: "Ankünfte 2023", href: "/en/coming-soon" },
      //     { label: "Ankünfte 2022", href: "/en/coming-soon" },
      //     { label: "Ankünfte 2021", href: "/en/coming-soon" },
      //     { label: "Ankünfte 2020", href: "/en/coming-soon" },
      //     { label: "Ankünfte 2019", href: "/en/coming-soon" },
      //   ],
      // },
      // {
      //   label: "Schulung", // Training
      //   submenu: [
      //     { label: "Schulungskurse", href: "/en/coming-soon" },
      //   ],
      // },
      
      { label: "Kontakt", href: "/de/contact-us" }, // Contact Us
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
            <img
              src="/assets/images/logo-with-text-cut.png"
              alt="Mobile Logo"
              className={styles.logo}
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