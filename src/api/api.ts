// const network = require('../../utils/network.ts');
import { requestByHeader } from '../util/network'
const api = {
  adminLogin (data: Object) {
    return requestByHeader('/getToken/adminLogin', data, 'POST')
  },
  wxLogin (data: object) {
    // wxapi
    return requestByHeader('/wxapi/wxLogin', data, 'POST')
  }
}

export { api }
