import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE
} from '../../constants/action-types';


export const sidebarOpen = () => ({
  type: SIDEBAR_OPEN
});

export const sidebarClose = () => ({
  type: SIDEBAR_CLOSE
});

export const sidebarToggle = () => ({
  type: SIDEBAR_TOGGLE
});
