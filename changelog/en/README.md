# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

***

## [Unreleased]

## [v0.0.3] - 2018-08-06
### Added
- Components:
    - Breadcrumbs;
    - Footer;
    - Header;
    - InfoTop;
    - MD;
    - MenuTop;
    - Sidebar;
    - DevTools;
    - ErrorBoundary;
    - Loading;
    - LanguageToogler;
    - ModalNewsletter;
    - ThemeToogler.
- [API JSON-RPC](/src/api):
    - Newsletter.requestToConnect.
- Макеты для страниц:
    - Главная страница;
    - Цель;
    - Whitepaper;
    - Дорожная карта;
    - Вопросы-Ответы;
    - Контакты;
    - Юридическая информация;
    - Политика конфиденциальности;
    - Использование cookies;
    - Условия использования;
    - Страница не найдена.
- [API JSON-RPC](/src/api):
    - Newsletter.requestToConnect.
- Layouts for pages:
     - Home page;
     - Purpose;
     - Whitepaper;
     - Roadmap;
     - FAQ;
     - Contacts;
     - Legal;
     - Privacy policy;
     - Use of cookies;
     - Terms of Use;
     - Page not found.
- Modal window "Connecting the Newsletter".
- [Sitemap](/sitemap);
- [Public links to social networks](/src/constants/social-networks-links.js):
    - [Telegram](https://t.me/midle_shop);
    - [Twitter](https://twitter.com/midle_shop);
    - [Facebook](https://www.facebook.com/www.midle.shop);
    - [GitHub](https://github.com/midle-shop).
- [Rendering documents from Markdown](/src/components/MD);
- [Redux](/src/store);
- Redux [reducers](/src/store/reducers) for:
    - [app](/src/store/reducers/app-reducer.js);
    - [device](/src/store/reducers/device-reducer.js);
    - [config](/src/store/reducers/config-reducer.js);
    - i18next;
    - react-router-redux;
    - [modal newsletter](/src/store/reducers/modal-newsletter-reducer.js);
    - [sidebar](/src/store/reducers/sidebar-reducer.js).
- [Internationalization](/src/i18n);
- [LESS](/src/styling):
    - [Runing script](/scripts/start.js) for development;
    - [Building script](/scripts/build.js) for production.
- [Containers](/src/containers/ResponsiveContainer) for adaptive rendering
on the width of the page:
    - mobile (320px-767px);
    - tablet (768px-991px);
    - computer (992px-1199px);
    - largeScreen (1200px-1919px);
    - wideScreen (1920px+).
- [React Hot Loader](https://www.npmjs.com/package/react-hot-loader);
- In the development mode, the proxy is activated on 'http: // localhost: 3001'.

### Removed
- Releases '/releases'.

## [v0.0.2] - 2018-08-06
### Added
- Disable './registerServiceWorker' for production mode.

## v0.0.1 - 2018-08-06
### Added
- Web App (Initiate a new Web App with
[Create React App](https://github.com/facebookincubator/create-react-app));
- [Releases](/releases);
- [Change Log](/changelog).

[Unreleased]: https://github.com/midle-shop/midle.shop-web-app/compare/v0.0.3...HEAD
[v0.0.3]: https://github.com/midle-shop/midle.shop-web-app/compare/v0.0.2...v0.0.3
[v0.0.2]: https://github.com/midle-shop/midle.shop-web-app/compare/v0.0.1...v0.0.2
