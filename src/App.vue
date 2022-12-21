<template>
  <div class="app">
    <NavLayout />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
import NavLayout from "./components/layout/NavLayout.vue";
</script>
<style scoped></style>
