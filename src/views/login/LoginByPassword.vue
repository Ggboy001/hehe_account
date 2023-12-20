<template>
    <hehe-form goal="login" v-model:user="userLoginInfo" @submit="login"></hehe-form>
</template>

<script setup>
import heheForm from '../../components/common/hehe-form.vue';
import { throttle } from '../../utils/throttle_debounce'
import { reactive } from "vue";
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
import { loginByPasswordRequest } from "../../api/user";
const router = useRouter()
const userLoginInfo = reactive({
    phone: "",
    password: "",
});

//(表单检验+提交表单)
const loginFunction = () => {
    loginByPasswordRequest(userLoginInfo).then((res) => {
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