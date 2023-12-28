<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="container">
    <Header class="header"></Header>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>

.header {
  position: sticky;
  top: 0;

}
</style>
