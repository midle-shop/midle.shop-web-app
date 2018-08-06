import { CONFIG_THEME_CHANGED } from '../../constants/action-types';

import { getTheme, setTheme } from '../../util';

import configDefault from '../../constants/config-default';

const initialState = {
  theme: getTheme(),
};

function configReducer (state=initialState, action) {
  switch (action.type) {
    case CONFIG_THEME_CHANGED:
      if (state.theme !== action.payload) {
        if (configDefault.themes.includes(action.payload)) {
          setTheme(action.payload)
          return { ...state, theme: action.payload };
        }
      }
      return state;
    default:
      return state;
  }
}

export default configReducer;
