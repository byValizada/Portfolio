import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Services",
        "portfolio": "Portfolio",
        "about": "About Us",
        "career": "Careers",
        "blog": "Blog",
        "contact": "Contact Us"
      }
    }
  },
  az: {
    translation: {
      "nav": {
        "home": "Ana Səhifə",
        "services": "Xidmətlər",
        "portfolio": "Portfel",
        "about": "Haqqımızda",
        "career": "Karyera",
        "blog": "Bloq",
        "contact": "Əlaqə"
      }
    }
  },
  ru: {
    translation: {
      "nav": {
        "home": "Главная",
        "services": "Услуги",
        "portfolio": "Портфолио",
        "about": "О нас",
        "career": "Карьера",
        "blog": "Блог",
        "contact": "Контакты"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
