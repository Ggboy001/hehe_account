<template>
    <input class="remember" type="checkbox" @input="onInput" name="isAgree" :checked="checked">
</template>

<script setup>
const props = defineProps({
    checked: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:checked'])
const onInput = (e) => {
    emit('update:checked', e.target.checked)
}
</script>

<style lang="less" scoped>
.remember {
    margin-right: 6px;
    height: 11px;
}
</style>