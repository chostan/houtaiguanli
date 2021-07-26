import { request } from "network/request";

export function getMenuList() {
  return request({
    url: '/menus'
  })
}