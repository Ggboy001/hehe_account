// 实现对函数的节流,就是一段时间频繁触发函数,但只执行第一次
//实现对函数的防抖,就是一段时间频繁触发函数,但只执行最后一次
import _ from 'lodash'
//节流函数
export function throttle(fn, delay) {
    return _.throttle(fn, delay, { trailing: false })
}
//防抖函数
export function debounce(fn, delay) {
    return _.debounce(fn, delay, { trailing: false })
}