'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = ({ 
  className = '', 
  size = 'medium', // 'small', 'medium', 'large'
  showLabels = false,
  variant = 'flags' // 'flags' or 'text'
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (newLang) => {
    let newPath;
    
    if (pathname === '/') {
      newPath = `/${newLang}`;
    } else {
      newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    }

    router.push(newPath);
  };

  const languages = [
    { code: 'en', name: 'အင်္ဂလိပ်ဘာသာ', flag: '/assets/images/flags/gb.png', alt: 'UK Flag' },
    { code: 'mm', name: 'မြန်မာဘာသာ', flag: '/assets/images/flags/mm.png', alt: 'Myanmar Flag' },
    { code: 'cn', name: 'တရုတ်ဘာသာ', flag: '/assets/images/flags/cn.png', alt: 'China Flag' },
    { code: 'ru', name: 'ရုရှားဘာသာ', flag: '/assets/images/flags/russia.png', alt: 'Russian Flag' },
    { code: 'kr', name: 'ကိုရီးယားဘာသာ', flag: '/assets/images/flags/kr.png', alt: 'Korean Flag' },
    { code: 'th', name: 'ထိုင်းဘာသာ', flag: '/assets/images/flags/th.png', alt: 'Thai Flag' },
    { code: 'vn', name: 'ဗီယက်နမ်ဘာသာ', flag: '/assets/images/flags/vn.png', alt: 'Vietnamese Flag' },
    { code: 'jp', name: 'ဂျပန်ဘာသာ', flag: '/assets/images/flags/jp-ccc.png', alt: 'Japanese Flag' },

  ];

  return (
    <div className={`${styles.languageSwitcher} ${styles[size]} ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`${styles.languageButton} ${currentLang === lang.code ? styles.active : ''}`}
          onClick={() => handleLanguageChange(lang.code)}
          title={lang.name}
        >
          {variant === 'flags' && (
            <img 
              src={lang.flag} 
              alt={lang.alt} 
              className={styles.flagImage}
            />
          )}
          {showLabels && (
            <span className={styles.languageLabel}>{lang.name}</span>
          )}
          {variant === 'text' && !showLabels && (
            <span className={styles.languageCode}>{lang.code.toUpperCase()}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;