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
    label: "Важная информация",
    submenu: [
      { label: "O Мьянме", href: "/ru/information-pages/about-myanmar" },
      {
        label: "Визовые требования",
        submenu: [
          { label: "Электронная виза", href: "/en/e-visa" },
          { label: "Безвизовый режим", href: "/en/information-pages/visa-exemption" },
          { label: "Виза по прибытии", href: "/en/information-pages/visa-on-arrival" },
        ],
      },
      { label: "Рекомендации для туроператоров", href: "/en/guidelines-for-tour-companies" },
      {
        label: "Служба поддержки",
        submenu: [
          { label: "Филиалы", href: "/en/branch-offices" },
          { label: "Информационные стойки", href: "/en/information-counters" },
          { label: "Офисы туристической полиции", href: "/en/tourism-police-offices" },
        ],
      },
      {
        label: "Посольства и миссии",
        submenu: [
          { label: "Миссии Мьянмы", href: "/en/myanmar-missions" },
          { label: "Иностранные посольства в Мьянме", href: "/en/foreign-embassies" },
        ],
      },
      { label: "Министерства Мьянмы", href: "/en/myanmar-ministries" },
    ],
  },
  {
    label: "Исследуйте Мьянму",
    submenu: [
      {
        label: "Северная Мьянма",
        submenu: [
          { label: "Качин", href: "/en/regions/kachin" },
          { label: "Сагайн", href: "/en/regions/sagaing" },
          { label: "Чин", href: "/en/regions/chin" },
          { label: "Шан", href: "/en/regions/shan" },
        ],
      },
      {
        label: "Центральная Мьянма",
        submenu: [
          { label: "Магуэ", href: "/en/regions/magway" },
          { label: "Нейпьидо", href: "/en/regions/naypyitaw" },
          { label: "Мандалай", href: "/en/regions/mandalay" },
          { label: "Ракхайн", href: "/en/regions/rakhine" },
        ],
      },
      {
        label: "Южная Мьянма",
        submenu: [
          { label: "Айявади", href: "/en/regions/ayeyarwady" },
          { label: "Кая", href: "/en/regions/kayah" },
          { label: "Кайин", href: "/en/regions/kayin" },
          { label: "Баго", href: "/en/regions/bago" },
          { label: "Янгон", href: "/en/regions/yangon" },
          { label: "Мон", href: "/en/regions/mon" },
          { label: "Танинтайи", href: "/en/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "Основные моменты",
    submenu: [
      { label: "Фестивали", href: "/en/festivals" },
      { label: "Экотуризм", href: "/en/tourism-categories/ecotourism" },
      { label: "Общественный туризм", href: "/en/community-based-tourism" },
    ],
  },
  {
    label: "Услуги",
    submenu: [
      {
        label: "Размещение",
        submenu: [
          { label: "Отели и курорты", href: "/en/hotels-and-resorts" },
        ],
      },
      {
        label: "Туры",
        submenu: [
          {
            label: "Туристические компании",
            submenu: [
              { label: "Въездные туроператоры", href: "/en/inbound-tour-companies" },
              { label: "Выездные туроператоры", href: "/en/outbound-tour-companies" },
            ],
          },
          {
            label: "Туристические гиды",
            submenu: [
              { label: "Национальные гиды", href: "/en/tour-guides/national-tour-guides" },
              { label: "Региональные гиды", href: "/en/tour-guides/regional-tour-guides" },
            ],
          },
          {
            label: "Транспорт",
            submenu: [
              { label: "Круизы и другое", href: "/en/cruises-and-others" },
              { label: "Воздушные шары", href: "/en/hot-air-balloons" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Руководства и ресурсы",
    submenu: [
      { label: "Законодательство в сфере туризма", href: "/en/tourism-legislation" },
      { label: "Статистика туризма", href: "/en/tourism-statistics" },
      { label: "Публикации по туризму", href: "/en/tourism-publication" },
      { label: "Туристические стандарты АСЕАН", href: "/en/asean-tourism-standards" },
      { label: "Брошюры и буклеты", href: "/en/brochures-and-pamphlets" },
      { label: "Карты", href: "/en/maps" }
    ],
  },
  {
    label: "Новости и объявления",
    submenu: [
      { label: "Предстоящие события", href: "/en/upcoming-events" },
      { label: "Новости", href: "/en/news" },
      { label: "Объявления", href: "/en/announcements" },
    ],
  },
  {
    label: "Наша роль",
    submenu: [
      { label: "Обязанности", href: "/en/duties" },
      { label: "Цели", href: "/en/information-pages/objectives" },
      { label: "Шесть политик Министерства отелей и туризма", href: "/en/six-policies" },
      { label: "Свяжитесь с нами", href: "/en/contact-us" },
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