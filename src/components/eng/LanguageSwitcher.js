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
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png', alt: 'UK Flag' },
    { code: 'mm', name: 'Myanmar', flag: 'https://flagcdn.com/w40/mm.png', alt: 'Myanmar Flag' }
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