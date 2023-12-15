<template>
    <div class="box">
        <div class="label">{{ placeholder }}</div>
        <input :type="type" :value="value" @blur="onBlur" @input="onInput" :placeholder="placeholder" />
        <div class="tip" v-if="!isValid && value !== ''">{{ tip }}</div>
        <div class="tip" v-else></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const phonePattern = /^1[34578]\d{9}$/
const isValid = ref(true)
const tip = ref('')
const emit = defineEmits(['update:value'])
const props = defineProps({
    placeholder: String,
    type: 'text' | 'password',
    value: String | Number,

})
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
    if (props.placeholder === '手机号') {
        isValid.value = phonePattern.test(props.value)
        tip.value = isValid.value ? '' : '手机号格式错误'
    } else if (props.placeholder === '密码') {
        isValid.value = props.value.length >= 6
        tip.value = isValid.value ? '' : '密码长度至少为6位'
    }
}
</script>

<style lang="less" scoped>
.box {
    margin-bottom: 16px;

    .tip {

        color: #f56c6c;
        height: 12px;
    }
}

.label {
    margin: 10px 0;
    font-size: 12px;
    color: #ccc;
}

input {
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 14px 20px;
    color: #5a5a5a;
    font-size: 16px;
    width: 250px;
    transition: all .2s;


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