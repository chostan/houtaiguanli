import { request } from './request'

export function getRightsList(option) {
  return request({
    url: '/rights/' + option
  })
}