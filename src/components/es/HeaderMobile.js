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
    label: "Información Vital", // Vital Info
    submenu: [
      { label: "Acerca de Myanmar", href: "/es/information-pages/about-myanmar" }, // About Myanmar
      {
        label: "Requisitos de Visa", // Visa Requirements
        submenu: [
          { label: "Visa Electrónica", href: "/es/e-visa" }, // Electronic Visa
          { label: "Exención de Visa", href: "/es/information-pages/visa-exemption" }, // Visa Exemption
          { label: "Visa a la Llegada", href: "/es/information-pages/visa-on-arrival" }, // Visa on Arrival
        ],
      },
      { label: "Pautas para Compañías Turísticas", href: "/es/guidelines-for-tour-companies" }, // Guidelines For Tour Companies
      {
        label: "Mesa de Ayuda", // Helpdesk
        submenu: [
          { label: "Sucursales", href: "/es/branch-offices" }, // Branch Offices
          { label: "Mostradores de Información", href: "/es/information-counters" }, // Information Counters
          { label: "Oficinas de la Policía Turística", href: "/es/tourism-police-offices" }, // Tourism Police Offices
        ],
      },
      {
        label: "Embajadas y Misiones", // Embassies & Missions
        submenu: [
          { label: "Misiones de Myanmar", href: "/es/myanmar-missions" }, // Myanmar Missions
          { label: "Embajadas Extranjeras en Myanmar", href: "/es/foreign-embassies" }, // Foreign Embassies in Myanmar
        ],
      },
      { label: "Ministerios de Myanmar", href: "/es/myanmar-ministries" }, // Myanmar Ministries
    ],
  },
  {
    label: "Explora Myanmar", // Explore Myanmar
    submenu: [
      {
        label: "Norte de Myanmar", // North Myanmar
        submenu: [
          { label: "Kachin", href: "/es/regions/kachin" },
          { label: "Sagaing", href: "/es/regions/sagaing" },
          { label: "Chin", href: "/es/regions/chin" },
          { label: "Shan", href: "/es/regions/shan" },
        ],
      },
      {
        label: "Myanmar Central", // Central Myanmar
        submenu: [
          { label: "Magway", href: "/es/regions/magway" },
          { label: "Nay Pyi Taw", href: "/es/regions/naypyitaw" },
          { label: "Mandalay", href: "/es/regions/mandalay" },
          { label: "Rakhine", href: "/es/regions/rakhine" },
        ],
      },
      {
        label: "Sur de Myanmar", // South Myanmar
        submenu: [
          { label: "Ayeyarwady", href: "/es/regions/ayeyarwady" },
          { label: "Kayah", href: "/es/regions/kayah" },
          { label: "Kayin", href: "/es/regions/kayin" },
          { label: "Bago", href: "/es/regions/bago" },
          { label: "Yangon", href: "/es/regions/yangon" },
          { label: "Mon", href: "/es/regions/mon" },
          { label: "Tanintharyi", href: "/es/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "Destacado", // Highlight
    submenu: [
      { label: "Festivales", href: "/es/festivals" }, // Festivals
      { label: "Ecoturismo", href: "/es/tourism-categories/ecotourism" }, // Ecotourism
      { label: "Turismo Basado en la Comunidad", href: "/es/community-based-tourism" }, // Community Based Tourism
    ],
  },
  {
    label: "Servicios", // Services
    submenu: [
      {
        label: "Alojamiento", // Accommodation
        submenu: [
          { label: "Hoteles y Resorts", href: "/es/hotels-and-resorts" }, // Hotels & Resorts
        ],
      },
      {
        label: "Tours", // Tours
        submenu: [
          {
            label: "Compañías Turísticas", // Tour Companies
            submenu: [
              { label: "Compañías de Tours Receptivos", href: "/es/inbound-tour-companies" }, // Inbound Tour Companies
              { label: "Compañías de Tours Emisivos", href: "/es/outbound-tour-companies" }, // Outbound Tour Companies
            ],
          },
          {
            label: "Guías Turísticos", // Tour Guides
            submenu: [
              { label: "Guías Turísticos Nacionales", href: "/es/tour-guides/national-tour-guides" }, // National Tour Guides
              { label: "Guías Turísticos Regionales", href: "/es/tour-guides/regional-tour-guides" }, // Regional Tour Guides
            ],
          },
          {
            label: "Transporte", // Transportation
            submenu: [
              { label: "Cruceros y Otros", href: "/es/cruises-and-others" }, // Cruises & Others
              { label: "Globos Aerostáticos", href: "/es/hot-air-balloons" }, // Hot-Air Balloons
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Guías y Recursos", // Guides & Resources
    submenu: [
      { label: "Legislación Turística", href: "/es/tourism-legislation" }, // Tourism Legislation
      { label: "Estadísticas de Turismo", href: "/es/tourism-statistics" }, // Tourism Statistics
      { label: "Publicaciones de Turismo", href: "/es/tourism-publication" }, // Tourism Publications
      { label: "Estándares Turísticos de la ASEAN", href: "/es/asean-tourism-standards" }, // ASEAN Tourism Standards
      // { label: "Myanmar Be Enchanted", href: "/en/coming-soon" },
      { label: "Folletos y Panfletos", href: "/es/brochures-and-pamphlets" }, // Brochures & Pamphlets
      { label: "Mapas", href: "/es/maps" } // Maps
    ],
  },
  {
    label: "Noticias y Anuncios", // News & Announcements
    submenu: [
      // { label: "Pronóstico del Tiempo", href: "/en/coming-soon" },
      { label: "Próximos Eventos", href: "/es/upcoming-events" }, // Upcoming Events
      { label: "Noticias", href: "/es/news" }, // News
      { label: "Anuncios", href: "/es/announcements" }, // Announcements
      // { label: "Aviso de Viaje", href: "/en/coming-soon" },
    ],
  },
  {
    label: "Nuestro Rol", // Our Role
    submenu: [
      { label: "Deberes y Responsabilidades", href: "/es/duties" }, // Duties & Responsibilities
      { label: "Objetivos", href: "/es/information-pages/objectives" }, // Objectives
      { label: "Seis Políticas del Ministerio de Hoteles y Turismo", href: "/es/six-policies" }, // Six Policies of Ministry of Hotels and Tourism
      // { label: "Cooperación Internacional", href: "/en/coming-soon" },
      // {
      //   label: "Negocios Turísticos", // Tourism Business
      //   submenu: [
      //     { label: "Hacer Negocios en Myanmar", href: "/es/doing-business" }, // Doing Business in Myanmar
      //     { label: "Ley de Inversiones de Myanmar", href: "/es/investment-law" }, // Myanmar Investment Law
      //     { label: "Oportunidades de Inversión Turística", href: "/es/investment-opportunity" }, // Tourism Investment Opportunities
      //     { label: "Por Qué Invertir en Myanmar", href: "/es/why-invest-in-myanmar" }, // Why Invest in Myanmar
      //     { label: "Inversión Extranjera en Hoteles y Complejos Comerciales", href: "/es/foreign-investment" }, // Foreign Investment in Hotels and commercial complexes
      //   ],
      // },
      // {
      //   label: "Llegadas", // Arrivals
      //   submenu: [
      //     { label: "Estadísticas de Turismo", href: "/en/coming-soon" },
      //     { label: "Llegadas 2024", href: "/en/coming-soon" },
      //     { label: "Llegadas 2023", href: "/en/coming-soon" },
      //     { label: "Llegadas 2022", href: "/en/coming-soon" },
      //     { label: "Llegadas 2021", href: "/en/coming-soon" },
      //     { label: "Llegadas 2020", href: "/en/coming-soon" },
      //     { label: "Llegadas 2019", href: "/en/coming-soon" },
      //   ],
      // },
      // {
      //   label: "Capacitación", // Training
      //   submenu: [
      //     { label: "Cursos de Capacitación", href: "/en/coming-soon" },
      //   ],
      // },
      
      { label: "Contacta con Nosotros", href: "/es/contact-us" }, // Contact Us
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