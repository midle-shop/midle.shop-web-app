import ApiCore from './api-core';

class Newsletter extends ApiCore {
  
  requestToConnect(params) {
    return this.callApi("newsletter_request_to_connect", params);
  }
}

export default Newsletter;
