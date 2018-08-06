# Журнал изменений

Все заметные изменения в этом проекте будут задокументированы в этом файле.

Формат основан на ["Ведите журнал изменений"](http://keepachangelog.com/ru/),
и этот проект придерживается ["Семантическое управление версиями"](
http://semver.org/).

***

## [Не выпущено]

## [v0.0.3] - 2018-08-06
### Добавлено
- Компоненты:
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
- Модальное окно "Запрос на подключение Новостной рассылки".
- [Карта сайта](/sitemap);
- [Публичные ссылки на социальные сети](/src/constants/social-networks-links.js):
    - [Telegram](https://t.me/midle_shop);
    - [Twitter](https://twitter.com/midle_shop);
    - [Facebook](https://www.facebook.com/www.midle.shop);
    - [GitHub](https://github.com/midle-shop).
- [Рендеринг документов из Markdown](/src/components/MD);
- [Redux](/src/store);
- Redux [reducers](/src/store/reducers) для:
    - [app](/src/store/reducers/app-reducer.js);
    - [device](/src/store/reducers/device-reducer.js);
    - [config](/src/store/reducers/config-reducer.js);
    - i18next;
    - react-router-redux;
    - [modal newsletter](/src/store/reducers/modal-newsletter-reducer.js);
    - [sidebar](/src/store/reducers/sidebar-reducer.js).
- [Интернационализация](/src/i18n);
- [LESS](/src/styling):
    - [Скрипт запуска](/scripts/start.js) для разаработки;
    - [Скрипт сборки](/scripts/build.js) для производства.
- [Контейнеры](/src/containers/ResponsiveContainer) для адаптивного рендеринга
по ширине страницы:
    - mobile (320px-767px);
    - tablet (768px-991px);
    - computer (992px-1199px);
    - largeScreen (1200px-1919px);
    - wideScreen (1920px+).
- [React Hot Loader](https://www.npmjs.com/package/react-hot-loader);
- В режиме разработки активировано proxy на 'http://localhost:3001'.

### Удалено
- Релизы '/releases'.

## [v0.0.2] - 2018-08-06
### Добавлено
- Отключение './registerServiceWorker' для режима производства.

## v0.0.1 - 2018-08-06
### Добавлено
- Web App (Инициация нового Web App с помощью
[Create React App](https://github.com/facebookincubator/create-react-app));
- [Релизы](/releases);
- [Журнал изменений](/changelog).

[Не выпущено]: https://github.com/midle-shop/midle.shop-web-app/compare/v0.0.3...HEAD
[v0.0.3]: https://github.com/midle-shop/midle.shop-web-app/compare/v0.0.2...v0.0.3
[v0.0.2]: https://github.com/midle-shop/midle.shop-web-app/compare/v0.0.1...v0.0.2
