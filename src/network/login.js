import { request } from "network/request";

export function postLogin(options) {
  return request({
    url: '/login',
    method: 'post',
    params: {
      username: options.username || '',
      password: options.password || ''
    }
  })
}