import request from '../utils/axiosConfig'

// 登录
export function loginByPasswordRequest(params) {
    return request({
        url: '/api/userInfo/phone/login',
        method: 'post',
        params
    })
}
export function loginByCodeRequest(params) {
    return request({
        url: '/api/userInfo/code/login',
        method: 'post',
        params
    })
}
export function registerRequest(params) {
    return request({
        url: '/api/userInfo/register',
        method: 'post',
        params
    })
}
//获取验证码接口有点问题
export function getCodeRequest(params) {
    return request({
        url: '/api/api/sendSmsCode',
        method: 'get',
        params
    })
}
export function resetPasswordRequest(params) {
    return request({
        url: '/api/userInfo/resetPassword',
        method: 'post',
        params
    })
}
