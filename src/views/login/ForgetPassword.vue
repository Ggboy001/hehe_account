<template>
    <hehe-form :goal="登录" v-model:user="userLoginInfo" @submit="login"></hehe-form>
</template>

<script setup>
import heheForm from '../../components/common/hehe-form.vue';
import { throttle } from '../../utils/throttle_debounce'
import { reactive } from "vue";

const userLoginInfo = reactive({
    phone: "",
    code: "",
});

//(表单检验+提交表单)
const loginFunction = () => {
    loginRequest(userLoginInfo).then((res) => {
        if (res.data.code == 0) {
            router.push({ path: '/account' })
            ElMessage({
                message: '登录成功',
                type: 'success',
            })
        }
        else {
            ElMessage({
                message: '登录失败',
                type: 'error',
            })
            userLoginInfo.phone = ''
            userLoginInfo.password = ''

        }
    })
}
//对登录进行节流,一秒内频繁点击登录按钮,只执行第一次
const login = throttle(loginFunction, 1000)
</script>

<style lang="less" scoped></style>