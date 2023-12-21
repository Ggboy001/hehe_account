<template>
    <hehe-form goal="retrieve" v-model:user="userLoginInfo" @submit="resetPassword"></hehe-form>
</template>

<script setup>
import heheForm from '../../components/common/hehe-form.vue';
import { throttle } from '../../utils/throttle_debounce'
import { reactive } from "vue";
import { resetPasswordRequest } from '../../api/user';

const userLoginInfo = reactive({
    phone: "",
    code: "",
    password: ""
});

//(表单检验+提交表单)
const resetFunction = () => {
    resetPasswordRequest(userLoginInfo).then((res) => {
        if (res.data.code == 0) {
            router.push({ path: '/login' })
            ElMessage({
                message: '重置成功',
                type: 'success',
            })
        }
        else {
            ElMessage({
                message: '重置失败',
                type: 'error',
            })
            userLoginInfo.phone = ''
            userLoginInfo.code = ''
            userLoginInfo.password = ''

        }
    })
}
//对登录进行节流,一秒内频繁点击登录按钮,只执行第一次
const resetPassword = throttle(resetFunction, 1000)
</script>

<style lang="less" scoped></style>