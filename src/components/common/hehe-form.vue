<template>
    <form @submit.prevent="">
        <hehe-input class="heheInput" v-for="(value, key, index) in user" :index="index" :use="key" :key="key"
            v-model:value="user[key]" @getIsValid="getIsValid"></hehe-input>
        <div class="agree-box">
            <el-tooltip class="box-item" effect="dark" content="请先同意服务条款" placement="bottom-end">
                <hehe-checkbox v-model:checked="isAgree"></hehe-checkbox>
            </el-tooltip>
            <span class="agree">同意《注册协议》和《隐私政策》</span>
        </div>
        <input class="login-btn" @click="submit" type="button" :value="goal">
    </form>
</template>
<script setup>
import { throttle } from '../../utils/throttle_debounce';
import { ref, reactive } from 'vue'
import heheInput from './hehe-input.vue';
import heheCheckbox from './hehe-checkbox.vue';
const props = defineProps({
    goal: {
        type: String,
        required: true,
        default: "登录"
    },
    user: {
        type: Object,
        required: true,
    },

});
//判定表单信息是否正确
const isValidArray = reactive([]);
//判断复选框是否勾选
const isAgree = ref(false);
const emit = defineEmits(["submit"]);
const getIsValid = (index, isValid) => {
    isValidArray[index] = isValid;
}
const submitFunction = () => {
    for (let key in props.user) {
        if (props.user[key] === '') {
            ElMessage({
                message: '请完整填写信息',
                type: 'warning',
                duration: 1000,
            })
            return
        }
    }

    if (isValidArray.includes(false)) {
        ElMessage({
            message: '请正确输入信息',
            type: 'warning',
            duration: 1000,
        })
        return
    }
    if (!isAgree.value) {
        ElMessage({
            message: '请先同意协议',
            duration: 1000,
            type: 'warning',
        })

        return
    }
    emit("submit");
    isAgree.value = false
};
const submit = throttle(submitFunction, 1000)

</script>
  
<style lang="less" scoped>
form {
    height: 300px;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .agree-box {
        align-self: flex-start;
        margin-bottom: 10px;
        font: 14px;
        color: #ccc;
    }

    .login-btn {
        width: 160px;
        flex-basis: 40px;
        background-color: #222;
        color: #fff;
        border-radius: 6px;
    }

    .heheInput {
        width: 300px;
        margin-bottom: 10px;

    }

    .agree {
        font-size: 14px;
    }
}
</style>