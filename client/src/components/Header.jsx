import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import iconImage from '@/assets/images/icon.png';

const fadeInStyle = {
  animation: 'fadeIn 1s ease-in-out',
};

const styles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default function Header() {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'bg';
    //i18n.changeLanguage(newLanguage);
  };
  const { t } = useTranslation();

  return (
    <>
      <style>{styles}</style>
      <header className="bg-blue-900 text-white font-semibold shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 header-special:mx-24 xl:mx-36">
          <Link to="/about">
            <div className="flex items-center gap-0 sm:gap-1 my-1">
              <div className="my-1 w-14 sm:w-14 md:w-16 xl:w-16 h-14 bg-violet-200 rounded-full flex items-center justify-center shadow-lg">
                <img src={iconImage} alt="Law Firm Logo" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-10 xl:w-14 xl:h-14" />
              </div>
              <div
  className="text-2xl sm:text-3xl text-center whitespace-nowrap italic"
  style={{
    fontFamily: "'Lobster', cursive",
    color: '#F4F1EC',
    letterSpacing: '1px',
    transform: 'skew(-5deg)'
  }}
>
  АДВОКАТИТЕ
</div>



            </div>
          </Link>
          <ul className="flex flex-col sm:flex-row sm:text-xl header-special:mb-0 items-center gap-1 sm:gap-8 md:gap-8 text-xl xs:text-lg md:text-xl xl:text-xl header-special:mt-0 font-bold">
            <div className="flex flex-row lg:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-lg xs:text-md md:text-xl xl:text-xl mt-3 sm:mt-0">
              <Link to="/about">
                <li className="hover:underline">{t('about')}</li>
              </Link>
              <Link to="/candidates">
                <li className="hover:underline">{t('candidates')}</li>
              </Link>
              <Link to="/practice-areas">
                <li className="hover:underline">{t('practiceAreas')}</li>
              </Link>
              <Link to="/contact">
                <li className="hover:underline">{t('contact')}</li>
              </Link>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}
