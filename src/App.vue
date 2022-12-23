<template>
  <div class="app">
    <NavLayout />
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
import NavLayout from "./components/layout/NavLayout.vue";
</script>
<style scoped></style>
