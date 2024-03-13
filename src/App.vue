<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
</script>

<template>
  <SideBar />
  <RouterView />
</template>

<style scoped lang="scss">
@import './assets/scss/portfolio.scss';
</style>