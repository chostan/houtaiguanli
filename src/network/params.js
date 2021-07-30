import { request } from './request'

export function getCateList(options) {
  return request({
    url: 'categories',
    params: options || {}
  })
}

export function getCateAttr(id, type) {
  return request({
    url: '/categories/' + id + '/attributes',
    params: {
      sel: type
    }
  })
}

export function postAddCateParams(id, attr_name, attr_sel) {
  return request({
    url: 'categories/' + id + '/attributes',
    method: 'post',
    data: {
      attr_name: attr_name,
      attr_sel: attr_sel
    }
  })
}

export function getCateParamsById(cateId, attr_id, attr_sel) {
  return request({
    url: 'categories/' + cateId + '/attributes/' + attr_id,
    params: {
      attr_sel: attr_sel
    }
  })
}

export function putEditCateParamsById(cateId, attr_id, options) {
  return request({
    url: 'categories/' + cateId + '/attributes/' + attr_id,
    method: 'put',
    data: {
      attr_name: options.attr_name,
      attr_sel: options.attr_sel
    }
  })
}

export function deleteCateParamsById(cateId, attr_id) {
  return request({
    url: 'categories/' + cateId + '/attributes/' + attr_id,
    method: 'delete'
  })
}

export function putAddCateParamsAttrById(cateId, attr_id, options) {
  return request({
    url: 'categories/' + cateId + '/attributes/' + attr_id,
    method: 'put',
    data: {
      attr_name: options.attr_name,
      attr_sel: options.attr_sel,
      attr_vals: options.attr_vals
    }
  })
}