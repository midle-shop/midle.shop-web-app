import { CONFIG_THEME_CHANGED } from '../../constants/action-types';


export const configThemeChanged = (newTheme) => ({
  type: CONFIG_THEME_CHANGED,
  payload: newTheme,
});
