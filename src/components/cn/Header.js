'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; 

import { useRouter, usePathname } from 'next/navigation';
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";


const mainMenu = [
  {
    label: "核心信息",
    submenu: [
      { label: "关于缅甸", href: "/cn/information-pages/about-myanmar" },
      {
        label: "签证要求",
        submenu: [
          { label: "电子签证", href: "/cn/e-visa" },
          { label: "免签政策", href: "/cn/information-pages/visa-exemption" },
          { label: "落地签证", href: "/cn/visa-on-arrival" },
        ],
      },
      { label: "旅行社指南", href: "/cn/guidelines-for-tour-companies" },
      {
        label: "服务支持",
        submenu: [
          { label: "分支机构", href: "/cn/branch-offices" },
          { label: "信息咨询台", href: "/cn/information-counters" },
          { label: "旅游警察办事处", href: "/cn/tourism-police-offices" },
        ],
      },
      {
        label: "使馆与使团",
        submenu: [
          { label: "缅甸驻外使团", href: "/cn/myanmar-missions" },
          { label: "外国驻缅使馆", href: "/cn/foreign-embassies" },
        ],
      },
      { label: "缅甸政府部门", href: "/cn/myanmar-ministries" },
    ],
  },
  {
    label: "探索缅甸",
    submenu: [
      {
        label: "北部缅甸",
        submenu: [
          { label: "克钦邦", href: "/cn/regions/kachin" },
          { label: "实皆省", href: "/cn/regions/sagaing" },
          { label: "钦邦", href: "/cn/regions/chin" },
          { label: "掸邦", href: "/cn/regions/shan" },
        ],
      },
      {
        label: "中部缅甸",
        submenu: [
          { label: "马圭省", href: "/cn/regions/magway" },
          { label: "内比都", href: "/cn/regions/naypyitaw" },
          { label: "曼德勒省", href: "/cn/regions/mandalay" },
          { label: "若开邦", href: "/cn/regions/rakhine" },
        ],
      },
      {
        label: "南部缅甸",
        submenu: [
          { label: "伊洛瓦底省", href: "/cn/regions/ayeyarwady" },
          { label: "克耶邦", href: "/cn/regions/kayah" },
          { label: "克伦邦", href: "/cn/regions/kayin" },
          { label: "勃固省", href: "/cn/regions/bago" },
          { label: "仰光省", href: "/cn/regions/yangon" },
          { label: "孟邦", href: "/cn/regions/mon" },
          { label: "德林达依省", href: "/cn/regions/tanintharyi" },
        ],
      },
    ],
  },
  {
    label: "特色推荐",
    submenu: [
      { label: "节庆活动", href: "/cn/festivals" },
      { label: "生态旅游", href: "/cn/tourism-categories/ecotourism" },
      { label: "社区旅游", href: "/cn/community-based-tourism" },
    ],
  },
  {
    label: "旅游服务",
    submenu: [
      {
        label: "住宿信息",
        submenu: [
          { label: "酒店与度假村", href: "/cn/hotels-and-resorts" },
        ],
      },
      {
        label: "旅游服务",
        submenu: [
          {
            label: "旅游公司",
            submenu: [
              { label: "入境旅游公司", href: "/cn/inbound-tour-companies" },
              { label: "出境旅游公司", href: "/cn/outbound-tour-companies" },
            ],
          },
          {
            label: "导游服务",
            submenu: [
              { label: "国家级导游", href: "/cn/tour-guides/national-tour-guides" },
              { label: "地区级导游", href: "/cn/tour-guides/regional-tour-guides" },
            ],
          },
          {
            label: "交通出行",
            submenu: [
              { label: "游轮及其他", href: "/cn/cruises-and-others" },
              { label: "热气球之旅", href: "/cn/hot-air-balloons" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "指南与资源",
    submenu: [
      { label: "旅游法规", href: "/cn/tourism-legislation" },
      { label: "旅游统计数据", href: "/cn/tourism-statistics" },
      { label: "旅游出版物", href: "/cn/tourism-publication" },
      { label: "东盟旅游标准", href: "/cn/asean-tourism-standards" },
      // { label: "迷醉缅甸", href: "/cn/coming-soon" },
      { label: "宣传册页", href: "/cn/brochures-and-pamphlets" },
      { label: "旅游地图", href: "/cn/maps" }
    ],
  },
  {
    label: "新闻动态",
    submenu: [
      // { label: "天气预报", href: "/cn/coming-soon" },
      { label: "近期活动", href: "/cn/upcoming-events" },
      { label: "新闻资讯", href: "/cn/news" },
      { label: "官方公告", href: "/cn/announcements" },
      // { label: "旅行建议", href: "/cn/coming-soon" },
    ],
  },
  {
    label: "我们的职责",
    submenu: [
      { label: "职能与责任", href: "/cn/duties" },
      { label: "发展目标", href: "/cn/objectives" },
      { label: "酒店与旅游部六大政策", href: "/cn/six-policies" },
      // { label: "国际合作", href: "/cn/coming-soon" },
      // {
      //   label: "旅游产业",
      //   submenu: [
      //     { label: "在缅经商指南", href: "/cn/doing-business" },
      //     { label: "缅甸投资法", href: "/cn/investment-law" },
      //     { label: "旅游投资机遇", href: "/cn/investment-opportunity" },
      //     { label: "投资缅甸优势", href: "/cn/why-invest-in-myanmar" },
      //     { label: "酒店与商业综合体外资政策", href: "/cn/foreign-investment" },
      //   ],
      // },
      // {
      //   label: "数据统计",
      //   submenu: [
      //     { label: "旅游统计数据", href: "/cn/coming-soon" },
      //     { label: "2024年入境人数", href: "/cn/coming-soon" },
      //     { label: "2023年入境人数", href: "/cn/coming-soon" },
      //     { label: "2022年入境人数", href: "/cn/coming-soon" },
      //     { label: "2021年入境人数", href: "/cn/coming-soon" },
      //     { label: "2020年入境人数", href: "/cn/coming-soon" },
      //     { label: "2019年入境人数", href: "/cn/coming-soon" },
      //   ],
      // },
      // {
      //   label: "培训教育",
      //   submenu: [
      //     { label: "培训课程", href: "/cn/coming-soon" },
      //   ],
      // },
      
      { label: "联系我们", href: "/cn/contact-us" },
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
        <a className="site-logo site-title" href="/cn">
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