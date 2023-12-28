<template>
    <hehe-form goal="register" v-model:user="userLoginInfo" @submit="register"></hehe-form>
</template>

<script setup>
import heheForm from '../../components/common/hehe-form.vue';
import { throttle } from '../../utils/throttle_debounce'
import { reactive } from "vue";
import { registerRequest } from "../../api/user";
import { useRouter } from "vue-router";



const router = useRouter()
const userLoginInfo = reactive({
    phone: "",
    code: "",
    password: ""
});

//(表单检验+提交表单)
const registerFunction = () => {
    registerRequest(userLoginInfo).then((res) => {
        if (res.code == 0) {
            ElMessageBox.alert('', '注册成功', {
                // if you want to disable its autofocus
                // autofocus: false,
                confirmButtonText: '前往登录',
                callback: () => {
                    router.push({ path: '/login/password' })
                },
            })
        }
        else {
            ElMessage({
                message: '注册失败',
                type: 'error',
                duration: 1000,

            })
            userLoginInfo.phone = ''
            userLoginInfo.code = ''
            userLoginInfo.password = ''

        }
    })
}
//对登录进行节流,一秒内频繁点击登录按钮,只执行第一次
const register = throttle(registerFunction, 1000)
</script>

<style lang="less" scoped></style>