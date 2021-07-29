import { request } from "network/request";

export function getCateList(options) {
  return request({
    url: 'categories',
    params: options
  })
}

export function postAddCategories(options) {
  return request({
    url: 'categories',
    method: 'post',
    data: options
  })
}

export function getCateById(id) {
  return request({
    url: '/categories/' + id,
  })
}

export function putEditCateName(editCateForm) {
  return request({
    url: '/categories/' + editCateForm.cat_id,
    method: 'put',
    data: {
      cat_name: editCateForm.cat_name
    }
  })
}

export function deleteCateById(id) {
  return request({
    url: '/categories/' + id,
    method: 'delete'
  })
}