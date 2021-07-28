import { request } from "./request";

export function getUserList(options) {
  return request({
    url: '/users',
    params: options
  })
}

export function putUserState(options) {
  return request({
    method: '/put',
    url: options
  })
}

export function postUsers(options) {
  return request({
    url: '/users',
    method: 'post',
    data: options
  })
}

export function getUserById(options) {
  return request({
    url: '/users/' + options
  })
}

export function putEditUser(id, userData) {
  return request({
    url: '/users/' + id,
    method: 'put',
    data: userData
  })
}

export function deleteUserById(id) {
  return request({
    url: '/users/' + id,
    method: 'delete'
  })
}

export function getRoles() {
  return request({
    url: '/roles/',
  })
}

export function putUserRoleById(id, rid) {
  return request({
    url: '/users/' + id + '/role',
    method: 'put',
    data: {
      id: id,
      rid: rid
    }
  })
}

