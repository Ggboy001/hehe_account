<template>
    <div class="box">
        <div class="label">{{ placeholder }}</div>
        <input :type="type" :value="value" @input="onInput" :placeholder="placeholder" />
    </div>
</template>

<script setup>
const emit = defineEmits(['update:value'])
const props = defineProps({
    placeholder: String,
    type: 'text' | 'password',
    value: String | Number,

})
const onInput = (e) => {
    emit('update:value', e.target.value)
}
</script>

<style lang="less" scoped>
.box {
    margin-bottom: 16px;
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