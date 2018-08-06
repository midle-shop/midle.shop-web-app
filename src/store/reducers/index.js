import { routerReducer } from 'react-router-redux';
import { i18nextReducer } from 'i18next-redux-languagedetector';

import appReducer from './app-reducer';
import configReducer from './config-reducer';
import deviceReducer from './device-reducer';
import modalNewsletterReducer from './modal-newsletter-reducer';
import sidebarReducer from './sidebar-reducer';

const reducers = {
  app: appReducer,
  config: configReducer,
  device: deviceReducer,
  i18next: i18nextReducer,
  modalNewsletter: modalNewsletterReducer,
  router: routerReducer,
  sidebar: sidebarReducer,
}

export default reducers;
