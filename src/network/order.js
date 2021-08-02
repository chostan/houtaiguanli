import { request } from './request.js'

export function getOrderList(options) {
  return request({
    url: '/orders',
    params: options
  })
}

export function getOrderAddress(id) {
  return request({
    url: '/kuaidi/' + id
  })
}