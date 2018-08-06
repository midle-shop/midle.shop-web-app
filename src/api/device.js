import ApiCore from './api-core';
import { getDeviceInfo } from '../util/device-info';

class Device extends ApiCore {

  deviceInit () {
    var device = getDeviceInfo();
    console.log(device)
    return this.callApi('device_init', device);
  }
  deviceCheckDid (did) {
    var device = getDeviceInfo(did);
    return this.callApi('device_check_did', did);
  }

  getMyIp () {
    return this.callApi('get_my_ip');
  }

}

export default Device;
