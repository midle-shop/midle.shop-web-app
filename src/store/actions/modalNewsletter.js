import {
  MODAL_NEWSLETTER_OPEN,
  MODAL_NEWSLETTER_CLOSE
} from '../../constants/action-types';


export const modalNewsletterOpen = () => ({
  type: MODAL_NEWSLETTER_OPEN
});

export const modalNewsletterClose = () => ({
  type: MODAL_NEWSLETTER_CLOSE
});
