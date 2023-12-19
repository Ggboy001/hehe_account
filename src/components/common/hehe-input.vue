<template>
    <div class="box">
        <div class="label">{{ placeholder }}</div>
        <div class="input-container">
            <input :type="type" :value="value" @blur="onBlur" @input="onInput" :placeholder="placeholder" />
            <span v-if="isCode" class="getCode">获取验证码</span>
        </div>
        <div class="tip" v-if="!isValid && value !== ''">{{ tip }}</div>
        <div class="tip" v-else></div>
    </div>
</template>

<script setup>

import { ref, onBeforeMount, onMounted } from 'vue';

const placeholder = ref('')
//输入框的值
const value = ref('')
//用于表示用户需要的输入框的类型，password,text
const type = ref('')
//手机号正则
const phonePattern = /^1[34578]\d{9}$/
//用于判定输入框内容是否有效，无则显示tip信息
const isValid = ref(true)
//用于判断输入框是否要有验证码
const isCode = ref(false)
//用于显示错误信息
const tip = ref('')
const emit = defineEmits(['update:value', 'getIsValid'])
//根据use判断type，index用于区分不同的输入框，并与form组件进行通信
const props = defineProps({
    use: {
        type: String,
        default: ''
    },
    value: String | Number,
    index: Number,
})
onBeforeMount(() => {
    //根据用处判断输入框类型和placeholder
    if (props.use === 'phone') {
        placeholder.value = '手机号'
        type.value = 'text'
    } else if (props.use === 'password') {
        placeholder.value = '密码'
        type.value = 'password'
    } else if (props.use === 'code') {
        placeholder.value = '验证码'
        type.value = 'text'
    }
    if (placeholder.value === '验证码') {
        isCode.value = true
    }
});

//input组件输入时会触发该事件
const onInput = (e) => {
    emit('update:value', e.target.value)
}
const onBlur = () => {

    //判断输入框是否为空,为空不进行表单提示,提高用户体验
    if (props.value === '') {
        isValid.value = true
        tip.value = ''
        return
    }
    // 执行输入框的校验
    if (props.use === 'phone') {
        isValid.value = phonePattern.test(props.value)
        tip.value = isValid.value ? '' : '手机号格式错误'

    } else if (props.use === 'password') {
        isValid.value = props.value.length >= 6
        tip.value = isValid.value ? '' : '密码长度至少为6位'
    }

    emit('getIsValid', props.index, isValid.value)

}
</script>

<style lang="less" scoped>
.box {
    height: 70px;

    .tip {
        color: #f56c6c;
        height: 12px;
    }
}

.label {

    font-size: 12px;
    color: #ccc;
}

input {
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 14px 20px;
    color: #5a5a5a;
    font-size: 16px;
    width: 260px;
    transition: all .2s;


}

.input-container {
    width: 260px;
    position: relative;

    .getCode {
        cursor: pointer;
        position: absolute;
        top: 15px;
        right: 0;
    }

}


input::placeholder {
    color: #ccc;
    font-size: 12px;
}

input:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #5c5c5c;
}
</style>