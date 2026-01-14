import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white text-center py-4 mt-12 shadow-lg">
      <p className="text-sm">
        {i18n.language === 'bg' 
          ? `© ${currentYear} АДВОКАТИТЕ. Всички права запазени.` 
          : `© ${currentYear} THE LAWYERS. All rights reserved.`}
      </p>
    </footer>
  );
}
