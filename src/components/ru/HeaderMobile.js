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
          { label: "Электронная виза", href: "/ru/e-visa" },
          { label: "Безвизовый режим", href: "/ru/information-pages/visa-exemption" },
          { label: "Виза по прибытии", href: "/ru/information-pages/visa-on-arrival" },
        ],
      },
      { label: "Рекомендации для туроператоров", href: "/ru/information-pages/guidelines-for-tour-companies" },
      {
        label: "Служба поддержки",
        submenu: [
          { label: "Филиалы", href: "/ru/branch-offices" },
          { label: "Информационные стойки", href: "/ru/information-counters" },
          { label: "Офисы туристической полиции", href: "/ru/tourism-police-offices" },
        ],
      },
      {
        label: "Посольства и миссии",
        submenu: [
          { label: "Миссии Мьянмы", href: "/ru/myanmar-missions" },
          { label: "Иностранные посольства в Мьянме", href: "/ru/foreign-embassies" },
        ],
      },
      { label: "Министерства Мьянмы", href: "/ru/myanmar-ministries" },
    ],
  },
  {
    label: "Исследуйте Мьянму",
    submenu: [
      {
        label: "Северная Мьянма",
        submenu: [
            { label: "Качин", href: "/ru/regions/kachin" },
          { label: "Сагайн", href: "/ru/regions/sagaing" },
          { label: "Чин", href: "/ru/regions/chin" },
          { label: "Шан", href: "/ru/regions/shan" },
        ],
      },
      {
        label: "Центральная Мьянма",
        submenu: [
          { label: "Магуэ", href: "/ru/regions/magway" },
          { label: "Нейпьидо", href: "/ru/regions/naypyitaw" },
          { label: "Мандалай", href: "/ru/regions/mandalay" },
          { label: "Ракхайн", href: "/ru/regions/rakhine" },
        ],
      },
      {
        label: "Южная Мьянма",
        submenu: [
          { label: "Айявади", href: "/ru/regions/ayeyarwady" },
          { label: "Кая", href: "/ru/regions/kayah" },
          { label: "Кайин", href: "/ru/regions/kayin" },
          { label: "Баго", href: "/ru/regions/bago" },
          { label: "Янгон", href: "/ru/regions/yangon" },
          { label: "Мон", href: "/ru/regions/mon" },
          { label: "Танинтайи", href: "/ru/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "Основные моменты",
    submenu: [
      { label: "Фестивали", href: "/ru/festivals" },
      { label: "Экотуризм", href: "/ru/tourism-categories/ecotourism" },
      { label: "Общественный туризм", href: "/ru/community-based-tourism" },
    ],
  },
  {
    label: "Услуги",
    submenu: [
      {
        label: "Размещение",
        submenu: [
          { label: "Отели и курорты", href: "/ru/hotels-and-resorts" },
        ],
      },
      {
        label: "Туры",
        submenu: [
          {
            label: "Туристические компании",
            submenu: [
              { label: "Въездные туроператоры", href: "/ru/inbound-tour-companies" },
              { label: "Выездные туроператоры", href: "/ru/outbound-tour-companies" },
            ],
          },
          {
            label: "Туристические гиды",
            submenu: [
              { label: "Национальные гиды", href: "/ru/tour-guides/national-tour-guides" },
              { label: "Региональные гиды", href: "/ru/tour-guides/regional-tour-guides" },
            ],
          },
          {
            label: "Транспорт",
            submenu: [
              { label: "Круизы и другое", href: "/ru/cruises-and-others" },
              { label: "Воздушные шары", href: "/ru/hot-air-balloons" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Руководства и ресурсы",
    submenu: [
      { label: "Законодательство в сфере туризма", href: "/ru/tourism-legislation" },
      { label: "Статистика туризма", href: "/ru/tourism-statistics" },
      { label: "Публикации по туризму", href: "/ru/tourism-publication" },
      { label: "Туристические стандарты АСЕАН", href: "/ru/asean-tourism-standards" },
      { label: "Брошюры и буклеты", href: "/ru/brochures-and-pamphlets" },
      { label: "Карты", href: "/ru/maps" }
    ],
  },
  {
    label: "Новости и объявления",
    submenu: [
      { label: "Предстоящие события", href: "/ru/upcoming-events" },
      { label: "Новости", href: "/ru/news" },
      { label: "Объявления", href: "/ru/announcements" },
    ],
  },
  {
    label: "Наша роль",
    submenu: [
      { label: "Обязанности", href: "/ru/duties" },
      { label: "Цели", href: "/ru/information-pages/objectives" },
      { label: "Шесть политик Министерства отелей и туризма", href: "/ru/six-policies" },
      { label: "Свяжитесь с нами", href: "/ru/contact-us" },
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
  const currentLang = pathname.split('/')[1] || 'ru';
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