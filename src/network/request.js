import axios from 'axios'

// 本地接口:http://127.0.0.1:8888/api/private/v1/'
// https://www.liulongbin.top:8888/api/private/v1/
// 这个接口会重置数据http://www.ysqorz.top:8888/api/private/v1/
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://www.ysqorz.top:8888/api/private/v1/',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    // console.log(res.data);
    return res.data
  }, err => {
    // console.log(err);
  })

  return instance(config)
}
