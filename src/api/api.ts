// const network = require('../../utils/network.ts');
import { requestByHeader } from '../util/network'
const api = {
  wxLogin (data: object) {
    // wxapi
    return requestByHeader('/wxapi/wxLogin', data, 'POST')
  },
  getUserInfo (data: object) {
    // wxapi
    return requestByHeader('/wxapi/getUserInfo', data, 'GET')
  },
  bindUserInfo (data: object) {
    // wxapi
    return requestByHeader('/wxapi/bindUserInfo', data, 'POST')
  },
  getAllArticle (data: object) {
    // wxapi
    return requestByHeader('/articleApi/getAllArticle', data, 'GET')
  },
  chatGptApi (data: object) {
    // wxapi
    return requestByHeader('/chatGptApi/setMessage', data, 'POST')
  }
}

export { api }
