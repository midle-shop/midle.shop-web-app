import {
  DEVICE_SCREEN_SIZE_TYPE_CHANGED,
  DEVICE_SET_ID
} from '../../constants/action-types';

import { getDeviceId, setDeviceId } from '../../util';
import { checkCookies, getScreenSizeType } from '../../util/device-info';


const initialState = {
  did: getDeviceId(),
  type: "browser",
  screen_size_type: getScreenSizeType(),
  cookies: checkCookies(),
};

function deviceReducer (state=initialState, action) {
  switch (action.type) {
    case DEVICE_SCREEN_SIZE_TYPE_CHANGED:
      if (state.screen_size_type !== action.payload) {
        return { ...state, screen_size_type: action.payload };
      }
      return state;
    case DEVICE_SET_ID:
      setDeviceId(action.payload);
      return { ...state, did: action.payload };
    default:
      return state;
  }
}

export default deviceReducer;
