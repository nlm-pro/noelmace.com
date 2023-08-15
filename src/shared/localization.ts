import {configureLocalization} from '@lit/localize';
import {allLocales, sourceLocale, targetLocales} from '../generated/locale-codes.js';

export type Locale = (typeof allLocales)[number];

export const {getLocale, setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale: string) => import(`../generated/locales/${locale}.js`),
});

const getLocaleFromUrl = () : Locale | null => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get('locale') as Locale;
  if (allLocales.includes(locale)) {
    return locale
  }
  return null
}

const getLocaleFromNavigator = () : Locale => {
  const preferredLanguage = navigator.language;
  return targetLocales.find((targetLocale) => preferredLanguage.startsWith(targetLocale)) || sourceLocale;
}

export const setLocaleFromUrl = async () => {
  return setLocale(getLocaleFromUrl() || sourceLocale);
};

export const setLocaleFromNavigator = async () => {
  return setLocale(getLocaleFromNavigator());
}

export const setInitialLocale = async () => {
  return setLocale(getLocaleFromUrl() || getLocaleFromNavigator())
}

window.addEventListener('popstate', () => {
  setLocaleFromUrl();
});
