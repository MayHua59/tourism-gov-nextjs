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
    label: "Informazioni Essenziali", // Wichtige Informationen (Vital Info)
    submenu: [
      { label: "Informazioni sul Myanmar", href: "/it/information-pages/about-myanmar" }, // Über Myanmar (About Myanmar)
      {
        label: "Requisiti per il Visto", // Visabestimmungen (Visa Requirements)
        submenu: [
          { label: "Visto Elettronico", href: "/it/e-visa" }, // Elektronisches Visum (Electronic Visa)
          { label: "Esenzione dal Visto", href: "/it/information-pages/visa-exemption" }, // Visumbefreiung (Visa Exemption)
          { label: "Visto all'Arrivo", href: "/it/information-pages/visa-on-arrival" }, // Visum bei Ankunft (Visa on Arrival)
        ],
      },
      { label: "Linee Guida per le Agenzie di Viaggio", href: "/it/guidelines-for-tour-companies" }, // Richtlinien für Reiseunternehmen (Guidelines For Tour Companies)
      {
        label: "Helpdesk", // Helpdesk
        submenu: [
          { label: "Uffici Periferici", href: "/it/branch-offices" }, // Zweigstellen (Branch Offices)
          { label: "Sportelli Informativi", href: "/it/information-counters" }, // Informationsschalter (Information Counters)
          { label: "Uffici della Polizia Turistica", href: "/it/tourism-police-offices" }, // Büros der Tourismuspolizei (Tourism Police Offices)
        ],
      },
      {
        label: "Ambasciate e Missioni", // Botschaften & Missionen (Embassies & Missions)
        submenu: [
          { label: "Missioni del Myanmar", href: "/it/myanmar-missions" }, // Vertretungen Myanmars (Myanmar Missions)
          { label: "Ambasciate Straniere in Myanmar", href: "/it/foreign-embassies" }, // Ausländische Botschaften in Myanmar (Foreign Embassies in Myanmar)
        ],
      },
      { label: "Ministeri del Myanmar", href: "/it/myanmar-ministries" }, // Ministerien Myanmars (Myanmar Ministries)
    ],
  },
  {
    label: "Esplora il Myanmar", // Myanmar Entdecken (Explore Myanmar)
    submenu: [
      {
        label: "Myanmar del Nord", // Nord-Myanmar (North Myanmar)
        submenu: [
          { label: "Kachin", href: "/it/regions/kachin" },
          { label: "Sagaing", href: "/it/regions/sagaing" },
          { label: "Chin", href: "/it/regions/chin" },
          { label: "Shan", href: "/it/regions/shan" },
        ],
      },
      {
        label: "Myanmar Centrale", // Zentral-Myanmar (Central Myanmar)
        submenu: [
          { label: "Magway", href: "/it/regions/magway" },
          { label: "Nay Pyi Taw", href: "/it/regions/naypyitaw" },
          { label: "Mandalay", href: "/it/regions/mandalay" },
          { label: "Rakhine", href: "/it/regions/rakhine" },
        ],
      },
      {
        label: "Myanmar del Sud", // Süd-Myanmar (South Myanmar)
        submenu: [
          { label: "Ayeyarwady", href: "/it/regions/ayeyarwady" },
          { label: "Kayah", href: "/it/regions/kayah" },
          { label: "Kayin", href: "/it/regions/kayin" },
          { label: "Bago", href: "/it/regions/bago" },
          { label: "Yangon", href: "/it/regions/yangon" },
          { label: "Mon", href: "/it/regions/mon" },
          { label: "Tanintharyi", href: "/it/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "In Evidenza", // Highlights
    submenu: [
      { label: "Festival", href: "/it/festivals" }, // Festivals
      { label: "Ecoturismo", href: "/it/tourism-categories/ecotourism" }, // Ökotourismus (Ecotourism)
      { label: "Turismo Comunitario", href: "/it/community-based-tourism" }, // Gemeindebasierter Tourismus (Community Based Tourism)
    ],
  },
  {
    label: "Servizi", // Dienstleistungen (Services)
    submenu: [
      {
        label: "Alloggi", // Unterkünfte (Accommodation)
        submenu: [
          { label: "Hotel e Resort", href: "/it/hotels-and-resorts" }, // Hotels & Resorts
        ],
      },
      {
        label: "Tour", // Touren (Tours)
        submenu: [
          {
            label: "Agenzie di Viaggio", // Reiseunternehmen (Tour Companies)
            submenu: [
              { label: "Agenzie di Viaggio Inbound", href: "/it/inbound-tour-companies" }, // Inbound-Reiseunternehmen (Inbound Tour Companies)
              { label: "Agenzie di Viaggio Outbound", href: "/it/outbound-tour-companies" }, // Outbound-Reiseunternehmen (Outbound Tour Companies)
            ],
          },
          {
            label: "Guide Turistiche", // Reiseführer (Tour Guides)
            submenu: [
              { label: "Guide Turistiche Nazionali", href: "/it/tour-guides/national-tour-guides" }, // Nationale Reiseführer (National Tour Guides)
              { label: "Guide Turistiche Regionali", href: "/it/tour-guides/regional-tour-guides" }, // Regionale Reiseführer (Regional Tour Guides)
            ],
          },
          {
            label: "Trasporti", // Transport
            submenu: [
              { label: "Crociere e Altro", href: "/it/cruises-and-others" }, // Kreuzfahrten & Sonstiges (Cruises & Others)
              { label: "Mongolfiere", href: "/it/hot-air-balloons" }, // Heißluftballons (Hot-Air Balloons)
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Guide e Risorse", // Führer & Ressourcen (Guides & Resources)
    submenu: [
      { label: "Legislazione Turistica", href: "/it/tourism-legislation" }, // Tourismusgesetzgebung (Tourism Legislation)
      { label: "Statistiche sul Turismo", href: "/it/tourism-statistics" }, // Tourismusstatistiken (Tourism Statistics)
      { label: "Pubblicazioni sul Turismo", href: "/it/tourism-publication" }, // Tourismuspublikationen (Tourism Publications)
      { label: "Standard Turistici ASEAN", href: "/it/asean-tourism-standards" }, // ASEAN Tourismusstandards (ASEAN Tourism Standards)
      // { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "Brochure e Opuscoli", href: "/it/brochures-and-pamphlets" }, // Broschüren & Flugblätter (Brochures & Pamphlets)
      { label: "Mappe", href: "/it/maps" } // Karten (Maps)
    ],
  },
  {
    label: "Notizie e Annunci", // Nachrichten & Ankündigungen (News & Announcements)
    submenu: [
      // { label: "Previsioni Meteo", href: "/en/coming-soon" },
      { label: "Prossimi Eventi", href: "/it/upcoming-events" }, // Kommende Veranstaltungen (Upcoming Events)
      { label: "Notizie", href: "/it/news" }, // Nachrichten (News)
      { label: "Annunci", href: "/it/announcements" }, // Ankündigungen (Announcements)
      // { label: "Avvisi di Viaggio", href: "/en/coming-soon" },
    ],
  },
  {
    label: "Il Nostro Ruolo", // Unsere Rolle (Our Role)
    submenu: [
      { label: "Doveri e Responsabilità", href: "/it/duties" }, // Aufgaben & Verantwortlichkeiten (Duties & Responsibilities)
      { label: "Obiettivi", href: "/it/information-pages/objectives" }, // Ziele (Objectives)
      { label: "Sei Politiche del Ministero degli Hotel e del Turismo", href: "/it/six-policies" }, // Sechs Richtlinien des Ministeriums für Hotels und Tourismus (Six Policies of Ministry of Hotels and Tourism)
      // { label: "Cooperazione Internazionale", href: "/en/coming-soon" },
      // {
      //   label: "Attività Turistiche", // Tourismusgeschäft (Tourism Business)
      //   submenu: [
      //     { label: "Fare Affari in Myanmar", href: "/en/doing-business" }, // Geschäfte in Myanmar machen (Doing Business in Myanmar)
      //     { label: "Legge sugli Investimenti del Myanmar", href: "/en/investment-law" }, // Myanmars Investitionsgesetz (Myanmar Investment Law)
      //     { label: "Opportunità di Investimento nel Turismo", href: "/en/investment-opportunity" }, // Tourismus-Investitionsmöglichkeiten (Tourism Investment Opportunities)
      //     { label: "Perché Investire in Myanmar", href: "/en/why-invest-in-myanmar" }, // Warum in Myanmar investieren (Why Invest in Myanmar)
      //     { label: "Investimenti Esteri in Hotel e Complessi Commerciali", href: "/en/foreign-investment" }, // Ausländische Investitionen in Hotels und Gewerbekomplexe (Foreign Investment in Hotels and commercial complexes)
      //   ],
      // },
      // {
      //   label: "Arrivi", // Ankünfte (Arrivals)
      //   submenu: [
      //     { label: "Statistiche sul Turismo", href: "/en/coming-soon" },
      //     { label: "Arrivi 2024", href: "/en/coming-soon" },
      //     { label: "Arrivi 2023", href: "/en/coming-soon" },
      //     { label: "Arrivi 2022", href: "/en/coming-soon" },
      //     { label: "Arrivi 2021", href: "/en/coming-soon" },
      //     { label: "Arrivi 2020", href: "/en/coming-soon" },
      //     { label: "Arrivi 2019", href: "/en/coming-soon" },
      //   ],
      // },
      // {
      //   label: "Formazione", // Schulung (Training)
      //   submenu: [
      //     { label: "Corsi di Formazione", href: "/en/coming-soon" },
      //   ],
      // },
      
      { label: "Contattaci", href: "/it/contact-us" }, // Kontakt (Contact Us)
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