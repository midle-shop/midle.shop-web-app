import Cookies from 'js-cookie';
import configDefault from '../constants/config-default';
import {
  checkLocalStorage, checkCookies, getScreenSizeType
} from './device-info';


export function getDeviceId () {
  if (checkLocalStorage()) {
    return localStorage.getItem('did');
  } else if (checkCookies()) {
    return Cookies.get('did');
  } else {
    return null;
  }
}

export function setDeviceId (did) {
  if (checkLocalStorage()) {
    let did = localStorage.setItem('did', did);
  }
  if (checkCookies()) {
    Cookies.set('did', did, { expires: 365 });
  }
}


export function setTheme (theme=null) {
  if (checkLocalStorage()) {
    localStorage.setItem('theme', theme);
  }
  if (checkCookies()) {
    Cookies.set('theme', theme, { expires: 365 });
  }
}

export function getTheme () {
  let theme = null;
  if (checkLocalStorage()) {
    theme = localStorage.getItem('theme');
  }
  if (theme === null) {
    if (checkCookies()) {
      theme = Cookies.get('theme');
    }
  }

  if (theme !== null && theme !== undefined) return theme;
  else {
    theme = configDefault.theme_default;
    setTheme(theme);
    return theme;
  }
}
