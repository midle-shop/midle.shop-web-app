import {
  DEVICE_SCREEN_SIZE_TYPE_CHANGED,
  DEVICE_SET_ID
} from '../../constants/action-types';


export const deviceScreenSizeTypeChanged = (screen_size_type) => ({
  type: DEVICE_SCREEN_SIZE_TYPE_CHANGED,
  payload: screen_size_type,
});

export const deviceSetDid = (did) => ({
  type: DEVICE_SET_ID,
  payload: did,
});
