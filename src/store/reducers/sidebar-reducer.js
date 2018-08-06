import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE
} from '../../constants/action-types';


const initialState = {
  opened: false
};

function sidebarReducer (state=initialState, action) {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return  { ...state, opened: true };
    case SIDEBAR_CLOSE:
      return  { ...state, opened: false };
    case SIDEBAR_TOGGLE:
      return  { ...state, opened: !state.opened };
    default:
      return state;
  }
}

export default sidebarReducer;
