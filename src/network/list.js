import { request } from './request'

export function getGoodsList(options) {
  return request({
    url: 'goods',
    params: options
  })
}

export function deleteGoodById(id) {
  return request({
    url: 'goods/' + id,
    method: 'delete'
  })
}

export function postAddGood(options) {
  return request({
    url: 'goods/',
    method: 'post',
    data: options
  })
}