<template>
  <div class="app">
    <div class="nav_view">
      <NavLayout />
    </div>
    <div class="main_view">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
// import { RouterLink, RouterView } from "vue-router";
import NavLayout from "./components/layout/NavLayout.vue";
</script>

<style scoped>
.nav_view {
  width: 210px;
  height: 100%;
}
</style>
