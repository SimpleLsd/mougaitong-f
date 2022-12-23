<template>
  <div class="app">
    <NavLayout />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
import NavLayout from "./components/layout/NavLayout.vue";
</script>
<style scoped></style>
