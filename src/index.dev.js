import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter } from 'react-router-redux';

import Loadable from 'react-loadable';
import Loading from './components/Loading';

import './styling/semantic.less';
import configureStore from './store';
import configureI18n from './i18n';
import { languageChange } from 'i18next-redux-languagedetector';

import registerServiceWorker from './registerServiceWorker';


const App = Loadable({
  loader: () => import('./containers/App'),
  loading: Loading,
});



const { store, history } = configureStore();

const i18n = configureI18n({
  redux: {
    lookupRedux: () => store.getState().i18next,
    cacheUserLanguageRedux: (language) => store.dispatch(languageChange(language))
  }
});

const selectI18next = (state) => {
  return state.i18next;
}
const selectLocation = (state) => {
  return state.router.location;
}
const changeLng = (currentLanguage='', nextLanguage='') => {
  if (currentLanguage !== nextLanguage) {
    i18n.changeLanguage(nextLanguage);
  }
}
const handleChangeLocation = () => {
  const location = selectLocation(store.getState());
  const i18next = selectI18next(store.getState());
  let pathnameArray = location.pathname.split('/');
  pathnameArray = pathnameArray.filter(elem => elem !== "");

  if (i18next.whitelist.includes(pathnameArray[0])) {
    changeLng(i18next.language, pathnameArray[0]);
  } else {
    changeLng(i18next.language, i18next.fallbackLng);
  }
}
store.subscribe(handleChangeLocation);



const mountNode = document.createElement('div');
mountNode.id = 'root';
document.body.appendChild(mountNode);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </I18nextProvider>
      </Provider>
    </AppContainer>,
    mountNode,
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // restore scroll
    const { scrollLeft, scrollTop } = document.scrollingElement;
    ReactDOM.unmountComponentAtNode(mountNode);

    try {
      render(require('./containers/App').default);
      document.scrollingElement.scrollTop = scrollTop;
      document.scrollingElement.scrollLeft = scrollLeft;
    } catch (e) {
      console.error(e);
    }
  });
}

registerServiceWorker();
