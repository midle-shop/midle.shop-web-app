import {
  MODAL_NEWSLETTER_OPEN,
  MODAL_NEWSLETTER_CLOSE
} from '../../constants/action-types';


const initialState = {
  opened: false
};

function modalNewsletterReducer (state=initialState, action) {
  switch (action.type) {
    case MODAL_NEWSLETTER_OPEN:
      return  { ...state, opened: true };
    case MODAL_NEWSLETTER_CLOSE:
      return  { ...state, opened: false };
    default:
      return state;
  }
}

export default modalNewsletterReducer;
