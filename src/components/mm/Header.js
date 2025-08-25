'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; 

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";


const mainMenu = [
  {
    label: "အချက်အလက်",
    submenu: [
      { label: "မြန်မာနိုင်ငံ အကြောင်း", href: "/mm/about-myanmar" },
      {
        label: "ဗီဇာလျှောက်ထားရန်လိုအပ်ချက်များ",
        submenu: [
          { label: "အွန်လိုင်းမှတစ်ဆင့်ဗီဇာလျှောက်ထားခြင်း", href: "/mm/e-visa" },
          { label: "ဗီဇာကင်းလွတ်ခွင့်", href: "/mm/visa-exemption" },
          { label: "ဆိုက်ရောက်ဗီဇာ", href: "/mm/visa-on-arrival" },
        ],
      },
      { label: "ခရီးသွားကုမ္ပဏီများအတွက်လမ်းညွှန်ချက်များ", href: "/mm/guidelines-for-tour-companies" },
      {
        label: "သတင်းပြန်ကြားရေးကောင်တာများ",
        submenu: [
          { label: "နယ်ရုံးခွဲများနှင့်ဒေသဆိုင်ရာခရီးသွားကော်မတီများ", href: "/mm/branch-offices" },
          { label: "သတင်းအချက်အလက်ကောင်တာများ", href: "/mm/information-counters" },
          { label: "ကမ္ဘာလှည့်ခရီးသွားရဲတပ်ဖွဲ့ရုံးများ", href: "/mm/tourism-police-offices" },
        ],
      },
      {
        label: "သံရုံးများ",
        submenu: [
          { label: "မြန်မာသံရုံးများ", href: "/mm/myanmar-missions" },
          { label: "နိုင်ငံခြားသံရုံးများ", href: "/mm/foreign-embassies" },
        ],
      },
      { label: "ဝန်ကြီးဌာနများ", href: "/mm/myanmar-ministries" },
    ],
  },
  {
    label: "မြန်မာနိုင်ငံသို့ လှမ်းလာခဲ့ပါ",
    submenu: [
      {
        label: "မြောက်ပိုင်း",
        submenu: [
          { label: "ကချင်", href: "/mm/regions/kachin" },
          { label: "စစ်ကိုင်း", href: "/mm/regions/sagaing" },
          { label: "ချင်း", href: "/mm/regions/chin" },
          { label: "ရှမ်း", href: "/mm/regions/shan" },
        ],
      },
      {
        label: "အလယ်ပိုင်း",
        submenu: [
          { label: "မကွေး", href: "/mm/regions/magway" },
          { label: "နေပြည်တော်", href: "/mm/regions/naypyitaw" },
          { label: "မန္တလေး", href: "/mm/regions/mandalay" },
          { label: "ရခိုင်", href: "/mm/regions/rakhine" },
        ],
      },
      {
        label: "တောင်ပိုင်း",
        submenu: [
          { label: "ဧရာဝတီ", href: "/mm/regions/ayeyarwady" },
          { label: "ကယား", href: "/mm/regions/kayah" },
          { label: "ကရင်", href: "/mm/regions/kayin" },
          { label: "ပဲခူး", href: "/mm/regions/bago" },
          { label: "ရန်ကုန်", href: "/mm/regions/yangon" },
          { label: "မွန်", href: "/mm/regions/mon" },
          { label: "တနင်္သာရီ", href: "/mm/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "စိတ်ဝင်စားဖွယ်ရာများ",
    submenu: [
      { label: "ဆယ့်နှစ်လရာသီ ပွဲတော်များ", href: "/mm/festivals" },
      { label: "သဘာဝအခြေခံခရီးသွားလုပ်ငန်း", href: "/mm/ecotourism" },
      { label: "ရပ်ရွာလူထုအခြေပြုခရီးသွားလုပ်ငန်း", href: "/mm/community-based-tourism" },
    ],
  },
  {
    label: "ဝန်ဆောင်မှုများ",
    submenu: [
      {
        label: "တည်းခိုနေထိုင်ရေး",
        submenu: [
          { label: "ဟိုတယ်နှင့် တည်းခိုရိပ်သာ", href: "/mm/hotels-and-resorts" },
        ],
      },
      {
        label: "ခရီးသွားလာရေး",
        submenu: [
          {
            label: "ခရီးသွားကုမ္ပဏီများ",
            submenu: [
              { label: "ပြည်တွင်းခရီးသွားကုမ္ပဏီများ", href: "/mm/inbound-tour-companies" },
              { label: "ပြည်ပခရီးသွားကုမ္ပဏီများ", href: "/mm/outbound-tour-companies" },
            ],
          },
          {
            label: "ဧည့်လမ်းညွှန်များ",
            submenu: [
              { label: "အမျိုးသားဧည့်လမ်းညွှန်များ", href: "/mm/tour-guides/national-tour-guides" },
              { label: "ဒေသဆိုင်ရာဧည့်လမ်းညွှန်များ", href: "/mm/tour-guides/regional-tour-guides" },
            ],
          },
          {
            label: "ပို့ဆောင်ရေး ကုမ္ပဏီများ",
            submenu: [
              { label: "အပျော်စီးသင်္ဘောနှင့် အခြား", href: "/mm/cruises-and-others" },
              { label: "ရွက်လှေ၊ မိုးပျံပူဖောင်း", href: "/mm/hot-air-balloons" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "လမ်းညွှန်ချက်နှင့်အရင်းအမြစ်များ",
    submenu: [
      { label: "ခရီးသွားလုပ်ငန်းဆိုင်ရာဥပဒေများ", href: "/mm/tourism-legislation" },
      { label: "ခရီးစဉ် လျှောက်ထားရာတွင် လိုအပ်ချက်များ", href: "/mm/tourism-statistics" },
      { label: "စာအုပ်၊စာစောင်များ", href: "/mm/tourism-publication" },
     
      // { label: "စွဲမက်ဖွယ်ရာပြည်မြန်မာ", href: "/mm/coming-soon" },
      { label: "လက်ကမ်းစာစောင်များ", href: "/mm/brochures-and-pamphlets" },
      { label: "မြေပုံများ", href: "/mm/maps" }
    ],
  },
  {
    label: "သတင်းနှင့် ကြေညာချက်များ",
    submenu: [
      // { label: "မိုးလေဝသခန့်မှန်းချက်", href: "/mm/coming-soon" },
      { label: "ကျင်းပမည့်ပွဲများ၊အခမ်းအနားများ", href: "/mm/upcoming-events" },
      { label: "သတင်းများ", href: "/mm/news" },
      { label: "ကြေညာချက်များ", href: "/mm/announcements" },
      { label: "ခရီးသွားအကြံပြုချက်", href: "/mm/coming-soon" },
    ],
  },
  {
    label: "လုပ်ငန်းတာဝန်",
    submenu: [
      { label: "တာဝန်နှင့် ဝတ္တရားများ", href: "/mm/duties" },
      { label: "ရည်ရွယ်ချက်များ", href: "/mm/objectives" },
      { label: "ဝန်ကြီးဌာန၏ မူဝါဒ (၆) ရပ်", href: "/mm/six-policies" },
      { label: "နိုင်ငံတကာအဖွဲ့အစည်း", href: "/mm/coming-soon" },
      {
        label: "ခရီးသွားလုပ်ငန်းဆိုင်ရာ ရင်းနှီးမြှုပ်နှံမှု",
        submenu: [
         
          { label: "မြန်မာနိုင်ငံရင်းနှီးမြှုပ်နှံမှုဥပဒေ", href: "/mm/investment-law" },
          { label: "ရင်းနှီးမြှုပ်နှံမှုအခွင့်အလမ်းများ", href: "/mm/investment-opportunity" },
          { label: "ဘာကြောင့် ရင်းနှီးမြှုပ်နှံသင့်သလဲ", href: "/mm/why-invest-in-myanmar" },
          { label: "ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းဆိုင်ရာနိုင်ငံခြားရင်းနှီးမြုပ်နှံမှု", href: "/mm/foreign-investment" },
        ],
      },
      // {
      //   label: "ခရီးသွားဝင်ရောက်မှု",
      //   submenu: [
      //     { label: "ခုနှစ်အလိုက် ပြည်ပဧည့်သည်လာရောက်မှုစာရင်း", href: "/mm/coming-soon" },
          
      //   ],
      // },
      // {
      //   label: "သင်တန်းများ",
      //   submenu: [
      //     { label: "သင်တန်းအစီအစဉ်များ", href: "/mm/coming-soon" },
      //   ],
      // },
      
      { label: "ဆက်သွယ်ရန်", href: "/mm/contact-us" },
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

   const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    
    
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);

   
    router.push(newPath);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerTop} ${styles.flexRow} ${isSticky ? styles.headerTopHidden : ""}`}>
        <a className="site-logo site-title" href="/mm">
          <img
            src="/assets/images/logo-with-text-cut.png"
            alt="Ministry of Hotels and Tourism"
            className={styles.headerLogo}
          />
        </a>
        <div className={styles.headerLangContainer}>
          <select
            className={styles.headerLang}
            id="language-selector"
            value={currentLang}
            onChange={handleLanguageChange}
          >
            <option value="en">အင်္ဂလိပ်ဘာသာ</option>
            <option value="mm">မြန်မာဘာသာ</option>
          </select>
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