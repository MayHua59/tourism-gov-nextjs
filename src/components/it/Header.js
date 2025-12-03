'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; 

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";


const mainMenu = [
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
        <a className="site-logo site-title" href="/it">
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