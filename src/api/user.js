import request from '../utils/axiosConfig'

// 登录
export function loginRequest(params) {
    return request({
        url: '/api/userInfo/phone/login',
        method: 'post',
        params
    })
}
