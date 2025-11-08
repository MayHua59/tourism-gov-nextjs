'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import Image from "next/image";

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";


const mainMenu = [
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
        <a className="site-logo site-title" href="/ru">
          <Image
            src="/assets/images/logo-with-text-cut.png"
            alt="Ministry of Hotels and Tourism"
            className={styles.headerLogo}
            width={200}
            height={80}
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