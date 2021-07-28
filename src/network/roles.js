import { request } from './request'

export function getRolesList(option) {
  return request({
    url: '/roles'
  })
}

export function postAddRole(option) {
  return request({
    url: '/roles',
    method: 'post',
    data: option
  })
}

export function getRoleById(id) {
  return request({
    url: '/roles/' + id
  })
}

export function putEditRoleById(id, roleData) {
  return request({
    url: '/roles/' + id,
    method: 'put',
    data: roleData
  })
}

export function deleteRoleById(id) {
  return request({
    url: '/roles/' + id,
    method: 'delete',
  })
}

export function deleteRoleRightById(roleId, rightId) {
  return request({
    url: '/roles/' + roleId + '/rights/' + rightId,
    method: 'delete',
    data: {
      roleId: roleId,
      rightId: rightId
    }
  })
}

export function getRights(type) {
  return request({
    url: '/rights/' + type
  })
}

export function postRoleRightsById(roleId, rids) {
  return request({
    url: '/roles/' + roleId + '/rights',
    method: 'post',
    data: {
      rids: rids
    }
  })
}



