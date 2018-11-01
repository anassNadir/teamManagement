import request from '@/utils/request'

export function fetchPage(data) {
  return request({
    url: '/member/get-all',
    method: 'get',
    params: { page: data.page, limit:data.limit, firstName:data.firstName,lastName:data.lastName, email:data.email, sort:data.sort  }
  })

}

export function draftMember(userId) {
  return request({
    url: '/member/trash',
    method: 'post',
    params: { userId }
  })
}
export function destroyMember(userId) {
    return request({
      url: '/member/destroy',
      method: 'post',
      params: { userId }
    })
  }

  export function publishMember(userId) {
    return request({
      url: '/member/publish',
      method: 'post',
      params: { userId }
    })
  }
