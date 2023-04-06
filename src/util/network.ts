let baseUrl = 'http://127.0.0.1:3001'
var requestNoHeader = function (url: String, data: Object, method?: "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" , header = { "content-type": "application/x-www-form-urlencoded"}) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    //微信小程序的数据请求
    wx.request({
      //'URL'是数据请求地址  url是需要传递的参数
      // @ts-ignore
      url: baseUrl + url,
      data: data,
      method,
      header,
      dataType: 'json',
      success: resolve,
      fail: reject
    })
  })
}

var requestForHeader = function (url: String, data: Object, authorization: String,  method?: "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" ) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    wx.request({
      // @ts-ignore
      url: baseUrl + url,
      data: data,
      method: method,
      header: { 
      "content-type": "application/x-www-form-urlencoded",
      "Authorization": authorization
      },
      success: resolve,
      fail: reject
    })
  })
}
// @ts-ignore
var requestByHeader = function (url: String, data: Object, method?: "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" , header = { "content-type": "application/x-www-form-urlencoded", "Authorization": 'Bearer ' + wx.getStorageSync("authorization") }) {
  return new Promise((resolve, reject) => {
    //微信小程序的数据请求
    // @ts-ignore
    wx.request({
      //'URL'是数据请求地址  url是需要传递的参数
      // @ts-ignore
      url: baseUrl + url,
      data: data,
      method: method,
      header,
      dataType: 'json',
      success: ret => {
        resolve(ret.data)
      },
      fail: reject
    })
  })
}

// exports.requestByHeader = requestByHeader
// exports.requestNoHeader = requestNoHeader
// exports.requestForHeader = requestForHeader
export {requestByHeader, requestNoHeader, requestForHeader}