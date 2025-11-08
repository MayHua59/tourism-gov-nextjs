'use client';

import React from 'react';
import Image from 'next/image';
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
    { code: 'en', name: '영어', flag: '/assets/images/flags/gb.png', alt: 'UK Flag' },
    { code: 'mm', name: '미얀마', flag: '/assets/images/flags/mm.png', alt: 'Myanmar Flag' },
    { code: 'cn', name: '중국어', flag: '/assets/images/flags/cn.png', alt: 'China Flag' },
    { code: 'ru', name: '러시아어', flag: '/assets/images/flags/russia.png', alt: 'Russian Flag' },
    {code: 'kr', name: '한국어', flag: '/assets/images/flags/kr.png', alt: 'Korea Flag' }
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
            <Image 
              src={lang.flag} 
              alt={lang.alt} 
              className={styles.flagImage}
              width={24}
              height={18}
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

