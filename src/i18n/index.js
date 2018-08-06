import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import ReduxDetector from 'i18next-redux-languagedetector';

import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import XHR from 'i18next-xhr-backend';

import i18nextConfig from '../constants/i18next-config';
import { checkCookies } from '../util/device-info';

const LngDetector = new LanguageDetector();
LngDetector.addDetector(ReduxDetector);

const cookieEnabled = checkCookies();
const caches = [ 'redux', 'localStorage' ];
if (cookieEnabled) caches.push('cookie');



export default function configureI18n({ redux }) {
  i18n
    .use(Backend)
    .use(LngDetector)
    .use(reactI18nextModule)
    .init({
      backend: {
        // array of existing i18next backends from https://www.i18next.com/plugins-and-utils.html#backends
        backends: [
          LocalStorageBackend, // primary
          XHR                  // fallback
        ],
        // array of options in order of backends above
        backendOptions: [
          {
            prefix: 'locales-mswa-', // prefix for stored languages
            expirationTime: 10*60*1000,  // expiration // 7*24*60*60*1000
            //versions: { ru: 'v0.0.0', en: 'v0.0.0' } // language versions
          }, {
            loadPath: '/static/locales-mswa/{{lng}}/{{ns}}.json' // xhr load path for my own fallback
          }
        ]
      },

      detection: {
        // order and from where user language should be detected
        // order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        order: [
          'path', 'redux',
        ],

        // keys or params to lookup language from
        // lookupQuerystring: 'lng',
        lookupCookie: 'i18nextLng',
        // lookupLocalStorage: 'i18nextLng',
        lookupFromPathIndex: 0,
        // lookupFromSubdomainIndex: 0,

        lookupRedux: redux.lookupRedux,
        cacheUserLanguageRedux: redux.cacheUserLanguageRedux,

        // cache user language on
        // caches: [ 'localStorage', 'cookie' ],
        caches: caches,
        excludeCacheFor: [ 'cimode' ], // languages to not persist (cookie, localStorage)

        // optional expire and domain for set cookie
        cookieMinutes: 365*24*60,
        // cookieDomain: 'myDomain',

        // optional htmlTag with lang attribute, the default is:
        // htmlTag: document.documentElement
      },

      whitelist: i18nextConfig.whitelist,
      fallbackLng: i18nextConfig.fallbackLng,
      // have a common namespace used around the full app
      ns: i18nextConfig.ns,
      defaultNS: i18nextConfig.defaultNS,
      debug: i18nextConfig.debug,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      react: {
        defaultTransParent: 'div', // needed for preact
        wait: true
      }
    });

  return i18n;
};
